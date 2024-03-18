// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axiosInstance from "../../axiosConfig/instance";
const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    async function getProductById() {
        try {
            const res = await axiosInstance.get(
                `/3/movie/${id}?api_key=e434b5e5742b35fc3130d48f9e528068`
            );

            console.log(res.data);
            setProduct(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getProductById();
    }, []);
    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${product.poster_path}`}
                />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.overview}</Card.Text>
                    <Button
                        variant="primary"
                        onClick={() => {
                            navigate("/movies");
                        }}
                    >
                        Go Back
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};
export default Details;
