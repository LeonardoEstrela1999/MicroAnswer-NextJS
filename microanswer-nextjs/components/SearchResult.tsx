import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Search from '../viewmodel/Search'

//This interface could be expanded in the future. 
//For now, it helps us keep the code a bit cleaner
export interface ISearchProps {
  searchObject: Search;
}

// Custom component to present the search result
function SearchResult(props: ISearchProps) {
    return (
      <div>
          <div className={styles.result_section + " " + styles.image_container}>
            <img className={styles.image} src={props.searchObject.image} />
          </div>
          <div className={styles.result_section}><a href={props.searchObject.url}>{props.searchObject.url}</a>
            <p>{props.searchObject.answer}</p></div>
      </div>
    )

}

export default SearchResult;