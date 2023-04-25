import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const CirculeChoiceContext = createContext();

export const CirculeChoiceProvider = ({ children }) => {
  const [jokeTime, setJokeTime] = useState([]);
  const [quizTime, setQuizTime] = useState([]);
  const [compatibilityTest, setCompatibilityTest] = useState([]);
  const [memoryGame, setMemoryGame] = useState([]);
  const [showJokeTime, setShowJokeTime] = useState(false);
  const [showQuizTime, setShowQuizTime] = useState(false);
  const [showCompatibilityTest, setShowCompatibilityTest] = useState(false);
  const [showMemoryGame, setShowMemoryGame] = useState(false);

  //JOKE TIME

  // useEffect(() => {
  //   axios
  //     .get("/api/jokeTime")
  //     .then((res) => res.data)
  //     .then((data) => {
  //       setJokeTime(data);
  //     });
  // }, []);

  // //QUIZ TIME
  // useEffect(() => {
  //   axios
  //     .get("/api/quizTime")
  //     .then((res) => res.data)
  //     .then((data) => {
  //       setQuizTime(data);
  //     });
  // }, []);

  // //COMPATIBILITY TEST
  // useEffect(() => {
  //   axios
  //     .get("/api/compatibilityTest")
  //     .then((res) => res.data)
  //     .then((data) => {
  //       setCompatibilityTest(data);
  //     });
  // }, []);

  // //MEMORY GAME

  // useEffect(() => {
  //   axios
  //     .get("/api/memoryGame")
  //     .then((res) => res.data)
  //     .then((data) => {
  //       setMemoryGame(data);
  //     });
  // }, []);

  return (
    <CirculeChoiceContext.Provider
      value={{
        jokeTime,
        setJokeTime,
        quizTime,
        setQuizTime,
        compatibilityTest,
        setCompatibilityTest,
        memoryGame,
        setMemoryGame,
        showJokeTime,
        setShowJokeTime,
        showQuizTime,
        setShowQuizTime,
        showCompatibilityTest,
        setShowCompatibilityTest,
        showMemoryGame,
        setShowMemoryGame,
      }}
    >
      {children}
    </CirculeChoiceContext.Provider>
  );
};
