import React, { Profiler } from 'react';
import { SocialData } from '../../data/social';
import './socialContact.css';

function SocialContact() {
    const  data=SocialData;
    return (
        <div className="socialContact">
            {
                data.map((profile)=>{
                    return (
                        <a href={profile.link} key={profile.id.toString()}>
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
