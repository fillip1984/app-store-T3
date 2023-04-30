import { useState } from "react";
import { api } from "~/utils/api";

const SearchAddApplicationToolbar = () => {
  const [searchAdd, setSearchAdd] = useState("");

  const ctx = api.useContext();

  const { mutate: create } = api.applications.create.useMutation({
    onSuccess: () => {
      void ctx.applications.readAll.invalidate();
    },
  });

  return (
    <div className="toolbar sticky top-0 z-[999] flex justify-center gap-2 bg-neutral p-4">
      <input
        type="text"
        className="input-bordered input-primary input w-full md:w-2/3 lg:w-1/2"
        placeholder="Search or add an application..."
        value={searchAdd}
        onChange={(e) => setSearchAdd(e.target.value)}
      />
      <button
        onClick={() => {
          create({ name: searchAdd });
          setSearchAdd("");
        }}
        className="btn-primary btn">
        Add
      </button>
    </div>
  );
};

export default SearchAddApplicationToolbar;
