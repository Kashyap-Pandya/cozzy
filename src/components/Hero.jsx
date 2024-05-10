import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];
console.log(carouselImages);
const Hero = () => {
	return (
		<div className=' grid  lg:grid-cols-2 gap-24 items-center'>
			<div>	
				<h1 className='max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl '>
					We’re changing the way people shop.
				</h1>

				<p className='mt-8 max-w-xl text-lg leading-8'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Non reprehenderit at ipsa harum ducimus delectus voluptatum
					eos ea, labore architecto asperiores quasi saepe nostrum
					aliquam assumenda, repellat vel odio nulla.
				</p>
				<div className='hidden sm:flex mt-10  '>
					<Link to='products' className='btn btn-primary'>
						Our Products
					</Link>
				</div>
			</div>
			<div>
				<div className='h-[26rem] sm:h-[30rem] mt-[-30px] sm:mt-0 carousel carousel-center p-2 sm:p-4 space-x-4 bg-neutral rounded-box'>
					{carouselImages.map((image) => {
						return (
							<div key={image} className='carousel-item  '>
								<img
									src={image}
									className='rounded-box h-full w-80 p-2 sm:p-0 object-cover'
								/>
							</div>
						);
					})}
				</div>
				<div className='sm:hidden mt-10  '>
					<Link to='products' className='btn btn-primary'>
						Our Products
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Hero;
