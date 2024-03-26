
import Profile from './Profile'; // Припустимо, що компонент Profile знаходиться в тій же папці

import userData from "../userData.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};

export default App;