import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import useFetch from "./services/useFetch";
import Spinner from "./Spinner";
import PageNotFound from "./PageNotFound";

export default function Detail({ dispatch }) {

    const { id } = useParams()
    const navigate = useNavigate()
    const [sku, setSku] = useState("")
    const { data: product, loading, error } = useFetch(`products/${id}`)

    if (loading) return <Spinner />
    if (!product) return <PageNotFound />
    if (error) throw error

    return (
        <div id="detail">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p id="price">${product.price}</p>
            <p>
                <select id="size" value={sku} onChange={(event) => setSku(event.target.value)}>
                    <option value="">Select size</option>
                    {product.skus.map((x) => {
                        return <option key={x.sku} value={x.sku}>
                            {x.size}
                        </option>
                    })}
                </select>
            </p>
            <p>
                <button disabled={!sku} className="btn btn-primary" onClick={() => {
                    dispatch({ type: "add", id, sku })
                    navigate("/cart")
                }}>Add to cart</button>
            </p>
            <img src={`/images/${product.image}`} alt={product.category} />
        </div>
    );
}
