import React, { useEffect, useState } from "react";
import axios from "axios";

function StartsideElimMedia() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/data/fetch")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Elim Media</h1>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          {item.link && (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              View More
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default StartsideElimMedia;
