import React from 'react'
import CardDisplay from '../../Components/CardDisplay'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='heroSection'>
            <div className='heading'>
                An effort to eradicate misinformation.
                <br />
                For <span className="colorText">peace</span>,
                <span className="colorText"> justice </span>and <span className="colorText"> security</span>.
                <br />
                Let's come together and make a change
            </div>

            <div className="text1">
                Get Involved Today!
            </div>


            <CardDisplay />



            <div className="text2">
                <span className='mission'>Our Mission</span>
                <br />
                Sustainable Development Goal 16:
                <br />
                Peace and Justice Strong Institutions
            </div>


            <div className="container">

                <div className='heroBox1'>
                    <img className='heroImage' src="https://images.pexels.com/photos/1438461/pexels-photo-1438461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Photo by Yogendra Singh from Pexels" />
                </div>

                <div className="heroBox2">
                    Misrepresentation by the media is one of the biggest cause of disparities between communities. Once the truth about the real scenario is hidden behind a cleverly articulated canvas, it becomes hard for people to differentiate the true from false.
                    Unfortunately, often times people end up choosing the wrong side and the please of the wrongly interpreted people go unheard.
                    <br /> <br />
                    <p>That is why we at RightFeed have decided to pull our efforts together to put forward a raw unseasoned version of the truth with an unbiased view. By making use of our interactive quizzes, we are trying to bridge the gap of miscommunicatioin.</p>
                    <br />
                    <p>So, even if you are someone whith only a superficial knowledge about the topics, do consider taking a quiz just to find out how much the media influence has affected the opinion and whther you really have an inkling of the truth or not. Your little effort to find out the truth could mean the world to someone else out there.</p>
                </div>
            </div>




        </div>
    )
}

export default HeroSection
