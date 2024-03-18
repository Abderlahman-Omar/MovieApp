// import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig/instance";

import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../store/slices/favourites";
const Products = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    const navigate = useNavigate();

    const favorites = useSelector((state) => state.favourites.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        axiosInstance
            .get(
                `/3/movie/popular?api_key=e434b5e5742b35fc3130d48f9e528068&page=${page}`
            )
            .then((res) => {
                setProducts(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [page, favorites]);

    const nextPage = () => {
        setPage((lastPage) => lastPage + 1);
    };
    const previousPage = () => {
        setPage((lastPage) => lastPage - 1);
    };

    return (
        <>
            <Row xs={1} md={4} className="g-4 mt-5">
                {products.map((prd) => (
                    <Col key={prd.id}>
                        <Card className="h-100 ">
                            <Card.Img
                                variant="top"
                                src={`https://image.tmdb.org/t/p/w500/${prd.poster_path}`}
                            />
                            <Card.Body>
                                <Card.Title className="fs-6">
                                    {prd.title}
                                </Card.Title>
                                <Card.Text>
                                    {`${prd.overview.slice(0, 90)} ...`}
                                </Card.Text>
                                <div className="container mt-5 ">
                                    <div className="row">
                                        <div className="col-4">
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => {
                                                    navigate(
                                                        `/details/${prd.id}`
                                                    );
                                                }}
                                            >
                                                Details
                                            </button>
                                        </div>
                                        <div className="col-8">
                                            <div
                                                onClick={() => {
                                                    dispatch(add(prd));
                                                }}
                                            >
                                                <svg
                                                    fill={
                                                        favorites.some(
                                                            (movies) =>
                                                                movies.id ===
                                                                prd.id
                                                        )
                                                            ? "red"
                                                            : "grey"
                                                    }
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-25 h-25"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>{" "}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="mt-5">
                <button className="btn btn-danger" onClick={previousPage}>
                    PreviousPage
                </button>
                <button className="btn btn-success mx-2" onClick={nextPage}>
                    NextPage
                </button>
            </div>
        </>
    );
};
export default Products;
