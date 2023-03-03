$(function(){
    var visor = $("#visor");
    var numeroUm;
    var numeroDois;
    var operator;
    let resultado;
    //Criando elemento que aponta botão clicado 
    $('.number').on('click', function(){
        //pega o bttm clicado e salva na variavel  
        let numero = $(this).html();
        //pega o valor do visor e guarda na variavel 
        let nmrTela = visor.val();
        //adciona no visor o valor anterior e o numero clicado
        $("#visor").val(nmrTela + numero);
    });

    $("#btn_soma").on('click',function(){
        //caso o valor seja vazio
        if(visor.val() == ''){
            alert('Digite um numero!')
            return;
        }
        numeroUm = visor.val();
        visor.val("")
        operator = '+'; 
    });

    $("#btn_igual").on('click', function(){
        if(visor.val() == ""){
            alert("Digite um numero!");

            return;
        }
        numeroDois = visor.val();
        
        if(operator == '+'){
            resultado = parseFloat(numeroUm) + parseFloat(numeroDois);
            visor.val(resultado);

        }
    });
   

    $("#btn_subt").on('click',function(){
        if(visor.val() ==''){
            alert('Digite um numero!')
            return;
        }
        numeroUm = visor.val();
        visor.val("")
        operator ='-';
    });
    $('#btn_igual').on('click', function(){
        if(operator == '-'){
            resultado = parseFloat(numeroUm) - parseFloat(numeroDois);
            visor.val(resultado)

       }
    });

    $("#btn_multi").on('click',function(){
        if(visor.val() ==''){
            alert('Digite um número!')
            return;
        }
        numeroUm = visor.val();
        visor.val("")
        operator = '*'


    });
    $('#btn_igual').on('click', function(){
        if(operator == '*'){
            resultado = parseFloat(numeroUm) * parseFloat(numeroDois);
            visor.val(resultado)
        }

        
    });
    $("#btn_divi").on('click',function(){
        if(visor.val() ==''){
            alert('Digite um número!')
            return;
        }
        numeroUm = visor.val();
        visor.val("")
        operator = '/'


    });
    $('#btn_igual').on('click', function(){
        if(operator == '/'){
            resultado = parseFloat(numeroUm) / parseFloat(numeroDois);
            visor.val(resultado)
        }

        
    });







});