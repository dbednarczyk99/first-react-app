import styles from './FavoriteList.module.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';

const FavoriteList = props => {

    const cards = useSelector(state => getFavoriteCards(state));
    console.log('Column cards:', cards);
    // console.log('Column props:', props.id);
    
    if(Object.keys(cards).length === 0) 
        
        return (
            <section className={styles.outerContainer}>
                <h2 className={styles.emptyTitle}>No favorite cards yet</h2>
                <p className={styles.emptyDescription}>Add cards to your favorites by clicking the star icon on the card.</p>
            </section>
        )    
        
    
    return (
        <section className={styles.outerContainer}>
            <article className={styles.column}>
                <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}/>{props.title}</h2>
                <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} title={card.title} id={card.id} />)}
                </ul>
            </article>
        </section>
    );
  };

export default FavoriteList;