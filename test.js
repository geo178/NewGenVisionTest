const courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
]

const filter = (range) => {
    const [a, b] = range.sort((a, b) => a - b)

    return courses.filter(({ prices: [x, y] }) => {
        return ((a >= x) && ((y === null) || (a <= y))) || ((b >= x) && ((y === null) || (b <= y)))
    })
}

const requiredRange1 = filter([null, 200]);
console.log(requiredRange1);

const requiredRange2 = filter([100, 350]);
console.log(requiredRange2);

const requiredRange3 = filter([200, null]);
console.log(requiredRange3);
