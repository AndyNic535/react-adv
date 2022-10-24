import { ProductContext } from '../ProductCard';
import { useContext } from 'react';
import styles from "../../styles/styles.module.css";

export const ProductButtonsCounter = () => {

    const { counter } = useContext( ProductContext );

    return (
        <div className={ styles.countLabel } > { counter } </div>
    );

};