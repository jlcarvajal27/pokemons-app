import { redirect } from "next/navigation";
import React from "react";

const NotFoundPage = () => {
  redirect("/pokemons");
  return <div>not found</div>;
};

export default NotFoundPage;
