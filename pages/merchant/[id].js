import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import SignIn from "@/Signup";
import { useEffect, useState } from "react";
import {baseUrl} from '../../baseUrl'


export default function index() {
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
