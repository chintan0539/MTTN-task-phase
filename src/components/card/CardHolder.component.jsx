import Card from "./Card.component";
import "./css/card.css";
import React, { useState, useEffect } from "react";
import data from "./data";
const CardHolder = ({ sem, department }) => {
  const [currentData, setCurrentData] = useState([]);
  // eslint-disable-next-line
  const [allData, setAllData] = useState(data);

  useEffect(() => {
    setCurrentData([
      ...allData.filter((val, idx) =>
        Boolean(val.department === department && val.sem === parseInt(sem))
      ),
    ]);
  }, [sem, department]);

  return (
    <div className="cardHolder">
      {currentData.map((d, i) => {
        return <Card key={i} currentData={d} />;
      })}
    </div>
  );
};

export default CardHolder;
