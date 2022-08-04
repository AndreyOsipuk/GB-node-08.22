console.log(1);

Promise.resolve().then(() => console.log(2));

setTimeout(() => {
    console.log(3);
    Promise.resolve().then(() => console.log(4));
});

Promise.resolve().then(() => {
    Promise.resolve().then(() => {
        console.log(5);
    });
    console.log(6);
});

console.log(7);