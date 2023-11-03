import React from 'react';
import './Notifications.css'; 
import icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils.js';

export default function Notifications() {
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
