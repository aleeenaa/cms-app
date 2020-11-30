import React from 'react';
import { Button, Card } from '@salesforce/design-system-react';
import ProductModal from './ProductModal';

const ProductCard = (props) => {
    const imgPath = `https://asset1.cxnmarksandspencer.com/is/image/mands/${props.p.image_key}`;

    return (
        <div className="card slds-col slds-small-size_1-of-2 slds-large-size_1-of-4">
            <Card id={props.p.id} heading={props.p.name} className="slds-box slds-theme_default slds-m-bottom_medium">
                <img src={imgPath} alt={props.p.name} />
                <div className="container">
                    <p className="slds-p-around_medium">
                        <h3 className="slds-text-heading_medium">
                        {props.p.price.currency_code}&nbsp;{props.p.price.current_price}
                        </h3>
                        <del>{props.p.price.currency_code}&nbsp;{props.p.price.original_price}</del>
                    </p>
                    <Button label="View Item" onClick={() => openProductModal(props.p)}/>
                </div>
            </Card>
        </div>
    )
};

const openProductModal = (product) => {
    return <ProductModal p={product}/>;
}

export default ProductCard;