import React from 'react'
import ProfileImg from "../../Assets/vidyajpg.jpg";
import Jhon from "../../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
    return (
        <div className='work-section-wrapper' id='test'>
            <div className='work-section-top'>
                <p className='primary-subheading'>Testimonial</p>
                <h1 className='primary-heading'> What the Are Saying</h1>
                <p className='primary-text'>
                    chefs do all the pre work , like peading ,Chopping
                    & marinating ,
                </p>

            </div>
            <div className='testimonial-section-bottom'>
                <img src={ProfileImg} alt='' style={ProfileImage}  />
                <p className=''>
                    chefs do all the pre work , like peading ,Chopping
                    & marinating ,
                </p>
                <div className='testimonials-stars-container'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />

                </div>
                <h2> Vidya Dhar</h2>
            </div>
            <div className='testimonial-section-bottom'>
                <img src={Jhon} alt='' style={ProfileImage} />
                <p className=''>
                    chefs do all the pre work , like peading ,Chopping
                    & marinating ,
                </p>
                <div className='testimonials-stars-container'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />

                </div>
                <h2> Vidya Dhar</h2>
            </div>
            <div className='testimonial-section-bottom'>
                <img src={ProfileImg} alt='' style={ProfileImage}/>
                <p className=''>
                    chefs do all the pre work , like peading ,Chopping
                    & marinating ,
                </p>
                <div className='testimonials-stars-container'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />

                </div>
                <h2> Vidya Dhar</h2>
            </div>
        </div>
    )
}
const ProfileImage={
    border:".1rem solid black",
borderRadius:"50%",

}
export default Testimonials