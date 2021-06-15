import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  Container,
  Toolbar,
} from "@material-ui/core";
import Links from "./Links";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "none",
  },
  toolBar: {
    flexWrap: "wrap",
  },
  appbarTittle: {
    flexGrow: "1",
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

const sections = [
  { title: "Hookah", url: "hookahpage" },
  { title: "Mixology", url: "#" },
  { title: "News", url: "#" },
];

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar} elevation={0} position="fixed">
        <Container fixed>
          <Toolbar className={classes.toolBar}>
            <Link
              to="/"
              variant="button"
              color="inherit"
              noWrap
              className={classes.appbarTittle}
            >
              HookahFriends
            </Link>
            <Links sections={sections} />
            <Button href="#" color="inherit" className={classes.link}>
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
