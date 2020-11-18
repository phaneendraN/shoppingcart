import { useEffect, useState } from "react";

import React from "react";

import Axios from "axios";

import { random,commerce } from "faker";

import {Container} from "reactstrap";
import CartItem from "./CardItem";

const api_key = "563492ad6f91700001000001702630558d0341d99a7de553de193e92";

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";

// const localurl = "https://api.jsonbin.io/b/5fb325e55be6ec73e94f63d6";

const BuyPage = ({addInCart}) =>{

    const [product,setProduct] = useState([]);

    const fetchPhotos = async () => {
        const { data } = await Axios.get(url, {
          headers: {
            Authorization: api_key
          }
        });

        const { photos } = data;

        const allProduct = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()
        }));
    
        setProduct(allProduct);

    };

   
    useEffect(() => {
        fetchPhotos();
    }, []);
    
    return (
        <Container fluid>
        <h1 className="text-success text-center mb-2">Buy Page</h1>
        <div className="row">
        {product.map((product,index) => (
           <div key={product.id} className="col-4 col-md-4">
              <CartItem id={index} Product={product} addInCart={addInCart} />
           </div>
          ))}
        </div>
      </Container>
    );
};

export default BuyPage;