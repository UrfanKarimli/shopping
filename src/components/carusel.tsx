import { Carousel } from "antd";
import './MyCarusel.css'
import Image from "next/image";
import vape from '../../public/vape.jpg'
import { Link } from "@/i18n/routing";

const MyCarusel: React.FC = () => (
    <div className="max-w-full overflow-hidden">
        <h2>kategoriyalar</h2>
        <Carousel
            arrows
            // autoplay
            dots={false}
            slidesToShow={5}
            slidesToScroll={5}
            className="custom-carousel "
        >
            {Array.from({ length: 15 }, (_, index) => (
                <Link href={'#'} key={index} className="px-1 hover:scale-105 ease-in-out duration-300 transition-all ">
                    <div className="h-40 text-black    bg-[#fff] border border-[#fe7600] rounded-lg shadow-md overflow-hidden ">
                        <figure className=" block ">
                            <Image
                                className=" object-center object-cover w-full "
                                src={vape}
                                alt="vape picture"
                            />
                            <figcaption className="  text-black ">
                                kategoriya   {index + 1}
                            </figcaption>
                        </figure>
                    </div>
                </Link>
            ))}
        </Carousel>
    </div>
);



export default MyCarusel;
