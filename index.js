// Creating an Variables

const Binary=document.getElementById("binary");
const Input=document.getElementById("Input-value");
const outputText=document.getElementById("output-text");
const OutputShow=document.getElementById("Output-Show");

    
 const audio=new Audio("./click.mp3");
    

let Ans="";
let num=0;
let Reversed="";

    // Function To Input A Song By Clicking On A Button Or A Search Bar
function input(){
    audio.play();
}
    // function for binary conversion
function Conversion(point,Name){

    if(Input.value>=1000){
        OutputShow.innerText="Limit Reached"
    }
    else{

    Binary.innerText=`${Name}`;
    num=Input.value;
    audio.play();
    outputText.innerText=`${Name}`

            // Logic For the conversion of the Binary number
            while(num!=0){
                    // Logic For Obtaining A Number 
                Ans+=num%point;
                num=Math.floor(num/point);
            }
   
            Reverse(Ans);
          
            Ans='';
            num=0;
        }
        

    }


// Logic TO Reverse a Given Number
function Reverse(Ans){

let ans='';
// here We Are Adding A New Variable Becasue Of FOUR 0000 Numbers Which Are We Gonna Add This Number In Order To Get perfect Solution
let bit='';
for(let i=Ans.length-1 ;i>=0;i--){
   
ans=ans+Ans[i];
}
if(ans.length==1){
bit='000'+ans
// console.log(bit);
OutputShow.innerText=bit;
}
else if(ans.length==2){
    bit='00'+ans;
    OutputShow.innerText=bit;
}
else if(ans.length==3){
    bit='0'+ans;
    OutputShow.innerText=bit;
}
else {
    OutputShow.innerText=ans;
}
// OutputShow.innerText=ans;

}
function Reset(){
    OutputShow.innerText="000";
}
