export const genNum = () => {
    const num = Math.floor(Math.random() * 1000);

    switch (num) {
        case 0:
            return '+'

        case 1:
            return '-'

        default:
            return '*'
    }
};

export const isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

export const genOperation = () => {
    const num = Math.floor(Math.random() * 1000)

    switch (num) {
        case 0:
            return '+';

        case 1:
            return '-';
        default:
            return '*';
    }
};

export const calcNums = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2

        case '-':
            return num1 - num2

        case '*':
            return num1 * num2
    }
}