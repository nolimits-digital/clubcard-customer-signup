import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import SignIn from "@/Signup";
import { useEffect, useState } from "react";
import {baseUrl} from '../../baseUrl'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState({});
  const {id} = router.query;
  useEffect(() => {
    fetch(`${baseUrl}/customer/customer/${id}`)
    .then((response) =>response.json())
    .then(data => setData(data?.Item))
    .catch(err => console.log(err.message))
  },[id])

  console.log({data})
  return (
    <>
     <SignIn data={data}/>
    </>
  );
}
