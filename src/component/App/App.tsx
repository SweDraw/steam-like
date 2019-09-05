import React from 'react';
import Header from "../header/Header.component";
import './App.style.scss';
import Main from "../../page/main/Main.component";
import SideBar from "../side-bar/SideBar.component";
import LogInPage from "../../page/log-in/LogInPage.component";
import {Route, Switch} from "react-router";
import CreatePage from "../../page/create-page/CreatePage.component";
import GameSearchBar from "../../page/game-search-bar/GamePage.component";
import IndividualGamePage from "../../page/individual-game-search-bar/IndividualGamePage.component";

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <Header/>
        <SideBar/>
        <Switch>
          <Route exact path={'/'} component={Main}/>
          <Route path={'/log'} component={LogInPage}/>
          <Route path={'/create'} component={CreatePage}/>
          <Route path={'/category'} component={GameSearchBar}/>
          <Route path={'/game'} component={IndividualGamePage}/>
        </Switch>
      </div>
    </>
  );
};

export default App;
