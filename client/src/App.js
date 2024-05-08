import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";

import PenIcon from "@material-ui/icons/Create";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Postslist from "./components/Postslist";
import AddPostForm from "./components/AddPostForm";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(3),
  },
}));

const App = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.container}>
        <Router>
          <AppBar position="static" color="inherit" elevation={0}>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <Link
                  to="/posts"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Blogify
                </Link>
              </Typography>
              <Button
                color="primary"
                variant="outlined"
                startIcon={<PenIcon />}
                onClick={handleOpen}
              >
                Yeni Yazı
              </Button>
            </Toolbar>
          </AppBar>
          <Grid container className={classes.container}>
            <Grid item xs={12}>
              <Routes>
                <Route path="/posts" element={<Postslist />} />
                <Route path="/" element={<Navigate to="/posts" />} />
              </Routes>
            </Grid>
          </Grid>
          <AddPostForm open={open} handleClose={handleClose} />
        </Router>
      </Container>
    </>
  );
};

export default App;
