import{useEffect} from 'react'

//components

import NavBar from "./navbar";
import Banner from "./banner";

import {Box, styled} from '@mui/material';
import { getProducts } from '../../../redux/actions/productActions';
import { useDispatch, useSelector} from 'react-redux';

const Component=styled(Box)`
    padding: 10px 10px;
    background: #F2f2f2;
`

const Home=()=>{

    const {getProducts}= useSelector(state=>state.getProducts)
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch])
     
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