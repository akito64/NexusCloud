import React from "react";
import CalendarComponent from "./CalendarComponent"; // ここが正しく読み込まれているか確認

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to NexusCloud</h1>
      <CalendarComponent />
      <p>This is a test deployment of our Amplify project.</p>
      <button onClick={() => alert("Hello!")}>Click Me</button>
    </div>
  );
}

export default App;
