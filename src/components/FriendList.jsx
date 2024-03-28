import FriendListItem from "./FriendListItem";
import styles from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <div > 
      <ul className={styles.FriendList}>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}