import React from "react";
import ListUsers from "./ListUsers";

const Home = ({ users }) => {
  return(
  
        <ListUsers users={users} />
  );
};

export default Home;
