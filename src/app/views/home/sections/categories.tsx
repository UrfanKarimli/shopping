import Image from "next/image";
import Link from "next/link";

export default function Categories() {
    return (
        <div>
            <h2>Kategoriyalar</h2>
            <div className="flex items-center gap-3 overflow-x-scroll no-scrollbar">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                    <Link key={item} href={'#'}>
                        <div className="w-[90px] group flex flex-col justify-center ">
                            <div className="group-hover:border-[#ff4f08] mb-1 flex items-center justify-center bg-white border border-solid border-[#eaebf2] rounded-[18%] w-[90px] h-[90px] transition-all duration-300 ease-in-out">
                                <Image
                                    src={'/vape.jpg'}
                                    alt="vape"
                                    width={48}
                                    height={48}
                                    className=" w-12 h-12 object-cover object-center" />
                            </div>
                            <span className="font-arial w-[90px] text-center flex justify-center text-sm text-[#212c3a] group-hover:text-[#ff4f08] align-top transition-all duration-300 ease-in-out">
                                kategoriya {item}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
