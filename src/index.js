module.exports = function reverse(n) {
    if (n < 0) {
        n = n * -1;
    }
    const stringNumber = n + "";
    const arrayNumber = stringNumber.split("").reverse();
    console.log(arrayNumber);
    const number = arrayNumber.join("");
    return Number(number);
};
