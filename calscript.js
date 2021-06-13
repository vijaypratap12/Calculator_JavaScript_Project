 function display(val){
        document.getElementById("num").value+= val;
    }
        function equate(){
            let x = document.getElementById("num").value;
            let y = eval(x);
            document.getElementById("num").value = y;
        }
       function clr(){
           document.getElementById("num").value = '';
       }
    
    