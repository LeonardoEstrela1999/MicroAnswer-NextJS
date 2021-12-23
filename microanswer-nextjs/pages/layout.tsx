import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useTranslation } from 'next-i18next';

const Layout: NextPage = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
            <Head>
        <title>{t('askMeQuestion')}</title>
        <meta name="description" content={t('description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className={styles.main}>

        <div className={styles.topnav}>
          <h2 className={styles.title}>{t('askMeQuestion')}</h2>
        </div> 

        {children}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/leonardo-estrela-637a03180/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('createdBy')} Leonardo Estrela
        </a>
      </footer>
      </div>
  )
}

export default Layout
