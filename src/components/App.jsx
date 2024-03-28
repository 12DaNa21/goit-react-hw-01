
import Profile from './Profile';
import transactions from "../transactions.json";
import TransactionHistory from './TransactionHistory';
import userData from "../userData.json";
import FriendList from "./FriendList";
import friends from "../friends.json";

export default function App () {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

