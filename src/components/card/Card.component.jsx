import React, { useState } from "react";
import PdfModal from "./pdfModal";

const Card = ({ currentData }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="CardBody">
      <h5>
        <b>Title: </b> {currentData.title}
      </h5>

      <p>
        <b>Sem: </b> {currentData.sem} <br />
        <b>Dept: </b> {currentData.department}
      </p>

      <button
        style={{ marginTop: "5px" }}
        className="btn btn-outline-dark btn-sm"
        onClick={() => {
          setModal(true);
        }}
      >
        Open file
      </button>
      <PdfModal
        title={currentData.title}
        link={currentData.link}
        modal={modal}
        setModal={setModal}
      />
    </div>
  );
};

export default Card;
