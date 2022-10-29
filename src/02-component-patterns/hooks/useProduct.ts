import { useEffect, useState } from 'react';
import { useProductArgs } from '../interfaces/interfaces';

export const useProduct = ( { onChange, product, value = 0 }: useProductArgs ) => {

    const [ counter, setCounter ] = useState( value );

    //-------- Manejar la cantidad ( suma, o cambiar directamente el contador ) --------//

    // const isControlled = useRef( !!onChange );

    const increaseBy = ( value: number ) => {

        //-------- Manejar la cantidad ( suma, o cambiar directamente el contador ) --------//

        // if( isControlled.current ) {

        //     return onChange!({ count: value, product })

        // }

        const newValue = Math.max( counter + value, 0 )

        setCounter( newValue );

        onChange && onChange({ count: newValue, product });

    }; 

    useEffect( () => {

        setCounter( value );

    }, [ value ] );

    return { counter, increaseBy };

};
