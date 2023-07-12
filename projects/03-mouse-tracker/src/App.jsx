import { useEffect, useState } from "react";
import "./App.css";

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("useEffect", enabled);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setCoords({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMouseMove);
    }

    return () => {
      console.log("cleanup");
      window.removeEventListener("pointermove", handleMouseMove);
    }

  }, [enabled]);

  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${coords.x}px, ${coords.y}px)`,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"}
      </button>
    </main>
  );
}

function App() {
  // const [mounted, setMounted] = useState(true);

  return (
    <main>
      {/*mounted &&*/ <FollowMouse />}
      {/*<button onClick={() => setMounted(!mounted)}>Toggle</button>*/}
    </main>
  );
}

export default App;
