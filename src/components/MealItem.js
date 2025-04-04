import Button from "./UI/Button";

const MealItem = ({ meal }) => {
    const priceNew = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(meal.price);

    return (
      <li className="meal-item">
        <article>
          <img
            src={require(`../assets/${meal.image}`)} 
            alt={meal.name}
          />
          <div>
            <h3>{meal.name}</h3>
            <p className="meal-item-price">{priceNew}</p> 
            <p className="meal-item-description">{meal.description}</p>
          </div>
          <p className="meal-item-actions">
          <Button textOnly={false} onClick={() => console.log(`${meal.name} added to cart`)}>
            Add to Cart
          </Button>
          </p>
        </article>
      </li>
    );
  };
  
  export default MealItem;
  