// case one

const triangleOneBase = 10;
const triangleOneHeight = 13;
const triangleOneArea = ( (triangleOneBase * triangleOneHeight) / 2)
console.log(triangleOneArea);

const triangleTwoBase = 16.5;
const triangleTwoHeight = 20.3;
const triangleTwoArea = ( (triangleTwoBase * triangleTwoHeight) / 2);
console.log(triangleTwoArea);

if(triangleOneArea > triangleTwoArea) {
    console.log("the area of triangle number ONE is the biggest");}
    else{ console.log( "the area of triangle number TWO is the biggest")

}

const theBiggestAreaCaseOne = `${triangleTwoArea} is bigger then ${triangleOneArea} so number TWO is the biggest one!`;
console.log(theBiggestAreaCaseOne);

// case two

const triangleThreeBase = 16.5;
const triangleThreeHeight = 20.3;
const triangleThreeArea = ( (triangleThreeBase * triangleThreeHeight) / 2);
console.log(triangleThreeArea);

const triangleFourBase = 20.3;
const triangleFourHeight = 16.5;
const triangleFourArea = ( (triangleFourBase * triangleFourHeight) / 2);
console.log(triangleFourArea);
console.log(triangleThreeArea > triangleFourArea);//false
console.log(triangleThreeArea < triangleFourArea);//false 
console.log(triangleThreeArea === triangleFourArea); //true



if(triangleThreeArea === triangleFourArea) {
    console.log("Yes they are the same size!!");}
    else{ console.log( "Nope, one of them is bigger!")

}

const theBiggestAreaCaseTwo = `${triangleThreeArea} is equal to ${triangleFourArea} so they are the same!`;
console.log(theBiggestAreaCaseTwo);

//case 3

const triangleFiveBase = 7.8;
const triangleFiveHeight = 5.6;
const triangleFiveArea = ( (triangleFiveBase * triangleFiveHeight) / 2);
console.log(triangleFiveArea);

const triangleSixBase = 9.3;
const triangleSixHeight = 12.4;
const triangleSixArea = ( (triangleSixBase * triangleSixHeight) / 2);
console.log(triangleSixArea);
if(triangleFiveArea > triangleSixArea) {
    console.log("yayy number 5 is bigger area then number 6");
}
else{
    console.log("number 6 is the biggest");
}

const theBiggestAreaCaseThree = `${triangleSixArea} is bigger then ${triangleFiveArea} so number SIX is the winner!`;
console.log(theBiggestAreaCaseThree);



// kan kanske använda ! ...??????????

// why we need parentheses? - yes for example if i would use this: if & else--

// if(triangleFiveBase * triangleFiveHeight / 2 > triangleSixBase * triangleSixHeight / 2) {
//     console.log("yayy number 5 is bigger area then number 6");

//     // now it doesnt know that it should calculate the * and / before the >...
//     // but if we put it like this:
//     if( (triangleFiveBase * triangleFiveHeight / 2) > (triangleSixBase * triangleSixHeight / 2) {
//         console.log("yayy number 5 is bigger area then number 6");
// // it knows we gonna calculate the * and / before the >
// so we do this to get the corrrect result.




// but if i do like this instead: 
// if(triangleFiveArea > triangleSixArea) 
//  i dont need the () right?? because its not a big calculation , only a >...
// example:

// if(triangleFiveArea > triangleSixArea) {
//     console.log("yayy number 5 is bigger area then number 6");
// }
// else{
//     console.log("number 6 is the biggest");
// }