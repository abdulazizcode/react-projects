import React, {useState,useEffect} from "react";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';



const Slider = () => {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = React.useState(0);

    
    return (
        <div className="slider">
           <h1>Slider</h1>
        </div>
    )
}


export default Slider;