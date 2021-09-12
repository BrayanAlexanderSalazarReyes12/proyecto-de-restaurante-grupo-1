/**
 * @name		jQuery menu
 * @author		Brayan alexander salazar reyes
 * @version 	1.0
 */

var menu_1=document.getElementById('menu_1'),menu_2=document.getElementById('menu_2'),menu_3=document.getElementById('menu_3');
var menu_4=document.getElementById('menu_4'),menu_5=document.getElementById('menu_5'),menu_6=document.getElementById('menu_6');
var menu_muestra_1=document.getElementById('menu_muestra_1');
var menu_muestra_2=document.getElementById('menu_muestra_2');
var menu_muestra_3=document.getElementById('menu_muestra_3');
var menu_muestra_4=document.getElementById('menu_muestra_4');
var menu_muestra_5=document.getElementById('menu_muestra_5');
/*DATOS ENSALADAS*/
var tit_en=['Ensalada poke de atún y algas con aguacate','Panzanella italiana','Ensalada caprese de pasta','Ensalada niçoise',
'Ensalada Biof rumana','Ensalada griega','Ensalada alemana de patata o kartoffelsalat','Namasu de zanahoria y nabo'
,'Coleslaw o ensalada de col','Ensalada de patata a la francesa','Laab gai tailandés','Tabulé libanés'];
var des_bre_en=['La gran contribución hawaiana (quién estuviera ahora en Hawai) es el famoso poke, popularizado en los últimos años como ejemplo de comida rápida pero sana.','Perfecta para usar trozos de pan que tengáis por casa y para sacar todo el potencial de esos tomates cherry que tan buen resultado dan.','Otro icono de la frescura italiana que podemos resolver con sólo un par de ingredientes: mozzarella y tomate.','El estilo provenzal de la ensalada niçoise (o nizarda) y todo su sabor se cuela en casa con esta receta en la que encontramos huerta y también un puntito salino.',
'Si creías que la ensaladilla rusa no podía mejorarse tenemos una buena noticia para ti, o al menos, para darle un toque distinto','El Mediterráneo nos sirve de ejemplo para irradiar frescura desde sus platos y en este caso hacemos una versión griega donde no falta el queso feta y la aceituna negra.','Una de las guarniciones más populares de la cocina alemana y tan sencilla que pronto se convertirá en uno de tus básicos. Es una forma fácil y rápida de tomar patata, prescindiendo además de elaboraciones que aporten más grasa.','Aunque el namasu es un plato que se suele tomar en Año Nuevo, recurrir a esta receta de ensalada de encurtidos en verano nos parece una opción ideal.',
'El contrapunto verde que toda gran barbacoa americana merece y que puedes utilizar en casa con tus asados o con tus parrilladas.','Convertimos a la patata en protagonista con este plato de inspiración francesa, aportando hidratos y energía y demostrando que una ensalada puede ser muy sustanciosa.','Cambiamos de registro y nos vamos a Asia para descubrir formas frescas y especiadas de convertir el pollo en el artista principal de una ensalada magnífica.','Fresca y oriental, esta receta es un clásico del Líbano pero es fácil encontrarla en otros países de Oriente Medio como Jordania, Turquía o Palestina.'];
var pre_en=['$45.000','$50.000','$55.000','$70.000',
'$50.000','$80.000','$85.000','$100.000',
'$35.000','$15.000','$150.000','$200.000'];
/*DATOS SOPAS*/
var tit_sop=['Sopa de galets con jamón y queso de oveja','Sopa de tofu, trigo tierno y setas','Sopa de pollo y fideos','Sopa de miso con fideos soba, pollo y calabaza',
'Sopa de cebolla, rape y almendras','Sopa de trigo tierno, pollo, setas y trufa negra','Sopa de pavo al curry','Sopa de puerros y nabos con aceite de jengibre',
'Sopa de cebada perlada y setas','Wonton de pollo con sopa de miso','Sopa de atún, cebolla frita y nori','Sopa de setas y jamón'];
var des_bre_sop=['Sigue siendo una sopa sencilla, se elabora a partir de un caldo de jamón casero para el que lo único que necesitamos es agua y un hueso de jamón, algún puerro o cebolla si se desea.','Una receta vegetariana con caldo de verduras, pollo o jamon','No es una Sopa de pollo y fideos tradicional, está influenciada por la cocina asiática, es del estilo del Curry Laksa, sopas que se elaboran con leche de coco, curry y fideos de arroz principalmente','Es esta Sopa de miso con fideos soba, pollo y calabaza, un gustazo para el paladar sea en la comida o en la cena, y aunque hay que preparar primero los caldos, son muy fáciles de hacer y los tiempos son reducidos.',
'Tenemos una nueva versión de la sopa de cebolla de la que ya conocéis una aproximación','El trigo tierno se hace con una breve cocción, y partimos de un caldo ya elaborado, en este caso de pollo.','Esta Sopa de pavo al curry es una especie de curry laksa. Nos encantan este tipo de sopas con leche de coco y curry, hacemos a nuestro antojo muchas variantes alternando carnes, pescados, pastas y otros cereales, hortalizas','Una Sopa de puerros y nabos con aceite de jengibre es un entrante ligero, nutritivo y delicioso. Pocos ingredientes, muy humildes además, pero nos permiten disfrutar de un plato que nos tienta a repetir.',
'Esta Sopa de cebada perlada y setas, además de ser un plato reconfortante, es muy saludable y está sabrosísimo.','Una vez preparada la pasta con la que hemos elaborado el Wonton frito con sésamo, reservamos unas placas para hacer este delicioso Wonton de pollo con sopa de miso','Una sopa de pescado diferente, y además que la sorpresa sea satisfactoria, nos gustaría que lo probarais con esta Sopa de atún, cebolla frita y nori, un entrante muy saludable, nutritivo y sabroso, mostrando una plausible elegancia en el paladar.','Nosotros solemos hacer dos tipos de caldos de jamón, uno con hueso sólo y otro con verduras, para esta Sopa de setas recomendamos el primero.'];
var pre_sop=['$15.000','$25.000','$35.000','$50.000',
'$45.000','$80.000','$85.000','$100.000',
'$35.000','$55.000','$10.000','$25.000'];
/*DATOS APERITIVOS*/
var tit_ap=['Salmón con piña, aguacate y mostaza','Burrata con tomates asados y berenjena encurtida','Salsa de mango estilo mexicano','Sandía, aguacate, rúcula y semillas',
'Guacamole con manzana verde y anchoas','Ensaladilla de gambas y pepino con salsa de yogur','Tartar de gambas con pimientos baby','Carpaccio de buey con mozzarella marinada',
'Nachos con carne, aguacate y melocotón','Cogollos con sardinas anchoadas y queso Idiazábal ahumado','Pimientos verdes (no) fritos con bacon','Salpicón de pulpo'];
var des_bre_ap=['unas cucharillas de Salmón con piña, aguacate y mostaza','Burrata con tomates asados y berenjena encurtida los solemos hacer para dos, pero debemos decir que también hay muchas ocasiones en las que nos hacemos un entrante con una burrata por persona.','Y es que la salsa de mango mexicana es una delicia dulce y picante que conquista a todos.','Debemos decir que la combinación de Sandía, aguacate, rúcula y semillas la realizamos de vez en cuando para prepararnos una ensalada como primer plato o entrante.',
'pues esta salsa para mojar mexicana es capaz de armonizar muy bien con cantidad de alimentos, en esta ocasión os traemos la versión de Guacamole con manzana verde y anchoas, a ver qué os parece.','Para disfrutar de aperitivos frescos, ligeros, nutritivos y sabrosos no tenemos que complicarnos mucho en la cocina, mirad por ejemplo esta Ensaladilla de gambas y pepino con salsa de yogur','Os presentamos el siguiente aperitivo llamado Tartar de gambas con pimientos baby',' es ideal para cualquier ocasión especial, una comida o cena de fin de semana, una celebración familiar o para las próximas fiestas navideñas.',
'es un aperitivo muy rico que encanta a los amantes del queso fundido, además, hay muchas formas de enriquecerlos, y hoy os traemos un delicioso ejemplo con estos Nachos con carne, aguacate y melocotón','Cuando un aperitivo nos gusta mucho, si aumentar su consumo no es contraproducente, lo podemos convertir en un entrante, y así es como nos gusta disfrutar a nosotros de estos Cogollos con sardinas anchoadas y queso Idiazabal ahumado.','Qué delicia los pimientos verdes fritos ¿verdad? Hemos llegado a hacer sartenadas enormes para comerlos como único plato y mojando pan en el sabroso aceite que dejan, pero ahora hacemos raciones normales para servir como guarnición, para tapear o para disfrutar de un bocadillo que nos parece exquisito.','Hoy os traemos un plato clásico del verano, el salpicón, el que en la gastronomía española se define como una elaboración culinaria a base de pescado o marisco cortado en trozos, junto a otros ingredientes también troceados, adobados con vinagreta y que se consume en frío.'];
var pre_ap=['$50.000','$75.000','$35.000','$10.000',
'$25.000','$30.000','$20.000','$80.000',
'$65.000','$100.000','$10.000','$120.000'];
/*DATOS BEBIDAS*/
var tit_bed=['Horchata','Limonada de sandía y menta','Granizado de limón (con Thermomix)','Granizado de café',
'Limonada de piña','Limonada de frambuesas','limonada casera','Té chai especiado de almendras',
'Té verde helado al estilo moruno','Té helado de Rooibos con flores hibisco y miel','Té oolong chino con azúcar y limón','batido de Mango'];
var des_bre_bed=['Empezamos hidratando las chufas el día antes. Las ponemos en un bol grande y las cubrimos con agua, que cambiaremos un par de veces. Al día siguiente, escurrimos las chufas y las echamos en el vaso de la Thermomix junto con el azúcar, el trocito de piel de limón y la canela.','Vamos a empezar por pelar la sandía y retirarle las semillas. Luego la cortamos en trozos y reservamos. Enjuagamos ahora las hojas de menta y las machacamos en una jarra con el azúcar.','Empezamos vertiendo el azúcar en el vaso y programamos 20 segundos a velocidad progresiva 5-7-9. Añadimos la piel de limón y programamos 20 segundos más.','Lo ideal para tomar un buen granizado de café es utilizar café cargado, por lo cual yo comienzo preparando una buena cafetera alimentada con un buen café. Si lo preferís podéis utilizar también café soluble y agua pero yo prefiero el sabor auténtico del café recién hecho. Mientras sube el café, calentamos 100 ml de agua y disolvemos en ella 3 cucharadas de azúcar. Removemos y dejamos reducir durante 5 minutos hasta obtener un jarabe o almíbar que mezclamos con el café.',
'Pelar la piña retirando toda la corteza, procurando conservar los jugos que pueda soltar. Trocear. Pelar y picar el jengibre. Exprimir el zumo de limón.','Empezamos poniendo las frambuesas en un robot de cocina y triturándolas. En la Thermomix 5 seg/vel 7. Añadimos medio litro de agua, los limones y el azúcar y volvemos a triturar.','El secreto fundamental de esta limonada casera es no utilizar agua y azúcar mezclado con el zumo de los cítricos sino en su lugar preparar primero un jarabe con el agua y el azúcar.','En una cazuela echamos los vasos de agua y añadimos el té negro, la canela, la vaina de vainilla cortada a lo largo y abierta, la miel al gusto (yo puse 1 cucharada), una pizca de jengibre rallado, los clavos, las vainas de cardamomo ligeramente machacadas, una pizca de pimienta negra molida y las pieles de naranja.',
'Calienta agua hasta que hierva para limpiar la tetera. Enjuaga un par de minutos y tira el agua. Calienta agua hasta hervir en un cazo y apaga el fuego. Pon una cucharada de azúcar moreno y una cucharada de té verde por cada persona dentro de la tetera.','Aunque el rooibos en realidad no es una variedad de té, es una infusión muy similar que gusta a mucha gente y no contiene teína. Ponemos 3 bolsas de rooibos a infusionar en 600 ml de agua a 90º de temperatura y añadimos las flores de hibisco y la miel.','Aunque cuando se toma en caliente, este té se disfruta sin necesidad de añadirle azúcar ni otros aromas, para hacer un té helado me gusta añadir a la infusión una cucharada de azúcar moreno y al servirlo, poner en cada vaso una rodaja de limón.','Esta deliciosa fruta, con puro sabor tropical, es perfecta para preparar batidos y smoothies frescos, aromáticos y muy sabrosos, con el dulzor natural de su jugosa pulpa.'];
var pre_bed=['$20.000','$15.000','$20.000','$5.000',
'$10.000','$12.000','$5.000','$30.000',
'$35.000','$50.000','$25.000','$80.000'];
/*DATOS DE POSTRES*/
var tit_pos=['Cheesecake congelado','Crepas de fresa y nutella','Semifrío de frambuesa','Vasitos de pera y tres chocolates',
'Melocotones flameados','Gelatina de mosaico','Tarta fría de chocolate','Cupcakes de Chocolate',
'Scones integrales con pasas','Flan de queso','Gomitas de sabores','Muffins de frutos rojos'];
var des_bre_pos=['Este postre es muy atractivo preferido por los clientes','Las crepas de nutella y fresa son una opción fácil y rápida que puedes incorporar a tu menú de postres. Cómo hacer este postre es muy sencillo, debe ser preparado en el momento para servir caliente','Este postre es similar a la tarta de queso, es otro platillo del que podrás obtener ocho porciones, su preparación es muy fácil y solo necesitas refrigerar.','Los vasitos de pera y tres chocolates son un postre sencillo de preparar, ya que le  dedicarás poco tiempo. La siguiente receta es para cuatro porciones',
'Este postre es perfecto para acompañar las crepas en tu negocio. También lo puedes vender en forma de dulce empacado en copitas de plástico o en un envase que se pueda calentar, recomienda a tu cliente que lo consuma caliente, ya que así conservará sus sabores.','La gelatina es una opción segura para la venta, puedes acompañar este postre con leche condensada y servirlos en vasos.','La tarta fría es uno de los favoritos para obtener ingresos adicionales a través de los postres.','En esta receta de Cupcakes de Chocolate tardas en la elaboración alrededor de 1 hora y 40 minutos para seis porciones, con una dificultad para realizarlo de baja-media. ',
'Los Scones son panecillos muy reconocidos en Estados Unidos, Australia, Reino Unido, Escocia, entre otros países. ','El flan de queso es uno de los favoritos de las personas, es una opción económica para brindar un postre diferente y delicioso a tus clientes.','Las gomitas son las favoritas de muchas personas. En realidad, es uno de los postres más fáciles de hacer y vender dada su versatilidad.','Los muffins son la elección favorita de muchos, ya que tienen las cantidades ideales de dulce.'];
var pre_pos=['$20.000','$15.000','$20.000','$5.000',
'$10.000','$12.000','$5.000','$30.000',
'$35.000','$50.000','$25.000','$80.000'];
menu_1.onclick = function(){
    menu_1.innerHTML ="<a href='#ensaladas' class='nav-link active'>ensaladas</a>";
    menu_2.innerHTML ="<a href='#sopas' class='nav-link'>Sopas</a>";
    menu_3.innerHTML ="<a href='#aperitivos' class='nav-link'>Aperitivos</a>";
    menu_4.innerHTML ="<a href='#bebida' class='nav-link'>Bebida</a>";
    menu_5.innerHTML ="<a href='#postres' class='nav-link'>Postres</a>";
    menu_6.innerHTML ="<a href='#prueba6' class='nav-link'>prueba6</a>";
    //vaciador menus
    menu_muestra_2.innerHTML="";
    menu_muestra_3.innerHTML="";
    menu_muestra_4.innerHTML="";
    menu_muestra_5.innerHTML="";
    //menu_1 llamado
    menu_muestra_1.innerHTML="<div class='row row-cols-1 row-cols-md-3 g-4'>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_1.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[0]+"</h5>"+
                    "<p class='card-text'>"+des_bre_en[0]+"</p>"+
                    "<p class='card-text'>"+pre_en[0]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_2.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[1]+"</h5>"+
                    "<p class='card-text'>"+des_bre_en[1]+"</p>"+
                    "<p class='card-text'>"+pre_en[1]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_3.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[2]+"</h5>"+
                    "<p class='card-text'>"+des_bre_en[2]+"</p>"+
                    "<p class='card-text'>"+pre_en[2]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_4.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[3]+"</h5>"+
                    "<p class='card-text'>"+des_bre_en[3]+"</p>"+
                    "<p class='card-text'>"+pre_en[3]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_5.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[4]+"</h5>"+
                    "<p class='card-text'>"+des_bre_en[4]+"</p>"+
                    "<p class='card-text'>"+pre_en[4]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_6.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[5]+"</h5>"+
                    "<p class='card-text'>"+des_bre_en[5]+"</p>"+
                    "<p class='card-text'>"+pre_en[5]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_7.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[6]+"</h5>"+
                    "<p class='card-text'>"+des_bre_en[6]+"</p>"+
                    "<p class='card-text'>"+pre_en[6]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_8.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[7]+"</h5>"+
                    "<p class='card-text'>"+des_bre_en[7]+"</p>"+
                    "<p class='card-text'>"+pre_en[7]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_9.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[8]+"</h5>"+
                    "<p class='card-text'>"+des_bre_en[8]+"</p>"+
                    "<p class='card-text'>"+pre_en[8]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_10.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[9]+"</h5>"+
                    "<p class='card-text'>"+des_bre_en[9]+"</p>"+
                    "<p class='card-text'>"+pre_en[9]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_11.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[10]+"</h5>"+
                    "<p class='card-text'>"+des_bre_en[10]+"</p>"+
                    "<p class='card-text'>"+pre_en[10]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/ensaladas/en_12.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_en[11]+"</h5>"+
                    "<p class='card-text'>"+des_bre_en[11]+"</p>"+
                    "<p class='card-text'>"+pre_en[11]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
"</div>";
}

menu_2.onclick = function(){
    menu_1.innerHTML ="<a href='#ensaladas' class='nav-link'>Ensaladas</a>";
    menu_2.innerHTML ="<a href='#sopas' class='nav-link active'>Sopas</a>";
    menu_3.innerHTML ="<a href='#aperitivos' class='nav-link'>Aperitivos</a>";
    menu_4.innerHTML ="<a href='#bebida' class='nav-link'>Bebida</a>";
    menu_5.innerHTML ="<a href='#postres' class='nav-link'>Postres</a>";
    menu_6.innerHTML ="<a href='#prueba6' class='nav-link'>prueba6</a>";
    //vaciador menus
    menu_muestra_1.innerHTML="";
    menu_muestra_3.innerHTML="";
    menu_muestra_4.innerHTML="";
    menu_muestra_5.innerHTML="";
    //menu_2 llamado
    menu_muestra_2.innerHTML="<div class='row row-cols-1 row-cols-md-3 g-4'>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/sopas/sop_1.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_sop[0]+"</h5>"+
                    "<p class='card-text'>"+des_bre_sop[0]+"</p>"+
                    "<p class='card-text'>"+pre_sop[0]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/sopas/sop_2.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_sop[1]+"</h5>"+
                    "<p class='card-text'>"+des_bre_sop[1]+"</p>"+
                    "<p class='card-text'>"+pre_sop[1]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/sopas/sop_3.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_sop[2]+"</h5>"+
                    "<p class='card-text'>"+des_bre_sop[2]+"</p>"+
                    "<p class='card-text'>"+pre_sop[2]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/sopas/sop_4.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_sop[3]+"</h5>"+
                    "<p class='card-text'>"+des_bre_sop[3]+"</p>"+
                    "<p class='card-text'>"+pre_sop[3]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/sopas/sop_5.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_sop[4]+"</h5>"+
                    "<p class='card-text'>"+des_bre_sop[4]+"</p>"+
                    "<p class='card-text'>"+pre_sop[4]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/sopas/sop_6.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_sop[5]+"</h5>"+
                    "<p class='card-text'>"+des_bre_sop[5]+"</p>"+
                    "<p class='card-text'>"+pre_sop[5]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/sopas/sop_7.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_sop[6]+"</h5>"+
                    "<p class='card-text'>"+des_bre_sop[6]+"</p>"+
                    "<p class='card-text'>"+pre_sop[6]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/sopas/sop_8.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_sop[7]+"</h5>"+
                    "<p class='card-text'>"+des_bre_sop[7]+"</p>"+
                    "<p class='card-text'>"+pre_sop[7]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/sopas/sop_9.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_sop[8]+"</h5>"+
                    "<p class='card-text'>"+des_bre_sop[8]+"</p>"+
                    "<p class='card-text'>"+pre_sop[8]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/sopas/sop_10.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_sop[9]+"</h5>"+
                    "<p class='card-text'>"+des_bre_sop[9]+"</p>"+
                    "<p class='card-text'>"+pre_sop[9]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/sopas/sop_11.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_sop[10]+"</h5>"+
                    "<p class='card-text'>"+des_bre_sop[10]+"</p>"+
                    "<p class='card-text'>"+pre_sop[10]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/sopas/sop_12.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_sop[11]+"</h5>"+
                    "<p class='card-text'>"+des_bre_sop[11]+"</p>"+
                    "<p class='card-text'>"+pre_sop[11]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
"</div>";
}

menu_3.onclick = function(){
    menu_1.innerHTML ="<a href='#ensaladas' class='nav-link'>Ensaladas</a>";
    menu_2.innerHTML ="<a href='#sopas' class='nav-link'>Sopas</a>";
    menu_3.innerHTML ="<a href='#aperitivos' class='nav-link active'>Aperitivos</a>";
    menu_4.innerHTML ="<a href='#bebida' class='nav-link'>Bebida</a>";
    menu_5.innerHTML ="<a href='#Postres' class='nav-link'>Postres</a>";
    menu_6.innerHTML ="<a href='#prueba6' class='nav-link'>prueba6</a>";
    //vaciador menus
    menu_muestra_1.innerHTML="";
    menu_muestra_2.innerHTML="";
    menu_muestra_4.innerHTML="";
    menu_muestra_5.innerHTML="";
    //menu_3 llamado
     menu_muestra_3.innerHTML="<div class='row row-cols-1 row-cols-md-3 g-4'>"+
     "<div class='col'>"+
         "<div class='card h-100'>"+
             "<img src='img/aperitivos/ap_1.webp' alt='...' class='card-img-top '>"+
                 "<div class='card-body'>"+
                     "<h5 class='card-title'>"+tit_ap[0]+"</h5>"+
                     "<p class='card-text'>"+des_bre_ap[0]+"</p>"+
                     "<p class='card-text'>"+pre_ap[0]+"</p>"+
                     "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                 "</div>"+
             "</img>"+
         "</div>"+
     "</div>"+
     "<div class='col'>"+
         "<div class='card h-100'>"+
             "<img src='img/aperitivos/ap_2.webp' alt='...' class='card-img-top '>"+
                 "<div class='card-body'>"+
                     "<h5 class='card-title'>"+tit_ap[1]+"</h5>"+
                     "<p class='card-text'>"+des_bre_ap[1]+"</p>"+
                     "<p class='card-text'>"+pre_ap[1]+"</p>"+
                     "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                 "</div>"+
             "</img>"+
         "</div>"+
     "</div>"+
     "<div class='col'>"+
         "<div class='card h-100'>"+
             "<img src='img/aperitivos/ap_3.webp' alt='...' class='card-img-top '>"+
                 "<div class='card-body'>"+
                     "<h5 class='card-title'>"+tit_ap[2]+"</h5>"+
                     "<p class='card-text'>"+des_bre_ap[2]+"</p>"+
                     "<p class='card-text'>"+pre_ap[2]+"</p>"+
                     "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                 "</div>"+
             "</img>"+
         "</div>"+
     "</div>"+
     "<div class='col'>"+
         "<div class='card h-100'>"+
             "<img src='img/aperitivos/ap_4.webp' alt='...' class='card-img-top '>"+
                 "<div class='card-body'>"+
                     "<h5 class='card-title'>"+tit_ap[3]+"</h5>"+
                     "<p class='card-text'>"+des_bre_ap[3]+"</p>"+
                     "<p class='card-text'>"+pre_ap[3]+"</p>"+
                     "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                 "</div>"+
             "</img>"+
         "</div>"+
     "</div>"+
     "<div class='col'>"+
         "<div class='card h-100'>"+
             "<img src='img/aperitivos/ap_5.webp' alt='...' class='card-img-top '>"+
                 "<div class='card-body'>"+
                     "<h5 class='card-title'>"+tit_ap[4]+"</h5>"+
                     "<p class='card-text'>"+des_bre_ap[4]+"</p>"+
                     "<p class='card-text'>"+pre_ap[4]+"</p>"+
                     "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                 "</div>"+
             "</img>"+
         "</div>"+
     "</div>"+
     "<div class='col'>"+
         "<div class='card h-100'>"+
             "<img src='img/aperitivos/ap_6.webp' alt='...' class='card-img-top '>"+
                 "<div class='card-body'>"+
                     "<h5 class='card-title'>"+tit_ap[5]+"</h5>"+
                     "<p class='card-text'>"+des_bre_ap[5]+"</p>"+
                     "<p class='card-text'>"+pre_ap[5]+"</p>"+
                     "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                 "</div>"+
             "</img>"+
         "</div>"+
     "</div>"+
     "<div class='col'>"+
         "<div class='card h-100'>"+
             "<img src='img/aperitivos/ap_7.webp' alt='...' class='card-img-top '>"+
                 "<div class='card-body'>"+
                     "<h5 class='card-title'>"+tit_ap[6]+"</h5>"+
                     "<p class='card-text'>"+des_bre_ap[6]+"</p>"+
                     "<p class='card-text'>"+pre_ap[6]+"</p>"+
                     "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                 "</div>"+
             "</img>"+
         "</div>"+
     "</div>"+
     "<div class='col'>"+
         "<div class='card h-100'>"+
             "<img src='img/aperitivos/ap_8.webp' alt='...' class='card-img-top '>"+
                 "<div class='card-body'>"+
                     "<h5 class='card-title'>"+tit_ap[7]+"</h5>"+
                     "<p class='card-text'>"+des_bre_ap[7]+"</p>"+
                     "<p class='card-text'>"+pre_ap[7]+"</p>"+
                     "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                 "</div>"+
             "</img>"+
         "</div>"+
     "</div>"+
     "<div class='col'>"+
         "<div class='card h-100'>"+
             "<img src='img/aperitivos/ap_9.webp' alt='...' class='card-img-top '>"+
                 "<div class='card-body'>"+
                     "<h5 class='card-title'>"+tit_ap[8]+"</h5>"+
                     "<p class='card-text'>"+des_bre_ap[8]+"</p>"+
                     "<p class='card-text'>"+pre_ap[8]+"</p>"+
                     "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                 "</div>"+
             "</img>"+
         "</div>"+
     "</div>"+
     "<div class='col'>"+
         "<div class='card h-100'>"+
             "<img src='img/aperitivos/ap_10.webp' alt='...' class='card-img-top '>"+
                 "<div class='card-body'>"+
                     "<h5 class='card-title'>"+tit_ap[9]+"</h5>"+
                     "<p class='card-text'>"+des_bre_ap[9]+"</p>"+
                     "<p class='card-text'>"+pre_ap[9]+"</p>"+
                     "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                 "</div>"+
             "</img>"+
         "</div>"+
     "</div>"+
     "<div class='col'>"+
         "<div class='card h-100'>"+
             "<img src='img/aperitivos/ap_11.webp' alt='...' class='card-img-top '>"+
                 "<div class='card-body'>"+
                     "<h5 class='card-title'>"+tit_ap[10]+"</h5>"+
                     "<p class='card-text'>"+des_bre_ap[10]+"</p>"+
                     "<p class='card-text'>"+pre_ap[10]+"</p>"+
                     "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                 "</div>"+
             "</img>"+
         "</div>"+
     "</div>"+
     "<div class='col'>"+
         "<div class='card h-100'>"+
             "<img src='img/aperitivos/ap_12.webp' alt='...' class='card-img-top '>"+
                 "<div class='card-body'>"+
                     "<h5 class='card-title'>"+tit_ap[11]+"</h5>"+
                     "<p class='card-text'>"+des_bre_ap[11]+"</p>"+
                     "<p class='card-text'>"+pre_ap[11]+"</p>"+
                     "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                 "</div>"+
             "</img>"+
         "</div>"+
     "</div>"+
 "</div>";
}

menu_4.onclick = function(){
    menu_1.innerHTML ="<a href='#ensaladas' class='nav-link'>Ensaladas</a>";
    menu_2.innerHTML ="<a href='#sopas' class='nav-link'>Sopas</a>";
    menu_3.innerHTML ="<a href='#aperitivos' class='nav-link'>Aperitivos</a>";
    menu_4.innerHTML ="<a href='#bebida' class='nav-link active'>Bebida</a>";
    menu_5.innerHTML ="<a href='#postres' class='nav-link'>Postres</a>";
    menu_6.innerHTML ="<a href='#prueba6' class='nav-link'>prueba6</a>";
    //vaciador menus
    menu_muestra_1.innerHTML="";
    menu_muestra_2.innerHTML="";
    menu_muestra_3.innerHTML="";
    menu_muestra_5.innerHTML="";
    //menu_4 llamado
    menu_muestra_4.innerHTML="<div class='row row-cols-1 row-cols-md-3 g-4'>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/bebidas/bed_1.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_bed[0]+"</h5>"+
                    "<p class='card-text'>"+des_bre_bed[0]+"</p>"+
                    "<p class='card-text'>"+pre_bed[0]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/bebidas/bed_2.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_bed[1]+"</h5>"+
                    "<p class='card-text'>"+des_bre_bed[1]+"</p>"+
                    "<p class='card-text'>"+pre_bed[1]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/bebidas/bed_3.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_bed[2]+"</h5>"+
                    "<p class='card-text'>"+des_bre_bed[2]+"</p>"+
                    "<p class='card-text'>"+pre_bed[2]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/bebidas/bed_4.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_bed[3]+"</h5>"+
                    "<p class='card-text'>"+des_bre_bed[3]+"</p>"+
                    "<p class='card-text'>"+pre_bed[3]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/bebidas/bed_5.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_bed[4]+"</h5>"+
                    "<p class='card-text'>"+des_bre_bed[4]+"</p>"+
                    "<p class='card-text'>"+pre_bed[4]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/bebidas/bed_6.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_bed[5]+"</h5>"+
                    "<p class='card-text'>"+des_bre_bed[5]+"</p>"+
                    "<p class='card-text'>"+pre_bed[5]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/bebidas/bed_7.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_bed[6]+"</h5>"+
                    "<p class='card-text'>"+des_bre_bed[6]+"</p>"+
                    "<p class='card-text'>"+pre_bed[6]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/bebidas/bed_8.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_bed[7]+"</h5>"+
                    "<p class='card-text'>"+des_bre_bed[7]+"</p>"+
                    "<p class='card-text'>"+pre_bed[7]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/bebidas/bed_9.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_bed[8]+"</h5>"+
                    "<p class='card-text'>"+des_bre_bed[8]+"</p>"+
                    "<p class='card-text'>"+pre_bed[8]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/bebidas/bed_10.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_bed[9]+"</h5>"+
                    "<p class='card-text'>"+des_bre_bed[9]+"</p>"+
                    "<p class='card-text'>"+pre_bed[9]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/bebidas/bed_11.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_bed[10]+"</h5>"+
                    "<p class='card-text'>"+des_bre_bed[10]+"</p>"+
                    "<p class='card-text'>"+pre_bed[10]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/bebidas/bed_12.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_bed[11]+"</h5>"+
                    "<p class='card-text'>"+des_bre_bed[11]+"</p>"+
                    "<p class='card-text'>"+pre_bed[11]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
"</div>";
}

menu_5.onclick = function(){
    menu_1.innerHTML ="<a href='#ensaladas' class='nav-link'>Ensaladas</a>";
    menu_2.innerHTML ="<a href='#sopas' class='nav-link'>Sopas</a>";
    menu_3.innerHTML ="<a href='#aperitivos' class='nav-link'>Aperitivos</a>";
    menu_4.innerHTML ="<a href='#bebida' class='nav-link'>Bebida</a>";
    menu_5.innerHTML ="<a href='#postres' class='nav-link  active'>Postres</a>";
    menu_6.innerHTML ="<a href='#prueba6' class='nav-link'>prueba6</a>";
    //vaciador menus
    menu_muestra_1.innerHTML="";
    menu_muestra_2.innerHTML="";
    menu_muestra_3.innerHTML="";
    menu_muestra_4.innerHTML="";
    //menu_5 llamado
    menu_muestra_5.innerHTML="<div class='row row-cols-1 row-cols-md-3 g-4'>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/postres/pos_01.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_pos[0]+"</h5>"+
                    "<p class='card-text'>"+des_bre_pos[0]+"</p>"+
                    "<p class='card-text'>"+pre_pos[0]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/postres/pos_02.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_pos[1]+"</h5>"+
                    "<p class='card-text'>"+des_bre_pos[1]+"</p>"+
                    "<p class='card-text'>"+pre_pos[1]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/postres/pos_03.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_pos[2]+"</h5>"+
                    "<p class='card-text'>"+des_bre_pos[2]+"</p>"+
                    "<p class='card-text'>"+pre_pos[2]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/postres/pos_04.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_pos[3]+"</h5>"+
                    "<p class='card-text'>"+des_bre_pos[3]+"</p>"+
                    "<p class='card-text'>"+pre_pos[3]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/postres/pos_05.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_pos[4]+"</h5>"+
                    "<p class='card-text'>"+des_bre_pos[4]+"</p>"+
                    "<p class='card-text'>"+pre_pos[4]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/postres/pos_06.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_pos[5]+"</h5>"+
                    "<p class='card-text'>"+des_bre_pos[5]+"</p>"+
                    "<p class='card-text'>"+pre_pos[5]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/postres/pos_07.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_pos[6]+"</h5>"+
                    "<p class='card-text'>"+des_bre_pos[6]+"</p>"+
                    "<p class='card-text'>"+pre_pos[6]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/postres/pos_08.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_pos[7]+"</h5>"+
                    "<p class='card-text'>"+des_bre_pos[7]+"</p>"+
                    "<p class='card-text'>"+pre_pos[7]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/postres/pos_09.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_pos[8]+"</h5>"+
                    "<p class='card-text'>"+des_bre_pos[8]+"</p>"+
                    "<p class='card-text'>"+pre_pos[8]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/postres/pos_10.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_pos[9]+"</h5>"+
                    "<p class='card-text'>"+des_bre_pos[9]+"</p>"+
                    "<p class='card-text'>"+pre_pos[9]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/postres/pos_11.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_pos[10]+"</h5>"+
                    "<p class='card-text'>"+des_bre_pos[10]+"</p>"+
                    "<p class='card-text'>"+pre_pos[10]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
    "<div class='col'>"+
        "<div class='card h-100'>"+
            "<img src='img/postres/pos_12.webp' alt='...' class='card-img-top '>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+tit_pos[11]+"</h5>"+
                    "<p class='card-text'>"+des_bre_pos[11]+"</p>"+
                    "<p class='card-text'>"+pre_pos[11]+"</p>"+
                    "<a class='btn btn-primary' href='#' role='button'>Mas informacion</a>"+
                "</div>"+
            "</img>"+
        "</div>"+
    "</div>"+
"</div>";
}

menu_6.onclick = function(){
    menu_1.innerHTML ="<a href='#prueba1' class='nav-link'>prueba1</a>";
    menu_2.innerHTML ="<a href='#prueba2' class='nav-link'>prueba2</a>";
    menu_3.innerHTML ="<a href='#prueba3' class='nav-link'>prueba3</a>";
    menu_4.innerHTML ="<a href='#prueba4' class='nav-link'>prueba4</a>";
    menu_5.innerHTML ="<a href='#prueba5' class='nav-link'>prueba5</a>";
    menu_6.innerHTML ="<a href='#prueba6' class='nav-link  active'>prueba6</a>";
}