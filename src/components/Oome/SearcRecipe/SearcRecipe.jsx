import React, { useEffect, useState } from 'react'

import './SearcRecipe.css';

import Categories from '../../Oome/SearcRecipe/Categories/cateories'

const SearcRecipe = () => {
    

    // useEffect(() => {
    //     console.log(selected)
    // }, [selected])

  return (
    <div className='searc-recipe--container'>
        <div className='landin--container'>
            <Categories />
        </div>
    </div>
  )
}

export default SearcRecipe