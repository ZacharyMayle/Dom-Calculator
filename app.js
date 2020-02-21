// const buttons = document.querySelectorAll(".buttons")

const buttons = document.querySelector(".buttons");
const screen  = document.querySelector("#screen");


buttons.addEventListener("click", doSomething, false);
 
function doSomething(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target;
        printToScreen(clickedItem)
    }
    e.stopPropagation();
}

let op1=[],operator=[],op2=[],result=[],container=[];

function printToScreen (clickedItem){
    screen.innerText += clickedItem.innerText;

    //    Logic for op1
    if(clickedItem.className !== "operator" && (operator=='' && result=="")){
       container.push(clickedItem.innerText)
       op1=container.join('')
        console.log("op1",op1)

    //    Logic for normal operators
    }else if (clickedItem.className == "operator" && (clickedItem.innerText!=='C' &&clickedItem.innerText!=='=')){
        operator.push(clickedItem.innerText)
        console.log("operator", operator)

    //    Logic for = operator
    }else if(clickedItem.className == "operator" && clickedItem.innerText=='='){
        operator.push(clickedItem.innerText)
        // console.log("operator", operator)
        doMath()

    //    Logic for clear
    }else if(clickedItem.className == "operator" && clickedItem.innerText=='C'){
        op1=[],op2=[],operator=[],result=[],container=[],screen.innerText=""

    //    Logic for op2 first time
    }else if(clickedItem.className !== "operator" && (operator=='' && result!=="")){
        container.push(clickedItem.innerText)
        op2=container.join('')
        doMath()

    //    Logic for op2 nth time
    }else if (clickedItem.className !== "operator" && operator!==''){
        op2.push(parseInt(clickedItem.innerText))
        doMath()
    }


    function doMath(){
        
        if(operator[0]== '+'){
           result.push(parseInt(op1, 10) + parseInt(op2, 10))
           operator =[];op1=[];op2=[];container=[];
           container.push(result[0])
           op1.push(result[0])
           console.log("result", result, "operator",operator, "op1", op1,'container',container)


        }else if (operator[0]== '-'){
            result.push(parseInt(op1, 10) - parseInt(op2, 10))
            operator =[];op1=[];op2=[];container=[];
            container.push(result[0])
            op1.push(result[0])
            console.log("result", result, "operator",operator, "op1", op1,'container',container)


         }else if (operator[0]== 'x'){
            result.push(parseInt(op1, 10) * parseInt(op2, 10))
            operator =[];op1=[];op2=[];container=[];
            container.push(result[0])
            op1.push(result[0])
            console.log("result", result, "operator",operator, "op1", op1,'container',container)


         }else if (operator[0]== '÷'){
            result.push(parseInt(op1, 10) / parseInt(op2, 10))
            operator =[];op1=[];op2=[];container=[];
            container.push(result[0])
            op1.push(result[0])
           console.log("result", result, "operator",operator, "op1", op1,'container',container)


         }else if (operator[0]== '='){
            // op1=[],op2=[],operator=[],result=[],screen.innerText=""
            // op1.push(result[0])
            screen.innerText = op1[0]
            result=[]
            operator=[]
            console.log("result", result, "operator",operator, "op1", op1,'container',container)
        } 
    }

   
    
    return op1,operator,op2,result;

    
}