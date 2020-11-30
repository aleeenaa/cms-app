import React from "react";
import { gql, useQuery } from '@apollo/client';

// interface Product {
//     id: string;
//     name: string;
//     price: {
//         current_price: string;
//         original_price: string;
//     };
//     image_key: string;
// }

const GET_PRODUCT = gql`
query Product {
    product ($id: String) {
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

function ProductPage() {
    const { loading, error, data } = useQuery(GET_PRODUCT);
    setTimeout(() => {
        console.log(data);
    }, 3000);
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="App-content">
            <p>
              {data.product.name}
            </p>
        </div>
    );
}

export default ProductPage;