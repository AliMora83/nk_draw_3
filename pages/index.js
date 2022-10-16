import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NAMKA Crypto Draw</title>
        <meta
          name="description"
          content="Web3 Crypto Draw by Ali Mora"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h1> Building NAMKA Crypto Draw V 2.0</h1>
      <footer className="">
        <p>Developed by Ali Mora</p>
      </footer>
    </div>
  );
}
