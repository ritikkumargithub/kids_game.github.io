
let n1 = Math.floor(Math.random()*10+1);
        let n2 = Math.floor(Math.random()*10+1);

        document.getElementById("v1").value=n1;
        document.getElementById("v2").value=n2;

        let rans = n1+n2;

        const jsGame = () =>{
            var answer = document.getElementById("ans").value;

            if(answer==rans){
                alert("Well Done ! Your Answer is Correct");
            }else{
                alert("Correct answer is " + rans + " Try Again.");
            }
            document.getElementById("ans").value=" ";

            n1=Math.floor(Math.random()*10+1);
            n2=Math.floor(Math.random()*10+1);

            document.getElementById('v1').value=n1;
            document.getElementById('v2').value=n2;
            
            rans=n1+n2;
        }