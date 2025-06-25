import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
  mdxOptions: {
    rehypePrettyCodeOptions: {
      // https://textmate-grammars-themes.netlify.app/?theme=dark-plus&grammar=javascript
      theme: "dark-plus",
    },
  },
});

// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
});
