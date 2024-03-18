import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Contact = () => {
    const navigate = useNavigate();
    const lang = useSelector((state) => state.language.language);

    const handleNavigation = () => {
        navigate(-1);
    };

    return (
        <div>
            Contact us {lang}
            <button
                className="btn btn-primary"
                onClick={() => {
                    handleNavigation();
                }}
            >
                To ...
            </button>
        </div>
    );
};
export default Contact;
