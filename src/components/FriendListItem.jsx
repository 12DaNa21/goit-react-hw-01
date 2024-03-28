import styles from "./FriendList.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.FriendListItem}>
      <img src={avatar} alt={name} />
      <p className={styles.nameText}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}