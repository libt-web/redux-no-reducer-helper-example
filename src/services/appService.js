export function getCountService() {
    return new Promise((rs, rj) => {
        setTimeout(() => {
            rs(10);
        }, 1000);
    });
}