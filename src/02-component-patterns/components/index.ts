import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductTitle } from './ProductTitle';
import { ProductImg } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export { ProductTitle } from './ProductTitle';
export { ProductImg } from './ProductImage';
export { ProductButtons } from './ProductButtons';


export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {

    Title: ProductTitle,
    Image: ProductImg,
    Buttons: ProductButtons

});

export default ProductCard;