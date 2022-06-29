// Q1 Calculator
const Calculator = (A, B, C) => 
{
	switch(A){
	  case "+":
	  return B+C;
	    
	    case "-":
	     return B-C; 
	      
	       case "*":
	        return B*C;
	         
	         
	          case "/":
	           return B/C; 
	       
	  
	}
    
};



// If the condition is satisfied return "Divisible by both" (without quotes) else return "Not Divisible by both" (without quotes). 

const Check_divisibility = (N) => {
    
    return ((N/6==0)&&(N/9==0))?
       "Divisible by both": "Not Divisible by both"
   };

   

// Eligible Voter

const isEligible = (a) => {
    let result = a > 18 ? ("Eligible for Voting") : ("Not Eligible for Voting")
    return result;
  
};


// If X < Y , it means that X is smaller than Y .
// If X > Y , it means that X is greater than Y .
// If X = Y , it means that X is equal to Y . Note: You have to complete findRelationship function. No need to take any input.

const findRelation = (x,y) => {
    if(x<y) {
     return x+" is smaller than " +y;
    }
    else if(x>y) {
     return x+" is greater than "+y;
    }
    else {
     return x+ " is equal to "+y;
    }
};


// Your school has the following grading system based upon the marks(M) obtained by a student:
// If M ≤ 10 , the grade will be E .
// If 11 ≥ M ≤ 20 , the grade will be D .
// If 21 ≥ M ≤ 30 , the grade will be C .
// If 31 ≥ M ≤ 40 , the grade will be B .
// If 41 ≥ M ≤ 50 , the grade will be A .
// Your friend will enter his marks out of 50 , and your task is to print his grades using a switch statement. Note: You have to complete findGrades function. No need to take any input.


const findGrades = (a) => {
    switch(true){
      case a<=10:
        return "E";
         
         case  a>=11 && a<=20:
           return "D";
           
           case a>=21 && a<=30:
             return "C";
              
              case a>=31 && a<=40:
                return "B";
                 
                 case a>=41 && a<= 50:
                   return "A";
                    
                    default:
                     return "Invalid Marks";
                   
              
    } 
 };



//  Get Value
// You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the table corresponding to an input character and return it.

// | P or p 	- PrepBytes      	|
// | Z or z 	- Zenith         	|
// | E or e 	- Expert Coder   	|
// | D or d 	- Data Structure 	|



const getValue = (a) => {
    if( (a=="P") || (a=="p") ){
      return "PrepBytes";
    }
    else if((a=="Z") || (a=="z")) {
      return "Zenith";
    }
    
    else if ((a=="E") || (a=="e") ){
      return "Expert Coder";   
    }
    else {
      return  "Data Structure"; 
    }
};


// Find the maximum out of three numbers.
// Take three numbers and print the largest number among them if all of three are same print  -1
// Note: You have to complete Max_out_of_three. No need to take any input.


const Max_out_of_three = (A,B,C) => {
    
    if(A>B && A>C){
      return A;
    }
    else if (B>A && B>C){
      return B;
    }
    else if(C>A && C>B){
      return C;
    }
    
    else{
      return "-1"
    }
    };
    
    // The first and the only line of the input contains three space-separated integers X ,Y and Z, denoting the integers among which you have to find the second smallest element.

    const findSndSmallest = (x,y,z) => {
        if ((x>y && x<z) | (x<y && x>z)) {
      return x;
    }
    else if ((y>x && y<z) | (y<x && y>z)) {
      return y;
    }
    else {
      return z;
    }
};


// Write a program takes takes three angles and checks whether the triangle is acute or obtuse.

// Note: You have to complete Triangle_Check. No need to take any input


const Triangle_Check = (A,B,C) => {
    if(A<90 && B<90 && C<90){
      return "acute" ;
    }
    else{
       return "obtuse" ;
    }

    
};




























