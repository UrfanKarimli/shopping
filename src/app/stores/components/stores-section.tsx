import Image from 'next/image'
import Bravo from '../../../../public/Bravo.jpg'
import Fill from '../../../../public/fill.jpg'
import Link from 'next/link'
export default function StoresSections() {

    return (
        <section className=' grid grid-cols-3 gap-x-2 '>
            <div>
                <Link href={'#'} >
                    <figure>
                        <Image
                            className=' w-full h-[195px] object-contain object-center'
                            src={Bravo}
                            alt=''
                        />
                        <figcaption>
                            <span>Bravo Market</span>
                            <p></p>
                        </figcaption>
                    </figure>
                </Link>
            </div>
            <div className=' '>
                <Link href={'/shop'}  >
                    <div className='border border-border-light  rounded-xl overflow-hidden '>
                        <figure className=''>
                            <div className={`w-full bg-[url('/fill.jpg')] bg-no-repeat bg-cover `}>
                                <Image
                                    className={`w-full h-[195px] object-contain object-center  backdrop-blur-lg `}
                                    src={Fill}
                                    alt=''
                                />
                            </div>
                            <figcaption className=' p-2'>
                                <span className=' font-bold'>Zoo market</span>
                                <p className=' text-sm truncate'>Ev heyvanlarınız üçün hər şeyi bizim mağazada tapa bilərsiz! Sizi gözləyirik!</p>
                            </figcaption>
                        </figure>
                    </div>
                </Link>
            </div>
            <div>
                sas
            </div>
        </section>
    )
}
