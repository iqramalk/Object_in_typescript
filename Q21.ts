//21. Write a program that creates Objects containing  items.

interface type{
    country:string,
    language:string,
    Year_of_Discovery:number 

}

let language1:type = {
    country:"Korean",
    language:" Hangugeo(Korean)",
    Year_of_Discovery: 1443 

};
let language2:type = {
    country:"China",
    language:" Mandarin(Chinese)",
    Year_of_Discovery:  1600

};
let language3:type = {
    country:"United Kingdom",
    language:" English",
    Year_of_Discovery: 8
};
let language4:type = {
    country:"German",
    language:"Germani",
    Year_of_Discovery:  6
};
console.log(language1.country);
console.log(language1.language)
console.log(language2.country);
console.log(language2.language);



