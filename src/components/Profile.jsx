
import styles from './Profile.module.css'; 

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}> 
      <div className={styles.card}>
        <img
          src={image}
          alt="User avatar"
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

export default Profile;