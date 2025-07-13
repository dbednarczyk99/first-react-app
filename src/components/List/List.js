import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { useSelector } from 'react-redux';
import { getColumnsByListId, getListById } from '../../redux/store';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';

const List = () => {

    const { listId } = useParams();

    //const columns = useSelector(getAllColumns);
    const columns = useSelector(state => getColumnsByListId(state, listId));
    const listData = useSelector(state => getListById(state, listId));
    console.log('listId=',listId)
    console.log('List data=', listData)

    if(!listData) return <Navigate to="/" />
    return (
      <div className={styles.list}>
        <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
        </header>
        <p className={styles.description}>Interesting things I want to check out</p>
        <SearchForm />
        <section className={styles.columns}>
        {columns.map(column =>
            <Column
            key={column.id}
            {...column}  />
        )}
        </section>
        <ColumnForm listId  = {listId}  />
    </div>
    );
  };

  export default List;



//       <h2 className={styles.title}>Things to do<span>soon!</span></h2>
