import { type Application } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { type MouseEvent } from "react";
import { api } from "~/utils/api";

interface ApplicationCardProps {
  application: Application;
}

const ApplicationCard = ({ application }: ApplicationCardProps) => {
  const ctx = api.useContext();
  const { mutate: del } = api.applications.delete.useMutation({
    onSuccess: () => {
      void ctx.applications.readAll.invalidate();
    },
  });

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    del({ id: application.id });
  };

  return (
    <Link
      href={`/applications/${application.id}`}
      className="card w-full border border-white bg-base-100 shadow-xl">
      <figure className="mt-2">
        <Image
          src="/platform-icon-9655.png"
          alt="Generic Software Program Logo"
          width={200}
          height={200}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{application.name}</h2>
        <p>{application.description}</p>
        <div className="card-actions justify-end">
          <button onClick={handleDelete} className="btn-primary btn">
            Delete
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ApplicationCard;
