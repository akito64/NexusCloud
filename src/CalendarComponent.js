import React, { useState, useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Event } from "./models"; // `amplify push` で生成されたモデルをインポート

const CalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [eventText, setEventText] = useState("");

  useEffect(() => {
    fetchEvents();
  }, []);

  // 🔹 AWS から予定データを取得
  const fetchEvents = async () => {
    try {
        const allEvents = await DataStore.query(Event);
        const eventMap = {};
        allEvents.forEach(event => {
            eventMap[event.date] = event.title;
        });
        setEvents(eventMap); // ✅ 予定データを `events` に反映
    } catch (error) {
        console.error("予定の取得中にエラーが発生しました:", error);
    }
};


  // 🔹 月の変更機能
  const changeMonth = (offset) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
  };

  // 🔹 カレンダーの日付を作成
  const generateDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    let tempDays = [];
    for (let i = 0; i < firstDay; i++) {
      tempDays.push(null);
    }
    for (let i = 1; i <= lastDate; i++) {
      tempDays.push(i);
    }

    return tempDays;
  };

  // 🔹 日付クリック時にポップアップを開く
  const openPopup = (day) => {
    if (!day) return;
    
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    
    setSelectedDay(day);
    setEventText(events[formattedDate] || ""); // 予定があればセット
    setShowPopup(true);
  };

  // 🔹 予定を保存
  const saveEvent = async () => {
    if (!selectedDay) return;

    // `AWSDateTime` 形式に変換 (YYYY-MM-DDT00:00:00.000Z)
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${selectedDay.toString().padStart(2, '0')}T00:00:00.000Z`;

    try {
        const newEvent = new Event({
            title: eventText,
            description: eventText || "No description",
            date: formattedDate,
        });

        await DataStore.save(newEvent);
        console.log("イベントが保存されました！");

        // ✅ 予定を取得し直して、カレンダーに反映する
        fetchEvents();

        setShowPopup(false);
    } catch (error) {
        console.error("保存時にエラーが発生しました:", error);
    }
};




  return (
    <div>
      <h2>予定を AWS に保存するカレンダー</h2>

      {/* 🔹 月変更ボタン */}
      <div className="calendar-controls">
        <button onClick={() => changeMonth(-1)}>⬅ 前の月</button>
        <span>{currentDate.getFullYear()}年 {currentDate.getMonth() + 1}月</span>
        <button onClick={() => changeMonth(1)}>次の月 ➡</button>
      </div>

      {/* 🔹 カレンダー表示 */}
      <table className="calendar-table">
        <thead>
          <tr>
            <th>日</th>
            <th>月</th>
            <th>火</th>
            <th>水</th>
            <th>木</th>
            <th>金</th>
            <th>土</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: Math.ceil(generateDays().length / 7) }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {generateDays().slice(rowIndex * 7, rowIndex * 7 + 7).map((day, index) => (
                <td key={index} onClick={() => openPopup(day)} className="calendar-day">
                  {day && (
                    <div>
                      <span>{day}</span>
                      {/* 予定がある場合は表示 */}
                      {events[`${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`] && (
                        <div className="event">
                          {events[`${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`]}
                        </div>
                      )}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* 🔹 予定追加ポップアップ */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>{currentDate.getFullYear()}年 {currentDate.getMonth() + 1}月 {selectedDay}日</h3>
            <textarea
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
              placeholder="予定を入力してください..."
            />
            <button onClick={saveEvent}>保存</button>
            <button onClick={() => setShowPopup(false)}>閉じる</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
