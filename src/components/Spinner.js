import loading from './loading.gif'
import React from 'react'

const Spinner = ()=>{

    return (
      <div className='text-center my-4'>
          <img src={loading} alt="loading" />
      </div>
    )

}

export default Spinner
