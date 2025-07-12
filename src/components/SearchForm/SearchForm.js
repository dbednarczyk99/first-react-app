import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchWord } from '../../redux/store';

const SearchForm = () => {

    const [searchWord, setSearchWord] = useState('');
        const handleSubmit = e => {
            e.preventDefault();
            console.log('Search word:', searchWord);
            dispatch(getSearchWord(searchWord));
            setSearchWord('');
        };

    const dispatch = useDispatch();

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