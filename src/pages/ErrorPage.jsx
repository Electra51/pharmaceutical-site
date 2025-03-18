import React from "react";
import Button from "../component/Shared/Button/Button";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col  justify-center items-center h-[100vh] dark:bg-[#111111]">
      <p className="text-center text-xl font-medium mb-10 font-neueMontreal">
        This page is Not Found
      </p>
      <Link to={"/"}>
        <Button text={"Go Back"} height={45} width={160} />
      </Link>
    </div>
  );
};

export default ErrorPage;
