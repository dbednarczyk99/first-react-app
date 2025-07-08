import { useState } from 'react';
import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title , icon: icon });
        setTitle('');
        setIcon('');
    };

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="title">Title:</label>
                <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="icon">Icon:</label>
                <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)}/>
            </div>
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;