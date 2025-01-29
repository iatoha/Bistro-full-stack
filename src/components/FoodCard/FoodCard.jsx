const FoodCard = ({item ={}}) => {
    const {name, image, price, recipe} = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 py-3 px-5 bg-slate-900 text white">${price}</p>
      <div className="card-body flex justify-center items-center">
        <h2 className="card-title">{name}</h2>
        <p className="pl-4">{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline bg-slate-100 uppercase border-0 border-b-4 border-orange-400">Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
