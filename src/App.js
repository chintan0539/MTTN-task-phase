import "./App.css";
import FilterSearch from "./components/filterSearch.component";
import Header from "./components/header.component";
import { useState, useEffect } from "react";
import CardHolder from "./components/card/CardHolder.component";

const App = () => {
  const [department, setDepartment] = useState("");
  const [sem, setSem] = useState("");

  return (
    <div className="container">
      <Header />
      <FilterSearch
        setDepartment={setDepartment}
        setSem={setSem}
        department={department}
        sem={sem}
      />
      <CardHolder sem={sem} department={department} />
    </div>
  );
};

export default App;
