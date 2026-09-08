function sumToN(N) {
    return new Promise((resolve, reject) => {
        if (typeof N !== 'number' || N < 0) {
            return reject(
                new Error('N must be a non-negative number')
            );
        }
        setTimeout(() => {
            let sum = 0;
            let limit = N * N;
            for (let i = 0; i <= limit; i++) {
                sum += i;
            }
            resolve(sum);
        }, 2000);
    });
}
module.exports = sumToN;