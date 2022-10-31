import { ProductContext } from '../ProductCard';
import { useCallback, useContext, useState, useEffect } from 'react';
import styles from "../../styles/styles.module.css";

export const ProductButtonsAdd = () => {

    const [ isDisable, setIsDisable ] = useState( false );

    const { increaseBy, maxCount, counter } = useContext( ProductContext );

    const isMaxReached = useCallback( () => {

        if( counter === maxCount ) {

            setIsDisable( true );

        } else {

            setIsDisable( false );

        };

    }, [ counter, maxCount ] );

    
    useEffect( () => {

        isMaxReached();

    }, [ isMaxReached ] ); 


    //--------- Metodo 2 'Profesor' ---------//

    // const isMaxReached = useCallback( () => {

    //     !!maxCount && counter === maxCount

    // }, [ counter, maxCount ] );

    // <button 
    //     className={ `${ styles.buttonAdd } ${ isMaxReached()? styles.disable: '' }` } 
    //     onClick={ () => increaseBy( +1 ) }
    // >

    return (
        <button 
            className={ `${ styles.buttonAdd } ${ isDisable? styles.disable: '' }` } 
            onClick={ () => increaseBy( +1 ) }
        > 
            +
        </button>
    );

};