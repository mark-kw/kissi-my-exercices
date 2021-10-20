export const my_string_is_number = (str) => {
    var cpt = 0;
    while (str[cpt] !== undefined){
        if (parseInt(str[cpt], 10)){
            return true;   
        }
        cpt++
    }
    return false;
};
