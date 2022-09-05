import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <Head>
        <title>tRPC Blog</title>
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default DefaultLayout;
