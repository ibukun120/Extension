'use client'
import React, { useState } from 'react'
// import data from '@/app/components/data.json'
import Image from 'next/image';
import ToggleButton from '@/app/components/SwitchBtn';

const NotActive = () => {
  const [datas, setDatas] = useState([
    {
        "logo": "./image/logo-devlens.svg",
        "name": "DevLens",
        "description": "Quickly inspect page layouts and visualize element boundaries.",
        "isActive": true,
        "id": 1
    },
    {
        "logo": "./image/logo-style-spy.svg",
        "name": "StyleSpy",
        "description": "Instantly analyze and copy CSS from any webpage element.",
        "isActive": true,
        "id": 2
    },
    {
        "logo": "./image/logo-speed-boost.svg",
        "name": "SpeedBoost",
        "description": "Optimizes browser resource usage to accelerate page loading.",
        "isActive": false,
        "id": 3
    },
    {
        "logo": "./image/logo-json-wizard.svg",
        "name": "JSONWizard",
        "description": "Formats, validates, and prettifies JSON responses in-browser.",
        "isActive": true,
        "id": 4
    },
    {
        "logo": "./image/logo-tab-master-pro.svg",
        "name": "TabMaster Pro",
        "description": "Organizes browser tabs into groups and sessions.",
        "isActive": true,
        "id": 5
    },
    {
        "logo": "./image/logo-viewport-buddy.svg",
        "name": "ViewportBuddy",
        "description": "Simulates various screen resolutions directly within the browser.",
        "isActive": false,
        "id": 6
    },
    {
        "logo": "./image/logo-markup-notes.svg",
        "name": "Markup Notes",
        "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
        "isActive": true,
        "id": 7
    },
    {
        "logo": "./image/logo-grid-guides.svg",
        "name": "GridGuides",
        "description": "Overlay customizable grids and alignment guides on any webpage.",
        "isActive": false,
        "id": 8
    },
    {
        "logo": "./image/logo-palette-picker.svg",
        "name": "Palette Picker",
        "description": "Instantly extracts color palettes from any webpage.",
        "isActive": true,
        "id": 9
    },
    {
        "logo": "./image/logo-link-checker.svg",
        "name": "LinkChecker",
        "description": "Scans and highlights broken links on any page.",
        "isActive": true,
        "id": 10
    },
    {
        "logo": "./image/logo-dom-snapshot.svg",
        "name": "DOM Snapshot",
        "description": "Capture and export DOM structures quickly.",
        "isActive": false,
        "id": 11
    },
    {
        "logo": "./image/logo-console-plus.svg",
        "name": "ConsolePlus",
        "description": "Enhanced developer console with advanced filtering and logging.",
        "isActive": true,
        "id": 12
    }
  ])


  function handleRemove(id){
   setDatas(datas.filter((data) => data.id !== id))
  }


  const notActive = datas.filter((datas)=> datas.isActive == false)
  return (
    <div className='grid md:grid-cols-3 gap-3 bg-blue-50 px-4 lg:px-32 py-6 dark:bg-[#000035]'>
      {
          notActive.map((datas)=>{
            return  <div className='bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border dark:border-slate-500' key={datas.id}>
        <div className="flex gap-6">
          <Image className=''
          alt={datas.name}
          src={datas.logo}
          width={50}
          height={50}/>
          <div>
            <h1 className='font-bold dark:text-white'>{datas.name}</h1>
            <p className='text-sm text-gray-400 dark:text-gray-200'>{datas.description}</p>
          </div>
        </div>

        <div className='flex mt-10 items-center justify-between'>
          <button className='py-1 px-3 rounded-full border border-black dark:border-white text-sm'
          onClick={()=> handleRemove(datas.id)}>Remove</button>
          <p><ToggleButton/></p>
        </div>
      </div>

          })
        }
    </div>
  )
}

export default NotActive;
