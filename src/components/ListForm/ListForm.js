import { useState } from 'react';
import styles from './ListForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listRedux';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setTitle('');
        setDescription('');
    };

    const dispatch = useDispatch();

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="title">Title:</label>
                <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="description">Description:</label>
                <TextInput type="text" value={description} onChange={e => setDescription(e.target.value)}/>
            </div>
            <Button>Add list</Button>
        </form>
	);
};

export default ColumnForm;