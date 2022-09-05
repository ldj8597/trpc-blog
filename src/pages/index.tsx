import Head from "next/head";
import RegisterForm from "../components/RegisterForm";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <h1>Hello world</h1>
    </>
  );
};

export default Home;
