import SecondCarusel from '@/components/second-carusel';
import AllDatas from './sections/all-datas';
import Categories from './sections/categories';
import LocationComponent from '@/components/user-location';

export default function Home() {

  return (
    <div className="container mt-20">
      <div className=' my-10'>
        <LocationComponent />
      </div>
      <Categories />
      <h3 className=' text-4xl text-headText-light my-3'>En cox sifaris verilenler</h3>
      <SecondCarusel />
      <AllDatas />
    </div>
  );
}
