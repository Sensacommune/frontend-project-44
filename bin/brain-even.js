#!/usr/bin/env node

import runGame from '../src/runGame.js';
import {isEven, genNum} from "../src/help.js"

const genQuestion = () => {
    const num = genNum();
    const correctAns = String(isEven(num));

    const question = `${num}`;

    return [question, correctAns];
}
const description = `Answer "yes" if the number is even, otherwise answer "no".`