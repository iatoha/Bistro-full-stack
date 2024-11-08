import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        subHeading="---What Our Clients Say---"
        heading="TESTIMONIALS"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
                reviews.map(review => <SwiperSlide
                key={review._id}
                >
                    <div className="m-24">
                        <p>{review.details}</p>
                        <h3 className="text-2xl text-[#CD9003]">{review.name}</h3>
                    </div>
                </SwiperSlide>) 
            }

      </Swiper>
    </section>
  );
};
``;

export default Testimonials;
