import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux";
import { Link } from "react-router-dom";
import { Typography, TextField, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const Login = () => {
  const classes = useStyles();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUser(credentials));
  };

  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit}>
        <Typography variant="h5" className={classes.header}>
          Login
        </Typography>
        <div className={classes.alert}>
          {data.error ? <Alert severity="error">{data.error}</Alert> : ""}
        </div>
        <div className={classes.fields}>
          <TextField
            variant="outlined"
            label="Username"
            type="text"
            size="small"
            className={classes.textfield}
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
        </div>

        <div className={classes.fields}>
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            size="small"
            className={classes.textfield}
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </div>
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          className={classes.submitBtn}
        >
          Login
        </Button>
        <div className={classes.noAccount}>
          <Typography variant="subtitle1">
            No account yet? <Link to="/register">Register Here</Link>
          </Typography>
        </div>
      </form>
    </>
  );
};

const useStyles = makeStyles({
  root: {
    padding: "2rem",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  fields: {
    marginBottom: "1rem",
  },
  labels: {
    textTransform: "capitalize",
    fontSize: "1.3rem",
  },
  noAccount: {
    textAlign: "center",
    margin: "1rem auto",
  },
  alert:{
    marginBottom: "1rem"
  }
});

export default Login;
