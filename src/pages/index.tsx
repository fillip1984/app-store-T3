import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>App Store</title>
        <meta
          name="description"
          content="App store shows all applications I've built and documented"
        />
        <link rel="icon" href="/platform-icon-9655-Windows.ico" />
      </Head>
      <main data-theme="night">
        <Link href="/applications">Application Home</Link>
      </main>
    </>
  );
};

export default Home;
