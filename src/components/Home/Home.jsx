import React from "react";

import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const spacing = {
        marginLeft: "30%",
    };
    return (
        <div>
            <h1 className="text-white " style={spacing}>
                Welcome To Our Movie App
            </h1>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button
                    className="btn btn-success"
                    type="button"
                    onClick={() => {
                        navigate("/movies");
                    }}
                >
                    Click Here to go to Movies Page
                </button>
            </div>
        </div>
    );
};
export default Home;
