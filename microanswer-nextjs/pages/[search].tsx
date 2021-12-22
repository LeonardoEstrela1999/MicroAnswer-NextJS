import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'
import MicroAnswerService from '../services/MicroAnswerService'
import Search from '../viewmodel/Search'

export interface ISearchProps {
  searchObject: Search;
}

function Home(props: ISearchProps) {
  const router = useRouter();

  // const [image, setImage] = useState<string>("");
  // const [description, setDescription] = useState<string>("");
  // const [url, setUrl] = useState<string>("");
  if (router.isFallback) {
    return (<div>Loading...</div>)
  } else {
    console.log(props);
    return (
      <div className={styles.container}>
        <img src={props.searchObject.image} />
        <p>{props.searchObject.url}</p>
        <p>{props.searchObject.answer}</p>
      </div>
    )
  }
}

export default Home;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const router = useRouter();
  // const { search } = router.query;
  if(params){
    var searchObject = await MicroAnswerService.SearchMicroAnswer(String(params.search));
    return {
      props: {
        searchObject,
      },
    }
  }
  return {
    props: {
    },
  }
}

export const getStaticPaths = async () => {
  // generate the paths
  var posts = [""];
  const paths = posts.map(post => ({
    params: { search: post } // keep in mind if post.id is a number you need to stringify post.id
  })
  );
  return {
    paths,
    fallback: true
  }

}
