
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const {name, category, recipe, price, _id} = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to img-bb and then get an url
    const imageFile = data.image[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    const res = await axiosPublic.post(image_hosting_api, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // console.log(res.data);

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      //
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // show success popup
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is  updated to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <SectionTitle heading="UPDATE ITEM'"></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full my-6">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Recipe name*</legend>
              <input
                type="text"
                defaultValue={name}
                className="input w-full"
                {...register("name", { required: true })}
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
                  {...register("category", { required: true })}
                  defaultValue={category}
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
                  defaultValue={price}
                  className="input w-full"
                  {...register("price", { required: true })}
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
              defaultValue={recipe}
              className="textarea h-24"
              placeholder="Recipe Details"
            ></textarea>
          </fieldset>

          <div className="w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input"
            />
          </div>

          <button className="btn">
            Update menu item
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
