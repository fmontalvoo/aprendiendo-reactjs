export function TwitterFollowCard({ children, userName, isFollowing }) {
  const text = isFollowing ? "Siguiendo" : "Seguir";
  

  return (
    <article>
      <header>
        <img src={`https://unavatar.io/twitter/${userName}`} alt={userName} />

        <div>
          <strong>{children}</strong>
          <span>@{userName}</span>
        </div>
      </header>

      <aside>
        <button>{text}</button>
      </aside>
    </article>
  );
}
