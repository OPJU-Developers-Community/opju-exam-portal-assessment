import CommonTemplate from "@/templates/CommonTemplate/CommonTemplate";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CommonTemplate>
          <h1 className="text-2xl">Dashboard</h1>
        </CommonTemplate>
      </main>
    </>
  );
}
