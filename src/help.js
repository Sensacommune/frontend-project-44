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