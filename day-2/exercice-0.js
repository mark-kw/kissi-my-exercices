export const my_display_forever_42 = (tab) => {
    if (tab === undefined || typeof(tab) !== 'number')
        return 42
    return tab
};
