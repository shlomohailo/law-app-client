import React from "react";
import Router from "../../../routes/router";
import Header from "../header/header";
import Footer from "../footer/footer";
import ChatbotComponent from "../chatbot/chatbot";

const Layout = () => {
    return (
        <>
        <Header/>
        <Router/>
        <ChatbotComponent/>
        <Footer/>
        </>
    )
}

export default Layout;