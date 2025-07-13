import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchWord } from '../../redux/store';
import { useSelector } from 'react-redux';

const SearchForm = () => {

    const dispatch = useDispatch();
    const currentSearchWord = useSelector(state => state.searchWord);

    const [searchWord, setSearchWord] = useState(currentSearchWord);
    console.log(currentSearchWord);

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Search word:', searchWord);
        dispatch(getSearchWord(searchWord));
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={searchWord} onChange={e => setSearchWord(e.target.value)}/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };
export default SearchForm;