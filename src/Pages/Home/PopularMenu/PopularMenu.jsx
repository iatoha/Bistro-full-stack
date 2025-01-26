import SectionTitle from "../../../components/SectionTitle";
import { matchRoutes } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    
    return (
        <section className="mb-12">
            <SectionTitle
            heading="FROM OUR MENU"
            subHeading="Popular menu"
            ></SectionTitle>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            {
                popular.map(item => <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
        </div>
        <div className="text-center mt-16">
        <button className="btn btn-outline uppercase border-0 border-b-4 text-white">View Full Menu</button>
        </div>

        </section>
    );
};

export default PopularMenu;