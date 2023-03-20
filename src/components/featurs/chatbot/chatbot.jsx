import React from "react";
import "./chatbot.css";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ChatbotComponent = () => {
  const { services, subServices, loading } = useSelector(
    (state) => state.services
  );

  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "black",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#08b9e3",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  const steps = [
    {
      id: "1",
      message: "Hello ,Welcome to LAWMARKET",
      trigger: "2",
    },
    {
      id: "2",
      message: "What service can we offer you",
      trigger: "3",
    },

    {
      id: "3",
      options: [
        { value: "Agreement", label: "Agreement", trigger: "4" },
        { value: "Lawyer", label: "Lawyer", trigger: "5" },
      ],
    },
    {
      id: "4",
      message: "I see you chose a agreement, great!",
      trigger: "6",
    },
    {
      id: "6",
      message: "What field of agreement do you need?",
      trigger: "7",
    },
    {
      id: "5",
      message: "I see you chose a lawyer, great! in which field?",
      trigger: "8",
    },
    {
      id: "7",
      options: [
        { value: "Execution", label: "Execution", trigger: "Execution" },
        { value: "Real Estate", label: "Real Estate", trigger: "RealEstate" },
        { value: "Traffic", label: "Traffic", trigger: "Traffic" },
        {
          value: "National insurance",
          label: "National insurance",
          trigger: "Nationalinsurance",
        },
        { value: "Taxes", label: "Taxes", trigger: "Taxes" },
        { value: "Family", label: "Family", trigger: "Family" },
        {
          value: "Personal accidents",
          label: "Personal accidents",
          trigger: "Personalaccidents",
        },
        { value: "Employment", label: "Employment", trigger: "Employment" },
      ],
    },
    {
      id: "8",
      options: [
        { value: "Execution", label: "Execution", trigger: "ExecutionLawyer" },
        {
          value: "Real Estate",
          label: "Real Estate",
          trigger: "RealEstateLawyer",
        },
        { value: "Traffic", label: "Traffic", trigger: "TrafficLawyer" },
        {
          value: "National insurance",
          label: "National insurance",
          trigger: "NationalinsuranceLawyer",
        },
        { value: "Taxes", label: "Taxes", trigger: "TaxesLawyer" },
        { value: "Family", label: "Family", trigger: "FamilyLawyer" },
        {
          value: "Personal accidents",
          label: "Personal accidents",
          trigger: "PersonalaccidentsLawyer",
        },
        {
          value: "Employment",
          label: "Employment",
          trigger: "EmploymentLawyer",
        },
      ],
    },
    {
      id: "ExecutionLawyer",
      component: (
        <Link className="createCard" to={`/lawyers/63b5a05f0a0baae428bfbbd9`}>
          Click Here
        </Link>
      ),
      trigger: "lastQuestion",
    },
    {
      id: "RealEstateLawyer",
      component: (
        <Link className="createCard" to={`/lawyers/63b596ffbeb6646f6231a6bb`}>
          Click Here
        </Link>
      ),
      trigger: "lastQuestion",
    },
    {
      id: "TrafficLawyer",
      component: (
        <Link className="createCard" to={`/lawyers/63b59e6ebeb6646f6231a6cb`}>
          Click Here
        </Link>
      ),
      trigger: "lastQuestion",
    },
    {
      id: "NationalinsuranceLawyer",
      component: (
        <Link className="createCard" to={`/lawyers/63b59e6ebeb6646f6231a6cb`}>
          Click Here
        </Link>
      ),
      trigger: "lastQuestion",
    },
    {
      id: "TaxesLawyer",
      component: (
        <Link className="createCard" to={`/lawyers/63b68ce84560c1cce02e21c5`}>
          Click Here
        </Link>
      ),
      trigger: "lastQuestion",
    },
    {
      id: "FamilyLawyer",
      component: (
        <Link className="createCard" to={`/lawyers/63b5912ebeb6646f6231a6a1`}>
          Click Here
        </Link>
      ),
      trigger: "lastQuestion",
    },
    {
      id: "PersonalaccidentsLawyer",
      component: (
        <Link className="createCard" to={`/lawyers/63b5912ebeb6646f6231a6a1`}>
          Click Here
        </Link>
      ),
      trigger: "lastQuestion",
    },
    {
      id: "EmploymentLawyer",
      component: (
        <Link className="createCard" to={`/lawyers/63b6babd4560c1cce02e21f7`}>
          Click Here
        </Link>
      ),
      trigger: "lastQuestion",
    },
    {
      id: "Execution",
      component: (
        <Link
          className="createCard"
          to={`/subservices/63b538b928a8991a3d9a8e63`}
        >
          Click Here
        </Link>
      ),
      trigger: "lastQuestion",
    },
    {
      id: "RealEstate",
      component: (
        <Link
          className="createCard"
          to={`/subservices/63b538d328a8991a3d9a8e65`}
        >
          Click Here
        </Link>
      ),
      trigger: "lastQuestion",
    },
    {
      id: "Traffic",
      component: (
        <Link
          className="createCard"
          to={`/subservices/63b538fe28a8991a3d9a8e67`}
        >
          Click Here
        </Link>
      ),
      trigger: "lastQuestion",
    },
    {
      id: "Nationalinsurance",
      component: (
        <Link
          className="createCard"
          to={`/subservices/63b539f428a8991a3d9a8e6c`}
        >
          Click Here
        </Link>
      ),
      trigger: "lastQuestion",
    },
    {
      id: "Taxes",
      component: (
        <Link
          className="createCard"
          to={`/subservices/63b53a0728a8991a3d9a8e6f`}
        >
          Click Here
        </Link>
      ),
      trigger: "lastQuestion",
    },
    {
      id: "Family",
      component: (
        <Link
          className="createCard"
          to={`/subservices/63b5b5520a0baae428bfbbed`}
        >
          Click Here
        </Link>
      ),
      trigger: "lastQuestion",
    },
    {
      id: "Personalaccidents",
      component: (
        <Link
          className="createCard"
          to={`/subservices/63b5c1f10a0baae428bfbc08`}
        >
          Click Here
        </Link>
      ),
      trigger: "lastQuestion",
    },
    {
      id: "Employment",
      component: (
        <Link
          className="createCard"
          to={`/subservices/63b6b63f4560c1cce02e21ec`}
        >
          Click Here
        </Link>
      ),
      awaitAction: true,
      asMessage: true,
      trigger: "lastQuestion",
    },
    {
      id: "lastQuestion",
      message: "Can I help you with something else?",
      trigger: "bye",
    },
    {
      id: "bye",
      options: [
        { value: "Yes", label: "Yes", trigger: "Yes" },
        { value: "No", label: "No", trigger: "No" },
      ],
    },
    {
      id: "Yes",
      message: "Yes",
      trigger: "3",
    },
    {
      id: "No",
      message: "Ok, I enjoyed helping you",
      end: true,
    },
  ];
  return (
    <ThemeProvider class="chatbotStyle" theme={theme}>
      <ChatBot steps={steps} />
    </ThemeProvider>
  );
};

export default ChatbotComponent;
