import React from "react";
import { Badge } from "react-bootstrap";

const MyBadge = ({ text, color }) => {
  return (
    <div>
      <h1>
        <Badge variant={color}>{text}</Badge>
      </h1>
    </div>
  );
};

export default MyBadge;