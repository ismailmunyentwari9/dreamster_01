import React from 'react'

export default function Products(props) {
    return (

        <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5">
            {/* <!-- ........Card product 1 --> */}


            {
                props.Products.map((card, index) => (
                    <div key={index}
                        class="flex flex-col items-center col-span-1 border border-gray-400  py-[3rem]  rounded-2xl hover:border-green-500 hover:border-3 hover:shadow-xl shadow-green-500/50">
                        <img src={card.img} alt="" />
                        <h3 class="font-bold">{card.title}</h3>
                    </div>
                ))
            }

        </div>

    )
}
