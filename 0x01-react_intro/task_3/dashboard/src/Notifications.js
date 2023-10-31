import React from 'react';
import './Notification.css'; 
import icon from './close-icon.png';
import {getLatestNotification} from './utils.js';

export default function Notification() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button 
	  aria-label="Close";
	  Style="display: flex; justify-content: flex-end"
	  onClick={console.log("Close button has been clicked")}
	  img src=url{icon} alt="Close icon">
      </button>
      <ul>
	<li data="default">New course available</li>
	<li data="urgent">New resume available</li>
	<li data="urgent"
	  dangerouslySetInnerHTML={{ __html: getLatestNotification }}
	</li>
      </ul>
	
    </div>
  );
}
