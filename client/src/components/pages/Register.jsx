import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createUser } from "../../redux";

const Register = () => {
  const classes = useStyles();

  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(credentials));
  };

  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit}>
        <Typography variant="h5" className={classes.header}>
          Register
        </Typography>
        <div className={classes.fields}>
          <TextField
            type="text"
            variant="outlined"
            label="Username"
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
            type="email"
            variant="outlined"
            label="Email Address"
            size="small"
            className={classes.textfield}
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
        </div>

        <div className={classes.fields}>
          <TextField
            type="password"
            variant="outlined"
            label="Password"
            size="small"
            className={classes.textfield}
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </div>
        <Button type="submit" variant="outlined" color="primary" className={classes.submitBtn}>
          Register
        </Button>
        <div className={classes.noAccount}>
          <p>
            Already have an account? <Link to="/login">Login Here</Link>
          </p>
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
    alignItems: "center"
  },
  header: {
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
});

export default Register;
