
import Image from 'next/image'
import styles from './page.module.css'
import IntroSection from '@/src/sections/Intro'
import AboutMeSection from '@/src/sections/aboutme'
import Breaker from '@/src/components/breaker'

export default function Home() {
  return (
    <main>
        <IntroSection/>
    </main>
  )
}
