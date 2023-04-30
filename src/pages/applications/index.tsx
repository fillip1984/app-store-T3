import { type Application } from "@prisma/client";
import { type GetServerSideProps } from "next";
import Head from "next/head";
import ApplicationList from "~/components/applications/ApplicationList";
import ApplicationQuickFilters from "~/components/applications/ApplicationQuickFilters";
import SearchAddApplicationToolbar from "~/components/applications/SearchAddApplicationToolbar";
import safeJson from "~/server/SafeJson";
import { prisma } from "~/server/db";

interface ApplicationHomeProps {
  applications: Application[];
}

const ApplicationHome = ({ applications }: ApplicationHomeProps) => {
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
        <SearchAddApplicationToolbar />
        <ApplicationQuickFilters />
        <ApplicationList applications={applications} />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const applications = await prisma.application.findMany();

  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    props: { applications: safeJson(applications) },
  };
};

export default ApplicationHome;
