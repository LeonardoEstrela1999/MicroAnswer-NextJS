import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'

const Home: NextPage = () => {
  const router = useRouter();
  const { search } = router.query;

  const [image, setImage] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    if(search && search.length > 0){
      console.log(search);
    }
  }, [])

  return (
    <div className={styles.container}>
      <p>test</p>
    </div>
  )
}

export default Home;