import { useState } from "react";
import DonateContext from "./DonateContext";


const DonateProvider = ({children}) => {
    
    const [amount, setAmount ] = useState()

    const setDonationAmount = (amt) => {
        setAmount(amt);
    }

    const donateCtx = {
        donateAmount: amount,
        setDonateAmount: setDonationAmount
    }

    return ( 
        <DonateContext.Provider value={donateCtx}>
            {children}
        </DonateContext.Provider>
     );
}
 
export default DonateProvider;