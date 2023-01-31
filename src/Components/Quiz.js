import React, { useState } from "react";
import "../css/Quiz.css";

function Quiz() {
    const questions = [
        {
            questionText: 'Which capital inspired the Burj Khalifa?',
            answerOptions: [
                { answerText: 'New York', isCorrect: true },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: false },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tweeter?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The Beats was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
                { answerText: '8', isCorrect: false },
                { answerText: '9', isCorrect: false },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (isCorrect) => {
        const nextQuestion = currentQuestion + 1;
        if (isCorrect === true)
            setScore(score + 1);
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        }
        else
            setShowScore(true);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    };

    return (
        <div className='quiz'>
            {showScore ? (
                <>
                    <div className='score-section'>You scored {score} out of {questions.length}</div>
                    <button onClick={() => resetQuiz()} className='reset-button'>Try again</button>
                </>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) =>
                            <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
export default Quiz;