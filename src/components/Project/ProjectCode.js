import React from "react";
import { CodeCard } from "../Card/Card";

const ProjectCode = ({ code, codeId, projects }) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "80vw",
        zIndex: "8",
        height: "70vh",
        backgroundColor: "rgba(20,20,20,0.5)",
      }}
      onClick={() => code()}
    >
      <CodeCard>{codeId}</CodeCard>
    </div>
  );
};

export default ProjectCode;
