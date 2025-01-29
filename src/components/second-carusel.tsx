import { Carousel } from "antd";
import './MyCarusel.css'
import ItemCard from "./item-card";

const SecondCarusel: React.FC = () => (
    <div className="max-w-full overflow-hidden">
        <Carousel
            arrows
            // autoplay
            dots={false}
            slidesToShow={3}
            slidesToScroll={3}
            className="custom-carousel flex gap-2 "
        >
            {Array.from({ length: 15 }, (_, index) => (
                <ItemCard key={index} />
            ))}
        </Carousel>
    </div>
);



export default SecondCarusel;
