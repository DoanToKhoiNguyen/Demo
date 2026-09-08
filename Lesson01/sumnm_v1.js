function sumToNM(N, M) {
    return new Promise((resolve, reject) => {
        if (
            typeof N !== 'number' ||
            typeof M !== 'number' ||
            N < 0 ||
            M < 0
        ) {
            return reject(
                new Error('N and M must be non-negative numbers')
            );
        }

        setTimeout(() => {
            let sum = 0;
            let limit = N * M;

            for (let i = 0; i <= limit; i++) {
                sum += i;
            }

            resolve(sum);
        }, 1500);
    });
}

module.exports = sumToNM;