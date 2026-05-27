export const withTimeout = (promise, ms) => {

    return Promise.race([

        promise,

        new Promise((_, reject) =>
            setTimeout(() =>
                reject(new Error("Request Timeout")),
                ms
            )
        )
    ]);
};