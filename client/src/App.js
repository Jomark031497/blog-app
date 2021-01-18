import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import AddBlog from "./components/pages/AddBlog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./components/pages/Blog";
import { Grid } from "@material-ui/core";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { useEffect } from "react";
import axios from "axios";
import { fetchLoggedIn } from "./redux";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const res = await axios.get("/users/isTokenValid", {
          headers: { "Content-Type": "application/json" },
        });
        const data = res.data.user;
        dispatch(fetchLoggedIn(data));
      } catch (err) {
        console.log(err);
      }
    };

    checkLoggedIn();
  }, [dispatch]);

  return (
    <Router>
      <Grid container justify="center">
        <Grid item xs={12} sm={11} md={8}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blogs" component={Home} />
            <Route exact path="/add-blog" component={AddBlog} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/:id" render={(props) => <Blog {...props} />} />
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
