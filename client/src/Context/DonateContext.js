import { createContext } from 'react'

const DonateContext = createContext({
    donateAmount: '',
    setDonateAmount: () => {}
});

export default DonateContext