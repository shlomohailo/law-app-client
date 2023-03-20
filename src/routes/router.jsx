import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from '../components/pages/login/login';
import SignUp from "../components/pages/signup/signup";
import Home from "../components/pages/home/home";
import SubServices from "../components/pages/sub-services/sub-services";
import Lawyers from "../components/pages/lawyers/lawyers";
import LawyerProfile from "../components/pages/lawyer-profile/lawyer-profile";
import Agreement from "../components/pages/agreement/agreement";
import Payment from "../components/pages/payment/payment";
import LawyerDashboard from "../components/pages/lawyer-dashboard/lawyer-dashboard";

const Router = () => {
    
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUp />} />
                <Route path='/subservices/:id' element={<SubServices />}/>
                <Route path='/lawyers/:lawyersId' element={<Lawyers/>}/>
                <Route path='/lawyerprofile/:lawyerprofileId/:subService' element={<LawyerProfile/>}/>
                <Route path='/agreement/:subService/:handleLawyerId' element={<Agreement/>}/>
                <Route path='/payment' element={<Payment/>}/>
                <Route path='/dashboard' element={<LawyerDashboard/>}/>
            </Routes>
    )
}

export default Router;