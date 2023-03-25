import * as React from "react";
import "./style.css";

export default function App() {
  const PomodoroTimer = () => {
    const timer: React.MutableRefObject<NodeJS.Timer | undefined> =
      React.useRef(undefined);

    const [running, setRunning] = React.useState(false);
    const [time, setTime] = React.useState(1500);
    const [workmode, setWorkmode] = React.useState(true);

    const onClick = () => {
      return running ? setRunning(false) : setRunning(true);
    };

    const toggleWorkmode = () => {
      setWorkmode(workmode ? false : true);
      setTime(workmode ? 1500 : 300);
    };

    React.useEffect(() => {
      if (running) {
        timer.current = setInterval(() => {
          time !== 0 ? setTime(time - 1) : toggleWorkmode();
        }, 1000);
      }

      return () => {
        clearInterval(timer.current);
      };
    }, [time, setTime, running]);

    const timeLabel = () => {
      const minutes = Math.floor(time / 60).toLocaleString(undefined, {
        minimumIntegerDigits: 2,
      });
      const seconds = (time - Math.floor(time / 60) * 60).toLocaleString(
        undefined,
        { minimumIntegerDigits: 2 }
      );
      return `${minutes.toString().padStart(2, "0")}:${seconds}`;
    };

    return (
      <>
        <div className="stack">
          <div className="wrapper">
            <div className="content">
              <div className="time">{timeLabel()}</div>

              <button onClick={onClick}>{running ? "STOP" : "START"}</button>

              <button
                onClick={() => {
                  setTime(1500);
                }}
              >
                {"RESET"}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="App">
      <a href="https://github.com/js-geo">
        <div className="image">
          <img
            alt="A picture of a tomato in comic-style"
            className="tomato"
            src="https://freesvg.org/img/1420314514.png"
          />
        </div>
      </a>
      <PomodoroTimer />
    </div>
  );
}
