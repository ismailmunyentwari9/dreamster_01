import React,{ useState }  from 'react'

export default function Products(props) {
const [cart,setCart]=useState(1);
const [image,setImage]=useState(0);


// event Handlers.......
// ............Add image Left..................
const handleAddImage =()=>{
    if(image>=0){
     setImage(image+1);
     console.log(image);
    }
    else{
          alert("Product type comming soon")
    }
}
// ............remove image Left..................
const handleremoveImage =()=>{
     if(image>=0){
        setImage(image-1);
         console.log(image);
    }
    else{
        alert("Product Comming soon")
    }
}

// .........................Add to cart.......................
const handleAddCart =()=>{
    setCart(cart+1);
}
// .........................Remove From cart.......................
const handleRemoveCart =()=>{
    if(cart>=1){
        setCart(cart-1);
    }
    else{
        alert("you didn't shop Anything from Ecobazar ")
    }
}
    return (

        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
            {/* <!-- ........Card product 1 --> */}


            {
                props.Products.map((card, index) => (
                    <div key={index}
                        class="flex flex-col items-center col-span-1 border border-gray-400  py-[3rem]  rounded-2xl hover:border-green-500 hover:border-3 hover:shadow-xl shadow-green-500/50">
                            <p><i class="fa fa-cart-plus "></i><span className='text-red-500 text-5xl'>{cart}</span></p>
                        <div className='flex items-center'><span onClick={handleAddImage} className='cursor-pointer'><i className='fa fa-arrow-left'></i></span><img src={card.img[image]} alt="" /> <span onClick={handleremoveImage} className='cursor-pointer'><i className='fa fa-arrow-right'></i></span></div>
                        <h3 class="font-bold">{card.title}</h3>
                        <h3 className='flex gap-5 mt-10'><span onClick={handleAddCart} className='text-green-500 cursor-pointer'>Add +</span><span onClick={handleRemoveCart} className='text-red-500 cursor-pointer'>Remove-</span></h3>
                    </div>
                ))
            }

        </div>

    )
}
