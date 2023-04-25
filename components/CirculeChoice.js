import { CirculeChoiceContext } from "@/context/CirculeChoiceContext.js";
import { useContext } from "react";
import style from "../styles/CirculeChoice.module.css";

export const CirculeChoice = () => {
  const {
    setShowJokeTime,
    setShowQuizTime,
    setShowCompatibilityTest,
    setShowMemoryGame,
    showJokeTime,
    showQuizTime,
    showCompatibilityTest,
    showMemoryGame,
  } = useContext(CirculeChoiceContext);

  const handleShowJokeTime = () => {
    if (showQuizTime) {
      !setShowQuizTime(!showQuizTime);
    }
    if (showCompatibilityTest) {
      setShowCompatibilityTest(!showCompatibilityTest);
    }
    if (showMemoryGame) {
      setShowMemoryGame(!showMemoryGame);
    }
    setShowJokeTime(!showJokeTime);
  };

  const handleShowQuizTime = () => {
    if (showJokeTime) {
      setShowJokeTime(!showJokeTime);
    }
    if (showCompatibilityTest) {
      setShowCompatibilityTest(!showCompatibilityTest);
    }
    if (showMemoryGame) {
      setShowMemoryGame(!showMemoryGame);
    }
    setShowQuizTime(!showQuizTime);
  };

  const handleShowCompatibilityTest = () => {
    if (showJokeTime) {
      setShowJokeTime(!showJokeTime);
    }
    if (showQuizTime) {
      setShowQuizTime(!showQuizTime);
    }
    if (showMemoryGame) {
      setShowMemoryGame(!showMemoryGame);
    }
    setShowCompatibilityTest(!showCompatibilityTest);
  };

  const handleShowMemoryGame = () => {
    if (showJokeTime) {
      setShowJokeTime(!showJokeTime);
    }
    if (showQuizTime) {
      setShowQuizTime(!showQuizTime);
    }
    if (showCompatibilityTest) {
      setShowCompatibilityTest(!showCompatibilityTest);
    }
    setShowMemoryGame(!showMemoryGame);
  };

  return (
    <div className={style.mainContainer}>
      <div>
        <div className={style.squareContainer}>
          <div
            className={`${style.squareLeftTop} ${
              showJokeTime ? style.activeJokeTime : ""
            }`}
            onClick={() => handleShowJokeTime()}
          />
          <div
            className={`${style.squareRightTop} ${
              showQuizTime ? style.activeQuizTime : ""
            }`}
            onClick={() => handleShowQuizTime()}
          />
          <div
            className={`${style.squareRightBottom} ${
              showCompatibilityTest ? style.activeCompatibilityTest : ""
            }`}
            onClick={() => handleShowCompatibilityTest()}
          />
          <div
            className={`${style.squareLeftBottom} ${
              showMemoryGame ? style.activeMemoryGame : ""
            }`}
            onClick={() => handleShowMemoryGame()}
          />
          <div
            className={`${style.textJokeTime} ${
              showJokeTime ? style.activeTextJokeTime : ""
            }`}
          >
            Joke Time
          </div>
          <div
            className={`${style.textQuizTime} ${
              showQuizTime ? style.activeTextQuizTime : ""
            }`}
          >
            Quiz Time
          </div>
          <div
            className={`${style.textCompatibilityTest} ${
              showCompatibilityTest ? style.activeTextCompatibilityTest : ""
            }`}
          >
            Compatibility Test
          </div>
          <div
            className={`${style.textMemoryGame} ${
              showMemoryGame ? style.activeTextMemoryGame : ""
            }`}
          >
            Memory Game
          </div>
        </div>
      </div>
    </div>
  );
};
