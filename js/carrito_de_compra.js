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
    }
    list_prod.innerHTML = listaP;
   
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
        g.text = "var a_"+cont+" = parseInt(localStorage.getItem('cantidad_pedidos_"+cont+"'));"+"resta_"+cont+".onclick = function(){if(a_"+cont+">1){a_"+cont+" = a_"+cont+" - 1; cantidad_"+cont+".innerHTML=a_"+cont+";localStorage.setItem('cantidad_pedidos_"+cont+"',a_"+cont+"); }}"        
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
        g.text = "var a_"+cont+" = parseInt(localStorage.getItem('cantidad_pedidos_"+cont+"'));"+"suma_"+cont+".onclick = function(){if(a_"+cont+"<30){a_"+cont+" = a_"+cont+" + 1; cantidad_"+cont+".innerHTML=a_"+cont+";localStorage.setItem('cantidad_pedidos_"+cont+"',a_"+cont+");}}"        
        parentElement_suma.insertBefore(g,theFirstChildSuma);        
    }
}

cerrar_carrito.onclick = function(){
    list_prod.innerHTML = "";
    listaP = "";
    parentElement_resta.innerHTML = "<div id='hijo_resta'></div>";    
    parentElement_suma.innerHTML = "<div id='hijo_suma'></div>";
}




/* 
* ENVIAR PEDIDO AL CORREO DEL USUARIO CON LA INFORMACION DEL PEDIDO
*/

const finalizar_compra = document.querySelector("#finalizar_compra")

finalizar_compra.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre_ = document.querySelector("#compra_nombre") 

    console.log("Homa")
    let correo_data = {
        from: document.querySelector("#compra_email").value,
        subject: `${nombre_.value} Restaurantes Online Te hace entrega de tu factura`,
        body: 'Lista de porductos consumidos'
    }

    enviar(correo_data)
})

const enviar = (data) => {
    Email.send({
        Host     : "smtp.elasticemail.com",
        Username : "restauranteOnline",
        Password : "Qwertyuiop2021",
        To       : 'restauranteOnline2021@outlook.es',
        From     : 'vasquez092021@outlook.es',
        Subject  : data.subject,
        Body     : data.body
    }).then(
        message => console.log(message)
    );
}
