import { my_size_alpha } from "../day-1/exercice-4.js";

export const my_alpha_reverse = (str) => {
    var cpt = my_size_alpha(str)
    var res = '';
    for (var i = cpt-1; i >= 0; i--){
        res += str[i];
    }
    return res;
};