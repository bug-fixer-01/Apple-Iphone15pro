import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import VideoCarousel from './VideoCarousel'
import {playImg, rightImg, watchImg} from '../utils'


const Highlights = () => {
  useGSAP(()=>{
      gsap.to('#title', {opacity:1, y:0})
      gsap.to('.link', {opacity:1, y:0 , stagger:0.2 ,duration:1})
  },[])
  return (
    <section id='highlights' className='w-screen h-full overflow-hidden common-padding bg-zinc'>
        <div className='screen-max-width'>
            <div className='mb-12 w-full md:flex items-end justify-between'>
                <h1 id='title' className='section-heading'>Get the Highlights.</h1>
                <div className='flex flex-wrap items-end gap-5'>
                  <p className='link'>
                    watch the film
                    <img className='w-4 h-4 ml-2' src={watchImg} alt="watch" />
                  </p>
                  <p className='link'>
                    watch the event
                    <img className='ml-2' src={rightImg} alt="watch"/>
                  </p>  
                </div>
            </div>
            <VideoCarousel />
        </div>
    </section>
  )
}

export default Highlights