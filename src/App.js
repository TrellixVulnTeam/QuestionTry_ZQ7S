import React from "react";

import { Routes, Route, Redirect } from "react-router-dom";

import SignInAndSignUp from "./Pages/Sing-In-Sign-Up/Sign-In-Sign-Up";
import HomePage from "./Pages/HomePage/HomePage";
import QuestionPage from "./Pages/QuestionPage/QuestionPage";
import MyProfile from "./Pages/ProfilePage/ProfilePage";

import Header from "./Components/Header/Header.jsx";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/user/actions";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  });

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/signin" element={<SignInAndSignUp />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/QuestionPage" element={<QuestionPage />} />
      </Routes>
    </div>
  );
};

// Sort posts alphabetically

export default App;
