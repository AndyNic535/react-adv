import { useEffect, useRef, useState } from 'react';
import { useProductArgs } from '../interfaces/interfaces';

export const useProduct = ( { onChange, product, value = 0, initialValue }: useProductArgs ) => {

    const [ counter, setCounter ] = useState<number>( initialValue?.count || value );

    const isMounted = useRef( false );

    const increaseBy = ( value: number ) => {

        let newValue = Math.max( counter + value, 0 );

        if ( initialValue?.maxCount ) {

            newValue = Math.min( newValue, initialValue.maxCount );

        };

        setCounter( newValue );

        onChange && onChange({ count: newValue, product });

    }; 

    const reset = ( () => {

        setCounter( initialValue?.count || value );

    });

    useEffect( () => {

        if ( !isMounted.current ) return;

        setCounter( value );

    }, [ value ] );


    //--------------- Deberia funcionar, pero de momento estara comentada para poder continuar con el curso ---------------//

    // useEffect( () => {

    //     isMounted.current= true;

    // }, [] );


    return { 
        
        counter, 
        increaseBy, 
        reset,
        isMaxCountReached: !!initialValue?.count && initialValue.maxCount === counter,
        maxCount: initialValue?.maxCount 
    };

};
