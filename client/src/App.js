import TopBar from "./Components/Topbar/TopBar";
import Home from "./Рages/Home/Home";
import Login from "./Рages/Login/Login";
import Register from "./Рages/Register/Register";
import Settings from "./Рages/Settings/Settings";
import Single from "./Рages/Single/Single";
import Write from "./Рages/Write/Write";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <TopBar />
        <Switch>
           <Route exact path="/">
             <Home />
           </Route>
           <Route path="/register">
             {user ? <Home /> : <Register />}
           </Route>
           <Route path="/login">
             {user ? <Home /> : <Login />}
           </Route>
           <Route path="/write">
             {user ? <Write /> : <Register />}
           </Route>
           <Route path="/settings">
             {user ? <Settings /> : <Register />}
           </Route>
           <Route path="/post/:postId">
             <Single />
           </Route>
         </Switch>
       </Router>
  );
}

export default App;
