import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Search from '../viewmodel/Search'

export interface ISearchProps {
    searchObject: Search;
  }
  

function LanguagePicker(props: ISearchProps) {
    const router = useRouter();

    if(router.isFallback){
        return (<div>Loading...</div>)
    }else {
        return (
            <div className={styles.container}>
              <img src={props.searchObject.image} />
              <p>{props.searchObject.url}</p>
              <p>{props.searchObject.answer}</p>
            </div>
          )
    }

}

export default LanguagePicker;