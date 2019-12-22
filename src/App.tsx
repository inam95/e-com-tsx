import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "./pages/homepage/homepage.component";

import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/topics" component={HatsPage} />
        <Route path="/topics/:topicId" component={TopicDetail} /> */}
      </Switch>
    </div>
  );
};

export default App;
