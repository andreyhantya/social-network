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

    let users = [
        {name: 'Andrey', id: 1},
        {name: 'Vasya', id: 2},
        {name: 'Jorik', id: 3},
        {name: 'Vova', id: 4},
    ];
    let dialogs = [
        {message: 'Здорова, как дела?'},
        {message: 'Нормас'},
        {message: 'Прикольная авка'},
        {message: 'Почему не отвечаешь?'},
    ];


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-content'>
                    <Route path="/profile" render={ () => <Profile /> } />
                    <Route path="/dialogs" render={ () => <Dialogs users={users} dialogs={dialogs}/> }/>
                    <Route path="/news" render={ () => <News /> }/>
                    <Route path="/friends" render={ () => <Friends /> }/>
                    <Route path="/settings" render={ () => <Settings /> }/>
                </div>
            </div>
        </BrowserRouter>
    )
};


export default App;