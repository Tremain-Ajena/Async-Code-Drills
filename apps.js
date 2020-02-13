document.addEventListener("DOMContentLoaded", function () {
    stringy('Hey, how are you?');
    setTimeout(function () { stringy('Hey, stop calling me.'); }, 2000);

    function stringy(message) {
        console.log(message);
    };

    getWords();
    function getWords() {
        console.log('cheese');
        // setTimeout(function () { console.log('Apples'); }, 3000);
        // setTimeout(function () { console.log('Oranges'); }, 2000);
        // setTimeout(function () { console.log('Bananas'); }, 1000);

        // How to Nest the Timeout Function: the words needed to be logged depending on when the preceding one was logged, not logging them independently as the code runs.
        setTimeout(function () {
            console.log('Apples');
            setTimeout(function () {
                console.log('Oranges');
                setTimeout(function () {
                    console.log('Bananas');
                }, 1000);
            }, 2000);
        }, 3000);
    };

    // Callbacks and Recursion
    function Done() {
        console.log("Job's done!");
    };

    function countDown(num, callback) {
        setTimeout(() => {
            if (num > 0) {
                console.log(num);
                countDown(num - 1, callback);
            } else {
                callback();
            }

        }, 1000);
        // calling the countDown function within itself is called recursion
    }
    const whenDone = () => {
        console.log('Are You Done Or Are You Finished!')
        // this is still considered an arrow function even thought you use the keywords "let" or "const" before defining them.
    };

    countDown(5, whenDone);
    setTimeout(function () { countDown(8, Done); }, 7000);

    // Promises Promises Section
    let lunchTime = true;

    function orderMeSomeFood(message) {
        return new Promise((resolve, reject) => {
            if (lunchTime) {
                foodOptions = {
                    lunch: 'Salisbury Steak, Mashed Potatoes, and Brocoli',
                    drink: 'Apple Juice'
                }
                resolve(foodOptions);
            } else {
                let err = new Error('Why can we never have anything nice?');
                reject(err);
            }
            resolve(message);
            // when you create a promise, you have to pass in the executor
        });
    };
    orderMeSomeFood("Hey there buddy, ol' pal").then((a) => {
        console.log(a);
    }).catch((e) => {
        console.log('An error occured');
        console.log(e);
    });
});