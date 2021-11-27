import React from "react";

const FilterSearch = ({ setDepartment, department, setSem, sem }) => {
  return (
    <div>
      <h3>Please choose the department</h3>
      <select
        className="form-select form-select-lg mb-3"
        aria-label="plz choose"
        value={department}
        defaultValue="none"
        onChange={(e) => {
          setDepartment(e.target.value);
        }}
      >
        <option value="none">Department</option>
        <option value="CSE">Computer science and engineering</option>
        <option value="EEE">Electrical and Electronics engineering</option>
      </select>

      <h3>Please choose the Semester</h3>
      <select
        className="form-select form-select-sm"
        aria-label="plz choose"
        value={sem}
        defaultValue="none"
        onChange={(e) => {
          setSem(e.target.value);
        }}
      >
        <option value="none">Semester</option>
        <option value="1">I</option>
        <option value="2">II</option>
        <option value="3">III</option>
        <option value="4">IV</option>
        <option value="5">V</option>
        <option value="6">VI</option>
      </select>
    </div>
  );
};

export default FilterSearch;
