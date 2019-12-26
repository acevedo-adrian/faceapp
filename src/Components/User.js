import React from "react";

const User = ({ user }) => {
  const { first, last } = user.name;
  const img = user.picture.large;
  return <img src={img}></img>;
};

export default User;
