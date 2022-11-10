import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import DonateContext from '../Context/DonateContext';

const Hero = () => {

    const [ amount, setAmount ] = useState(""); 
    const donateContext = useContext(DonateContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setAmount(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        donateContext.setDonateAmount(amount)
        navigate('/donation');
    }
    return ( 
        <div className="min-h-full w-100 mt-20" >
            <div className="flex justify-center text-center flex-col w-full">
                <div className="h-32 flex justify-center items-center">
                    <h1 className="text-6xl font-bold text-orangeMain h-auto leading-tight" data-aos="zoom-in-up" data-aos-duration="1500">Help The Children</h1>
                </div>
                <div className="min-h-24 h-auto flex justify-center items-center w-2/3 m-auto" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
                    <h3 className="text-xl text-orangeLight text-center">
                        We do whatever it takes to make sure children don't just survive but thrive. Helpers believe that every child should be able to make their mark on their world and help build a better future.
                    </h3>
                </div>
                <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-duration="1500" data-aos-delay="900">
                    <div className="w-full h-28 right-0 flex justify-center items-center m-auto flex-row space-x-4 flex-wrap">
                        <input required type="number" min="1" onChange={handleChange} placeholder="$ Enter amount" className="w-64 h-10 outline-orangeMain px-5 border-solid rounded-2xl border-2 border-orangeMain text-orangeMain placeholder-orangeLight"/>
                        <button type="submit" className="w-40 h-10 rounded-2xl border-solid border-2 text-white bg-orangeMain border-orangeMain hover:text-orangeMain hover:bg-white text-lg font-medium  duration-300">Donate Now</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Hero;