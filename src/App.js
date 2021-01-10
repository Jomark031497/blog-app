import "./App.css";
import Navbar from "./components/layouts/Navbar";
import { makeStyles } from "@material-ui/styles";
import Home from "./components/pages/Home";
import AddBlog from "./components/pages/AddBlog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./components/pages/Blog";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Provider store={store}>
        <div className={classes.root}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-blog" component={AddBlog} />
            <Route exact path="/:id" component={Blog} />
          </Switch>
        </div>
      </Provider>

    </Router>
  );
}

const useStyles = makeStyles({
  root: {
    width: "60%",
    margin: "auto",
  },
});

export default App;
