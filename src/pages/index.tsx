import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const Home: NextPage = () => {
  const [searchAdd, setSearchAdd] = useState("");

  const apps = [1, 2, 3, 4, 5];

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
        <link rel="icon" href="/platform-icon-9655-Windows.ico" />
      </Head>
      <main data-theme="night">
        <div className="toolbar sticky top-0 z-[999] flex justify-center gap-2 bg-neutral p-4">
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
        <div className="quick-filters-toolbar collapse flex flex-wrap items-center justify-center gap-2 p-2">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            Status filters
          </div>
          <div className="collapse-content text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <button className="btn-outline btn-sm btn">New</button>
            <button className="btn-outline btn-sm btn">In progress</button>
            <button className="btn-outline btn-sm btn">Abandoned</button>
            <button className="btn-outline btn-sm btn">Knowledge</button>
            <button className="btn-outline btn-sm btn">Finance</button>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            Status Filters
          </div>
          <div className="collapse-content flex justify-center gap-4 bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <button className="btn-outline btn-sm btn">In progress</button>
            <button className="btn-outline btn-sm btn">Abandoned</button>
            <button className="btn-outline btn-sm btn">Knowledge</button>
            <button className="btn-outline btn-sm btn">Finance</button>
          </div>
        </div>
        <div className="quick-filters-toolbar flex flex-wrap items-center justify-center gap-2 p-2">
          <h3>Category</h3>
          <button className="btn-outline btn-sm btn">Finance</button>
          <button className="btn-outline btn-sm btn">Knowledge</button>
          <button className="btn-outline btn-sm btn">Productivity</button>
        </div>
        <div className="quick-filters-toolbar flex flex-wrap items-center justify-center gap-2 p-2">
          <h3>Tech</h3>
          <button className="btn-outline btn-sm btn">React</button>
          <button className="btn-outline btn-sm btn">NextJs</button>
          <button className="btn-outline btn-sm btn">T3</button>
        </div>
        <div className="app-collection mx-4 grid gap-4 pb-24 pt-4 md:grid-cols-2">
          {apps.map((app) => (
            <div
              key={app}
              className="card w-full border border-white bg-base-100 shadow-xl"
            >
              <figure className="mt-2">
                <Image
                  src="/platform-icon-9655.png"
                  alt="Generic Software Program Logo"
                  width={200}
                  height={200}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn-primary btn">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* TODO: make appear after some time and make fixed. Should be a combo of
        fixed and visible */}
        <div className="flex h-28 justify-end pr-8">
          <button className="btn-warning btn-circle btn-lg">Top</button>
        </div>
      </main>
    </>
  );
};

export default Home;
