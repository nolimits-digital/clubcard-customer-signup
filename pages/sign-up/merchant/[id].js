import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import SignIn from "@/Signup";
import { useEffect, useState } from "react";
import {baseUrl} from '../../../baseUrl'
import { useSearchParams } from "next/navigation";


export default function index() {
  const router = useRouter();
  const searchParams = useSearchParams();
 
  const network = searchParams.get('network');
  const [data, setData] = useState({});
  const {id} = router.query;
  const myHeaders = network ? {userid: network} : {}
  useEffect(() => {
    fetch(`${baseUrl}/customer/invite/${id}`, {
      headers: myHeaders
    })
    .then((response) =>response.json())
    .then(data => {
      if(data?.user?.merchantId){
        fetch(`${baseUrl}/marchent/merchent/${data?.user?.merchantId}`, {
          headers: myHeaders
        })
        .then((response) => response.json())
        .then(data2 => {
          console.log({data2})
          setData({...data?.user, logo: data2?.Item?.logo }); 
          console.log({data})
          debugger
        })
        .catch(error => console.error(error))
        
      }else{
        setData(data?.user); 
        console.log({data})
        debugger
      }
     
    })
    .catch(err => console.log(err.message))
  },[id])

  console.log({data})
  return (
    <>
     <SignIn data={data} myHeaders={myHeaders}/>
    </>
  );
}
