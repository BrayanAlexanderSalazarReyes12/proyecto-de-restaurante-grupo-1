
const cantidad  = 12;
const ensaladas = document.querySelector("#ensaladas")
const sopas     = document.querySelector("#sopas")
const aperitivos= document.querySelector("#aperitivos")
const bebidas   = document.querySelector("#bebidas")
const postres   = document.querySelector("#postres")

// Cantidad de productos en el localstoragen

var count_productos_st = JSON.parse(localStorage.getItem("cart"))
var numero_carrito = 0;

const aumentar_icon_carrito = (carrito) => {
    
    if(carrito != null || carrito.length === 0){
        let num_ = 0
        if (carrito.length > 0){
            carrito.forEach(p => {
                num_ = num_ + p.count;
            });
            document.querySelector("#num_cart")
            .innerHTML = num_;
        }
    }else{
        document.querySelector("#num_cart").classList.add("d-none")
    }
    
}

aumentar_icon_carrito(count_productos_st);


var list_ensaladas  = '';
var list_sopas      = '';
var list_aperitivos = '';
var list_bebidas    = '';
var list_postres    = '';

const data_ensaladas = [
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/ensaladas/en_1.webp',
        id         : 'Ensalada_1'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/ensaladas/en_1.webp',
        id         : 'Ensalada_2'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/ensaladas/en_1.webp',
        id         : 'Ensalada_3'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/ensaladas/en_1.webp',
        id         : 'Ensalada_4'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/ensaladas/en_1.webp',
        id         : 'Ensalada_5'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/ensaladas/en_1.webp',
        id         : 'Ensalada_6'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/ensaladas/en_1.webp',
        id         : 'Ensalada_7'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/ensaladas/en_1.webp',
        id         : 'Ensalada_8'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/ensaladas/en_1.webp',
        id         : 'Ensalada_9'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/ensaladas/en_1.webp',
        id         : 'Ensalada_10'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/ensaladas/en_1.webp',
        id         : 'Ensalada_11'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/ensaladas/en_1.webp',
        id         : 'Ensalada_12'
    },
];

const data_sopas = [
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'sopa_1'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'sopa_2'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'sopa_3'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'sopa_4'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'sopa_5'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'sopa_6'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'sopa_7'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'sopa_8'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'sopa_9'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'sopa_10'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'sopa_11'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'sopa_12'
    },
];

const data_aperitivos = [
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'aperitivo_1'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'aperitivo_2'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'aperitivo_3'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'aperitivo_4'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'aperitivo_5'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'aperitivo_6'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'aperitivo_7'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'aperitivo_8'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'aperitivo_9'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'aperitivo_10'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'aperitivo_11'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 20000,
        img        : 'img/aperitivos/ap_1.webp',
        id         : 'aperitivo_12'
    },
];

const data_postres = [
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/postres/pos_01.webp',
        id         : 'postre_1'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/postres/pos_01.webp',
        id         : 'postre_2'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/postres/pos_01.webp',
        id         : 'postre_3'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/postres/pos_01.webp',
        id         : 'postre_4'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/postres/pos_01.webp',
        id         : 'postre_5'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/postres/pos_01.webp',
        id         : 'postre_6'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/postres/pos_01.webp',
        id         : 'postre_7'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/postres/pos_01.webp',
        id         : 'postre_8'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/postres/pos_01.webp',
        id         : 'postre_9'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/postres/pos_01.webp',
        id         : 'postre_10'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/postres/pos_01.webp',
        id         : 'postre_11'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/postres/pos_01.webp',
        id         : 'postre_12'
    }
    
];

const data_bebidas = [
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/bebidas/bed_1.webp',
        id         : 'bebida_1'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/bebidas/bed_1.webp',
        id         : 'bebida_2'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/bebidas/bed_1.webp',
        id         : 'bebida_3'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/bebidas/bed_1.webp',
        id         : 'bebida_4'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/bebidas/bed_1.webp',
        id         : 'bebida_5'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/bebidas/bed_1.webp',
        id         : 'bebida_6'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/bebidas/bed_1.webp',
        id         : 'bebida_7'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/bebidas/bed_1.webp',
        id         : 'bebida_8'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/bebidas/bed_1.webp',
        id         : 'bebida_9'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/bebidas/bed_1.webp',
        id         : 'bebida_10'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/bebidas/bed_1.webp',
        id         : 'bebida_11'
    },
    {
        titulo     : 'Ensalada poke de atún y algas con aguacate',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde facere dolore sit blanditiis quia dignissimos officia sed dicta amet doloribus tempore reiciendis inventore quaerat odit, fugiat minus ipsa suscipit.',
        precio     : 30000,
        img        : 'img/bebidas/bed_1.webp',
        id         : 'bebida_12'
    }
    
];

/* Ensaladas */
const menu_ensaladas = (data) => {
    
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        list_ensaladas += 
        `
        <div class='col'>
            <div class='card h-100'>
                <img src='${item.img}' alt='...' class='card-img-top '>
                    <div class='card-body'>
                        <h5 class='card-title'>${item.titulo}</h5>
                        <p class='card-text'>${item.descripcion}</p>
                        <p class='card-text'>$ ${item.precio}</p>
                        <button onclick="modal_data(${index},1)" class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModalProducto'>Mas informacion</button>
                    </div>
                </img>
            </div>
        </div>
        `;
        
    }
    ensaladas.innerHTML = list_ensaladas;
}

/* Sopas */
const menu_sopas  = (data)  => {
    for (let index = 0; index < cantidad; index++) {
        const item = data[index];
        list_sopas += 
        `
        <div class='col'>
            <div class='card h-100'>
                <img src='${item.img}' alt='...' class='card-img-top '>
                    <div class='card-body'>
                        <h5 class='card-title'>${item.titulo}</h5>
                        <p class='card-text'>${item.descripcion}</p>
                        <p class='card-text'>${item.precio}</p>
                        <button onclick="modal_data(${index},2)" class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModalProducto'>Mas informacion</button>
                    </div>
                </img>
            </div>
        </div>
        `;
    }
    sopas.innerHTML = list_sopas;
}

/* Aperitivos */

const menu_aperitivos = (data) => {

    for (let index = 0; index < cantidad; index++) {
        const item = data[index];
        list_aperitivos += 
        `
        <div class='col'>
            <div class='card h-100'>
                <img src=${item.img} alt='...' class='card-img-top '>
                    <div class='card-body'>
                        <h5 class='card-title'>${item.titulo}</h5>
                        <p class='card-text'>${item.descripcion}</p>
                        <p class='card-text'>${item.precio}</p>
                        <button onclick="modal_data(${index},3)" class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModalProducto'>Mas informacion</button>
                    </div>
                </img>
            </div>
        </div>
        `;
    }
    aperitivos.innerHTML = list_aperitivos;
}

/* Bebidas */

const menu_bebidas = (data) => {
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        list_bebidas += 
        `
        <div class='col'>
            <div class='card h-100'>
                <img src=${item.img} alt='...' class='card-img-top '>
                    <div class='card-body'>
                        <h5 class='card-title'>${item.titulo}</h5>
                        <p class='card-text'>${item.descripcion}</p>
                        <p class='card-text'>${item.precio}</p>
                        <button onclick="modal_data(${index},4)" class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModalProducto'>Mas informacion</button>
                    </div>
                </img>
            </div>
        </div>
        `;
    }
    bebidas.innerHTML = list_bebidas;
}

/* Postres */

const menu_postres = (data) => {
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        list_postres += 
        `
        <div class='col'>
            <div class='card h-100'>
                <img src=${item.img} alt='...' class='card-img-top '>
                    <div class='card-body'>
                        <h5 class='card-title'>${item.titulo}</h5>
                        <p class='card-text'>${item.descripcion}</p>
                        <p class='card-text'>$ ${item.precio}</p>
                        <button onclick="modal_data(${index},5)" class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModalProducto'>Mas informacion</button>
                    </div>
                </img>
            </div>
        </div>
        `;
    }
    postres.innerHTML = list_postres;
}


menu_ensaladas(data_ensaladas);
menu_sopas(data_sopas);
menu_aperitivos(data_aperitivos)
menu_bebidas(data_bebidas);
menu_postres(data_postres);



/* ABRIR MODAL A PRODUCTO ESPECIFICO */
var modal_titulo      = document.querySelector("#modal_titulo");
var modal_descripcion = document.querySelector("#modal_descripcion");
var modal_precio      = document.querySelector("#modal_precio");
var modal_img         = document.querySelector("#modal_img");
var id_prod           = document.querySelector("#id_prod")

//indice: Es la posicion en el arreglo donde se encuentra el producto
//lista: Tenemos 4 categorias en nuestro menu, cada una tiene un numero que identifica a cada una
// Esta funcion extrae el producto en la categoria especifica
function modal_data(indice,lista){
    
    let data = {
        titulo     : '',
        descripcion: '',
        img        : '',
        precio     : 0,
        id         : ''
    };
    switch (lista) {
        case 1: // Categoria ensaladas
            data = data_ensaladas[indice]
            break;

        case 2: // Categoria sopas
            data = data_sopas[indice]
            break;
        
        case 3: // Categoria aperitivos
                data = data_aperitivos[indice]
            break;
        case 4: // Categoria bebidas
                data = data_bebidas[indice]
            break;
        case 5: // Categoria postres
                data = data_postres[indice]
            break;
    
        default:
            break;
    }

    modal_titulo.innerHTML      = data.titulo
    modal_descripcion.innerHTML = data.descripcion
    modal_img.src               = data.img
    modal_precio.innerHTML      = data.precio
    count_prod.innerHTML        = 1
    id_prod.value               = data.id
    console.log(id_prod.value)
}


/* Modificar cantidad de productos a comprar  */

const mas   = document.querySelector("#mas")
const menos = document.querySelector("#menos")
const count_prod = document.querySelector("#count_prod")

mas.addEventListener("click",() => {
    let count_ = parseInt(count_prod.innerHTML,10)
    count_prod.innerHTML = count_ = count_ + 1
})

menos.addEventListener("click",() => {
    let count_ = parseInt(count_prod.innerHTML,10)
    if(count_ > 0){
        count_prod.innerHTML = count_ = count_ - 1
    }
    
})


/* AGREGAR PRODUCTOS A LOCALSTORAGE */

const add_cart = document.querySelector("#add_cart")

add_cart.addEventListener("click", () =>{
    
    let productos = []
    let producto = {
        titulo     : modal_titulo.innerHTML,
        descripcion: modal_descripcion.innerHTML,
        img        : modal_img.src,
        precio     : parseInt(modal_precio.innerHTML,10),
        count      : parseInt(count_prod.innerHTML,10),
        id         : id_prod.value
    }

    let localS = localStorage.getItem("cart")
    if(localS === null){
        productos.push(producto)
        localStorage.setItem("cart",JSON.stringify(productos))
        location.reload(true);
    }else{
        /* Verificar si el producto existe en el localstorage para evitar guardar duplicas*/
        const cart_localstorage = JSON.parse(localS); // Convierto de string a JSON
        let existe_ = cart_localstorage.filter(p => p.id === producto.id); // Verifico si el producto existe en localstorage
        if(existe_.length > 0){ // verifico si encontro un producto repetido
            //Si encuentra un producto repetido aumento el numero de productos que quiere
            let add_storag = cart_localstorage.filter(p => p.id !== producto.id); // Obtengo todos los datos menos el producto repetido para agregar el actualizado
            existe_[0].count = existe_[0].count + producto.count // sumo la cantidad de productos que tenia con la nueva que quiere ingresar
            add_storag.push(...existe_) // Agregamos el producto actualizado
            productos.push(...add_storag) // Agrego al arreglo todos los datos menos el producto duplicado
            localStorage.setItem("cart",JSON.stringify(productos))
            location.reload(true);
        }else{
            // Si no encuentra ningun producto duplicado Lo agrego al arreglo y actualizo el storage
            productos.push(...cart_localstorage)
            productos.push(producto)
            localStorage.setItem("cart",JSON.stringify(productos))
            location.reload(true);
        }
        
        let cart = JSON.parse(localStorage.getItem("cart"))
        aumentar_icon_carrito(cart)
    }



})

