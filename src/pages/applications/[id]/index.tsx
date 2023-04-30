import { type NextPage } from "next";
import { useRouter } from "next/router";

const ApplicationDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>App detail page for app with id: {id}</div>;
};

export default ApplicationDetailPage;
