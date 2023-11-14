/* import React from "react"; */
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import { Layout } from '../componentes/Layout/Layout'; */
import { Header } from "../componentes/Header/Header";
import { Home } from '../componentes/Home/Home';
import { Checkout } from '../componentes/Checkout/Checkout';
import { Information } from '../componentes/Information/Information';
import { Payment } from '../componentes/Payment/Payment';
import { Success } from '../componentes/Success/Success';
import { NotFound } from '../componentes/NotFound/NotFound';
import { Footer } from "../componentes/Footer/Footer";

function App () {
    return(
        <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                    <Route exact path="/checkout/information" element={<Information />} />
                    <Route exact path="/checkout/payment" element={<Payment />} />
                    <Route exact path="/checkout/success" element={<Success />} />
                    <Route element={<NotFound />} />
                </Routes>
                <Footer />
        </BrowserRouter>
    )
}

export { App }