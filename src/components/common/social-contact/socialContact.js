import React, { Profiler } from 'react';
import { SocialData } from '../../data/social';
import './socialContact.css';

function SocialContact() {
    const  data=SocialData;
    data.sort((a,b)=>a.id-b.id);
    return (
        <div className="socialContact">
            {
                data.map((profile)=>{
                    return (
                        <a style={{display: "table-cell"}} href={profile.link} key={profile.id.toString()} target="_blank">
                            <div className="social-icon-div">
                                <img src={profile.icon} alt={profile.plateform} className="social-icon"></img>

                            </div>
                        </a>

                    );
                })
            }
        </div>
    )
}

export default SocialContact
