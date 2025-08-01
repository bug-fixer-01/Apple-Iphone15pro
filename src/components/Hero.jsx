import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { heroVideo, smallHeroVideo } from '../utils'
import { useEffect, useState } from 'react'

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    const animationTime = window.innerWidth > 760 ? 1.5 : 3
    

    const handleVideoSrcSet = () =>{
        if(window.innerWidth < 760){
            setVideoSrc(smallHeroVideo)
        }
        else{
            setVideoSrc(heroVideo)
        }
    }


    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);
        return () => {
            window.removeEventListener('resize', handleVideoSrcSet);
        }
    },[])

    useGSAP(() => {
        gsap.to('#hero',{opacity : 1 , delay:animationTime, duration: 1,})
        gsap.to('#cta',{opacity : 1 ,y:-50, delay:animationTime, duration: 1, })

    },[])
  return (
    <section className='w-full nav-height realtive'>
        <div className='h-5/6 w-full flex-center flex-col'>
            <p id="hero" className='hero-title'>
                iphone 15 pro
            </p>
            <div className='md:w-10/12 w-9/12'>
                <video className='pointer-events-none' autoPlay muted  key={videoSrc}>
                    <source src={videoSrc} type="video/mp4"/>
                </video>
            </div>
        </div>
        <div id = 'cta' className='flex flex-col items-center opacity-0 translate-y-20'>
            <a href="#highlights" className='btn'>Buy</a>
            <p className='font-normal text-xl'>From $199/month</p>
        </div>
    </section>
  )
}

export default Hero