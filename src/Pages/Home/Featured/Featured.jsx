import SectionTitle from "../../../components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-10">
            <SectionTitle
            subHeading='---Check it out---'
            heading='FROM OUR MENU'
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-25 pb-20 pt-12 px-36">
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10">
                <p>Aug 20, 2029</p>
                <p className="uppercase">where i can get some</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In vitae sit magnam provident corrupti enim, tempora cumque accusamus architecto iste qui. Et vitae eveniet pariatur quam consectetur saepe similique quidem nihil, aperiam expedita vero dolores impedit nemo atque error veniam qui quod necessitatibus, temporibus perspiciatis facere amet? Cupiditate, aut nam.</p>
                <button className="btn btn-outline uppercase border-0 border-b-4 text-white">Order Now</button>
            </div>
            </div>
        </div>  
    );
};

export default Featured;