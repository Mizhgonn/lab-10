let lab1= [5, 5, 5, 5, 10, 10]; // array of scores for lab1
let lab2= [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 5]; // array of scores for lab2
let lab3= [5, 10, 10, 15]; // array of scores for lab3
let lab4_5=[10, 5, 3, 5, 5,5, 10, 10, 10, 10, 4]; // array of scores for lab4&5
let lab6= [5, 5, 10 ,5, 5, 10]; // array of scores for lab6
let lab8= [5, 10, 10 ,10, 5]; // array of scores for lab8
let quiz1= [26]; // score of quiz 1

function get_sum(lab) {
  let sum_lab=0;
    let i=0;
    while (i<lab.length) {
  sum_lab+=lab[i]
  i++;
}
return sum_lab
}

function main(labs){
sum1=get_sum(lab1);
sum2=get_sum(lab2);
sum3=get_sum(lab3);
sum4_5=get_sum(lab4_5);
sum6=get_sum(lab6);
sum8=get_sum(lab8);
sumtotal=sum1+sum2+sum3+sum4_5+sum6+sum8
total_score= sumtotal/6*0.6*2.5+quiz1; // computed total score

const results = {
  lab1:lab1, // array of scores for lab1
  lab2:lab2, // array of scores for lab2
  lab3:lab3, // array of scores for lab3
  lab4_5:lab4_5, // array of scores for lab4 and 5
  lab6:lab6, // array of scores for lab6
  lab8:lab8, // array of scores for lab8
  quiz1:quiz1 , // score of quiz1
  sums:[sum1,sum2,sum3,sum4_5,sum6,sum8],
  sumtotal:sum1+sum2+sum3+sum4_5+sum6+sum8, // array of sums of each lab
  total_score: total_score, // computed total score
};
return results
}

let object=main(lab1,lab2,lab3,lab4_5,lab6,lab8);


console.log(object);