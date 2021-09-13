/**
 * @name		jQuery menu
 * @author		Brayan alexander salazar reyes
 * @version 	1.0
 */

 import {json} from  "./guardar_info.js";

var modal_1 = document.getElementById('modal_1');
var modal_2 = document.getElementById('modal_2');
var modal_3 = document.getElementById('modal_3');
var modal_4 = document.getElementById('modal_4');
var modal_5 = document.getElementById('modal_5');
var modal_6 = document.getElementById('modal_6');
var modal_7 = document.getElementById('modal_7');
var modal_8 = document.getElementById('modal_8');
var modal_9 = document.getElementById('modal_9');
var modal_10 = document.getElementById('modal_10');
var modal_11 = document.getElementById('modal_11');
var modal_12 = document.getElementById('modal_12');
/*DATOS ENSALADAS*/

window.ensalada_1 = function ensalada_1(){
    modal_1.innerHTML="<div class='modal' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
    "<div class='modal-dialog'>"+
      "<div class='modal-content'>"+
        "<div class='modal-header'>"+
          "<h5 class='modal-title'>"+json.ensaladas[0].titulo+"</h5>"+
          "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>"+
        "</div>"+
        "<div class='modal-body'>"+
          "<img src='img/ensaladas/en_1.webp' alt='...' class='card-img-top '>"+
          "<p>"+json.ensaladas[0].descripcion+"</p>"+
        "</div>"+
        "<div class='modal-footer'>"+
          "<button type='button' class='btn btn-primary'>Pedidos</button>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>";
  modal_2.innerHTML="<div class='modal' id='exampleModal_1' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
    "<div class='modal-dialog'>"+
      "<div class='modal-content'>"+
        "<div class='modal-header'>"+
          "<h5 class='modal-title'>"+json.ensaladas[1].titulo+"</h5>"+
          "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>"+
        "</div>"+
        "<div class='modal-body'>"+
          "<img src='img/ensaladas/en_2.webp' alt='...' class='card-img-top '>"+
          "<p>"+json.ensaladas[1].descripcion+"</p>"+
        "</div>"+
        "<div class='modal-footer'>"+
            "<button type='button' class='btn btn-primary'>Pedidos</button>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>";
  modal_3.innerHTML="<div class='modal' id='exampleModal_2' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
    "<div class='modal-dialog'>"+
      "<div class='modal-content'>"+
        "<div class='modal-header'>"+
          "<h5 class='modal-title'>"+json.ensaladas[2].titulo+"</h5>"+
          "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>"+
        "</div>"+
        "<div class='modal-body'>"+
          "<img src='img/ensaladas/en_3.webp' alt='...' class='card-img-top '>"+
          "<p>"+json.ensaladas[2].descripcion+"</p>"+
        "</div>"+
        "<div class='modal-footer'>"+
            "<button type='button' class='btn btn-primary'>Pedidos</button>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>";
  modal_4.innerHTML="<div class='modal' id='exampleModal_3' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
    "<div class='modal-dialog'>"+
      "<div class='modal-content'>"+
        "<div class='modal-header'>"+
          "<h5 class='modal-title'>"+json.ensaladas[3].titulo+"</h5>"+
          "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>"+
        "</div>"+
        "<div class='modal-body'>"+
          "<img src='img/ensaladas/en_4.webp' alt='...' class='card-img-top '>"+
          "<p>"+json.ensaladas[3].descripcion+"</p>"+
        "</div>"+
        "<div class='modal-footer'>"+
            "<button type='button' class='btn btn-primary'>Pedidos</button>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>";
  modal_5.innerHTML="<div class='modal' id='exampleModal_4' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
    "<div class='modal-dialog'>"+
      "<div class='modal-content'>"+
        "<div class='modal-header'>"+
          "<h5 class='modal-title'>"+json.ensaladas[4].titulo+"</h5>"+
          "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>"+
        "</div>"+
        "<div class='modal-body'>"+
          "<img src='img/ensaladas/en_5.webp' alt='...' class='card-img-top '>"+
          "<p>"+json.ensaladas[4].descripcion+"</p>"+
        "</div>"+
        "<div class='modal-footer'>"+
            "<button type='button' class='btn btn-primary'>Pedidos</button>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>";
  modal_6.innerHTML="<div class='modal' id='exampleModal_5' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
    "<div class='modal-dialog'>"+
      "<div class='modal-content'>"+
        "<div class='modal-header'>"+
          "<h5 class='modal-title'>"+json.ensaladas[5].titulo+"</h5>"+
          "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>"+
        "</div>"+
        "<div class='modal-body'>"+
          "<img src='img/ensaladas/en_6.webp' alt='...' class='card-img-top '>"+
          "<p>"+json.ensaladas[5].descripcion+"</p>"+
        "</div>"+
        "<div class='modal-footer'>"+
            "<button type='button' class='btn btn-primary'>Pedidos</button>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>";
  modal_7.innerHTML="<div class='modal' id='exampleModal_6' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
    "<div class='modal-dialog'>"+
      "<div class='modal-content'>"+
        "<div class='modal-header'>"+
          "<h5 class='modal-title'>"+json.ensaladas[6].titulo+"</h5>"+
          "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>"+
        "</div>"+
        "<div class='modal-body'>"+
          "<img src='img/ensaladas/en_7.webp' alt='...' class='card-img-top '>"+
          "<p>"+json.ensaladas[6].descripcion+"</p>"+
        "</div>"+
        "<div class='modal-footer'>"+
            "<button type='button' class='btn btn-primary'>Pedidos</button>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>";
  modal_8.innerHTML="<div class='modal' id='exampleModal_8' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
    "<div class='modal-dialog'>"+
      "<div class='modal-content'>"+
        "<div class='modal-header'>"+
          "<h5 class='modal-title'>"+json.ensaladas[7].titulo+"</h5>"+
          "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>"+
        "</div>"+
        "<div class='modal-body'>"+
          "<img src='img/ensaladas/en_8.webp' alt='...' class='card-img-top '>"+
          "<p>"+json.ensaladas[7].descripcion+"</p>"+
        "</div>"+
        "<div class='modal-footer'>"+
            "<button type='button' class='btn btn-primary'>Pedidos</button>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>";
  modal_9.innerHTML="<div class='modal' id='exampleModal_9' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
    "<div class='modal-dialog'>"+
      "<div class='modal-content'>"+
        "<div class='modal-header'>"+
          "<h5 class='modal-title'>"+json.ensaladas[8].titulo+"</h5>"+
          "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>"+
        "</div>"+
        "<div class='modal-body'>"+
          "<img src='img/ensaladas/en_9.webp' alt='...' class='card-img-top '>"+
          "<p>"+json.ensaladas[8].descripcion+"</p>"+
        "</div>"+
        "<div class='modal-footer'>"+
            "<button type='button' class='btn btn-primary'>Pedidos</button>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>";
  modal_10.innerHTML="<div class='modal' id='exampleModal_10' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
    "<div class='modal-dialog'>"+
      "<div class='modal-content'>"+
        "<div class='modal-header'>"+
          "<h5 class='modal-title'>"+json.ensaladas[9].titulo+"</h5>"+
          "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>"+
        "</div>"+
        "<div class='modal-body'>"+
          "<img src='img/ensaladas/en_10.webp' alt='...' class='card-img-top '>"+
          "<p>"+json.ensaladas[9].descripcion+"</p>"+
        "</div>"+
        "<div class='modal-footer'>"+
            "<button type='button' class='btn btn-primary'>Pedidos</button>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>";
  modal_11.innerHTML="<div class='modal' id='exampleModal_11' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
    "<div class='modal-dialog'>"+
      "<div class='modal-content'>"+
        "<div class='modal-header'>"+
          "<h5 class='modal-title'>"+json.ensaladas[10].titulo+"</h5>"+
          "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>"+
        "</div>"+
        "<div class='modal-body'>"+
          "<img src='img/ensaladas/en_11.webp' alt='...' class='card-img-top '>"+
          "<p>"+json.ensaladas[10].descripcion+"</p>"+
        "</div>"+
        "<div class='modal-footer'>"+
            "<button type='button' class='btn btn-primary'>Pedidos</button>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>";
  modal_12.innerHTML="<div class='modal' id='exampleModal_12' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
    "<div class='modal-dialog'>"+
      "<div class='modal-content'>"+
        "<div class='modal-header'>"+
          "<h5 class='modal-title'>"+json.ensaladas[12].titulo+"</h5>"+
          "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>"+
        "</div>"+
        "<div class='modal-body'>"+
          "<img src='img/ensaladas/en_12.webp' alt='...' class='card-img-top '>"+
          "<p>"+json.ensaladas[12].descripcion+"</p>"+
        "</div>"+
        "<div class='modal-footer'>"+
            "<button type='button' class='btn btn-primary'>Pedidos</button>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>";
}