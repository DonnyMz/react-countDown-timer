import React, { useEffect, useRef, useState } from "react";
import "./timer.css";

const Timer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const countDown = () => {
    const countDownDate = new Date("december 30, 2022 11:00:00");
    // const countDownDate = new Date("november 01, 2022 18:51:00");
    const now = new Date().getTime();
    const length = countDownDate - now;

    interval = setInterval(() => {
      const days = Math.floor(length / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (length % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((length % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((length % (1000 * 60)) / 1000);

      if (length < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    countDown();
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      {(timerDays || timerHours || timerMinutes || timerSeconds) <= 0 ? (
        <>
          <div className="welcome ">
            <h1>welcome to the Orlando Car Show</h1>;
          </div>
        </>
      ) : (
        <>
          <h2 className="title-3">The Event will begin in</h2>
          <time className="timer">
            <h2 className="timer-heading">
              &nbsp;
              {timerDays} <span className="timer-text">Days</span>
            </h2>
            <h2 className="timer-heading">
              {timerHours < 10 ? `0${timerHours}` : timerHours}
              <span className="timer-text">&nbsp;Hours</span>
            </h2>
            <h2 className="timer-heading">
              {timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes}
              <span className="timer-text">&nbsp;Mins</span>
            </h2>
            <h2 className="timer-heading ">
              {timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
              <span className="timer-text">&nbsp;Secs</span>
            </h2>
          </time>
        </>
      )}
    </>
  );
};

export default Timer;
