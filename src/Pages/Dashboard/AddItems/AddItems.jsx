import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;  

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit =async (data) => {
    console.log(data);
    // image upload to img-bb and then get an url
    const imageFile =  data.image[0] ;
    const formData = new FormData();
    formData.append('image', imageFile);

    const res = await axiosPublic.post(image_hosting_api, formData, {
      headers: {
        'Content-type' : 'multipart/form-data'
      }
    } );
    console.log(res.data);
    
    if(res.data.success){
      const imageUrl = res.data.data.display_url;
      console.log('Image URL', imageUrl);
      
    }
  };

  return (
    <div>
      <SectionTitle
        heading="add an item"
        subHeading="what's new"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full my-6">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Recipe name*</legend>
              <input
                type="text"
                className="input w-full"
                {...register("name", {required: true})}
                required
                placeholder="Recipe name"
              />
            </fieldset>
          </div>

          <div className="flex gap-6">
            {/* category */}
            <div className="w-full my-6">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Category*</legend>
                <select
                  {...register("category", {required: true})}
                  defaultValue="Default"
                  className="select w-full"
                >
                  <option disabled value="default">
                    Category
                  </option>
                  <option>Salad</option>
                  <option>Pizza</option>
                  <option>Soups</option>
                  <option>dessert</option>
                  <option>Drinks</option>
                </select>
              </fieldset>
            </div>

            {/* price */}
            <div className="w-full my-6">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Price*</legend>
                <input
                  type="number"
                  className="input w-full"
                  {...register("price", {required: true})}
                  placeholder="Price"
                />
              </fieldset>
            </div>
        
          </div>
              {/* recipe details */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Recipe Details*</legend>
              <textarea
              {...register("recipe")}
                className="textarea h-24"
                placeholder="Recipe Details"
              ></textarea>
            </fieldset>

            <div className="w-full my-6">
              <input
              {...register("image", {required: true})} 
              type="file" 
              className="file-input" />
            </div>

          <button className="btn">
           Add Item
           <FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
