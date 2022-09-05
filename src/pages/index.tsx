import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1 className="text-4xl text-red-500">Hello World</h1>
      </main>
    </div>
  );
};

export default Home;
