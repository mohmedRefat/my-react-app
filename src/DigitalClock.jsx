import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, seTime] = useState(new Date());

  useEffect(() => {
    const IntervalTme = setInterval(() => {
      seTime(new Date());
    }, 1000);

    return () => clearInterval(IntervalTme);
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const meridem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${hours.toString().padStart(2, "0")}:${min
      .toString()
      .padStart(2, "0")}:${sec.toString().padStart(2, "0")} ${meridem}`;
  }

  return (
    <div className="clock-container">
      <span className="clock-text">{formatTime()}</span>
    </div>
  );
}

export default DigitalClock;
