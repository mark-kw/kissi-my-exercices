export const my_display_comb = () => {
    var cpt = 0;
    var res = [];
    for (var i = 0; i <= 99 ; i++)
        for (var j = 0;  j <= 99 ; j++)
            res[cpt++] = i + ' ' + j;
    return res
};
