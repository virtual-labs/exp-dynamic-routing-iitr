var canvas = document.querySelector("canvas");
var c=canvas.getContext("2d");
var x1=130
,y1=170
,x2=375
,y2=50
,x3=620
,y3=170
,x4=252.5
,y4=370
,x5=497.5
,y5=370;

var coordinates=[[x1,y1],[x2,y2],[x3,y3],[x4,y4],[x5,y5]];
c.lineWidth = 3;
c.font = "bold 25px Verdana";
var nodes=["A","B","C","D","E"];

function lee(x,y,a,b,col){     //to make line
    c.strokeStyle=col;
    c.beginPath();
    c.moveTo(x,y);
    c.lineTo(a,b);
    c.stroke();
}
function my(col,x,y){         //to make circle
    c.beginPath();
    c.strokeStyle=col
    c.arc(x,y,30,0,Math.PI*2,false);
    c.stroke();
}
function sleep(milliseconds) {         
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    }while (currentDate - date < milliseconds);
}
function linesec(x,y,a,b){
    lee(x,y,a,b,"blue");
    //setTimeout(lee,2000,x,y,a,b,"black");
}
function node(x,y){
    my("red",x,y);
    setTimeout(my,11000,"black",x,y);
}

function node1(x,y){
    my("blue",x,y);
    setTimeout(my,11000,"black",x,y);
}

function line(x,y,a,b){
    lee(x,y,a,b,"red");
    setTimeout(lee,9000,x,y,a,b,"black");
}

function Text(w,x,y,col){
    c.font = "bold 17px Verdana";
    c.fillStyle=col;
    c.fillText(w,x,y);
}

function Text1(w,x,y,col){
    c.clearRect(x,y-15,25,16);
        c.font = "bold 17px Verdana";
        c.fillStyle=col;
        c.fillText(w,x,y);
    }

function circlee(){    //to make all the nodes
    c.fillStyle="black";
    c.font= "bold 20px Verdana"
    c.beginPath();
    c.arc(x1,y1,30,0,Math.PI*2,false);
    c.fillText("A",x1-17,y1+5);
    c.strokeStyle = "black";
    c.stroke();

    c.beginPath();
    c.arc(x2,y2,30,0,Math.PI*2,false);
    c.fillText("B",x2-7,y2-3);
    c.strokeStyle = "black";
    c.stroke();

    c.beginPath();
    c.arc(x3,y3,30,0,Math.PI*2,false);
    c.fillText("C",x3+3,y3+6);
    c.strokeStyle = "black";
    c.stroke();

    c.beginPath();
    c.arc(x4,y4,30,0,Math.PI*2,false);
    c.fillText("D",x4-13,y4+11);
    c.strokeStyle = "black";
    c.stroke();

    c.beginPath();
    c.arc(x5,y5,30,0,Math.PI*2,false);
    c.fillText("E",x5-1,y5+11);
    c.strokeStyle = "black";
    c.stroke();
}
function alpha(alp){
    alp=alp.toLowerCase();
    switch(alp){
        case "a":
            alp=0;
            break;
        case "b":
            alp=1
            break
        case "c":
            alp=2;
            break;
        case "d":
            alp=3
            break
        case "e":
            alp=4;
            break;
    }
    return alp;
}

var atable={
    dist:[],
    nextn:[]
}
var btable={
    dist:[],
    nextn:[]
}
var ctable={
    dist:[],
    nextn:[]
}
var dtable={
    dist:[],
    nextn:[]
}
var etable={
    dist:[],
    nextn:[]
}

var am;
var ama;
var mat;
var nik;
var neh;


function t(){

    atable.dist=[]
    atable.nextn=[]
    btable.dist=[]
    btable.nextn=[]
    ctable.dist=[]
    ctable.nextn=[]
    dtable.dist=[]
    dtable.nextn=[]
    etable.dist=[]
    etable.nextn=[]
    
    atable.dist.push(document.querySelector("#ta12").value=am[0][0]);
    atable.dist.push(document.querySelector("#ta22").value=am[0][1]);
    atable.dist.push(document.querySelector("#ta32").value=am[0][2]);
    atable.dist.push(document.querySelector("#ta42").value=am[0][3]);
    atable.dist.push(document.querySelector("#ta52").value=am[0][4]);
    atable.nextn.push(document.querySelector("#ta13").value=ama[0][0]);
    atable.nextn.push(document.querySelector("#ta23").value=ama[0][1]);
    atable.nextn.push(document.querySelector("#ta33").value=ama[0][2]);
    atable.nextn.push(document.querySelector("#ta43").value=ama[0][3]);
    atable.nextn.push(document.querySelector("#ta53").value=ama[0][4]);
    
    btable.dist.push(document.querySelector("#tb12").value=am[1][0]);
    btable.dist.push(document.querySelector("#tb22").value=am[1][1]);
    btable.dist.push(document.querySelector("#tb32").value=am[1][2]);
    btable.dist.push(document.querySelector("#tb42").value=am[1][3]);
    btable.dist.push(document.querySelector("#tb52").value=am[1][4]);
    btable.nextn.push(document.querySelector("#tb13").value=ama[1][0]);
    btable.nextn.push(document.querySelector("#tb23").value=ama[1][1]);
    btable.nextn.push(document.querySelector("#tb33").value=ama[1][2]);
    btable.nextn.push(document.querySelector("#tb43").value=ama[1][3]);
    btable.nextn.push(document.querySelector("#tb53").value=ama[1][4]);
    
    ctable.dist.push(document.querySelector("#tc12").value=am[2][0]);
    ctable.dist.push(document.querySelector("#tc22").value=am[2][1]);
    ctable.dist.push(document.querySelector("#tc32").value=am[2][2]);
    ctable.dist.push(document.querySelector("#tc42").value=am[2][3]);
    ctable.dist.push(document.querySelector("#tc52").value=am[2][4]);
    ctable.nextn.push(document.querySelector("#tc13").value=ama[2][0]);
    ctable.nextn.push(document.querySelector("#tc23").value=ama[2][1]);
    ctable.nextn.push(document.querySelector("#tc33").value=ama[2][2]);
    ctable.nextn.push(document.querySelector("#tc43").value=ama[2][3]);
    ctable.nextn.push(document.querySelector("#tc53").value=ama[2][4]);
    
    dtable.dist.push(document.querySelector("#td12").value=am[3][0]);
    dtable.dist.push(document.querySelector("#td22").value=am[3][1]);
    dtable.dist.push(document.querySelector("#td32").value=am[3][2]);
    dtable.dist.push(document.querySelector("#td42").value=am[3][3]);
    dtable.dist.push(document.querySelector("#td52").value=am[3][4]);
    dtable.nextn.push(document.querySelector("#td13").value=ama[3][0]);
    dtable.nextn.push(document.querySelector("#td23").value=ama[3][1]);
    dtable.nextn.push(document.querySelector("#td33").value=ama[3][2]);
    dtable.nextn.push(document.querySelector("#td43").value=ama[3][3]);
    dtable.nextn.push(document.querySelector("#td53").value=ama[3][4]);
   
    etable.dist.push(document.querySelector("#te12").value=am[4][0]);
    etable.dist.push(document.querySelector("#te22").value=am[4][1]);
    etable.dist.push(document.querySelector("#te32").value=am[4][2]);
    etable.dist.push(document.querySelector("#te42").value=am[4][3]);
    etable.dist.push(document.querySelector("#te52").value=am[4][4]);
    etable.nextn.push(document.querySelector("#te13").value=ama[4][0]);
    etable.nextn.push(document.querySelector("#te23").value=ama[4][1]);
    etable.nextn.push(document.querySelector("#te33").value=ama[4][2]);
    etable.nextn.push(document.querySelector("#te43").value=ama[4][3]);
    etable.nextn.push(document.querySelector("#te53").value=ama[4][4]);
    }

    let counter;
//case1
function f(){
    document.getElementById('submit').disabled=false;
    document.getElementById('cell1').disabled=true;
    document.getElementById('cell2').disabled=false;
    document.getElementById('cell3').disabled=true;
    document.getElementById('cell4').disabled=true;
    document.getElementById('cell5').disabled=true;
    document.getElementById('cell6').disabled=true;
    atable.dist=[]
    atable.nextn=[]
    btable.dist=[]
    btable.nextn=[]
    ctable.dist=[]
    ctable.nextn=[]
    dtable.dist=[]
    dtable.nextn=[]
    etable.dist=[]
    etable.nextn=[]
    c.clearRect(0,0,canvas.width,canvas.height);
    circlee();
    counter=Math.floor((Math.random()*3)+1)
    if(counter===1){

        lee(x1,y1,x3,y3,"black");
        Text("1",(x1+x3)/2,(y1+y3-8)/2,"orange");
        lee(x1,y1,x5,y5,"black");
        Text("1",(x1+x5+34)/2,(y1+y5+8)/2,"orange");
        lee(x2,y2,x4,y4,"black");
        Text("2",(x2+x4+18)/2,(y2+y4-8)/2,"orange");
        lee(x4,y4,x5,y5,"black");
        Text("3",(x4+x5)/2,(y4+y5-8)/2,"orange");


        am=[
            [0,'∞',1,'∞',1],
            ['∞',0,'∞',2,'∞'],
            [1,'∞',0,'∞','∞'],
            ['∞',2,'∞',0,3],
            [1,'∞','∞',3,0]
        ]
        ama=[
            ['A','-','C','-','E'],
            ['-','B','-','D','-'],
            ['A','-','C','-','-'],
            ['-','B','-','D','E'],
            ['A','-','-','D','E']
        ]
        mat=[
            [0,0,1,0,1],
            [0,0,0,1,0],
            [1,0,0,0,0],
            [0,1,0,0,1],
            [1,0,0,1,0]
            ]
        t();
        }
    //case 2
    else if(counter===2){
        lee(x1,y1,x5,y5,"black");
        Text("1",(x1+x5)/2,(y1+y5-8)/2,"orange");
        lee(x1,y1,x2,y2,"black");
        Text("2",(x1+x2)/2,(y1+y2-14)/2,"orange");
        lee(x2,y2,x5,y5,"black");
        Text("3",(x2+x5+4)/2,(y2+y5-8)/2,"orange");
        lee(x2,y2,x3,y3,"black");
        Text("4",(x2+x3)/2,(y2+y3-8)/2,"orange");
        lee(x3,y3,x4,y4,"black");
        Text("2",(x4+x3-50)/2,(y4+y3+10)/2,"orange");

        am=[
            [0,2,'∞','∞',1],
            [2,0,4,'∞',3],
            ['∞',4,0,2,'∞'],
            ['∞','∞',2,0,'∞'],
            [1,3,'∞','∞',0]
        ]
        ama=[
            ['A','B','-','-','E'],
            ['A','B','C','-','E'],
            ['-','B','C','D','-'],
            ['-','-','C','D','-'],
            ['A','B','-','-','E'],
        ]
        mat=[
            [0,1,0,0,1],
            [1,0,1,0,1],
            [0,1,0,1,0],
            [0,0,1,0,0],
            [1,1,0,0,0]
        ]
        t();
    }
    //case3
    else{
        
        lee(x1,y1,x3,y3,"black");
        Text("3",(x1+x3)/2,(y1+y3-8)/2,"orange");
        lee(x1,y1,x2,y2,"black");
        Text("1",(x1+x2)/2,(y1+y2-12)/2,"orange");
        lee(x3,y3,x5,y5,"black");
        Text("1",(x3+x5+18)/2,(y3+y5-8)/2,"orange");
        lee(x2,y2,x4,y4,"black");
        Text("2",(x4+x2+14)/2,(y4+y2-8)/2,"orange");
        lee(x3,y3,x4,y4,"black");
        Text("3",(x4+x3)/2,(y4+y3-12)/2,"orange");

        am=[
            [0,1,3,'∞','∞'],
            [1,0,'∞',2,'∞'],
            [3,'∞',0,3,1],
            ['∞',3,3,0,'∞'],
            ['∞','∞',1,'∞',0]
        ]
        ama=[
            ['A','B','C','-','-'],
            ['A','B','-','D','-'],
            ['A','-','C','D','E'],
            ['-','B','C','D','-'],
            ['-','-','C','-','E'],
        ]
        mat=[
            [0,1,1,0,0],
            [1,0,0,1,0],
            [1,0,0,1,1],
            [0,1,1,0,0],
            [0,0,1,0,0]
        ]
        t()
    }

    c.stroke();
}
circlee();



function update(){
    var a1=document.querySelector(".input1").value;
    var a2=document.querySelector(".input2").value;
    var a3=document.querySelector(".input3").value;
    var a1d=a1.toUpperCase();
    var a2d=a2.toUpperCase();  
    if(a1d=='' && a2d!='')  
    {
        Swal.fire({
            backdrop:false,
           target: '#roww',
           width:'370px',
           position:'center',
            customClass: {
              container: 'position-absolute',
              popup:"swal2-popup"
            },
            text:"Source can't be empty.",
            icon:'info'
            });
        
    } 
    else if(a1d!='' && a2d=='')  
    {
        Swal.fire({
            backdrop:false,
           target: '#roww',
           width:'370px',
           position:'center',
            customClass: {
              container: 'position-absolute',
              popup:"swal2-popup"
            },
            text:"Destination can't be empty.",
            icon:'info'
            });
      
    }
    else if(a1d==a2d && a1d=='')  
    {
        Swal.fire({
            backdrop:false,
           target: '#roww',
           width:'380px',
           position:'center',
            customClass: {
              container: 'position-absolute',
              popup:"swal2-popup"
            },
            text:"Source and destination can't be empty.",
            icon:'info'
            });
     
    } 
    else if(a1d==a2d)
    {
        Swal.fire({
            backdrop:false,
           target: '#roww',
           width:'380px',
           position:'center',
            customClass: {
              container: 'position-absolute',
              popup:"swal2-popup"
            },
            text:"Source and destination can't be same.",
            icon:'info'
            });
      
       
    }  
else if(((counter==1||counter==3) && (a1d=='A' && a2d=='C' || a1d=='C' && a2d=='A'))||
((counter==1 ||counter==2 ) && (a1d=='A' && a2d=='E' || a1d=='E' && a2d=='A'))||
((counter==1) && (a1d=='D' && a2d=='E' || a1d=='E' && a2d=='D'))||
((counter==1 || counter==3) && (a1d=='B' && a2d=='D' || a1d=='D' && a2d=='B'))||
(counter==2 && (a1d=='B' && a2d=='E' || a1d=='E' && a2d=='B'))||
((counter==2 || counter==3 )&& (a1d=='D' && a2d=='C' || a1d=='C' && a2d=='D'))||
(counter==2 && (a1d=='B' && a2d=='C' || a1d=='C' && a2d=='B'))||
(counter==3 && (a1d=='E' && a2d=='C' || a1d=='C' && a2d=='E'))||
((counter==3 || counter==2) && (a1d=='A' && a2d=='B' || a1d=='B' && a2d=='A'))
)
{
    Swal.fire({
        backdrop:false,
       target: '#roww',
       width:'380px',
       position:'center',
        customClass: {
          container: 'position-absolute',
          popup:"swal2-popup"
        },
        title:'Oops...',
        text:"Edge between these nodes already exist.",
        icon:'error'
        });

}

else if(a3=="")
{
    Swal.fire({
        backdrop:false,
       target: '#roww',
       width:'380px',
       position:'center',
        customClass: {
          container: 'position-absolute',
          popup:"swal2-popup"
        },
        text:"Weight can't be blank.",
        icon:'info'
        });

}

else{
    a1=alpha(a1);
    a2=alpha(a2);
    am[a1][a2]=parseInt(a3,10);
    am[a2][a1]=parseInt(a3,10);
    mat[a1][a2]=1;
    mat[a2][a1]=1;
    ama[a1][a2]=a2d;
    ama[a2][a1]=a1d;
    t();
    linesec(coordinates[a1][0],coordinates[a1][1],coordinates[a2][0],coordinates[a2][1]);
    Text1(a3,(coordinates[a1][0]+coordinates[a2][0])/2,(coordinates[a1][1]+coordinates[a2][1]-10)/2,"orange");
    Swal.fire({
        backdrop:false,
       target: '#roww',
       width:'400px',
       position:'center',
        customClass: {
          container: 'position-absolute',
          popup:"swal2-popup"
        },
        text:"Blue line will represent the newly added edge.",
        icon:'info'
        });
   
}
    

}

function pA(){
    atable.dist=[]
    atable.nextn=[]
    atable.dist.push(document.querySelector("#ta12").value=nik[0][0]);
    atable.dist.push(document.querySelector("#ta22").value=nik[0][1]);
    atable.dist.push(document.querySelector("#ta32").value=nik[0][2]);
    atable.dist.push(document.querySelector("#ta42").value=nik[0][3]);
    atable.dist.push(document.querySelector("#ta52").value=nik[0][4]);
    atable.nextn.push(document.querySelector("#ta13").value=neh[0][0]);
    atable.nextn.push(document.querySelector("#ta23").value=neh[0][1]);
    atable.nextn.push(document.querySelector("#ta33").value=neh[0][2]);
    atable.nextn.push(document.querySelector("#ta43").value=neh[0][3]);
    atable.nextn.push(document.querySelector("#ta53").value=neh[0][4]); 
}

function pB(){
    btable.dist=[]
    btable.nextn=[]
    btable.dist.push(document.querySelector("#tb12").value=nik[1][0]);
    btable.dist.push(document.querySelector("#tb22").value=nik[1][1]);
    btable.dist.push(document.querySelector("#tb32").value=nik[1][2]);
    btable.dist.push(document.querySelector("#tb42").value=nik[1][3]);
    btable.dist.push(document.querySelector("#tb52").value=nik[1][4]);
    btable.nextn.push(document.querySelector("#tb13").value=neh[1][0]);
    btable.nextn.push(document.querySelector("#tb23").value=neh[1][1]);
    btable.nextn.push(document.querySelector("#tb33").value=neh[1][2]);
    btable.nextn.push(document.querySelector("#tb43").value=neh[1][3]);
    btable.nextn.push(document.querySelector("#tb53").value=neh[1][4]); 
}

function pC(){
    ctable.dist=[]
    ctable.nextn=[]
    ctable.dist.push(document.querySelector("#tc12").value=nik[2][0]);
    ctable.dist.push(document.querySelector("#tc22").value=nik[2][1]);
    ctable.dist.push(document.querySelector("#tc32").value=nik[2][2]);
    ctable.dist.push(document.querySelector("#tc42").value=nik[2][3]);
    ctable.dist.push(document.querySelector("#tc52").value=nik[2][4]);
    ctable.nextn.push(document.querySelector("#tc13").value=neh[2][0]);
    ctable.nextn.push(document.querySelector("#tc23").value=neh[2][1]);
    ctable.nextn.push(document.querySelector("#tc33").value=neh[2][2]);
    ctable.nextn.push(document.querySelector("#tc43").value=neh[2][3]);
    ctable.nextn.push(document.querySelector("#tc53").value=neh[2][4]); 
}

function pD(){
    dtable.dist=[]
    dtable.nextn=[]
    dtable.dist.push(document.querySelector("#td12").value=nik[3][0]);
    dtable.dist.push(document.querySelector("#td22").value=nik[3][1]);
    dtable.dist.push(document.querySelector("#td32").value=nik[3][2]);
    dtable.dist.push(document.querySelector("#td42").value=nik[3][3]);
    dtable.dist.push(document.querySelector("#td52").value=nik[3][4]);
    dtable.nextn.push(document.querySelector("#td13").value=neh[3][0]);
    dtable.nextn.push(document.querySelector("#td23").value=neh[3][1]);
    dtable.nextn.push(document.querySelector("#td33").value=neh[3][2]);
    dtable.nextn.push(document.querySelector("#td43").value=neh[3][3]);
    dtable.nextn.push(document.querySelector("#td53").value=neh[3][4]); 
}

function pE(){
    etable.dist=[]
    etable.nextn=[]
    etable.dist.push(document.querySelector("#te12").value=nik[4][0]);
    etable.dist.push(document.querySelector("#te22").value=nik[4][1]);
    etable.dist.push(document.querySelector("#te32").value=nik[4][2]);
    etable.dist.push(document.querySelector("#te42").value=nik[4][3]);
    etable.dist.push(document.querySelector("#te52").value=nik[4][4]);
    etable.nextn.push(document.querySelector("#te13").value=neh[4][0]);
    etable.nextn.push(document.querySelector("#te23").value=neh[4][1]);
    etable.nextn.push(document.querySelector("#te33").value=neh[4][2]);
    etable.nextn.push(document.querySelector("#te43").value=neh[4][3]);
    etable.nextn.push(document.querySelector("#te53").value=neh[4][4]); 
}


function fun(){
  
    i=0;
    w=0;
    j=0;
    nik=am;
    neh=ama;
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            if(nik[i][j]=='∞')
            {
                
                nik[i][j]=1000;
            }
            if(mat[i][j]==1){
                k=0
               
                w=parseInt(nik[i][j],10);
                for(k=0;k<5;k++){
                    ll=w+parseInt(nik[j][k],10)
                    if(nik[i][k]>ll){
                        nik[i][k]=ll
                        neh[i][k]=nodes[j]+neh[j][k];
                    }
                }
            }
        }
    }
}

function updateA(){
    fun();
    fun();
    fun();
    fun();
    fun();
    pA();
    document.getElementById('cell3').disabled=false;
}

function updateB(){
    fun();
    fun();
    fun();
    fun();
    fun();
    pB();
    document.getElementById('cell4').disabled=false;
}

function updateC(){
    fun();
    fun();
    fun();
    fun();
    fun();
    pC();
    document.getElementById('cell5').disabled=false;
}

function updateD(){
    fun();
    fun();
    fun();
    fun();
    fun();
    pD();
    document.getElementById('cell6').disabled=false;
}

function updateE(){
    fun();
    fun();
    fun();
    fun();
    fun();
    pE();
    document.getElementById('cell1').disabled=false;
}

async function sleeps(milli_seconds = 2000) {return new Promise(done => setTimeout(() => done(), milli_seconds));}


// async function dim(){
//     var A=atable.nextn;
//     var B=btable.nextn;
//     var C=ctable.nextn;
//     var D=dtable.nextn;
//     var E=etable.nextn;
//     var s =document.querySelector(".input4").value;
//     var d= document.querySelector(".input5").value;
//     if(s=='' && d=='')
//     {
//         Swal.fire({
//             backdrop:false,
//            target: '#roww',
//            width:'380px',
//            position:'center',
//             customClass: {
//               container: 'position-absolute',
//               popup:"swal2-popup"
//             },
//             text:"Source and destination can't be empty.",
//             icon:'info'
//             });
   
//     }
//     else if(s=='' && d!='')
//     {
//         Swal.fire({
//             backdrop:false,
//            target: '#roww',
//            width:'380px',
//            position:'center',
//             customClass: {
//               container: 'position-absolute',
//               popup:"swal2-popup"
//             },
//             text:"Source can't be empty.",
//             icon:'info'
//             });
    
//     }
//     else if(d=='' && s!='')
//     {
//         Swal.fire({
//             backdrop:false,
//            target: '#roww',
//            width:'380px',
//            position:'center',
//             customClass: {
//               container: 'position-absolute',
//               popup:"swal2-popup"
//             },
//             text:"Destination can't be empty.",
//             icon:'info'
//             });
        
//     }
//     else if(p==q)
//     {
//         Swal.fire({
//             backdrop:false,
//            target: '#roww',
//            width:'370px',
//            position:'center',
//             customClass: {
//               container: 'position-absolute',
//               popup:"swal2-popup"
//             },
//             text:"Source and destination can't be same.",
//             icon:'info'
//             });
       
    
//     }
//     else{
//         var p=(document.querySelector(".input4").value).toUpperCase();
//         var q=(document.querySelector(".input5").value).toUpperCase();
//         var mon;
    
//         if(p=='A' || q=='A')
//         {
//             node(x1,y1);
//         }
        
//          if(p=="B" || q=="B")
//         {  
//             node(x2,y2);
//         }
        
//          if(p=="C" || q=="C")
//         {     
//             node(x3,y3);
//         }
        
//         if(p=="D" || q=="D")
//         { 
//             node(x4,y4);
//         }
        
//         if(p=="E" || q=="E")
//         {
//             node(x5,y5);
//         }
//         Swal.fire({
//             backdrop:false,
//            target: '#roww',
//            width:'420px',
//            position:'center',
//            timer:3000,
//             customClass: {
//               container: 'position-absolute',
//               popup:"swal2-popup"
//             },
//             text:"Source and destination node is represented with a red color and intermediate node with a blue color.",
//             icon:'info'
//             });
//         await sleeps(4000);
    
//         p=p.toLowerCase();
//         q=alpha(q);
    
    
//         switch(p){
//                 case "a":
//                     mon=A[q];
//                     break;
//                 case "b":
//                     mon=B[q];
//                     break
//                 case "c":
//                     mon=C[q];
//                     break;
//                 case "d":
//                     mon=D[q];
//                     break
//                 case "e":
//                     mon=E[q];
//                     break;
//             }
//         console.log("11  "+mon); 
//         var length=mon.length;
//         if(length>1)
//         {
//             for(i=0;i<length-1;i++)
//             {
//                 if(mon[i]=="A"){
//                     l3=x1;
//                     l4=y1;
        
//                     node1(x1,y1);
//                 }
//                 else if(mon[i]=="B"){
//                     l3=x2;
//                     l4=y2;
                 
//                     node1(x2,y2);
//                 }
//                 else if(mon[i]=="C"){
//                     l3=x3;
//                     l4=y3;
                  
//                     node1(x3,y3);
//                 }
//                 else if(mon[i]=="D"){
//                     l3=x4;
//                     l4=y4;
                  
//                     node1(x4,y4);
//                 }
//                 else if(mon[i]=="E"){
//                     l3=x5;
//                     l4=y5;
                    
//                     node1(x5,y5);
//                 }
//             }
//         }
        
//         p=alpha(p);
//         mon=mon.split("");
//         le=mon.length;
//         var i=0;
//         console.log("22  "+mon); 
//         newp=mon[0];
//         for(i=0;i<le;i++){
//             console.log("start",p,newp);
//             newp=alpha(mon[i]);
       
//             sleep(1000);
//             line(coordinates[p][0],coordinates[p][1],coordinates[newp][0],coordinates[newp][1]);
//             await sleeps(2000);
//             p=newp;
//             console.log("end",p,newp);
//         }
//         node(coordinates[p][0],coordinates[p][1]);
//     }
    

// }

async function dim() {
    var A = atable.nextn;
    var B = btable.nextn;
    var C = ctable.nextn;
    var D = dtable.nextn;
    var E = etable.nextn;

    // trim + uppercase early
    var s = document.querySelector(".input4").value.trim().toUpperCase();
    var d = document.querySelector(".input5").value.trim().toUpperCase();

    if (s === '' && d === '') {
        Swal.fire({
            backdrop:false, target:'#roww', width:'380px', position:'center',
            customClass:{ container:'position-absolute', popup:"swal2-popup" },
            text:"Source and destination can't be empty.", icon:'info'
        });
        return;
    }
    if (s === '') {
        Swal.fire({
            backdrop:false, target:'#roww', width:'380px', position:'center',
            customClass:{ container:'position-absolute', popup:"swal2-popup" },
            text:"Source can't be empty.", icon:'info'
        });
        return;
    }
    if (d === '') {
        Swal.fire({
            backdrop:false, target:'#roww', width:'380px', position:'center',
            customClass:{ container:'position-absolute', popup:"swal2-popup" },
            text:"Destination can't be empty.", icon:'info'
        });
        return;
    }
    if (s === d) {
        Swal.fire({
            backdrop:false, target:'#roww', width:'370px', position:'center',
            customClass:{ container:'position-absolute', popup:"swal2-popup" },
            text:"Source and destination can't be the same.", icon:'info'
        });
        return;
    }

   
    var p = s;
    var q = d;
    var mon;

    if (p === 'A' || q === 'A') node(x1,y1);
    if (p === 'B' || q === 'B') node(x2,y2);
    if (p === 'C' || q === 'C') node(x3,y3);
    if (p === 'D' || q === 'D') node(x4,y4);
    if (p === 'E' || q === 'E') node(x5,y5);

    Swal.fire({
        backdrop:false, target:'#roww', width:'420px', position:'center',
        timer:3000,
        customClass:{ container:'position-absolute', popup:"swal2-popup" },
        text:"Source and destination node is represented with a red color and intermediate node with a blue color.",
        icon:'info'
    });
    await sleeps(4000);

    // now route finding
    var pLower = p.toLowerCase();
    var qAlpha = alpha(q);

    switch (pLower) {
        case "a": mon = A[qAlpha]; break;
        case "b": mon = B[qAlpha]; break;
        case "c": mon = C[qAlpha]; break;
        case "d": mon = D[qAlpha]; break;
        case "e": mon = E[qAlpha]; break;
    }

    console.log("11", mon); 
    if (mon && mon.length > 1) {
        for (let i = 0; i < mon.length-1; i++) {
            let nodeChar = mon[i];
            switch(nodeChar) {
                case "A": node1(x1,y1); break;
                case "B": node1(x2,y2); break;
                case "C": node1(x3,y3); break;
                case "D": node1(x4,y4); break;
                case "E": node1(x5,y5); break;
            }
        }
    }

    p = alpha(p);
    mon = mon.split("");
    let le = mon.length;
    console.log("22", mon);

    let newp = mon[0];
    for (let i=0; i<le; i++) {
        newp = alpha(mon[i]);
        await sleeps(1000);
        line(coordinates[p][0],coordinates[p][1],coordinates[newp][0],coordinates[newp][1]);
        await sleeps(2000);
        p=newp;
    }
    node(coordinates[p][0],coordinates[p][1]);
}
