#!/usr/bin/env node

function mergeSort(arr) {

    //start with base case:
    if (arr.length <= 2) {

        if (arr.length === 1 || arr[0] <= arr[1])
            return arr;
        else {
            // swap elements, then return
            let temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;

            return arr;
        }
    } else {

        // split array in half, sort each half
        let half1 = arr.slice(0, Math.floor(arr.length / 2));
        let half2 = arr.slice(Math.floor(arr.length / 2), arr.length);

        half1 = mergeSort(half1);
        half2 = mergeSort(half2);

        let merged = [];

        while (half1.length !== 0 || half2.length !== 0) {

            if (half1[0] <= half2[0]) {

                merged.push(half1[0])
                if (half1.length === 1) {
                    half2.forEach(element => merged.push(element));
                    break;
                }
                else
                    half1.shift();
            } else {

                merged.push(half2[0])
                if (half2.length === 1) {
                    half1.forEach(element => merged.push(element));
                    break;
                }
                else
                    half2.shift();
            }

        }

        return merged;

    }

}

// nice function to make testing easier =^)
function generateRandomIntArray(n, low, high) {
    let arr = []

    for (let i = low; i <= n; i++) {

        arr.push(Math.floor(Math.random() * high));
    }

    return arr;
}

let testRandom = generateRandomIntArray(50, 1, 1500);


console.log('The array is ');
console.log(testRandom);
console.log(' and after merge sorting: ');
console.log(mergeSort(testRandom));
