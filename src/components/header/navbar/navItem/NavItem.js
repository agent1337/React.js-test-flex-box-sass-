import React from 'react';
import "./NavItem.scss"
import { NavSubItem } from './navSubItem/NavSubItem';

export const NavItem = ({isOpen, item}) => {
    
    return (
        <div className={"navItem" + (isOpen ? " open" : '')}>
            <div className="navItem-head">
                <div className="navItem-icon">
                    {item.icon}
                </div>
                <div className={"navItem-title"}>
                    <p className={"navItem-title--text" + (isOpen ? " open" : '')}>
                        {item.title}
                    </p>
                    {item.count && 
                        <div className={'navItem-count'  + (isOpen ? " open" : '')}>{item.count}</div>
                    }
                </div>
            </div>
            <div className="navItem-body">
                {item.subItems && item.subItems.map((subItem, index) => (
                    <NavSubItem isOpen={isOpen} subItem={subItem} key={index}/>
                ))}
            </div>
        </div>
    )
}