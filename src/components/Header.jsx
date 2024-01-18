import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import img1 from '../imgs/Ellipse1.png'
import cardImg1 from '../imgs/worksCard1.png'
import cardImg2 from '../imgs/worksCard2.png'
import cardImg3 from '../imgs/worksCard3.png'
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";


export const Header = () => {
  return (
    <Fragment>
        <header className='container'>
        <nav>
            <div className="navbar flex gap-x-10 justify-end mt-5">
                    <NavLink to='auth'>Work</NavLink>
                    <NavLink to='/'>Blog</NavLink>
                    <NavLink to='/'>Contact</NavLink>
            </div>
        </nav>
        <div className="hero flex justify-between mt-35">
            <div className="hero-text-side">
            <h1 className='hero-title text-5xl text-neutral-21243D'>Hi, I am John,
                Creative Technologist</h1>
                <p className='hero-text my-12 mt-8 text-lg text-neutral-21243D'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat 
                duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <button className='btn w-15 bg-[#FF6464]'>Download Resume</button>
            </div>
            <div className="hero-imgSide">
                <img src={img1} alt="hero" />
            </div>
        </div>
    </header>
    <main>
        <section className='post h-100 bg-[#EDF7FA] w-full  mt-10'>
            <div className="container">
                <div className="post-card-wraper flex justify-between gap-5">
                    <div className="post-card max-w-400 bg-[#fff] pt-5 pb-5">
                        <p>Recent posts</p>
                      <div className="post-card-inner">
                      <h3 className='post-card-title'>Making a design system from scratch</h3>
                      <div className="date-card flex gap-x-10 mb-4 mt-4">
                        <p className='month'>12 Feb 2020</p>
                        |
                        <p className='month'>Design, Pattern</p>
                      </div>
                      <p className='post-card-text'>
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
                      consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                      </p>
                      </div>
                    </div>
                    <div className="post-card max-w-400 bg-[#fff] pt-5 pb-5">
                        <p className='ml-150'>View all</p>
                      <div className="post-card-inner">
                      <h3 className='post-card-title'>Making a design system from scratch</h3>
                      <div className="date-card flex gap-x-10 mb-4 mt-4">
                        <p className='month'>12 Feb 2020</p>
                        |
                        <p className='month'>Design, Pattern</p>
                      </div>
                      <p className='post-card-text'>
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
                      consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                      </p>
                      </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='container'>
        <h3>Featured works</h3>
        <div className="works flex flex-col gap-4">
            <div className="work-card flex gap-6">
                <img src={cardImg3} alt="" />
                <div className="work-card_body">
                <h4 className='works-title text-4xl'> Designing Dashboards</h4>
                <div className='years flex gap-x-5 mt-4 mb-4'>
                    <div className="num bg-[#142850] rounded-lg pl-2 pr-2">
                      <p className='text-[#fff] font-extrabold'>2020</p>
                    </div>
                    <p className='text-2xl text-[#8695A4]'>Dashboard</p>
                </div>
                <p className='text-base'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
            <div className='w-full h-1 bg-[#E0E0E0]'></div>

            <div className="work-card flex gap-6">
                <img src={cardImg2} alt="" />
                <div className="work-card_body">
                <h4 className='works-title text-4xl'> Vibrant Portraits of 2020</h4>
                <div className='years flex gap-x-5 mt-4 mb-4'>
                    <div className="num bg-[#142850] rounded-lg pl-2 pr-2">
                      <p className='text-[#fff] font-extrabold'>2018</p>
                    </div>
                    <p className='text-2xl text-[#8695A4]'>Illustration</p>
                </div>
                <p className='text-base'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
            <div className='w-full h-1 bg-[#E0E0E0]'></div>

            <div className="work-card flex gap-6">
                <img src={cardImg1} alt="" />
                <div className="work-card_body">
                <h4 className='works-title text-4xl'> 36 Days of Malayalam type</h4>
                <div className='years flex gap-x-5 mt-4 mb-4'>
                    <div className="num bg-[#142850] rounded-lg pl-2 pr-2">
                      <p className='text-[#fff] font-extrabold'>2018</p>
                    </div>
                    <p className='text-2xl text-[#8695A4]'>Typography</p>
                </div>
                <p className='text-base'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
            <div className='w-full h-1 bg-[#E0E0E0]'></div>
        </div>
    </section>
    </main>
    <footer>
        <div className="container">
            <div className="footer-wraper w-full justify-center gap-3 ">
            {/* <div className="footer-icon-wraper flex w-full justify-center gap-3">
                <FaFacebookSquare className='footer-ocon text-4xl'/>
                <FaInstagram  className='footer-ocon text-4xl'/>
                <FaTwitter  className='footer-ocon text-4xl'/>
                <FaLinkedin  className='footer-ocon text-4xl'/>
            </div> */}
            <h3 className='footer-title mt-5 text-center w-full'>Copyright ©2020 All rights reserved </h3>
            </div>
        </div>
    </footer>
    </Fragment>
  )
}
