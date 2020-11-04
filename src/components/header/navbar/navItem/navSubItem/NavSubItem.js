import React from 'react';
import { NavSubItemIcon } from '../../../../../icons/NavSubItemIcon';
import "./NavSubItem.scss"
import { ActiveSubItem } from '../../../../../icons/ActiveSubItem';

export const NavSubItem = ({isOpen, subItem}) => {
    
    return (
        <div className={"navSubItem" + (isOpen ? " open" : '') + (subItem.active ? " active" : '')}>
            {subItem.active ?
            <div className={"navSubItem-icon--active" + (!isOpen ? " open" : '')}>
                <ActiveSubItem/>
            </div> 
            : 
            <div className={"navSubItem-icon"}>
                <NavSubItemIcon/>
            </div>
            }
                
                <div className={"navSubItem-title"  + (subItem.active ? " active" : '')}>
                    <div className={"navSubItem-title--text" + (isOpen ? " open" : '')}>
                        {subItem.title}
                    </div>
                    {subItem.count && 
                            <div className={'navSubItem-count'  + (isOpen ? " open" : '')}>&#160;(<span>{subItem.count}</span>)</div>
                        }
                </div>
            
        </div>
    )
}