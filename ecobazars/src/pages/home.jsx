import React from 'react'

export default function Home(props) {
  return (
    <div>
      <section class="h-auto p-5 border-3 flex flex-col gap-10 border-blue-300 w-[80%] mx-auto mt-[10%]">
        <h2 class="flex justify-between">
          <p class="text-xl font-bold">Popular Categories</p>
          <span class="flex items-center gap-1 font-thin">
            <span class="text-green-600">View All </span>
            <span class="text-green-600 text-xl">&rarr;</span>
          </span>
        </h2>
        <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5">
          {/* <!-- ........Card product 1 --> */}
         {
          props.categoryArray.map((card,index)=>(
             <div key={index}
            class="flex flex-col items-center col-span-1 border border-gray-400  py-[3rem]  rounded-2xl hover:border-green-500 hover:border-3 hover:shadow-xl shadow-green-500/50">
            <img src={card.image} alt="" />
            <h3 class="font-bold">{card.title}</h3>
          </div>
          ))
         }



        </div>
      </section>
    </div>
  )
}
