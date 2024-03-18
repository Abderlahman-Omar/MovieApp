import React from "react";
import Header from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AppLayout = () => {
    //  const lang=useSelector((state)=>state.language.language)
    const lang = useSelector((state) => state.language.language);
    return (
        <>
            <div dir={`${lang == "en" ? "ltr" : "rtl"}`}>
                <Header />
                <div className="container">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default AppLayout;
