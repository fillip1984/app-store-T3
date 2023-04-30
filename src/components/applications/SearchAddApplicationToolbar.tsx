import { type Application } from "@prisma/client";
import { useForm, type SubmitHandler } from "react-hook-form";
import { api } from "~/utils/api";

const SearchAddApplicationToolbar = () => {
  const ctx = api.useContext();
  const { mutate: create } = api.applications.create.useMutation({
    onSuccess: () => {
      void ctx.applications.readAll.invalidate();
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit: SubmitHandler<Application> = (formData) => {
    create({ name: formData.name });
    reset();
  };

  return (
    <div className="toolbar sticky top-0 z-[999] flex justify-center gap-2 bg-neutral p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="input-bordered input-primary input w-full md:w-2/3 lg:w-1/2"
          placeholder="Search or add an application..."
          {...register("name", {
            required: "Field is required",
            minLength: {
              value: 4,
              message: "Field requires 4 or more characters",
            },
          })}
        />
        <button type="submit" className="btn-primary btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default SearchAddApplicationToolbar;
