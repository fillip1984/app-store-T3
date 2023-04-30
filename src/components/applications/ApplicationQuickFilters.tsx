import { BsChevronDown } from "react-icons/bs";

const ApplicationQuickFilters = () => {
  return (
    <>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title flex items-center gap-2 bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Quick Filters
          {/* TODO: why doesn't peer-checked work on rotate */}
          <BsChevronDown
            size={32}
            className="transition-all duration-300 peer-checked:rotate-180"
          />
        </div>
        <div className="collapse-content flex flex-col gap-2 text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <div className="flex items-center justify-center gap-2">
            <h3>Status</h3>
            <button className="btn-outline btn-sm btn">New</button>
            <button className="btn-outline btn-sm btn">In progress</button>
            <button className="btn-outline btn-sm btn">Abandoned</button>
            <button className="btn-outline btn-sm btn">Complete</button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <h3>Category</h3>
            <button className="btn-outline btn-sm btn">Finance</button>
            <button className="btn-outline btn-sm btn">Knowledge</button>
            <button className="btn-outline btn-sm btn">Productivity</button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <h3>Tech</h3>
            <button className="btn-outline btn-sm btn">React</button>
            <button className="btn-outline btn-sm btn">NextJs</button>
            <button className="btn-outline btn-sm btn">T3</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationQuickFilters;
