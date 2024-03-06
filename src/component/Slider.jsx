import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"
function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  const data=[{
    img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"Shivani  M. Patel",
    time:"10 Days ago",
    rating:4,
    desc:"An exemplary showcase of talent and versatility. The portfolio elegantly encapsulates creativity and proficiency across diverse projects. Each piece exudes precision and innovation, demonstrating a remarkable skill set. Truly impressive work."
  },
  {
    img:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"Harshil D. Dudhat",
    time:"45 Days ago",
    rating:4.5,
    desc:"An exemplary showcase of talent and versatility. The portfolio elegantly encapsulates creativity and proficiency across diverse projects. Each piece exudes precision and innovation, demonstrating a remarkable skill set. Truly impressive work."
  },
  {
    img:"https://images.unsplash.com/photo-1513152697235-fe74c283646a?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"Karan  F. Ghaduk",
    time:"1 Days ago",
    rating:4.9,
    desc:"An exemplary showcase of talent and versatility. The portfolio elegantly encapsulates creativity and proficiency across diverse projects. Each piece exudes precision and innovation, demonstrating a remarkable skill set. Truly impressive work."
  },
  {
    img:"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"Hardik B. Savaliya",
    time:"8 Days ago",
    rating:5,
    desc:"An exemplary showcase of talent and versatility. The portfolio elegantly encapsulates creativity and proficiency across diverse projects. Each piece exudes precision and innovation, demonstrating a remarkable skill set. Truly impressive work."
  },
  {
    img:"https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"Harsh R. Vaghani",
    time:"30 Days ago",
    rating:3.9,
    desc:"An exemplary showcase of talent and versatility. The portfolio elegantly encapsulates creativity and proficiency across diverse projects. Each piece exudes precision and innovation, demonstrating a remarkable skill set. Truly impressive work."
  },]
  
  return (
    <div className='w-full flex flex-col py-20 px-8 md:px-10 gap-10 lg:gap-20 lg:py-20'>
    <div className="slider-container q">
        <h4 className='text-3xl font-bold text-black dark:text-white mt-10 '>
        Projetcs
      </h4>
      <Slider {...settings}>
        {data.map((d)=>(

      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800 dark:text-white">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div className="m-2">
				<img src={d.img} className=" w-1/2 h-1/2 object-cover rounded-full bg-gray-500" />
			</div>
			<div className="mx-1">
				<h4 className="font-bold mx-2">{d.name}</h4>
				<span className="text-xs text-gray-600">{d.time}</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 text-yellow-500">
			
			<span className="text-xl font-bold">{d.rating} ⭐</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm text-white-600">
		{/* <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p> */}
		<p>An exemplary showcase of talent and versatility. The portfolio elegantly encapsulates creativity and proficiency across diverse projects. Each piece exudes precision and innovation, demonstrating a remarkable skill set. Truly impressive work.</p>
	</div>
</div>
        ))}
      </Slider>


    </div>
    </div>
  );
}

export default AutoPlay;
