import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import {
    Link
} from "react-router-dom";

import '../styles/aminoacidos.scss'

import tartaTradicional from '../images/cheesecake/tarta-de-queso-tradicional.jpeg'
import tartaChocolate from '../images/cheesecake/tarta-de-queso-y-chocolate.jpeg'
import tartaManzana from '../images/cheesecake/tarta-de-queso-y-manzana.jpeg'
import aminoacidos1 from '../images/aminoacidos/aminoacidos1.png'
import aminoacidos2 from '../images/aminoacidos/aminoacidos2.png'
import aminoacidos3 from '../images/aminoacidos/aminoacidos3.png'
import aminoacidos4 from '../images/aminoacidos/aminoacidos4.png'
import aminoacidos5 from '../images/aminoacidos/aminoacidos5.png'
import aminoacidos6 from '../images/aminoacidos/aminoacidos6.png'
import aminoacidos7 from '../images/aminoacidos/aminoacidos7.png'
import aminoacidos8 from '../images/aminoacidos/aminoacidos8.png'


const Aminoacidos = () => {
    return (
        <div className="aminoacidosJS">
            <div className="aminoacidos">
                <Carousel>
                    <Carousel.Item interval={4000}>
                        <img className="d-block w-100" src={tartaTradicional} alt="First slide" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={4000}>
                        <img className="d-block w-100" src={tartaChocolate} alt="Second slide" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={4000}>
                        <img className="d-block w-100" src={tartaManzana} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div id="espacio">
                    <div className="article1">
                        <div className="titlee">¿Qué son los Aminoácidos?</div>

                        <div>
                            <div className="bloquee2">
                                Los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> son esenciales para todos los seres vivos, desde los microbios hasta los humanos.
                                <div className="separacionPeque" />
                                Todos los cuerpos vivos contienen los mismos 20 tipos de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link>.
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <img className="imagesAminoacids" src={aminoacidos1} alt="" />
                            </div>

                            <hr />

                            <div className="subtitle">¿Cuál es la relevancia de los aminoácidos en el cuerpo humano?</div>
                            <div className="separacionTitulos" />
                            <div className="bloquee2">
                                <p>Los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> constituyen aproximadamente el 20% de nuestro cuerpo o aproximadamente el 50% de nuestra masa corporal sólida; son el siguiente componente más grande de nuestro cuerpo después del agua. El cuerpo de una persona que pesa 75 kg tiene aproximadamente 15 kg de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> en su composición corporal.</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <img className="imagesAminoacids" src={aminoacidos2} alt="" />
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <p>Los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> son los componentes básicos de las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link>. Hay 100,000 tipos de <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> que se componen de solo 20 aminoácidos.</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <img className="imagesAminoacids" src={aminoacidos3} alt="" />
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <p>Veinte tipos de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> forman las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> del cuerpo humano.</p>
                            </div>
                        </div>

                        <hr />

                        <div id="bloquee">
                            <div className="subtitle">¿Que son los aminoácidos esenciales?</div>
                            <div className="separacionTitulos" />
                            <p>De un total de 20 aminoácidos, 9 <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> no se pueden sintetizar en nuestro cuerpo y necesitamos ingerirlos a través de nuestra dieta. Estos se llaman <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> esenciales o indispensables. Los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> esenciales son:</p>
                            <p>✓ <b>Histidina</b></p>
                            <p>✓ <b>Isoleucina</b></p>
                            <p>✓ <b>Leucina</b></p>
                            <p>✓ <b>Lisina</b></p>
                            <p>✓ <b>Metionina</b></p>
                            <p>✓ <b>Fenilalanina</b></p>
                            <p>✓ <b>Treonina</b></p>
                            <p>✓ <b>Triptófano</b></p>
                            <p>✓ <b>Valina</b></p>
                        </div>

                        <hr />

                        <div id="bloquee">
                            <div className="subtitle">¿Que son los aminoácidos no esenciales?</div>
                            <div className="separacionTitulos" />
                            <p>Los 11 <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> restantes se pueden sintetizar a partir de otros <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> del cuerpo y por eso se denominan <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> no esenciales (o prescindibles). Los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> no esenciales son:</p>
                            <p>✓ <b>Alanina</b></p>
                            <p>✓ <b>Arginina</b></p>
                            <p>✓ <b>Asparagina</b></p>
                            <p>✓ <b>Ácido Aspártico</b></p>
                            <p>✓ <b>Ácido Glutámico</b></p>
                            <p>✓ <b>Cisteína</b></p>
                            <p>✓ <b>Glutamina</b></p>
                            <p>✓ <b>Glicina</b></p>
                            <p>✓ <b>Prolina</b></p>
                            <p>✓ <b>Serina </b></p>
                            <p>✓ <b>Tirosina</b></p>
                        </div>

                        <hr />

                        <div className="subtitle">¿Qué son los aminoácidos condicionalmente esenciales?</div>
                        <div className="separacionTitulos" />
                        <div className="bloquee2">
                            <p>Algunos <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> no esenciales (por ejemplo, arginina, cisteína y tirosina) se denominan semi-esencial o <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> condicionalmente esenciales porque tienden a agotarse durante la infancia o en condiciones de salud como estar enfermo, lesionado o después de una cirugía.</p>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <img className="imagesAminoacids" src={aminoacidos4} alt="" />
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                        </div>

                        <hr />

                        <div className="subtitle">¿Cuál es el papel de los aminoácidos en los cuerpos humanos?</div>
                        <div className="separacionTitulos" />
                        <div className="bloquee2">
                            <p>Los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> que se unen para formar <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> no solo forman nuestro cuerpo, sino que también regulan la mayoría de las funciones esenciales de nuestro cuerpo. Algunos ejemplos comunes de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> son colágeno, queratina, hemoglobina, etc.</p>
                            <div className="separacionPeque" />
                            <p>Los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> también regulan y mantienen nuestro cuerpo al convertirse en enzimas u hormonas. Algunas hormonas comúnmente conocidas son tiroides, insulina, adrenalina, etc.</p>
                            <div className="separacionPeque" />
                            <p>Una función más importante de los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> es suministrar energía al cuerpo. Por lo general, un cuerpo sano con una dieta promedio usa carbohidratos como ácidoce primario del combustible, pero las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> y los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> se pueden usar como último recurso cuando los ácidosceros primarios se agotan debido a un ejercicio riguroso.</p>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <img className="imagesAminoacids" src={aminoacidos5} alt="" />
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <p>Los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> también juegan un papel importante en el sabor de los alimentos. Las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> no tienen mucho sabor, pero cada <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> tiene su propio sabor, y la combinación de estos es uno de los factores importantes para definir el sabor de los alimentos. El <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> más conocido es el ácido glutámico, responsable del quinto sabor Umami.</p>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <img className="imagesAminoacids" src={aminoacidos6} alt="" />
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <p>Dado que nuestro cuerpo no puede producir todos los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link>, debemos consumir algunos <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> necesarios a través de nuestra dieta de varios alimentos. Una dieta equilibrada completa con los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> necesarios es muy importante para el correcto funcionamiento del cuerpo.</p>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <img className="imagesAminoacids" src={aminoacidos7} alt="" />
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                        </div>

                        <hr />

                        <div className="subtitle">¿Cuál es el papel de los aminoácidos en el equilibrio de su nutrición?</div>
                        <div className="separacionTitulos" />
                        <div className="bloquee2">
                            <p>Obtener una nutrición equilibrada es importante para una vida sana. Es necesario obtener 5 nutrientes principales (<Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link>, grasas e hidratos de carbono, además de vitaminas y minerales) de forma equilibrada. La ingesta diaria requerida de estos nutrientes está establecida por la Organización Mundial de la Salud (OMS) y en muchos países. Si este equilibrio se rompe, como cuando se ingiere un nutriente en exceso, aumenta el riesgo de obesidad y enfermedades relacionadas con el estilo de vida.</p>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <img className="imagesAminoacids" src={aminoacidos8} alt="" />
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <p>Del mismo modo, las cantidades necesarias de 9 <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> esenciales para nuestro organismo están definidas por los organismos internacionales (FAO / OMS / UNU). Estos se denominan patrones de puntuación de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link>. Si un <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> es menor que el patrón de puntuación de aminoácidos, se denomina aminoácido limitante. El valor nutricional de una <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteína</b></Link> se puede mejorar complementando el <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> limitante. La puntuación de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> es un valor numérico que muestra en qué medida el <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> limitante más pequeño satisface el patrón de puntuación. Se puede decir que una <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteína</b></Link> con una puntuación de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> cercana a 100 es una <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteína</b></Link> de buena calidad. En general, las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> animales como los huevos son <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> de buena calidad con altas puntuaciones de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link>. Por otro lado, se sabe que las puntuaciones de <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> vegetales como el trigo y el maíz son bajas.</p>
                        </div>

                        <div className="subtitle">Comprender el equilibrio de aminoácidos en las proteínas con la teoría del barril</div>
                        <div className="separacionTitulos" />
                        <div className="bloquee2">
                            <p>Para una vida sana es fundamental llevar una dieta con un equilibrio adecuado de <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> de buena calidad; es decir, <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> esenciales, que el cuerpo no puede producir. Si los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> se ingieren en un equilibrio adecuado, el cuerpo puede utilizarlos eficazmente y se excretarán menos desechos. Se propone una ingesta diaria necesaria para cada uno de los nueve <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> esenciales.</p>
                            <p>El equilibrio de los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> esenciales en los alimentos a menudo se ilustra como un barril de madera que se usa para llenar el agua. Cada tabla del barril representa cada tipo de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> esencial en los alimentos. Un alimento con un equilibrio ideal de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link>, como un huevo, tiene un barril con cada tabla formando ordenadamente una línea a la misma altura. En el caso del trigo, sin embargo, las tablas son de diferente altura. Si alguna de las tablas es más corta que las otras, solo puede llenar el barril tan alto como la tabla más baja y el agua que se encuentra más allá de ella sale del barril. De manera similar, si incluso un <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> esencial está ausente, los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> restantes no se pueden usar de manera efectiva.</p>
                            <p>Entonces, ¿qué pasaría si los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> lisina, que son insuficientes, se agregan externamente en el barril para el trigo? Se ha descubierto que la tabla de lisina se hace más alta, lo que hace que otros tipos de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> se utilicen de manera más eficaz.</p>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <img className="imagesAminoacids" src={aminoacidos8} alt="" />
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <p>Esta teoría se ha utilizado para mejorar la nutrición en muchos países con dietas deficientes, contribuyendo a la solución de problemas sociales.</p>
                        </div>
                        <div className="separacionFooter" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aminoacidos;