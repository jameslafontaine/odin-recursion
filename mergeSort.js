const mergeSort = function (arr) {
    // base cases
    if (arr.length === 0) {
        return [];
    }

    if (arr.length === 1) {
        return [arr[0]];
    }

    const leftHalf = mergeSort(arr.slice(0, arr.length / 2));

    const rightHalf = mergeSort(arr.slice(arr.length / 2, arr.length));

    return merge(leftHalf, rightHalf);
};

const merge = function (leftHalf, rightHalf) {
    const merged = [];
    let i = 0,
        j = 0;

    // sequentially add the smallest element from the front of each half to the merged array
    while (i < leftHalf.length && j < rightHalf.length) {
        if (leftHalf[i] <= rightHalf[j]) {
            merged.push(leftHalf[i]);
            i++;
        } else {
            merged.push(rightHalf[j]);
            j++;
        }
    }

    // when one half becomes empty, copy all values from the remaining half into the merged array
    // note that one of the halves will always be empty once we exit the while loop, so spreading both is safe
    merged.push(...leftHalf.slice(i), ...rightHalf.slice(j));

    return merged;
};

const testMergeSort = function (arr) {
    console.log(`\nsorting [${arr}]: `);
    console.log(mergeSort(arr));
};

testMergeSort([]);
testMergeSort([73]);
testMergeSort([1, 2, 3, 4, 5]);
testMergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
testMergeSort([105, 79, 100, 110]);
