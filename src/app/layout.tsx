import { Footer, Layout, Navbar } from "nextra-theme-docs";
// import { Banner, Head } from "nextra/components";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./styles.css";
import { Children } from "../interfaces";
import { Analytics } from "@vercel/analytics/next";
import Image from "next/image";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const navbar = (
  <Navbar
    logo={
      <>
        <Image
          className="logo"
          src="/enc/code.svg"
          alt="Logo"
          width={50}
          height={40}
        />{" "}
        <b>chillweb.net</b>
      </>
    }
    // ... Your additional navbar options
  />
);
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>;

export default async function RootLayout({ children }: Children) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
        <link
          rel="icon"
          type="image/png"
          href="/enc/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/enc/favicon.svg" />
        <link rel="shortcut icon" href="/enc/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/enc/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="chillweb.net" />
        <link rel="manifest" href="/enc/site.webmanifest" />
      </Head>
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/chilltemp/chillweb.net/blob/main"
          footer={footer}
          darkMode={false}
          nextThemes={{ defaultTheme: "dark" }}
          // ... Your additional layout options
        >
          {children}
        </Layout>
        <Analytics />
      </body>
    </html>
  );
}
