import Header from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import Details from "./components/Details/Details";
import NotFound from "./components/NotFound/NotFound";
import Vision from "./components/About/Vision/Vision";
import Values from "./components/About/Values/Values";
import AppLayout from "./AppLayout";
import store from "./store/store";
import Favourites from "./components/Favourites/Favourites";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "home", element: <Home /> },
            {
                path: "about",
                element: <About />,
                children: [
                    { index: true, element: <Values /> },
                    { path: "vision", element: <Vision /> },
                ],
            },

            { path: "contact", element: <Contact /> },

            { path: "movies", element: <Products /> },
            { path: "favourites", element: <Favourites /> },
            {
                path: "details/:id",
                element: <Details />,
                errorElement: <NotFound />,
            },
        ],
    },
    { path: "*", element: <NotFound /> },
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={routes} />
        </Provider>
        //       <BrowserRouter>
        //       <Header />
        //       <div className="container mx-5">
        //           <Routes>
        //               <Route path="/" element={<Home />} />
        //               <Route path="/about" element={<About />}>
        //                   <Route path="values" element={<Values />} />
        //                   <Route path="vision" element={<Vision />} />
        //               </Route>
        //               <Route path="/contact" element={<Contact />} />
        //               <Route path="/products" element={<Products />} />
        //               <Route path="/details/:id" element={<Details />} />
        //               <Route path="*" element={<NotFound />} />\
        //           </Routes>
        //       </div>
        //   </BrowserRouter>
    );
}

export default App;
