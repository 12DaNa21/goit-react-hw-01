import React from 'react';
import styles from './Profile.module.css'; 

export default function Profile ({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profile}> 
      <div>
        <img
          src={image}
          alt={name}
        />
        <p className={styles.name}>{name}</p> 
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
  
      <ul>
        <li>
          <span>Followers</span>
          <span className={styles.opts}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={styles.opts}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={styles.opts}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

