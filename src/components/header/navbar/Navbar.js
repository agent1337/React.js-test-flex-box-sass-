import React from 'react';
import "./Navbar.scss"
import { useState } from 'react';
import { DashboardIcon } from '../../../icons/DashboardIcon';
import { Logo } from './logo/Logo';
import { LessonsIcon } from '../../../icons/LessonsIcon';
import { ScheduleIcon } from '../../../icons/ScheduleIcon';
import { AfterSchoolIcon } from '../../../icons/AfterSchoolIcon';
import { NavItem } from './navItem/NavItem';

export const Navbar = () => {

const [open, setOpen] = useState(true)

const handleOpen = () => {
    setOpen(!open)
}

const navItems = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon/>,
        subItems:[
            {
                title: 'Report card'
            },
            {
                title: 'Awards and achievements',
                active: true
            },
            {
                title: 'Teachers'
            },
            {
                title: 'Friends'
            },
        ]
    },
    {
        title: 'Lessons',
        icon: <LessonsIcon/>,
        count: 3,
        subItems:[
            {
                title: 'New',
                count: 1
            },
            {
                title: 'Late',
                count: 2
            },
            {
                title: 'History'
            },
        ]
    },
    {
        title: 'Schedule',
        icon: <ScheduleIcon/>,
    },
    {
        title: 'After School',
        icon: <AfterSchoolIcon/>,
        subItems:[
            {
                title: 'Games'
            },
            {
                title: 'Reading'
            },
            {
                title: 'Videos'
            },
        ]
    },
]
    
    return (
        <div 
        className={"navbar" + (open ? " open" : '')} 
        onClick={handleOpen}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        >
            <Logo isOpen={open}/>
            
            {navItems && navItems.map((item, index) => (
                <NavItem isOpen={open} item={item} key={index}/>
            ))}
        </div>
    )
}