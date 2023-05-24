import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const router = useRouter();
  let sum = parseInt(router.query.a) + parseInt(router.query.b) 
  return (
    <>
   <h1>Hello, {router.query.name? `hello, ${router.query.name}`: "I don't know your name"} <br/> from {router.query.place}<br/> Your age is {router.query.age}</h1>
   <h1>sum ={sum}</h1>
   </>
  )
}
