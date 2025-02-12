import React from 'react'
import { Handshake ,UsersRound } from 'lucide-react';


const Sidebar = ({isOpen}) => {

    const navigationItems = [
       {icon : Handshake , label : "Connections"},
       {icon : UsersRound ,label: "Groups"} 
    ]

  return (
    <div>
        <nav className='mt-5'>
            {navigationItems.map((item , index) => (
                <div key={index} className='m-1'>
                    <button className='font-bold text-xl flex justify-center hover:bg-gray-100 rounded-lg m-2 p-2' >
                        <item.icon  className='mt-1 mx-2'/>
                        {isOpen && <span className=''>
                            {item.label}
                        </span>}
                    </button>
                </div>
            ))}
        </nav>
    </div>
  )
}

export default Sidebar