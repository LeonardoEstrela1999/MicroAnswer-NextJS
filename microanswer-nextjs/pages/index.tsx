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
import { useTranslation } from 'next-i18next';

//This interface could be expanded in the future. 
//For now, it helps us keep the code a bit cleaner
export interface ISearchProps {
  searchObject: Search;
}

// This is the default page
// If no search term is added to the URL, this is where the user lands
function Home(props: ISearchProps) {
  const { t } = useTranslation();
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Search>();
  
  function handleSubmit(e: any) {
    e.preventDefault(); // prevents the default action of the submit event
    getSearchResult();
  }

  function getSearchResult() {
    MicroAnswerService.SearchMicroAnswer(search).then((result) => {
      setSearchResult(result);
    });
  }

  return (
    <div className={styles.container}>
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            {t('search') + " "}
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
        </form> 
      </div>

      {
        // If there is a searchResult, render our component
        searchResult ?
        <div><SearchResult searchObject={searchResult!}/></div>
        : <div></div> 
      }
    </div>
  )
}

export default Home;

//Function responsible for the server-side rendering.
//It fetches our locales.
export const getServerSideProps: GetServerSideProps = async ({ query, locale }) => {
    if(locale){
      return {
        props: {
          ...(await serverSideTranslations(locale, ['translation']))
        },
      }
    }else {
      return {
        props: {
        },
      }
    }
}

