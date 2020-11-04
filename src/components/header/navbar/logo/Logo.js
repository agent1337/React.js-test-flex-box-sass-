import React from 'react';
import { LogoIcon } from '../../../../icons/LogoIcon';
import { LogoTitleIcon } from '../../../../icons/LogoTitleIcon';
import "./Logo.scss"

export const Logo = ({isOpen}) => {
    
    return (
        <div className={"logo"}>
            <div className="logo-icon">
                <LogoIcon/>
            </div>
            <div className={"logo-title"}>
                <p className={"logo-title--text" + (isOpen ? " open" : '')}>
                    <LogoTitleIcon/>
                </p>
            </div>
        </div>
    )
}