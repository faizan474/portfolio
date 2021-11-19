import React from 'react'
import "./header.css"
import Mobile from './mobile';
import Web from './web';
import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
            <div className="logo">
                Mohd Faizan
            </div>
            <div className="menu">
                <div className="web-menu">
                       <Web />
                </div>
                <div className="mobile-menu">
                    <div onClick={()=>setIsOpen(!isOpen)}>
                    <i class="fi-rr-apps"></i>
                    </div>
                    {isOpen &&<Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>
    )
}

export default Header;
