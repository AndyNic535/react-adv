import { CSSProperties, ReactElement } from 'react';
import { PropsButtons } from '../components/ProductButtons';
import { PropsImage } from '../components/ProductImage';
import { PropsTitle } from '../components/ProductTitle';

export interface Props {

    product: Product,
    // children: ReactElement | ReactElement[],
    children: ( args: ProductCardHandlers ) => JSX.Element,
    className?: string,
    style?: CSSProperties,
    onChange?: ( args: onChangeArgs ) => void,
    value?: number
    initialValue?: InitialValue,

};

export interface Product {

    id: string,
    title: string,
    img?: string

};

export interface ProductContextProps {

    counter: number,
    maxCount?: number,
    increaseBy: ( value: number ) => void,
    product: Product,
    

};

export interface ProductCardHOCProps {

    ( { children, product }: Props ): JSX.Element,
    Title: ( Props: PropsTitle ) => JSX.Element,
    Image: ( Props: PropsImage ) => JSX.Element,
    Buttons: ( Props: PropsButtons ) => JSX.Element,

};

export interface onChangeArgs {

    product: Product,
    count: number

};

export interface useProductArgs {

    product: Product,
    onChange?: ( args: onChangeArgs ) => void,
    value?: number,
    initialValue?: InitialValue

};

export interface ProductInCart extends Product {

    count: number,
    map?: any
  
};

export interface InitialValue {

    count?: number,
    maxCount?: number

};

export interface ProductCardHandlers {

    count: number,
    isMaxCountReached: boolean,
    maxCount?: number,
    product: Product,

    increaseBy: ( value: number ) => void;
    reset: () => void;

};