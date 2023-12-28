import React from "react";
import "./container.css";
import { useState } from "react";
import { useEffect } from "react";

function Container() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()));
  }, 1000);

  const formattedHours = time.getHours();
  const formattedMinutes = time.getMinutes();
  const formattedSeconds = time.getSeconds();
  return (
    <>
      <div class="hero">
        <div class="container">
          <div class="clock hr">
            {(time.getHours < 10 ? "0" : " ") + formattedHours}
          </div>
          <div class="clock min">
            {(formattedMinutes < 10 ? "0" : " ") + formattedMinutes}
          </div>
          <div class="clock sec">
            {(formattedSeconds < 10 ? "0" : "") + formattedSeconds}
          </div>
        </div>
      </div>
    </>
  );
}
export default Container;
