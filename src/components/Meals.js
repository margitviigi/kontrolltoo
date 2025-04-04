import { useEffect, useState } from "react";

const Meals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/meals")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ühendus puudub");
        }
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Viga:", error);
      });
  }, []);
};

export default Meals;