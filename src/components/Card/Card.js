import { toggleCardFavorite } from '../../redux/store';
import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

const Card = props => {

    const isFavorite = useSelector(state => 
        state.cards.find(card => card.id === props.id)?.isFavorite);

    //console.log(props.id, isFavorite)

    const dispatch = useDispatch();

    return (
        <li className={styles.card}>{props.title}
            <button className={styles.favoriteButton} onClick={() => {
                //console.log('Card props:', props.id)
                dispatch(toggleCardFavorite(props.id))}}>
                <span className={clsx(styles.icon + ' fa fa-star-o' , isFavorite === true && styles.favorite)}/>
            </button>
        </li>
    );
};

export default Card; 