import { ProductCard, ProductTitle, ProductImg, ProductButtons } from "../components";

const product = {

    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'

};


export const ShoppingPage = () => {

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <br/>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

            <ProductCard product={ product } >
                <ProductImg />
                <ProductTitle title={ 'Hola Mundo' } />
                <ProductButtons />
            </ProductCard>

            <ProductCard product={ product } >
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
            </ProductCard>

        </div>

    </div>
  );
};
