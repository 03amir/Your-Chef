import React from 'react';
import Veg from '../component/Veg'
import Popular from '../component/Popular'
import {motion } from 'framer-motion'

function Home() {
    return (
        <motion.div
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:1}}
        transition={{duration:0.5}}
        >
            <Veg/>
            <Popular/>
            
            
        </motion.div>
    );
}

export default Home;