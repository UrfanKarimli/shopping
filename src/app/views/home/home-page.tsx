import SecondCarusel from '@/components/second-carusel';
import AllDatas from './sections/all-datas';
import Categories from './sections/categories';

export default function Home() {

  return (
    <div className="container mt-20">

      <Categories />
      <h3 className=' text-4xl text-headText-light my-3'>En cox sifaris verilenler</h3>
      <SecondCarusel />
      <AllDatas />
    </div>
  );
}
