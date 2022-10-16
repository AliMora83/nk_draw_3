/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import {
  useContract,
  useContractWrite,
  useAddress,
  useContractRead,
} from "@thirdweb-dev/react";
import Login from "../components/Login";
import Loading from "../components/Loading";

export default function Home() {
  const address = useAddress();
  const { contract, isLoading } = useContract(
    process.env
      .NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  if (isLoading) return <Loading />;
  if (!address) return <Login />;

  return (
    <div
      className="bg-gradient-to-r from-[#080A0B] via-[#2C2B2B] to-[#080A0B] min-h-screen flex flex-col
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 pt-10
    scrollbar-thin scrollbar-track-[#000] scrollbar-thumb-[#e0aa53] scroll-smooth"
    >
      <Head>
        <title>NAMKA Crypto Draw</title>
        <meta
          name="description"
          content="Web3 Crypto Draw by Ali Mora"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h1 className="text-center justify-center items-center my-10 text-white">
        Building NAMKA Crypto Draw V 2.0
      </h1>
      <footer className="flex flex-col items-center text-white justify-between pb-5">
        <img
          className="rounded-full h-10 w-10 filter hue-rotate-90"
          src="./favicon.ico"
          alt="icon"
        />
        <p className="text-xs px-10 text-gray-600 text-center">
          DISCLIAMER: All pages and their content
          on this website, including graphics,
          design and text, are © Ali Mora
          2022-2023. All rights reserved. Although
          we are very careful to ensure the
          accuracy of all the information
          containing NAMKA Crypto Draw results, we
          cannot take any responsibility for any
          mistakes or omissions. This website
          contains no financial advice and should
          not be taken as such. Prize winning and
          all aspects of the NAMKA Crypto Draw are
          subject to the relevant Games Rules and
          Procedures. As a visitor to this site,
          you are taken to have read, understood
          and agreed to be bound by this
          Disclaimer. Please seek specialised,
          professional advice where required.
          NAMKA Crypto Draw is not responsible for
          any losses. Never give out more money
          than you care to lose.
        </p>
      </footer>
    </div>
  );
}
