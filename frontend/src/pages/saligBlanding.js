import React, { useEffect, useState } from "react";
import axios from "axios";

function SaligBlanding() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend
    axios
      .get("http://localhost:5000/api/data/fetch")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Welcome to Salig Blanding</h1>
      <p>Here you can find calendar events, images, and links!</p>
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

export default SaligBlanding;