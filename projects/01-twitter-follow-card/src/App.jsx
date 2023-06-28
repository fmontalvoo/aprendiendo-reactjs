import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const users = [
    {
      uuid: crypto.randomUUID(),
      name: "Frank Montalvo Ochoa",
      userName: "fgmo_8a",
      isFollowing: true,
    },
    {
      uuid: crypto.randomUUID(),
      name: "Miguel Ángel Durán",
      userName: "midudev",
      isFollowing: false,
    },
  ];

  return (
    <div className="App">
      {users.map(({ uuid, name, userName, isFollowing }) => (
        <TwitterFollowCard
          key={uuid}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </div>
  );
}
