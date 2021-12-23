import * as React from 'react'
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import SearchResult from '../components/SearchResult'
import MicroAnswerService from '../services/MicroAnswerService'
import Search from '../viewmodel/Search'
import { useState } from 'react'

export interface ISearchProps {
  searchObject: Search;
}

function Home(props: ISearchProps) {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Search>();
  
  function handleSubmit(e: any) {
    console.log(search);
    e.preventDefault();
    getSearchResult();
  }

  function getSearchResult() {
    MicroAnswerService.SearchMicroAnswer(search).then((result) => {
      setSearchResult(result);
    });
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label>
          Search input:
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {
        searchResult ?
        <SearchResult searchObject={searchResult!}></SearchResult>
        : <div></div> 
      }
    </div>
  )
}

export default Home;

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

