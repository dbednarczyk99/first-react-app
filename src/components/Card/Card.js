import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux';
import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

const Card = props => {

    const isFavorite = useSelector(state => 
        state.cards.find(card => card.id === props.id)?.isFavorite
    );

    const dispatch = useDispatch();

    return (
        <li className={styles.card}>{props.title}
            <div>
                <button className={styles.favoriteButton} onClick={() => {
                    dispatch(toggleCardFavorite(props.id))}}>
                    <span className={clsx(styles.icon + ' fa fa-star-o' , isFavorite === true && styles.favorite)}/>
                </button>
                <button className={styles.favoriteButton} onClick={() => {
                    dispatch(removeCard(props.id))}}>
                    <span className={clsx(styles.icon + ' fa fa-trash')}/>
                </button>
            </div>
        </li>
    );
};

export default Card; 