import React from "react";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import amplifyConfig from "./aws-exports";


Amplify.configure(amplifyConfig);

function App({ signOut, user }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to NexusCloud</h1>
      <p>User: {user.username}</p>

      {/* カレンダーエリア */}
      <div id="calendar"></div>

      <p>This is a test deployment of our Amplify project.</p>

      {/* ボタンの処理 */}
      <button onClick={() => alert("Hello!")}>Click Me</button>
      
      {/* ログアウトボタン */}
      <button onClick={signOut} style={{ marginTop: "20px" }}>Sign Out</button>
    </div>
  );
}

export default withAuthenticator(App);
