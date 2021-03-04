export const generateId = (min = 0, max = 999999) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}