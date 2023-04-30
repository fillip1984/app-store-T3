import { type Application } from "@prisma/client";
import { useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import ApplicationCard from "./ApplicationCard";

interface ApplicationListProps {
  applications: Application[];
}

const ApplicationList = ({ applications }: ApplicationListProps) => {
  const [scrollToTopVisible, setScrollToTopVisible] = useState<boolean>(true);
  const toggleScrollToTopVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 30) {
      setScrollToTopVisible(true);
    } else {
      setScrollToTopVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // TODO: finish to add a nice ux flourish
  //   document.addEventListener("scroll", toggleScrollToTopVisible);

  return (
    <>
      <div className="app-collection mx-4 grid gap-4 pb-24 pt-4 md:grid-cols-2">
        {applications?.map((application) => (
          <ApplicationCard key={application.id} application={application} />
        ))}
      </div>
      {/* TODO: make appear after some time and make fixed. Should be a combo of
        fixed and visible */}
      <div
        className={`flex h-28 justify-end pr-8 ${
          scrollToTopVisible ? "visible" : "hidden"
        }`}>
        <button
          className="btn-warning btn-circle btn-lg flex flex-col items-center justify-center"
          onClick={scrollToTop}>
          <BsChevronUp size={32} />
          <span className="text-sm">Top</span>
        </button>
      </div>
    </>
  );
};

export default ApplicationList;
