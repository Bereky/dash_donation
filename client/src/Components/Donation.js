import { useContext, useEffect } from 'react';

import DonateContext from '../Context/DonateContext';
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';

const Donation = () => {

    const donateContext = useContext(DonateContext);
    const navigate = useNavigate()

    useEffect(() => {

        const data = {
            amount: donateContext.donateAmount,
        }

        if(!data.amount){
            navigate('/error')
            return
        }

        fetch("/api/create-payment-session", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(data)
        })
        .then( async (res) => {
            const { checkout_url} = await res.json();
            window.location.href = checkout_url
        })
        .catch((e) => console.log(e))

    }, [])

    return (
        <div className="min-h-96 h-auto mt-20 mb-5 flex justify-center items-center flex-col space-y-3 flex-wrap ">
            <div className=" h-56 flex items-center flex-col space-y-4">
                <h1 className='text-5xl font-bold text-orangeMain'>You are donating</h1>
                <h1 className='text-4xl font-extrabold text-orangeMain'>${donateContext.donateAmount}</h1>
            </div>
            <div className="flex justify-center items-center flex-col m-0">
                <ReactLoading type={'spinningBubbles'} color={"#FFAC8E"} height={100} width={80}/>
                <div className='h-16'>
                    <h3 className='text-orangeLight text-xl'>Redirecting</h3>
                </div>
            </div>
        </div>
     );
}
 
export default Donation;