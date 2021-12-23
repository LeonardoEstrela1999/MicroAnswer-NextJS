import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'
import MicroAnswerService from '../services/MicroAnswerService'
import Search from '../viewmodel/Search'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export interface ISearchProps {
  searchObject: Search;
}

function SearchPage(props: ISearchProps) {
  const router = useRouter();

  if (router.isFallback) {
    return (<div>Loading...</div>)
  } else {
    return (
      <div className={styles.container}>
        <img src={props.searchObject.image} />
        <p>{props.searchObject.url}</p>
        <p>{props.searchObject.answer}</p>
      </div>
    )
  }
}

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async ({ query, locale }) => {
  // const router = useRouter();
  // const { search } = router.query;
    var searchObject = await MicroAnswerService.SearchMicroAnswer(String(query.search));
    if(locale){
      return {
        props: {
          searchObject,
          ...(await serverSideTranslations(locale, ['translation']))
        },
      }
    }else {
      return {
        props: {
          searchObject        
        },
      }
    }
}

// export const getStaticPaths = async () => {
//   // generate the paths
//   var aux = [""];
//   const paths = aux.map(path => ({
//     params: { search: path } // keep in mind if path is a number you need to stringify it
//   })
//   );
//   return {
//     paths,
//     fallback: true
//   }

// }