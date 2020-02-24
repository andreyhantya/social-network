import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Content/Profile/Profile";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/Content/News/News";
import Friends from "./components/Content/Friends/Friends";
import Settings from "./components/Content/Settings/Settings";

const App = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-content'>
                    <Route path="/profile" component={Profile} />
                    <Route path="/dialogs" component={Dialogs} />
                    <Route path="/news" component={News} />
                    <Route path="/friends" component={Friends} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    )
};


export default App;