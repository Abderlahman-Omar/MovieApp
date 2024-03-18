import React from "react";

import { Card, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../store/slices/favourites";

const Favourites = () => {
    const favorites = useSelector((state) => state.favourites.movies);
    const dispatch = useDispatch();

    return (
        <Row xs={1} md={4} className="g-4">
            {favorites.map((prd) => (
                <Col key={prd.id}>
                    <Card className="h-100 ">
                        <Card.Img
                            variant="top"
                            src={`https://image.tmdb.org/t/p/w500/${prd.poster_path}`}
                        />
                        <Card.Body>
                            <Card.Title>{prd.title}</Card.Title>
                        </Card.Body>
                        <Card.Text>
                            {`${prd.overview.slice(0, 90)} ...`}
                        </Card.Text>
                        <Button
                            onClick={() => {
                                dispatch(remove(prd.id, prd));
                            }}
                        >
                            Remove
                        </Button>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};
export default Favourites;
