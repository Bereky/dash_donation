
import { Link } from 'react-router-dom'

/* Icons */
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Header = () => {
    return ( 
        <header className="h-20 shadow-sm relative flex-row w-100">
            <div className="absolute h-20 flex justify-center items-center w-full shadow-md sm:justify-start" >
                <Link to="/">
                    <h2 className="text-3xl font-extrabold text-orangeMain cursor-pointer ml-5" >DashDonation</h2>
                </Link>
            </div>
                <div className="absolute w-48 h-20 right-0 sm:flex justify-center items-center flex-row space-x-4 hidden " >
                    <a href="https://www.linkedin.com/in/bereket-lemma/" rel='noreferrer' target="_blank">
                        <LinkedInIcon fontSize='large' style={{color: '#FF9671'}}/>
                    </a>
                    <a href="https://twitter.com/Berek_et" rel='noreferrer' target="_blank"> 
                        <TwitterIcon fontSize='large' style={{color: '#FF9671'}}/>
                    </a>
                    <a href="https://github.com/Bereky" rel='noreferrer' target="_blank">
                        <GitHubIcon fontSize='large' style={{color: '#FF9671'}}/>
                    </a>
                
                    {/* <button className="w-3/4 h-10 rounded-2xl border-solid border-2 text-white bg-orangeMain border-orangeMain hover:text-orangeMain hover:bg-white text-lg font-medium  duration-300 hidden sm:block" data-aos="zoom-in" data-aos-duration="1000">Donate</button> */}
                </div>
        </header>
     );
}
 
export default Header;