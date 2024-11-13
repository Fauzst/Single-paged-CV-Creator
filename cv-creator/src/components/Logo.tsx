// Assets
import logo from '../assets/logo/logo.png'

export default function Logo(){
    
    return(
        <>
             <div className= "flex flex-row items-center w-[50%]">
                <img src={logo} alt="Hero Image" className='w-10 h-10'  />
                <h1 className='text-4xl font-extralight'><span className='font-extrabold'>CV</span>Creates</h1>
             </div>
        </>
    )
}
