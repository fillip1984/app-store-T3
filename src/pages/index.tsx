import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Home: NextPage = () => {
  const [searchAdd, setSearchAdd] = useState("");

  const handleAdd = () => {
    console.log("adding an app:", searchAdd);
    setSearchAdd("");
  };

  return (
    <>
      <Head>
        <title>App Store</title>
        <meta
          name="description"
          content="App store shows all applications I've built and documented"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4" data-theme="night">
        <div className="toolbar sticky top-0 flex justify-center gap-2">
          <input
            type="text"
            className="input-bordered input-primary input w-full md:w-2/3 lg:w-1/2"
            placeholder="Search or add an application..."
            value={searchAdd}
            onChange={(e) => setSearchAdd(e.target.value)}
          />
          <button onClick={handleAdd} className="btn-primary btn">
            Add
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
