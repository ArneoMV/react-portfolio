import React from "react";

const Vespera = ({ match }) => {
  const projectId = match.params.projectId;
  // Logika za dohvaćanje pojedinosti o projektu prema projectId


  return (
    <div>
      <h2>Vespera - {projectId}</h2>
    </div>
  );
};

export default Vespera;
