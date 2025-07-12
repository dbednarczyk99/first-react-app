import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchForm = () => {

    const [searchWord, setSearchWord] = useState('');
        const handleSubmit = e => {
            e.preventDefault();
            //const columnId = props.columnId;
            dispatch({ type: 'SET_SEARCH_WORD', payload: { searchWord } });
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