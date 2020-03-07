import React from "react";

export default function MathProblem(props) {
  const [userAnswer, setUserAnswer] = React.useState("");
  const [correctAnswer, setCorrectAnswer] = React.useState(0);
  const [leftOperand, setLeftOperand] = React.useState(0);
  const [rightOperand, setRightOperand] = React.useState(0);
  const [answer, setAnswer] = React.useState("");

  React.useEffect(() => {
    generateProblem();
  }, []);

  const generateProblem = () => {
    const left = Math.floor(Math.random() * Math.floor(10)) + 1;
    const right = Math.floor(Math.random() * Math.floor(10)) + 1;

    setLeftOperand(left);
    setRightOperand(right);
    setCorrectAnswer(left + right);
  };

  const checkAnswer = () => {
    if (parseInt(userAnswer, 10) === correctAnswer) {
      setAnswer("Correct!");
    } else {
      setAnswer("Incorrect");
    }
    setUserAnswer("");
    generateProblem();
  };

  const handleOnChange = e => {
    setUserAnswer(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      checkAnswer();
    }
  };

  const handleOnClick = e => {
    checkAnswer();
  };

  return (
    <div>
      <p>
        {leftOperand} + {rightOperand} =
      </p>
      <input
        onChange={handleOnChange}
        value={userAnswer}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleOnClick}>Submit!</button>
      <p>{answer}</p>
    </div>
  );
}
