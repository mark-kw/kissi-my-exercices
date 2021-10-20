import { my_display_alpha } from "./exercice-1.js";

 export const my_display_alpha_reverse = () => {
    var alph = my_display_alpha();
    var str = '';
    for (var i = 25; i >= 0; i--) { 
        str += alph[i];
      }
    return str;
};
console.log(my_display_alpha_reverse());