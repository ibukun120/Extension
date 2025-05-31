'use client'
import { usePathname } from 'next/navigation';
import React from 'react'
import Extension from '@/app/components/Extension';


const Mentor = () => {
  const pathname = usePathname();
  
  return(
    <div className='bg-blue-50 min:h-screen px-4 lg:px-32 py-6 dark:bg-[#000035]'>
        <Extension/>
    </div>
  )
}
 
  export default Mentor;
