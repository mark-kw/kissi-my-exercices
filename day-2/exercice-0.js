export const my_display_forever_42 = (nbr) => {
    if (nbr === undefined || typeof(nbr) !== 'number')
        return 42
    return nbr
};
