export const my_display_combv2 = () => {
    var cpt = 0;
    var res = [];
    for (var i = 0; i <= 7 ; i++)
        for (var j = 1;  j <= 8; j++)
            for (var k = 2; k <= 9; k++)
                res[cpt++] = i + ' ' + j + ' ' + k;
    return res
};

console.log(my_display_combv2())