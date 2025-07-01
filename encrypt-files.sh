#! /bin/sh

if [[ -z "$1" ]]; then
    echo ERROR: Argv \$1 must be a path
    exit 1
fi
FILE_PATH=$1

if [[ -z "$IMAGE_ENC_KEY" ]] && [ -e ./.env.local ]; then
    source ./.env.local
    export IMAGE_ENC_KEY=$IMAGE_ENC_KEY
fi

if [[ -z "$IMAGE_ENC_KEY" ]]; then
    echo ERROR: Env var IMAGE_ENC_KEY not set
    exit 1
fi

# echo $IMAGE_ENC_KEY

for FILE in $FILE_PATH/*; do
    filename=$(basename -- "$FILE")
    extension="${filename##*.}"

    if [ "$extension" == "enc" ]; then
      continue
    fi
    
    NEW_FILE=$FILE
    NEW_FILE+=".enc"
    echo "$FILE ==> $NEW_FILE"
    openssl enc -aes-256-cbc -md sha512 -pbkdf2 -iter 1000000 -salt -in $FILE -out $NEW_FILE -pass env:IMAGE_ENC_KEY

done