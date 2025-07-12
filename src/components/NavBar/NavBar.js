import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <Container customClass="navBarContainer">
                <h1 className={styles.logo}><span className={styles.logo + ' fa fa-bars'}/></h1>
                <ul className={styles.navLinks}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/favorite">Favorite</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </Container>
        </nav>
    );
}

export default NavBar;