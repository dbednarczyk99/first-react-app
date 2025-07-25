import styles from './Container.module.scss';

const Container = props => {
    return (
        <section className={styles.container}>
            {props.children}
        </section>
    );
  };

export default Container;