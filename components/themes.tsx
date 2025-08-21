



import Link from 'next/link';


export default function Themes() {

  
    return (
		<section id="programs" className='relative scroll-mt-20 scroll-smooth '>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 mb-[90px] bg-white">       

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Programs Offered</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Discover Programs Designed for your Kid's Growth</p>
          </div>


            <div className="flex flex-wrap justify-center  align-center gap-3 w-full justify-center">
			<Link href="#">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer  h-[300px] overflow-hidden">
	<img className="object-cover w-[540px] h-[300px] brightness-50 transform transition duration-300 hover:scale-110" src="abacus.png" alt="Agri-Tech"/>

	<div className="absolute top-0 left-0 px-6 py-4">
	  <h3 className="mt-5 inset-x-0 bottom-0 h3 text-white">AI <br></br> Abacus</h3>
	</div>
  </div>
  </Link>

  <Link href="#">
  <div className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transform-hidden h-[300px]">
	<img className="object-cover w-[540px] h-[300px] brightness-50 transform transition duration-300 hover:scale-110" src="phonics.png" alt="Manufacturing"/>

	<div className="absolute top-0 left-0 px-6 py-4">
	  <h2 className="mt-5 inset-x-0 bottom-0  h3 text-white">AI <br></br> Phonics</h2>
	</div>
  </div>
  </Link>

  <Link href="#">
  <div className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transform-hidden h-[300px]">
	<img className="object-cover w-[540px] h-[300px] brightness-50 transform transition duration-300 hover:scale-110" src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Tech Titans"/>

	<div className="absolute top-0 left-0 px-6 py-4">
	  <h2 className="mt-5 inset-x-0 bottom-0  h3 text-white">AI for Kids</h2>
	</div>
  </div>
  </Link>


<Link href="#">
  <div className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transform-hidden h-[300px]">
	<img className="object-cover w-[540px] h-[300px] brightness-50 transform transition duration-300 hover:scale-110" src="publicspeaking.png" alt="Flower and sky"/>

	<div className="absolute top-0 left-0 px-6 py-4">
	  <h2 className="mt-5 inset-x-0 bottom-0  h3 text-white">AI Public Speaking </h2>
	</div>
  </div>
  </Link>

<Link href="#">
  <div className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transform-hidden h-[300px]">
	<img className="object-cover w-[540px] h-[300px] brightness-50 transform transition duration-300 hover:scale-110" src="math.png" alt="Cross-sector"/>

	<div className="absolute top-0 left-0 px-6 py-4">
	  <h2 className="mt-5 inset-x-0 bottom-0  h3 text-white">Vedic Math</h2>
	</div>
  </div>
  </Link>

  

  

  

</div>
            
    
  </div>
  </section>
    )

    }   