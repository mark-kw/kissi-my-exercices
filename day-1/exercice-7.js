export const my_is_posi_neg = (nb) => {
    if (nb > 0)
        return "POSITIF"
    else if ( nb === 0)
        return "NEUTRAL"
    else   
        return "NEGATIF"
};