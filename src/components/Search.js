import React, { useEffect, useState } from "react";
import babysNameArr from "../data/babyNamesData";
import LoadBabysNames from "./LoadBabysNames";

export default function Search() {
  const [babyData, setBabyData] = useState(babysNameArr);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filterNanes = filterData(searchTerm, babysNameArr);
      setBabyData(filterNanes);
    }, 300);
    return () => clearTimeout(Debounce);
  }, [searchTerm]);
  return (
    <>
      <div className="input-container">
        <input
          value={searchTerm}
          type="text"
          placeholder="Search names"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <LoadBabysNames babysNameArr={babyData} />
    </>
  );
}

const filterData = (searchText, listOfData) => {
  if (!searchText) {
    return listOfData;
  }
  return listOfData.filter((baby) =>
    baby.name.toLowerCase().includes(searchText.toLowerCase())
  );
};
