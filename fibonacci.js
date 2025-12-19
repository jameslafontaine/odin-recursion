const fibs = function (n) {
    let sequence = [];
    let prev = 0;
    let curr = 1;
    for (let i = 0; i < n; i++) {
        sequence.push(prev);
        [prev, curr] = [curr, curr + prev];
        /* 
        curr = curr + prev;
        prev = curr - prev; 
        */
        /*         
        let next = curr + prev;
        prev = curr;
        curr = next;
        */
    }

    return sequence;
};

const fibsRec = function (n) {
    // base cases
    if (n === 0) return [];

    if (n === 1) return [0];

    if (n === 2) return [0, 1];

    const subSequence = fibsRec(n - 1);
    const len = subSequence.length;
    return [...subSequence, subSequence[len - 1] + subSequence[len - 2]];
};

const NUM_LOOPS = 9;

for (let i = 0; i < NUM_LOOPS; i++) console.log("i = ", i, "\n", fibs(i));

for (let i = 0; i < NUM_LOOPS; i++) console.log("i = ", i, "\n", fibsRec(i));
