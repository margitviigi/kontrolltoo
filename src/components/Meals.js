import { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/meals")
      .then((response) => {
        if (!response.ok) throw new Error("Viga");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMeals(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Viga:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;