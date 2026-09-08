const sumToN = require('./sumn_v1');
const sumToNM = require('./sumnm_v1');

async function main() {
    try {
        const result1 = await sumToN(5);
        console.log('sumToN:', result1);

        const result2 = await sumToNM(2, 3);
        console.log('sumToNM:', result2);
    } 
    catch (error) {
        console.error(error.message);
    }
}

main();