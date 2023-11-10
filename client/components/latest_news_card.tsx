import React from "react";

type TLatestNewsCard = {
  title: string;
};

const LatestNewsCard = ({ title }: TLatestNewsCard) => {
  const removespace = title.replace(/^\s+/, "");
  const Title = removespace.split("")[0].toUpperCase() + removespace.slice(1);

  return <div>{Title}</div>;
};

export default LatestNewsCard;
