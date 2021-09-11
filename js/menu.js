/**
 * @name		jQuery menu
 * @author		Brayan alexander salazar reyes
 * @version 	1.0
 */

var menu_1=document.getElementById('menu_1'),menu_2=document.getElementById('menu_2'),menu_3=document.getElementById('menu_3');
var menu_4=document.getElementById('menu_4'),menu_5=document.getElementById('menu_5'),menu_6=document.getElementById('menu_6');
var menu_muestra_1=document.getElementById('menu_muestra_1');
menu_1.onclick = function(){
    menu_1.innerHTML ="<a href='#prueba1' class='nav-link active'>prueba1</a>";
    menu_2.innerHTML ="<a href='#prueba2' class='nav-link'>prueba2</a>";
    menu_3.innerHTML ="<a href='#prueba3' class='nav-link'>prueba3</a>";
    menu_4.innerHTML ="<a href='#prueba4' class='nav-link'>prueba4</a>";
    menu_5.innerHTML ="<a href='#prueba5' class='nav-link'>prueba5</a>";
    menu_6.innerHTML ="<a href='#prueba6' class='nav-link'>prueba6</a>";
    //menu_1 llamado
    menu_muestra_1.innerHTML="<div class='row row-cols-1 row-cols-md-3 g-4'><div class='col'><div class='card h-100'><img src='...' alt='...' class='card-img-top'><div class='card-body'><h5 class='card-title'>.....</h5><p class='card-text'>.......</p></div></img></div></div><div class='col'><div class='card h-100'><img src='...' alt='...' class='card-img-top'><div class='card-body'><h5 class='card-title'>..........</h5><p class='card-text'>............</p></div></img></div></div><div class='col'><div class='card h-100'><img src='...' alt='...' class='card-img-top'><div class='card-body'><h5 class='card-title'>..........</h5><p class='card-text'>............</p></div></img></div></div><div class='col'><div class='card h-100'><img src='...' alt='...' class='card-img-top'><div class='card-body'><h5 class='card-title'>..........</h5><p class='card-text'>............</p></div></img></div></div><div class='col'><div class='card h-100'><img src='...' alt='...' class='card-img-top'><div class='card-body'><h5 class='card-title'>..........</h5><p class='card-text'>............</p></div></img></div></div><div class='col'><div class='card h-100'><img src='...' alt='...' class='card-img-top'><div class='card-body'><h5 class='card-title'>..........</h5><p class='card-text'>............</p></div></img></div></div><div class='col'><div class='card h-100'><img src='...' alt='...' class='card-img-top'><div class='card-body'><h5 class='card-title'>..........</h5><p class='card-text'>............</p></div></img></div></div><div class='col'><div class='card h-100'><img src='...' alt='...' class='card-img-top'><div class='card-body'><h5 class='card-title'>..........</h5><p class='card-text'>............</p></div></img></div></div><div class='col'><div class='card h-100'><img src='...' alt='...' class='card-img-top'><div class='card-body'><h5 class='card-title'>..........</h5><p class='card-text'>............</p></div></img></div></div><div class='col'><div class='card h-100'><img src='...' alt='...' class='card-img-top'><div class='card-body'><h5 class='card-title'>..........</h5><p class='card-text'>............</p></div></img></div></div><div class='col'><div class='card h-100'><img src='...' alt='...' class='card-img-top'><div class='card-body'><h5 class='card-title'>..........</h5><p class='card-text'>............</p></div></img></div></div><div class='col'><div class='card h-100'><img src='...' alt='...' class='card-img-top'><div class='card-body'><h5 class='card-title'>..........</h5><p class='card-text'>............</p></div></img></div></div></div>"
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