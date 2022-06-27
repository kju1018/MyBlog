import Head from "next/head";
import Image from "next/image";
import Hero from "../components/home/hero";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>김민석의 포트폴리오 블로그</title>
        <meta name="description" content="오늘부터 하나씩 " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero/>
        </div>
      </section>
    </Layout>
  );
}
