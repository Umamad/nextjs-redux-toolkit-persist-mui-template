import React from "react";
import axios from "axios";

import { wrapper } from "@/redux/store";
import { changeTheme, setUser } from "@/redux/user/user.reducer";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/hooks/redux.hooks";

import { Button, Container, Typography } from "@mui/material";

import type { NextPage } from "next";

const Home: NextPage = () => {
  const { themeSetting, users } = useAppSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <Container>
      <Typography variant="h1">{themeSetting}</Typography>

      <Button
        variant="contained"
        onClick={() =>
          themeSetting === "light"
            ? dispatch(changeTheme("dark"))
            : dispatch(changeTheme("light"))
        }
      >
        {themeSetting ? "Logout" : "LogIn"}
      </Button>
      <ol role="list">
        {users.map((user: any) => (
          <Typography
            role="listitem"
            variant="subtitle1"
            component="li"
            key={user.id}
          >
            {user.name}
          </Typography>
        ))}
      </ol>
    </Container>
  );
};

export default Home;

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const users = (await axios.get("https://jsonplaceholder.typicode.com/users"))
    .data;
  store.dispatch(setUser(users));

  return { props: {} };
});
