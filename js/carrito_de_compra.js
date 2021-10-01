/**
 * @name		jQuery carrito de compra
 * @author		Brayan alexander salazar reyes
 * @version 	0.1
 */

var modal = document.getElementById("carrito_de_compras");
var list_prod = document.getElementById("productos")
var productos = ['Nombre 1','Nombre 2','Nombre 3','Nombre 4','Nombre 5','Nombre 6'];
var listaP = '';
var cerrar_carrito = document.getElementById("cerrar_carrito");
var parentElement_resta = document.getElementById('resta');
var parentElement_suma = document.getElementById('suma');
var parentElement_eliminar = document.getElementById("eliminar");
var total_cuenta = document.getElementById("total_cuenta");

/*precio total de comida*/
var precio = 0;

/**
 * @cargar_Datos_de_productos
 */
 
var datos_de_producto_compra = JSON.parse(localStorage.getItem("cart"));
var verificar_1 = localStorage.getItem("cart");
    if(verificar_1 != null)
    {
        var cantidad_de_productos_pedidos = Array(datos_de_producto_compra.length);
    }

modal.onclick = function(){
    var verificar = localStorage.getItem("cart");
    if(verificar == null)
    {
        total_cuenta.innerHTML = "<div class='d-flex justify-content-around'>"+
        "<img class='col-5' src='http://127.0.0.1:5500/proyecto-de-restaurante-grupo-1/img/carrito/Carrito_de_compra_vacio.png' alt=''>"+
        "</div>"
        listaP +=
            `
            <div class="producto">
            "<img class='col-5' src='http://127.0.0.1:5500/proyecto-de-restaurante-grupo-1/img/carrito/carro-vacio.png' alt=''>"
            </div>
            
            `;
            list_prod.innerHTML = listaP;
    }else{
        
        for(i=0; i<datos_de_producto_compra.length; i++){
            if(localStorage.getItem("cantidad_pedidos_"+i)==null){
                localStorage.setItem("cantidad_pedidos_"+i,datos_de_producto_compra[i].count);
                cantidad_de_productos_pedidos[i]=datos_de_producto_compra[i].count;
            }else{
                cantidad_de_productos_pedidos[i]=localStorage.getItem("cantidad_pedidos_"+i);
            }
            listaP +=
            `
            <div class="producto" id="producto_${i}">
                <img class="col-5" src="${datos_de_producto_compra[i].img}" alt="">
                <div class="descripcion col-7 position-relative">
                    <div class="d-flex">
                        <strong id="cambiar_tamaño"class="col-6 titulo col-4">${datos_de_producto_compra[i].titulo}</strong>
                        <strong class="col-6 precio text-end">$${datos_de_producto_compra[i].precio}</strong>
                    </div>
                    <p class="text-break text-wrap">${datos_de_producto_compra[i].descripcion}</p>
                    <div class="w-100 d-flex justify-content-around position-absolute" style="bottom: 10px;">
                        <div class="add_delet">
                            <small id="resta_${i+1}">-</small>
                            <small id="cantidad_${i+1}">${cantidad_de_productos_pedidos[i]}</small>
                            <small id="suma_${i+1}">+</small>
                        </div>
                        <div class="iconos">
                            <i class="far fa-trash-alt" id="eliminar_${i+1}"></i>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            `;
            precio = precio + (datos_de_producto_compra[i].precio*cantidad_de_productos_pedidos[i]);
        }
    
        list_prod.innerHTML = listaP;
        localStorage.setItem("precio",precio);
    
        /** 
         * @guardar_operaciones_productos
        */
        var cantidad_productos_resta = new Array(productos.length);
        for(i=0; i<productos.length;i++){
            var cont = i+1;
            cantidad_productos_resta[i] = document.getElementById("resta_"+cont);
        }
        /** 
         * @realizar_operaciones_productos_resta
        */
        var theFirstChild = parentElement_resta.firstChild;
        for(i=0; i<datos_de_producto_compra.length;i++){
            var cont = i+1;
            var g = document.createElement('script');
            g.text = "var precio_nuevo = parseInt(localStorage.getItem('precio'));"+"var a_"+i+" = parseInt(localStorage.getItem('cantidad_pedidos_"+i+"'));"+"resta_"+cont+".onclick = function(){if(a_"+i+">1){a_"+i+" = a_"+i+" - 1; cantidad_"+cont+".innerHTML=a_"+i+";localStorage.setItem('cantidad_pedidos_"+i+"',a_"+i+"); precio_nuevo = precio_nuevo - parseInt(datos_de_producto_compra["+i+"].precio); localStorage.setItem('precio',precio_nuevo);total_de_cuentas_pedidos();}}"        
            parentElement_resta.insertBefore(g,theFirstChild);        
        }
        /** 
         * @realizar_operaciones_productos_suma
        */
        var theFirstChildSuma = parentElement_suma.firstChild;
        
        for(i=0; i<datos_de_producto_compra.length;i++){
            var cont = i+1;
            
            var g = document.createElement('script');
            g.text = "var precio_nuevo = parseInt(localStorage.getItem('precio'));"+"var a_"+i+" = parseInt(localStorage.getItem('cantidad_pedidos_"+i+"'));"+"suma_"+cont+".onclick = function(){if(a_"+i+"<30){a_"+i+" = a_"+i+" + 1; cantidad_"+cont+".innerHTML=a_"+i+";localStorage.setItem('cantidad_pedidos_"+i+"',a_"+i+"); precio_nuevo = precio_nuevo + parseInt(datos_de_producto_compra["+i+"].precio); localStorage.setItem('precio',precio_nuevo);total_de_cuentas_pedidos();}}"        
            parentElement_suma.insertBefore(g,theFirstChildSuma);
            
        }
        /**
         * @eliminar_producto
         */
        var theFirstChildEliminar = parentElement_eliminar.firstChild;
        for(i=0; i<datos_de_producto_compra.length; i++){
            var cont = i+1;
            
            var g = document.createElement('script');
            g.text = "eliminar_"+cont+".onclick = function(){producto_"+i+".remove();datos_de_producto_compra.splice(datos_de_producto_compra["+i+"].id, 1);var guardar = JSON.stringify(datos_de_producto_compra);localStorage.setItem('cart',guardar);localStorage.removeItem('cantidad_pedidos_"+i+"');location.reload(true);}"        
            parentElement_eliminar.insertBefore(g,theFirstChildEliminar);
        }

        total_de_cuentas_pedidos(cantidades_de_productos);
    }
}


function total_de_cuentas_pedidos(){
    total_cuenta.innerHTML = "<div class='d-flex justify-content-around'>"+
        "<strong class='display-6'>Total</strong>"+ 
        "<strong class='display-6'>$"+Intl.NumberFormat("es-US").format(localStorage.getItem("precio"))+"</strong>"+
    "</div>"+
    "<div class='text-center d-flex flex-column'>"+
        "<button data-bs-toggle='modal' data-bs-target='#exampleModal' data-bs-whatever='@mdo'>Pagar ahora</button>"+
        "<button>Continuar Comprando</button>"+
    "</div>"
}

/**
 * @funcionactualizar_carrito_de_Compra
 */
 var cantidades_de_productos = 0;
function actualizar_carrito(){
    for(i=0; i<datos_de_producto_compra.length;i++)
    {
        cantidades_de_productos = cantidades_de_productos + parseInt(localStorage.getItem('cantidad_pedidos_'+i));
    }
    //console.log(cantidades_de_productos);
    localStorage.setItem("cantidad_de_producto_total",cantidades_de_productos);
    //lert("hola mundo");
}

cerrar_carrito.onclick = function(){
    list_prod.innerHTML = "";
    listaP = "";
    parentElement_resta.innerHTML = "<div id='hijo_resta'></div>";    
    parentElement_suma.innerHTML = "<div id='hijo_suma'></div>";
    parentElement_eliminar.innerHTML = "<div id='hijo_eliminar'></div>";
    precio = 0;
    actualizar_carrito();
    location.reload(true);
}









/* 
* *******************************************************************+
* ENVIAR PEDIDO AL CORREO DEL USUARIO CON LA INFORMACION DEL PEDIDO
* *******************************************************************+
*/

const finalizar_compra = document.querySelector("#finalizar_compra")
const btn_disable = document.querySelector("#btn_disable");
const modal_body = document.querySelector("#modal_body");
const loading = document.querySelector("#loading");
finalizar_compra.addEventListener("submit", (e) => {
    e.preventDefault();
    let len = JSON.parse(localStorage.getItem("cart")) 
    console.log(len)
    if(len === null){
        swal("Error !!", "No tienes productos en el carrito de compra, localstorage vacio", "error");
        return 
    }
    btn_disable.disabled = true;
    btn_disable.style.opacity = .4;
    modal_body.style.opacity = .4;
    loading.classList.toggle('d-none');
    const factura_ = factura_productos();
    const nombre_ = document.querySelector("#compra_nombre").value
    const email_  = document.querySelector("#compra_email").value 
    Email.send({
        Host    : "smtp-mail.outlook.com",
        Username: "restaurantonline_@outlook.com",
        Password: "Qwertyuiop2021",
        From    : "restaurantonline_@outlook.com",
        To      : email_,
        Subject : nombre_,
        Body    : factura_,
    }).then(function (message) {
        console.log(message);
        swal("Compra Finalizada!", "Revisar bandeja de entrada, papelera o spam", "success");
        document.querySelector("#compra_nombre").value = ''
        document.querySelector("#compra_email").value = ''
        btn_disable.disabled = false;
        btn_disable.style.opacity = 1;
        modal_body.style.opacity = 1;
        loading.classList.toggle('d-none');
        localStorage.clear();
        location.reload(true);
    });
})



/* 
* Mostrar factura de productos a comprar
*/


const factura_productos = () => {
    let lista_prod = '';
    let suma_total = 0;
    let productos_storage = JSON.parse(localStorage.getItem("cart")) 
    for(i = 0; i < productos_storage.length; i++) {
        const producto = productos_storage[i];
        let total = Number(cantidad_de_productos_pedidos[i] * producto.precio) 
        suma_total += total;
        lista_prod += `
            <tr style='border: 3px solid #d95204'>
                <th style='text-align:center;border: 3px solid #d95204'>${i}</th>
                <td style='text-align:center;border: 3px solid #d95204'>${producto.titulo}</td>
                <td style='text-align:center;border: 3px solid #d95204'>${cantidad_de_productos_pedidos[i]}</td>
                <td style='text-align:center;border: 3px solid #d95204'>${producto.precio}</td>
                <td style='text-align:center;border: 3px solid #d95204'>${total}</td>
            </tr>
        `
    }

    let factura = `
    <h2 style='width: 100%; border: 2px solid #d95204; text-align: center;'>Restaurante online</h2><br>
    <table style='width:100%; border: 2px solid #d95204;'>
        <thead>
            <tr style='border: 2px solid #d95204'>
                <th style='border: 3px solid #d95204'>Id</th>
                <th style='border: 3px solid #d95204'>Nombre</th>
                <th style='border: 3px solid #d95204'>Cantidad</th>
                <th style='border: 3px solid #d95204'>Precio</th>
                <th style='border: 3px solid #d95204'>Total</th>
            </tr>
        </thead>
        <tbody>
            ${lista_prod}
            <tr  style='border: 2px solid #d95204'>
            	<th colspan="4" style='text-align:center;border: 3px solid #d95204'>Suma Total</th>
                <th  style='text-align:center;border: 3px solid #d95204'>${suma_total}</th>
            </tr>
        </tbody>
    </table>
    `;

    return factura
}

