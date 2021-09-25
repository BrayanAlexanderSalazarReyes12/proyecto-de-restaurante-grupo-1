/**
 * @name		jQuery carrito de compra
 * @author		Brayan alexander salazar reyes
 * @version 	0.1
 */

var modal = document.getElementById('exampleModalToggle');

function carrito(){
    modal.innerHTML ="<div class='modal-dialog modal-fullscreen'>"+
            "<div class='modal-content'>"+
                "<div class='modal-header'>"+
                    "<h1 class='display-5'>Carrito De Compra</h1>"+
                    "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>"+
                "</div>"+
                    '<section class="carrito row m-0">'+
                        '<div class="carrito-total col-12 col-lg-7 d-flex justify-content-center align-items-center">'+
                            '<div class="btn-pagar d-flex flex-column justify-content-around">'+
                                '<div class="d-flex justify-content-around">'+
                                    '<strong class="display-6">Total</strong>'+ 
                                    '<strong class="display-6">$75,000</strong>'+
                                '</div>'+
                                '<div class="text-center d-flex flex-column">'+
                                    '<button>Pagar ahora</button>'+
                                    '<button>Continuar Comprando</button>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="list-prod col-12 col-lg-5 d-flex flex-column justify-content-center align-items-center">'+
                            '<div class="scroll">'+
                                '<div class="producto">'+
                                    '<img class="col-5" src="img/carrito/img1.jpg" alt="">'+
                                    '<div class="descripcion col-7 position-relative">'+
                                        '<div class="d-flex justify-content-between">'+
                                            '<strong class="titulo col-4">Titulo</strong>'+
                                            '<strong class="precio">$25,000</strong>'+
                                        '</div>'+
                                        '<p class="text-break text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur placeat labore inventore at enim doloribus rem, quasi, dolorem iste sit veritatis quibusdam beatae laboriosam in itaque! Ducimus, perferendis doloribus.</p>'+
                                        '<div class="w-100 d-flex justify-content-around position-absolute" style="bottom: 10px;">'+
                                            '<div class="add_delet">'+
                                                '<small>-</small>'+
                                                '<small>+1</small>'+
                                                '<small>+</small>'+
                                            '</div>'+
                                            '<div class="iconos">'+
                                                '<i class="far fa-trash-alt">'+'</i>'+
                                                '<i class="fas fa-plus">'+'</i>'+
                                            '</div>'+
                                            
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="producto">'+
                                    '<img class="col-5" src="img/carrito/img1.jpg" alt="">'+
                                    '<div class="descripcion col-7 position-relative">'+
                                        '<div class="d-flex justify-content-between">'+
                                            '<strong class="titulo col-4">Titulo</strong>'+
                                            '<strong class="precio">$25,000</strong>'+
                                        '</div>'+
                                        '<p class="text-break text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur placeat labore inventore at enim doloribus rem, quasi, dolorem iste sit veritatis quibusdam beatae laboriosam in itaque! Ducimus, perferendis doloribus.</p>'+
                                        '<div class="w-100 d-flex justify-content-around position-absolute" style="bottom: 10px;">'+
                                            '<div class="add_delet">'+
                                                '<small>-</small>'+
                                                '<small>1</small>'+
                                                '<small>+</small>'+
                                            '</div>'+
                                            '<div class="iconos">'+
                                                '<i class="far fa-trash-alt">'+'</i>'+
                                                '<i class="fas fa-plus">'+'</i>'+
                                            '</div>'+
                                            
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="producto">'+
                                    '<img class="col-5" src="img/carrito/img1.jpg" alt="">'+
                                    '<div class="descripcion col-7 position-relative">'+
                                        '<div class="d-flex justify-content-between">'+
                                            '<strong class="titulo col-4">Titulo</strong>'+
                                            '<strong class="precio">$25,000</strong>'+
                                        '</div>'+
                                        '<p class="text-break text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur placeat labore inventore at enim doloribus rem, quasi, dolorem iste sit veritatis quibusdam beatae laboriosam in itaque! Ducimus, perferendis doloribus.</p>'+
                                        '<div class="w-100 d-flex justify-content-around position-absolute" style="bottom: 10px;">'+
                                            '<div class="add_delet">'+
                                                '<small>-</small>'+
                                                '<small>1</small>'+
                                                '<small>+</small>'+
                                            '</div>'+
                                            '<div class="iconos">'+
                                                '<i class="far fa-trash-alt">'+'</i>'+
                                                '<i class="fas fa-plus">'+'</i>'+
                                            '</div>'+
                                            
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="producto">'+
                                    '<img class="col-5" src="img/carrito/img1.jpg" alt="">'+
                                    '<div class="descripcion col-7 position-relative">'+
                                        '<div class="d-flex justify-content-between">'+
                                            '<strong class="titulo col-4">Titulo</strong>'+
                                            '<strong class="precio">$25,000</strong>'+
                                        '</div>'+
                                        '<p class="text-break text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur placeat labore inventore at enim doloribus rem, quasi, dolorem iste sit veritatis quibusdam beatae laboriosam in itaque! Ducimus, perferendis doloribus.</p>'+
                                        '<div class="w-100 d-flex justify-content-around position-absolute" style="bottom: 10px;">'+
                                            '<div class="add_delet">'+
                                                '<small>-</small>'+
                                                '<small>1</small>'+
                                                '<small>+</small>'+
                                            '</div>'+
                                            '<div class="iconos">'+
                                                '<i class="far fa-trash-alt">'+'</i>'+
                                                '<i class="fas fa-plus">'+'</i>'+
                                            '</div>'+
                                            
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="producto">'+
                                    '<img class="col-5" src="img/carrito/img1.jpg" alt="">'+
                                    '<div class="descripcion col-7 position-relative">'+
                                        '<div class="d-flex justify-content-between">'+
                                            '<strong class="titulo col-4">Titulo</strong>'+
                                            '<strong class="precio">$25,000</strong>'+
                                        '</div>'+
                                        '<p class="text-break text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur placeat labore inventore at enim doloribus rem, quasi, dolorem iste sit veritatis quibusdam beatae laboriosam in itaque! Ducimus, perferendis doloribus.</p>'+
                                        '<div class="w-100 d-flex justify-content-around position-absolute" style="bottom: 10px;">'+
                                            '<div class="add_delet">'+
                                                '<small>-</small>'+
                                                '<small>1</small>'+
                                                '<small>+</small>'+
                                            '</div>'+
                                            '<div class="iconos">'+
                                                '<i class="far fa-trash-alt">'+'</i>'+
                                                '<i class="fas fa-plus">'+'</i>'+
                                            '</div>'+
                                            
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                
                            '</div>'+
                        '</div>'+
                    '</section>'+
            "</div>"+
        "</div>";
}

window.onload = carrito;

