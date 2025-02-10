import React, { useState, useEffect } from "react";

const CalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // 現在の月を管理
  const [days, setDays] = useState([]);
  const [events, setEvents] = useState({}); // 予定を保存

  useEffect(() => {
    generateDays();
  }, [currentDate]); // `currentDate` が変わるたびにカレンダーを更新

  const generateDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    let tempDays = [];
    for (let i = 0; i < firstDay; i++) {
      tempDays.push(null); // 空白セル
    }
    for (let i = 1; i <= lastDate; i++) {
      tempDays.push(i);
    }

    setDays(tempDays);
  };

  // 月を変更する関数
  const changeMonth = (offset) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
  };

  // 予定を追加・削除する関数
  const handleDayClick = (day) => {
    if (!day) return;
    const event = prompt("予定を入力してください:");
    if (event) {
      setEvents({ ...events, [`${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`]: event });
    } else {
      const newEvents = { ...events };
      delete newEvents[`${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`];
      setEvents(newEvents);
    }
  };

  return (
    <div>
      <h2>予定を追加できるカレンダー</h2>

      {/* 月変更ボタン */}
      <div className="calendar-controls">
        <button onClick={() => changeMonth(-1)}>⬅ 前の月</button>
        <span>{currentDate.getFullYear()}年 {currentDate.getMonth() + 1}月</span>
        <button onClick={() => changeMonth(1)}>次の月 ➡</button>
      </div>

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
          {Array.from({ length: Math.ceil(days.length / 7) }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {days.slice(rowIndex * 7, rowIndex * 7 + 7).map((day, index) => (
                <td key={index} onClick={() => handleDayClick(day)} className="calendar-day">
                  {day}
                  <div className="event">{events[`${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`]}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarComponent;
