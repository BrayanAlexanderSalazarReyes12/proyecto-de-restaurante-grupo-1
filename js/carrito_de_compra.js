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
var total_cuenta = document.getElementById("total_cuenta");

/*precio total de comida*/
var precio = 0;

modal.onclick = function(){
    for(i=0; i<productos.length; i++){
        var producto = productos[i];
        listaP +=
        `
        <div class="producto">
            <img class="col-5" src="img/carrito/img1.jpg" alt="">
            <div class="descripcion col-7 position-relative">
                <div class="d-flex">
                    <strong class="col-6 titulo col-4">${producto}</strong>
                    <strong class="col-6 precio text-end">$25,000</strong>
                </div>
                <p class="text-break text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur placeat labore inventore at enim doloribus rem, quasi, dolorem iste sit veritatis quibusdam beatae laboriosam in itaque! Ducimus, perferendis doloribus.</p>
                <div class="w-100 d-flex justify-content-around position-absolute" style="bottom: 10px;">
                    <div class="add_delet">
                        <small id="resta_${i+1}">-</small>
                        <small id="cantidad_${i+1}">1</small>
                        <small id="suma_${i+1}">+</small>
                    </div>
                    <div class="iconos">
                        <i class="far fa-trash-alt"></i>
                        <i class="fas fa-plus"></i>
                    </div>
                    
                </div>
            </div>
        </div>
        
        `;
        precio = precio + 25000;
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
    for(i=0; i<productos.length;i++){
        var cont = i+1;
        var g = document.createElement('script');
        g.text = "var precio_nuevo = parseInt(localStorage.getItem('precio'));"+"var a_"+cont+" = parseInt(localStorage.getItem('cantidad_pedidos_"+cont+"'));"+"resta_"+cont+".onclick = function(){if(a_"+cont+">1){a_"+cont+" = a_"+cont+" - 1; cantidad_"+cont+".innerHTML=a_"+cont+";localStorage.setItem('cantidad_pedidos_"+cont+"',a_"+cont+"); precio_nuevo = precio_nuevo - 25000; localStorage.setItem('precio',precio_nuevo);total_de_cuentas_pedidos();}}"        
        parentElement_resta.insertBefore(g,theFirstChild);        
    }
    /** 
     * @realizar_operaciones_productos_suma
    */
    var theFirstChildSuma = parentElement_suma.firstChild;
    for(i=0; i<productos.length;i++){
        var cont = i+1;
        localStorage.setItem("cantidad_pedidos_"+cont,1);
        var g = document.createElement('script');
        g.text = "var precio_nuevo = parseInt(localStorage.getItem('precio'));"+"var a_"+cont+" = parseInt(localStorage.getItem('cantidad_pedidos_"+cont+"'));"+"suma_"+cont+".onclick = function(){if(a_"+cont+"<30){a_"+cont+" = a_"+cont+" + 1; cantidad_"+cont+".innerHTML=a_"+cont+";localStorage.setItem('cantidad_pedidos_"+cont+"',a_"+cont+"); precio_nuevo = precio_nuevo + 25000; localStorage.setItem('precio',precio_nuevo);total_de_cuentas_pedidos();}}"        
        parentElement_suma.insertBefore(g,theFirstChildSuma);        
    }
    
    total_de_cuentas_pedidos();
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

cerrar_carrito.onclick = function(){
    list_prod.innerHTML = "";
    listaP = "";
    parentElement_resta.innerHTML = "<div id='hijo_resta'></div>";    
    parentElement_suma.innerHTML = "<div id='hijo_suma'></div>";
    precio = 0;
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
        let total = Number(producto.count * producto.precio) 
        suma_total += total;
        lista_prod += `
            <tr style='border: 3px solid #d95204'>
                <th style='text-align:center;border: 3px solid #d95204'>${i}</th>
                <td style='text-align:center;border: 3px solid #d95204'>${producto.titulo}</td>
                <td style='text-align:center;border: 3px solid #d95204'>${producto.count}</td>
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

