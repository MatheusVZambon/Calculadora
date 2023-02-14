window.onload = function(){
    if(document.getElementById('display').value.toString().length == 0){
        const operations = document.querySelectorAll('.btn-operation-style');
    
        for(let c = 0; c < operations.length; c++){
            operations[c].classList.add('disabled');
        }
        document.getElementById('point_button').classList.add('disabled');
    }
}

function displayValue(val){
    if (document.getElementById('display').value.toString().length < 13){
        document.getElementById('display').value += val;
        document.getElementById('register').value += val;

        const operations = document.querySelectorAll('.btn-operation-style');

        for(let c = 0; c < operations.length; c++){
            operations[c].classList.remove('disabled');
        }
        document.getElementById('point_button').classList.remove('disabled');
    }
    if (document.getElementById('display').value.toString().includes('.') == true){
        document.getElementById('point_button').classList.add('disabled');
    }
}

function displayRegister(val){
    if(document.getElementById('register').value.toString().includes(' ') == true){
        displayResult();
    }

    document.getElementById('register').value += " " + val + " ";
    document.getElementById('display').value = "";
}

function buttonDeactivator(){
    const operations = document.querySelectorAll('.btn-operation-style');

    for(let c = 0; c < operations.length; c++){
        operations[c].classList.add('disabled');
    }
}

function displayRegisterSR(){
    document.getElementById('register').value = " ";
    document.getElementById('register').value += "√" + document.getElementById('display').value;
    document.getElementById('display').value = "";
}

function displayClear(){
    document.getElementById('display').value = "";
    document.getElementById('register').value = "";

    const operations = document.querySelectorAll('.btn-operation-style');

    for(let c = 0; c < operations.length; c++){
        operations[c].classList.add('disabled');
    }

    document.getElementById('point_button').classList.add('disabled');
}

function displayDelete(){
    document.getElementById('display').value = document.getElementById('display').value.toString().slice(0,-1);
    document.getElementById('register').value = document.getElementById('register').value.toString().slice(0,-1);
    if(document.getElementById('display').value.toString().length == 0){
        const operations = document.querySelectorAll('.btn-operation-style');
    
        for(let c = 0; c < operations.length; c++){
            operations[c].classList.add('disabled');
        }

        document.getElementById('point_button').classList.add('disabled');
    }
}

function displayResult(){
    document.getElementById('display').value = "";
    var register = document.getElementById('register').value.toString();
    var blank_space = register.search(" ");
    var operation = register.slice(blank_space + 1, blank_space + 2);
    var nmb_one = register.slice(0, blank_space);
    var nmb_two = register.slice(blank_space + 3, register.length);

    if (operation == "x"){
        var res = Number(nmb_one) * Number(nmb_two);
        if (res.toString().length < 21){
            document.getElementById('display').value = res;
            document.getElementById('register').value = res;
        } else {
            window.alert("Resultado acima de 20 termos");
            document.getElementById('display').value = "";
            document.getElementById('register').value = "";
        }    
    } else if (operation == "+"){
        var res = Number(nmb_one) + Number(nmb_two);
        if (res.toString().length < 21){
            document.getElementById('display').value = res;
            document.getElementById('register').value = res;
        } else {
            window.alert("Resultado acima de 20 termos");
            document.getElementById('display').value = "";
            document.getElementById('register').value = "";
        }
    } else if (operation == "-"){
        var res =  Number(nmb_one) - Number(nmb_two);
        document.getElementById('display').value = res;
        document.getElementById('register').value = res;
    } else if (operation == "/") {
        var res = Number(nmb_one) / Number(nmb_two);
        if (Number(nmb_one) == 0 || Number(nmb_two) == 0){
            window.alert("Entrada Inválida");
            document.getElementById('display').value = "";
            document.getElementById('register').value = "";
        } else {
            if (res.toString().length < 21){
                document.getElementById('display').value = res;
                document.getElementById('register').value = res;
            } else {
                window.alert("Resultado acima de 20 termos");
                document.getElementById('display').value = "";
                document.getElementById('register').value = "";
            }
        }   
    } else {
        document.getElementById('display').value = "";
        document.getElementById('register').value = "";
    }
}

function displayResultEsp(val){
    document.getElementById('display').value = "";
    var register = document.getElementById('register').value.toString();
    var blank_space = register.search(" ");
    var nmb = register.slice(0, blank_space);

    if (val == "X²"){
        var res = Number(nmb) * Number(nmb);
        document.getElementById('display').value = res;
        document.getElementById('register').value = res;
    } else if (val == "RQ"){
        var nmb_rq = register.slice(2, register.length)
        if (nmb_rq < 0){
            window.alert("Entrada Inválida");
            document.getElementById('display').value = "";
            document.getElementById('register').value = "";
        } else {
            var res = Math.sqrt(nmb_rq);
            if (res.toString().length < 21){
                document.getElementById('display').value = res;
                document.getElementById('register').value = res;
            } else {
                window.alert("Resultado acima de 20 termos");
                document.getElementById('display').value = "";
                document.getElementById('register').value = "";
            }
        }
    }
    else{
        var res = Number(nmb) * -1;
        document.getElementById('display').value = res;
        document.getElementById('register').value = res;
    }

    const operations = document.querySelectorAll('.btn-operation-style');

    for(let c = 0; c < operations.length; c++){
        operations[c].classList.remove('disabled');
    }
}