import React from "react";

const Wine = ({ match }) => {
  const projectId = match.params.projectId;
  // Logika za dohvaćanje pojedinosti o projektu prema projectId


  return (
    <div>
      <h2>Project Details - {projectId}</h2>
    </div>
  );
};

export default Wine;
