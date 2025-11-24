#!/usr/bin/env node

import runGame from '../src/runGame.js';
import {genOperation, genNum, calcNums} from "../src/help.js"

const genCalcQuestions = () => {
    let a = genNum();
    let b = genNum();
    let ops = genOperation();

    const question = `Question: ${a}${ops}${b}`;
    const correctAnswer = String(calcNums(a,b,ops));

    return [question, correctAnswer];
};
const description = 'What is the result of the expression?'
runGame(description, genCalcQuestions)