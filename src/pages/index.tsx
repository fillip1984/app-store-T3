import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { api } from "~/utils/api";
const Home: NextPage = () => {
  const [searchAdd, setSearchAdd] = useState("");

  const ctx = api.useContext();

  // const applicationQuery = api.applications.getAll();
  const { data: applications } = api.applications.readAll.useQuery();
  const { mutate: create } = api.applications.create.useMutation({
    onSuccess: () => {
      void ctx.applications.readAll.invalidate();
    },
  });
  const { mutate: del } = api.applications.delete.useMutation({
    onSuccess: () => {
      void ctx.applications.readAll.invalidate();
    },
  });

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
