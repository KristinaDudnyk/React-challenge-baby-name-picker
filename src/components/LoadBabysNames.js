import React from "react";

export default function LoadBabysNames({ babysNameArr }) {
  return (
    <div className="names-container">
      {babysNameArr
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((element) => (
          <span key={element.id} className={`${element.sex} name-button`}>
            {element.name}
          </span>
        ))}
    </div>
  );
}
