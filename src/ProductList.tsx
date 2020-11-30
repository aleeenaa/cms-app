/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { gql, useQuery } from '@apollo/client';
import ProductCard from './ProductCard';

const GET_PRODUCTS = gql`
  query GetProductList {
    productList {
      id
      name
      image_key
      price {
        currency_code
        current_price
        original_price
      }
    }
  }
`;

function ProductList() {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    console.log(useQuery(GET_PRODUCTS));

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) return <p>`Error! ${error}`</p>;

    return (
            <div className="slds-p-around--large">
                <div className="slds-grid slds-grid--pull-padded-large slds-wrap">
                {data.productList.map((product, i) => {
                    return <ProductCard p={product}/>;
                })}
                </div>
            </div>
    );
}

export default ProductList;