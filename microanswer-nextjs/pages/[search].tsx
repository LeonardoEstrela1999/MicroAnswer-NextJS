import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'
import MicroAnswerService from '../services/MicroAnswerService'
import Search from '../viewmodel/Search'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import SearchResult from '../components/SearchResult'

//This interface could be expanded in the future. 
//For now, it helps us keep the code a bit cleaner
export interface ISearchProps {
  searchObject: Search;
}

// This page allows the user to search via URL.
// 'our_website.com/users_search_term' will be rendered via this page.
function SearchPage(props: ISearchProps) {

    return (
      <div className={styles.container}>
        <SearchResult searchObject={props.searchObject!}/>
      </div>
    )
}

export default SearchPage;

//Function responsible for the server-side rendering.
//It calls our service method SearchMicroAnswer, and fetches our locales.
export const getServerSideProps: GetServerSideProps = async ({ query, locale }) => {
    // The query we receive as parameter contains the user's search.
    var searchObject = await MicroAnswerService.SearchMicroAnswer(String(query.search));
    if(locale){
      return {
        props: {
          searchObject,
          //This returns all the translations inside the "translation.json" file of this locale
          ...(await serverSideTranslations(locale, ['translation']))
        },
      }
    }else {
      //In case internationalization hasn't been set up or isn't being used
      return {
        props: {
          searchObject        
        },
      }
    }
}