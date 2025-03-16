import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product"; 

function ProductDetails() {
    const api_url = "https://fakestoreapi.com/products";
    const [product, setProduct] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch(`${api_url}/${params.productId}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [params.productId]);

    // تأكد أن البيانات جاهزة للعرض
    if (!product || Object.keys(product).length === 0) {
        return <p>Loading product details...</p>;
    }

    return (
        <div className="container">
            <Product product={product} showButton={false} />
        </div>
    );
}

export default ProductDetails;
