// should return string not number
export const cellRange = (stop, step) => {
const type = {
    SAFE: 'SAFE',
    BOMB: 'BOMB',
}

return Array.from(
    { length: (stop - 1) / step + 1 },
    () => {
        const randomType = Math.floor(Math.random() * 2) + 1;
        const getType = randomType === 2 ? type.BOMB : type.SAFE;
        return getType;
    }
    )
};


