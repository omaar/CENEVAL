//Crear Arreglos

var clave_es = new Array;

var clave_ma = new Array;

var respuestas = new Array;

var progbar=0.833333333;

var npregunta=1;

//Aciertos
var aciertos_es=0;
var aciertos_ma=0;

//Errores 
var errores_es=0;
var errores_ma=0;

//Aciertos Barra
var acert_bar_es = 0;
var acert_bar_ma = 0;

//Comienza Español

clave_es [1]="C";
clave_es [2]="D";
clave_es [3]="A";
clave_es [4]="B";
clave_es [5]="B";
clave_es [6]="E";
clave_es [7]="C";
clave_es [8]="B";
clave_es [9]="A";
clave_es [10]="D";
clave_es [11]="D";
clave_es [12]="B";
clave_es [13]="E";
clave_es [14]="B";
clave_es [15]="B";
clave_es [16]="C";
clave_es [17]="A";
clave_es [18]="E";
clave_es [19]="D";
clave_es [20]="E";
clave_es [21]="E";
clave_es [22]="B";
clave_es [23]="D";
clave_es [24]="C";
clave_es [25]="C";
clave_es [26]="A";
clave_es [27]="C";
clave_es [28]="C";
clave_es [29]="B";
clave_es [30]="D";
clave_es [31]="C";
clave_es [32]="E";
clave_es [33]="C";
clave_es [34]="C";
clave_es [35]="A";
clave_es [36]="D";
clave_es [37]="C";
clave_es [38]="A";
clave_es [39]="D";
clave_es [40]="D";
clave_es [41]="D";
clave_es [42]="C";
clave_es [43]="B";
clave_es [44]="C";
clave_es [45]="A";
clave_es [46]="E";
clave_es [47]="A";
clave_es [48]="B";
clave_es [49]="D";
clave_es [50]="E";
clave_es [51]="B";
clave_es [52]="B";
clave_es [53]="B";
clave_es [54]="D";
clave_es [55]="C";
clave_es [56]="C";
clave_es [57]="E";
clave_es [58]="B";
clave_es [59]="C";
clave_es [60]="E";
clave_es [61]="E";
clave_es [62]="C";

//Comienza Matemáticas

clave_ma [63]="B";
clave_ma [64]="C";
clave_ma [65]="A"; //63 A

clave_ma [66]="";
clave_ma [67]="";
clave_ma [68]="";

clave_ma [69]="A";
clave_ma [70]="A";
clave_ma [71]="A";
clave_ma [72]="D";
clave_ma [73]="A";
clave_ma [74]="C";
clave_ma [75]="B";
clave_ma [76]="D";
clave_ma [77]="D";
clave_ma [78]="A";
clave_ma [79]="D";
clave_ma [80]="A";
clave_ma [81]="B";
clave_ma [82]="C";
clave_ma [83]="C";
clave_ma [84]="B";
clave_ma [85]="A";
clave_ma [86]="A";
clave_ma [87]="D";
clave_ma [88]="B";
clave_ma [89]="A";
clave_ma [90]="B";
clave_ma [91]="D";
clave_ma [92]="C";
clave_ma [93]="B";
clave_ma [94]="D";
clave_ma [95]="D";
clave_ma [96]="C";
clave_ma [97]="C";
clave_ma [98]="D";
clave_ma [99]="C";
clave_ma [100]="A";
clave_ma [101]="A";
clave_ma [102]="B";
clave_ma [103]="B";
clave_ma [104]="D";
clave_ma [105]="D";
clave_ma [106]="C";
clave_ma [107]="A";
clave_ma [108]="C";
clave_ma [109]="D";
clave_ma [110]="C";
clave_ma [111]="C";
clave_ma [112]="B";
clave_ma [113]="C";
clave_ma [114]="C";
clave_ma [115]="A";
clave_ma [116]="A";
clave_ma [117]="B";
clave_ma [118]="C";
clave_ma [119]="A";
clave_ma [120]="B";
clave_ma [121]="C";
clave_ma [122]="A";
clave_ma [123]="A";

//Eliminar pregunta contestada
function deleteDiv(divO,divM){
    /*var div = document.getElementById(divO);
    div.parentNode.removeChild(div);*/
    document.getElementById(divO).style.display = 'none';
    document.getElementById(divM).style.display = 'block';
    document.getElementById('pro-bar').style.width = (progbar=progbar+0.833333333)+'%';
}

//Obtiene el valor de la pregunta contestada
//tienes que escrinir el numero de la pregunta que quieres que verifique, por ejemplo su estas en la pregunta 100 debes poner: "respuesta('preg100');"
function respuesta(name){//este metodo igual lo invocas en cada uno de los botones, donde dice "onclick="""
        var resultado;
        
        var radio=document.getElementsByName(name);
        // Recorremos todos los valores del radio button para encontrar el seleccionado
        for(var i=0;i<radio.length;i++)
        {
            if(radio[i].checked){
                resultado=radio[i].value;}
        }

    if(npregunta==66){
        npregunta = 69;
        respuestas[npregunta] = resultado;
        npregunta++;
    }else{
        respuestas[npregunta] = resultado;
        npregunta++;
    }
        /*document.getElementById("resultado").innerHTML=" \
            Por Nombre: "+resultado;*/
}
function resultados(){//Cuenta los aciertos y NO Aciertos de Español
    for(var n=1; n<63;n++){
        if(clave_es[n]==respuestas[n]){
            aciertos_es++;
            acert_bar_es = acert_bar_es + 1.612903226;
        }else{errores_es++}
    }
    
    for(var i=63; i<124;i++){
        if (i==66) {
                i = 68;
            }else{
                if(clave_ma[i]==respuestas[i]){
                    aciertos_ma++;
                    acert_bar_ma = acert_bar_ma + 1.724137931;
                }else{errores_ma++}
            }
        }
    
    /*alert("Aciertos: "+aciertos);
    alert("Errores: "+errores);*/
    var resultados_es = $('#aciertos');
    resultados_es.html('<ul class="nav nav-pills">'+
                    '<li class="active "><a href="#">Aciertos <span class="badge">'+(aciertos_es)+'</span></a></li>'+
                    '<li class="active "><a href="#">Errores <span class="badge">'+errores_es+'</span></a></li></ul>');

    document.getElementById("acer-bar-es").style.width= (acert_bar_es)+'%';


    var resultados_ma = $('#aciertos-ma');
    resultados_ma.html('<ul class="nav nav-pills">'+
                    '<li class="active "><a href="#">Aciertos <span class="badge">'+(aciertos_ma)+'</span></a></li>'+
                    '<li class="active "><a href="#">Errores <span class="badge">'+errores_ma+'</span></a></li></ul>');

    document.getElementById("acer-bar-ma").style.width= (acert_bar_ma)+'%';
    
    /*'<ul class="nav nav-pills">'+
                    '<li class="active "><a href="#">Aciertos <span class="badge">'+(aciertos-1)+'</span></a></li>'+
                    '<li class="active "><a href="#">Errores <span class="badge">'+errores+'</span></a></li></ul>'*/
    aciertos_es=0;
    aciertos_ma=0;
    errores_es=0;
    errores_ma=0;
    acert_bar_es = 0;
    acert_bar_ma = 0;
}