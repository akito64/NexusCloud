document.addEventListener("DOMContentLoaded", function () {
    document.body.innerHTML = `
        <div style="text-align: center; margin-top: 50px;">
            <h1>Welcome to NexusCloud</h1>
            <div id="calendar"></div>
            <p>This is a test deployment of our Amplify project.</p>
            <button id="clickMe">Click Me</button>
        </div>
    `;
  
    document.getElementById("clickMe").addEventListener("click", function () {
        alert("Hello!");
    });
  
    // カレンダー機能を作成する（必要ならカレンダーライブラリを読み込む）
  });
  