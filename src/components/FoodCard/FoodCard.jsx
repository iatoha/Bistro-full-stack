import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const FoodCard = ({item ={}}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = food => {
      if(user && user.email){
        // TODO: send cart item to the database
        console.log(user.email, food);
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axios.post('http://localhost:5000/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to the card`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
      }
      else{
        Swal.fire({
          title: "You are not logged in",
          text: "Please log in to add to the cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Log in!"
        }).then((result) => {
          if (result.isConfirmed) {
            // send user to the log in page
            navigate("/login", {state: {from: location}});
          }
        });
      }
    }
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

          <button 
          onClick={() => handleAddToCart(item) }
          className="btn btn-outline bg-slate-100 uppercase border-0 border-b-4 border-orange-400"
          >Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
