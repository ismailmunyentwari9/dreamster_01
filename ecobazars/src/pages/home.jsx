import React from 'react'
import Products from '../components/products'
export default function Home() {

  const productArray = [
    {
      title: "Fresh Fruit",
      img:[
        "./assets/image 1.png",
        "./assets/image 7.png",
        "./assets/image 3.png"
      ]
  },
    {
      title: "Fresh Vegetables",
       img:[
        "./assets/image 1.png",
        "./assets/image 7.png",
        "./assets/image 3.png"
      ]
  },

    {
      title: "Meat & Fish",
       img:[
        "./assets/image 1.png",
        "./assets/image 7.png",
        "./assets/image 3.png"
      ]
  },

    {
       title: "Snacks",
       img:[
        "./assets/image 1.png",
        "./assets/image 7.png",
        "./assets/image 3.png"
      ]
  },

    {
      title: "Beverages",
      img:[
        "./assets/image 1.png",
        "./assets/image 2.png",
        "./assets/image 3.png"
      ]
  },

    {
      title: "Beauty & Health",
      img:[
        "./assets/image 1.png",
        "./assets/image 2.png",
        "./assets/image 3.png"
      ]
  },

    {
       title: "Bread & Bakery",
      img:[
        "./assets/image 1.png",
        "./assets/image 2.png",
        "./assets/image 3.png"
      ]
  },

    {
       title: "Baking Needs",
      img:[
        "./assets/image 1.png",
        "./assets/image 7.png",
        "./assets/image 3.png"
      ]
  },

    {
       title: "Cooking",
      img:[
        "./assets/image 1.png",
        "./assets/image 7.png",
        "./assets/image 3.png"
      ]
  },

    {
       title: "Diabetic Food",
      img:[
        "./assets/image 1.png",
        "./assets/image 7.png",
        "./assets/image 3.png"
      ]
  },


  ]
  return (
    <div>
      <section class="h-auto p-5 border-3 flex flex-col gap-10 border-blue-300 w-[100%] mx-auto mt-[10%]">
        <h7 class="flex justify-between">
          <p class="text-xl font-bold">Popular Categories</p>
            <span  className='text-3xl'></span>
          <span class="flex items-center gap-1 font-thin">
            <span class="text-green-600">View All </span>
            <span class="text-green-600 text-xl">&rarr;</span>
          </span>
        </h7>
        <Products Products={productArray} />
      </section>
    </div>
  )
}
