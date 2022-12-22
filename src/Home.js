import React from 'react'
import {FaAngleDown} from 'react-icons/fa';
function Home() {
  return (
    <section className='home'>
        <div className='home-center'>
            <img src="https://img.freepik.com/free-photo/mirrors-landscape-color-year-2023_23-2149991013.jpg?w=740&t=st=1671614449~exp=1671615049~hmac=d34d209f46519d22b9488aae184c5065285ba72e5847abdf5c45558bb4055327" className='home-img' alt="" />
            <div className='nu-info'>
                <div className="nu-home-heading">
                    <p>Simplified living Transforming lives</p>
                </div>
                <p className='nu-crossline'>--------------- x x x ---------------</p>
                <div className="nu-desc">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, velit atque? Error asperiores fuga, ullam nulla harum minus eos nemo.
                    </p>
                </div>
                <span className="nu-readmore">
                    <a href="#"><FaAngleDown /></a>
                </span>
            </div>
        </div>
    </section>
  )
}

export default Home