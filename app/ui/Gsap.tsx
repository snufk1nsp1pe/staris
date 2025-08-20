// fun but doesnt work as expected
'use client'
import gsap from 'gsap'
import { useEffect } from 'react'

export default function Gsap() {
  useEffect(() => {
  gsap.to('.box', { rotation: 360, duration: 2, ease: 'power1.out' })
  }, [])
  return <div className='box w-50 bg-green-400'>hi</div>
}
