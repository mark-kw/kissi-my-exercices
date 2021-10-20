export const my_size_alpha = (str) => {
    if (typeof(str) !== "string")
        return 0;
    var cpt = 0;
    while (str[cpt] !== undefined){
        cpt++
    }
    return cpt;
};
