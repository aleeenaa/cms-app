import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Button, Modal } from '@salesforce/design-system-react';
import settings from '@salesforce/design-system-react/components/settings';
settings.setAppElement('#root');

const GET_PRODUCT = gql`
  query SingleProduct($id: String!) {
    product(id : $id) {
      id
      name
      image_key
      price {
        currency_code
        current_price
        original_price›
      }
    }
  }
`;

const state = {
    isOpen: false
};

const toggleOpen = () => {
    state.isOpen = !state.isOpen;
};

const buttons = [
    <Button label="Close" onClick={toggleOpen} />,
    <Button label="Close" variant="brand" onClick={toggleOpen} />
];

const ProductModal = (props) => {    
    const id = props.p.id;
    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: { id },
    });
    console.log(useQuery(GET_PRODUCT));
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) return <p>`Error! ${error}`</p>;
    
    const imgPath = `https://asset1.cxnmarksandspencer.com/is/image/mands/${props.p.image_key}`;

    return (
        <Modal isOpen={state.isOpen} footer={buttons} onRequestClose={toggleOpen} heading={props.p.name}>
            <img src={imgPath} alt={props.p.name} />
            <div className="container">
                <p className="slds-p-around_medium">
                    <h3 className="slds-text-heading_medium">
                    {props.p.price.currency_code}&nbsp;{props.p.price.current_price}
                    </h3>
                    <del>{props.p.price.currency_code}&nbsp;{props.p.price.original_price}</del>
                </p>
            </div>
        </Modal>
    )
};

export default ProductModal;