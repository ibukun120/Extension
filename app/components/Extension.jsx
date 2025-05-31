import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react'
import data from '@/app/components/data.json'
import { Switch } from "@/components/ui/switch"
import ToggleButton from './SwitchBtn';
import ToggleRed from './SwitchRed';




const Extension = () => {
  return (
    <div className='grid md:grid-cols-3 gap-3'>
        {
          data.map((datas)=>{
            return  <div className='bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border dark:border-slate-500' key={datas.id}>
        <div className="flex gap-6">
          <Image className=''
          alt={datas.name}
          src={datas.logo}
          width={50}
          height={50}/>
          <div>
            <h1 className='font-bold dark:text-white'>{datas.name}</h1>
            <p className='text-sm text-gray-500 dark:text-gray-200'>{datas.description}</p>
          </div>
        </div>

        <div className='flex mt-10 items-center justify-between'>
          <button className='py-1 px-3 rounded-full border border-black text-sm dark:border-white'>Remove</button>
          <p> {datas.isActive === true ? <ToggleRed/> : <ToggleButton/>} </p>
        </div>
      </div>

          })
        }

      </div>
  )
}

export default Extension
