

//components

import NavBar from "./navbar";
import Banner from "./banner";

import {Box, styled} from '@mui/material';

const Component=styled(Box)`
    padding: 10px 10px;
    background: #F2f2f2;
`

const Home=()=>{
    return (
        <>
            <NavBar/>
            <Component>
                <Banner/>
            </Component>
            
        </>

    )
}

export default Home;