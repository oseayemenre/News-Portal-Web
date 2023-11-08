"use client";

import React from "react";
import usePost from "@/hooks/usePost";

type Tparams = {
  params: {
    id: string;
  };
};

const DynamicRoute = ({ params }: Tparams) => {
  const { data, error, loading } = usePost(params.id);

  console.log(data);

  return <div>{params.id}</div>;
};

export default DynamicRoute;
