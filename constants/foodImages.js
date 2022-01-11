const hamburger = require("../assets/dummyData/hamburger.png")
const hotTacos = require("../assets/dummyData/hot_tacos.png")
const vegBiryani = require("../assets/dummyData/veg_biryani.png")
const wrapSandwich = require("../assets/dummyData/wrap_sandwich.png")

export function getFoodImage(index){
    switch(index){
        case 1: return hamburger
        case 2: return hotTacos
        case 3: return vegBiryani
        default: return wrapSandwich
    }
}
