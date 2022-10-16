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
import CountdownTimer from "../components/CountdownTimer";
import { useEffect, useState } from "react";

export default function Home() {
  const address = useAddress();
  const { contract, isLoading } = useContract(
    process.env
      .NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  const [quantity, setQuantity] = useState(1);

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

      <div
        className="space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start 
        justify-center md:space-x-5"
      >
        <div
          className="stats-container bg-gradient-to-t from-[#080A0B] to-[#2C2B2B] 
        outline outline-offset-2 outline-1 outline-[#fedfa1] "
        >
          <h3 className="text-center font-light text-[#caa969] animate-pulse">
            Current Draw Info
          </h3>
          <div className="flex justify-between p-2 space-x-2">
            <div className="stats">
              <p className="text-[#caa969]">
                Total Pool
              </p>
              <h3
                className="uppercase text-[#fff] md:text-lg font-semibold
                          text-lg font-mont tracking-tight"
              >
                0.06 Matic
              </h3>
            </div>
            <div className="stats">
              <p className="text-[#caa969]">
                Tickets Left
              </p>
              <h3
                className="uppercase text-[#fff] md:text-lg font-semibold
                          text-lg font-mont tracking-tight"
              >
                10
              </h3>
            </div>
          </div>
          <div className="mt-10">
            <CountdownTimer />
          </div>
        </div>
        <div className="stats-container space-y-2 bg-[#080A0B]">
          <div className="stats-container bg-gradient-to-t from-[#080A0B] to-[#2C2B2B] ">
            <div className="flex justify-between items-center text-white pb-2">
              <h2 className="countdown-label text-gray-500">
                Price per ticket
              </h2>
              <p
                className="uppercase text-gray-500 md:text-base font-semibold
                          text-sm font-mont tracking-tight"
              >
                0.001 Matic
              </p>
            </div>
            <div className="flex text-white items-center space-x-2 bg-[#080A0B] p-5 rounded-lg border-[#caa969] border-2">
              <p>TICKETS</p>
              <input
                className="flex w-full bg-transparent text-right outline-none"
                type="number"
                min={1}
                max={10}
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    Number(e.target.value)
                  )
                }
              />
            </div>
            <div className="space-y-2 mt-5">
              <div className="flex items-center justify-between font-extrabold text-sm text-[#2b80d0]">
                <p className="countdown-label text-gray-500">
                  Total cost of tickets
                </p>
                <p>0.01 Matic</p>
              </div>
              <div className="flex items-center justify-between text-xs italic text-[#2b80d0]">
                <p className="countdown-label text-gray-500">
                  Service Fees
                </p>
                <p className="countdown-label text-gray-500">
                  0.01 Matic
                </p>
              </div>
              <p className="text-xs">
                These fees are deducted from the
                winning amount
              </p>
            </div>
          </div>
        </div>
      </div>

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
