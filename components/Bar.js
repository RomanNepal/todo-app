import React from "react";
import Text from "./Text/Text";

const Bar = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderColor: "#d9d9d9",
        borderRadius: "8px",
        display: "flex",
        gap: "2rem",
        padding: "0.5rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        fontSize: "16px",
      }}
    >
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "6px",
          paddingLeft: "10px",
          paddingRight: "10px",
          backgroundColor: "#374151",
        }}
      >
        <Text color="white">All</Text>
      </div>
      <Text color="#374151">Completed</Text>
      <Text color="#374151">Pending</Text>
      <Text color="#374151">Halted</Text>
    </div>
  );
};

export default Bar;
