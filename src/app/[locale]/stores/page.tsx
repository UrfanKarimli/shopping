import React from 'react'
import MyCarusel from '@/components/carusel'
import StoresSections from './components/stores-section'

function StoresPage() {
  return (
    <div className='mt-20 container'>
      <div className=' flex flex-col '>
        <h2>
          Mənə yaxın olan mağazalar
        </h2>

        <div>
          <MyCarusel />
        </div>
      </div>
      <StoresSections />
    </div>
  )
}

export default StoresPage