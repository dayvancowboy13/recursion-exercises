#!/usr/bin/env node

function fibs(n) {
    //return array of n numbers of fibonacci
    let arr = [0]

    if (n === 1) {

        return arr;

    } else {
        arr.push(1);

        for (let i = 1; i < n - 1; i++) {
            arr.push(arr[i - 1] + arr[i]);
        }

        return arr;

    }
}

function fibsRec(n, arr = []) {

    if (n === 1) {
        arr.push(0);
        return arr;
    } else if (n === 2) {
        arr.push(0);
        arr.push(1);
        return arr;
    }

    arr = fibsRec(n - 1, arr);
    // console.log(arr);
    arr.push(arr[n - 2] + arr[n - 3]);

    return arr;
}

function getExecutionTime(callBack, arg) {

    console.log(`Testing function ${callBack.name}`);
    console.time('Code test');
    console.log(callBack(arg));
    console.timeEnd('Code test');
}


getExecutionTime(fibs, 15);
getExecutionTime(fibsRec, 15);