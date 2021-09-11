/**
 * @name		jQuery menu
 * @author		Brayan alexander salazar reyes
 * @version 	1.0
 */

var menu_1=document.getElementById('menu_1'),menu_2=document.getElementById('menu_2'),menu_3=document.getElementById('menu_3');
var menu_4=document.getElementById('menu_4'),menu_5=document.getElementById('menu_5'),menu_6=document.getElementById('menu_6');
var menu_muestra_1=document.getElementById('menu_muestra_1');
/*titulos ensaladas*/
var tit_en=['Ensalada poke de atún y algas con aguacate','Panzanella italiana','Ensalada caprese de pasta','Ensalada niçoise',
'Ensalada Biof rumana','Ensalada griega','Ensalada alemana de patata o kartoffelsalat','Namasu de zanahoria y nabo'
,'Coleslaw o ensalada de col','Ensalada de patata a la francesa','Laab gai tailandés','Tabulé libanés'];

function mostrar_ensaldas(){
    document.write("hola mundo");
}

menu_1.onclick = function(){
    menu_1.innerHTML ="<a href='#ensaladas' class='nav-link active'>ensaladas</a>";
    menu_2.innerHTML ="<a href='#prueba2' class='nav-link'>prueba2</a>";
    menu_3.innerHTML ="<a href='#prueba3' class='nav-link'>prueba3</a>";
    menu_4.innerHTML ="<a href='#prueba4' class='nav-link'>prueba4</a>";
    menu_5.innerHTML ="<a href='#prueba5' class='nav-link'>prueba5</a>";
    menu_6.innerHTML ="<a href='#prueba6' class='nav-link'>prueba6</a>";
    //menu_1 llamado
    menu_muestra_1.innerHTML="<div class='row row-cols-1 row-cols-md-3 g-4'>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_1.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[0]+"</h5>"+
                    "<p class='card-text'>.......</p>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_2.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[1]+"</h5>"+
                    "<p class='card-text'>.......</p>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_3.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[2]+"</h5>"+
                    "<p class='card-text'>.......</p>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_4.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[3]+"</h5>"+
                    "<p class='card-text'>.......</p>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_5.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[4]+"</h5>"+
                    "<p class='card-text'>.......</p>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_6.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[5]+"</h5>"+
                    "<p class='card-text'>.......</p>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_7.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[6]+"</h5>"+
                    "<p class='card-text'>.......</p>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_8.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[7]+"</h5>"+
                    "<p class='card-text'>.......</p>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_9.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[8]+"</h5>"+
                    "<p class='card-text'>.......</p>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_10.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[9]+"</h5>"+
                    "<p class='card-text'>.......</p>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_11.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[10]+"</h5>"+
                    "<p class='card-text'>.......</p>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_12.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[11]+"</h5>"+
                    "<p class='card-text'>.......</p>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
"</div>"
}

menu_2.onclick = function(){
    menu_1.innerHTML ="<a href='#prueba1' class='nav-link'>prueba1</a>";
    menu_2.innerHTML ="<a href='#prueba2' class='nav-link active'>prueba2</a>";
    menu_3.innerHTML ="<a href='#prueba3' class='nav-link'>prueba3</a>";
    menu_4.innerHTML ="<a href='#prueba4' class='nav-link'>prueba4</a>";
    menu_5.innerHTML ="<a href='#prueba5' class='nav-link'>prueba5</a>";
    menu_6.innerHTML ="<a href='#prueba6' class='nav-link'>prueba6</a>";
}

menu_3.onclick = function(){
    menu_1.innerHTML ="<a href='#prueba1' class='nav-link'>prueba1</a>";
    menu_2.innerHTML ="<a href='#prueba2' class='nav-link'>prueba2</a>";
    menu_3.innerHTML ="<a href='#prueba3' class='nav-link active'>prueba3</a>";
    menu_4.innerHTML ="<a href='#prueba4' class='nav-link'>prueba4</a>";
    menu_5.innerHTML ="<a href='#prueba5' class='nav-link'>prueba5</a>";
    menu_6.innerHTML ="<a href='#prueba6' class='nav-link'>prueba6</a>";
}

menu_4.onclick = function(){
    menu_1.innerHTML ="<a href='#prueba1' class='nav-link'>prueba1</a>";
    menu_2.innerHTML ="<a href='#prueba2' class='nav-link'>prueba2</a>";
    menu_3.innerHTML ="<a href='#prueba3' class='nav-link'>prueba3</a>";
    menu_4.innerHTML ="<a href='#prueba4' class='nav-link active'>prueba4</a>";
    menu_5.innerHTML ="<a href='#prueba5' class='nav-link'>prueba5</a>";
    menu_6.innerHTML ="<a href='#prueba6' class='nav-link'>prueba6</a>";
}

menu_5.onclick = function(){
    menu_1.innerHTML ="<a href='#prueba1' class='nav-link'>prueba1</a>";
    menu_2.innerHTML ="<a href='#prueba2' class='nav-link'>prueba2</a>";
    menu_3.innerHTML ="<a href='#prueba3' class='nav-link'>prueba3</a>";
    menu_4.innerHTML ="<a href='#prueba4' class='nav-link'>prueba4</a>";
    menu_5.innerHTML ="<a href='#prueba5' class='nav-link  active'>prueba5</a>";
    menu_6.innerHTML ="<a href='#prueba6' class='nav-link'>prueba6</a>";
}

menu_6.onclick = function(){
    menu_1.innerHTML ="<a href='#prueba1' class='nav-link'>prueba1</a>";
    menu_2.innerHTML ="<a href='#prueba2' class='nav-link'>prueba2</a>";
    menu_3.innerHTML ="<a href='#prueba3' class='nav-link'>prueba3</a>";
    menu_4.innerHTML ="<a href='#prueba4' class='nav-link'>prueba4</a>";
    menu_5.innerHTML ="<a href='#prueba5' class='nav-link'>prueba5</a>";
    menu_6.innerHTML ="<a href='#prueba6' class='nav-link  active'>prueba6</a>";
}