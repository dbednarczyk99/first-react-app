import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = props => {

    const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id));

    // const [cards, setCards] = useState(props.cards);
    // const addCard = newCard => {
    //     setCards([...cards, { id: shortid(), title: newCard.title }]);
    // };

    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}/>{props.title}</h2>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} title={card.title} />)}
            </ul>
            <CardForm/>
        </article>
    );
  };

export default Column;