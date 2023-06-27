import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <div className="App">
      <TwitterFollowCard isFollowing userName="fgmo_8a">
        Frank Montalvo Ochoa
      </TwitterFollowCard>
      <TwitterFollowCard userName="midudev">
        Miguel Ángel Durán
      </TwitterFollowCard>
    </div>
  );
}
