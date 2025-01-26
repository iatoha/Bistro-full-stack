import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
       { title && <Cover img={img} title="our menu" ></Cover>}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-16">
        {
        items.map((item) => (
          <MenuItem 
          key={item._id} 
          item={item}>
          </MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
