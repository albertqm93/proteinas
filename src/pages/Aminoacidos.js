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
                        <div className="titlee">??Qu?? son los Amino??cidos?</div>

                        <div>
                            <div className="bloquee2">
                                Los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> son esenciales para todos los seres vivos, desde los microbios hasta los humanos.
                                <div className="separacionPeque" />
                                Todos los cuerpos vivos contienen los mismos 20 tipos de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link>.
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <img className="imagesAminoacids" src={aminoacidos1} alt="" />
                            </div>

                            <hr />

                            <div className="subtitle">??Cu??l es la relevancia de los amino??cidos en el cuerpo humano?</div>
                            <div className="separacionTitulos" />
                            <div className="bloquee2">
                                <p>Los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> constituyen aproximadamente el 20% de nuestro cuerpo o aproximadamente el 50% de nuestra masa corporal s??lida; son el siguiente componente m??s grande de nuestro cuerpo despu??s del agua. El cuerpo de una persona que pesa 75 kg tiene aproximadamente 15 kg de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> en su composici??n corporal.</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <img className="imagesAminoacids" src={aminoacidos2} alt="" />
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <p>Los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> son los componentes b??sicos de las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>prote??nas</b></Link>. Hay 100,000 tipos de <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>prote??nas</b></Link> que se componen de solo 20 amino??cidos.</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <img className="imagesAminoacids" src={aminoacidos3} alt="" />
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <p>Veinte tipos de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> forman las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>prote??nas</b></Link> del cuerpo humano.</p>
                            </div>
                        </div>

                        <hr />

                        <div id="bloquee">
                            <div className="subtitle">??Que son los amino??cidos esenciales?</div>
                            <div className="separacionTitulos" />
                            <p>De un total de 20 amino??cidos, 9 <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> no se pueden sintetizar en nuestro cuerpo y necesitamos ingerirlos a trav??s de nuestra dieta. Estos se llaman <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> esenciales o indispensables. Los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> esenciales son:</p>
                            <p>??? <b>Histidina</b></p>
                            <p>??? <b>Isoleucina</b></p>
                            <p>??? <b>Leucina</b></p>
                            <p>??? <b>Lisina</b></p>
                            <p>??? <b>Metionina</b></p>
                            <p>??? <b>Fenilalanina</b></p>
                            <p>??? <b>Treonina</b></p>
                            <p>??? <b>Tript??fano</b></p>
                            <p>??? <b>Valina</b></p>
                        </div>

                        <hr />

                        <div id="bloquee">
                            <div className="subtitle">??Que son los amino??cidos no esenciales?</div>
                            <div className="separacionTitulos" />
                            <p>Los 11 <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> restantes se pueden sintetizar a partir de otros <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> del cuerpo y por eso se denominan <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> no esenciales (o prescindibles). Los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> no esenciales son:</p>
                            <p>??? <b>Alanina</b></p>
                            <p>??? <b>Arginina</b></p>
                            <p>??? <b>Asparagina</b></p>
                            <p>??? <b>??cido Asp??rtico</b></p>
                            <p>??? <b>??cido Glut??mico</b></p>
                            <p>??? <b>Ciste??na</b></p>
                            <p>??? <b>Glutamina</b></p>
                            <p>??? <b>Glicina</b></p>
                            <p>??? <b>Prolina</b></p>
                            <p>??? <b>Serina </b></p>
                            <p>??? <b>Tirosina</b></p>
                        </div>

                        <hr />

                        <div className="subtitle">??Qu?? son los amino??cidos condicionalmente esenciales?</div>
                        <div className="separacionTitulos" />
                        <div className="bloquee2">
                            <p>Algunos <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> no esenciales (por ejemplo, arginina, ciste??na y tirosina) se denominan semi-esencial o <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> condicionalmente esenciales porque tienden a agotarse durante la infancia o en condiciones de salud como estar enfermo, lesionado o despu??s de una cirug??a.</p>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <img className="imagesAminoacids" src={aminoacidos4} alt="" />
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                        </div>

                        <hr />

                        <div className="subtitle">??Cu??l es el papel de los amino??cidos en los cuerpos humanos?</div>
                        <div className="separacionTitulos" />
                        <div className="bloquee2">
                            <p>Los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> que se unen para formar <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>prote??nas</b></Link> no solo forman nuestro cuerpo, sino que tambi??n regulan la mayor??a de las funciones esenciales de nuestro cuerpo. Algunos ejemplos comunes de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>prote??nas</b></Link> son col??geno, queratina, hemoglobina, etc.</p>
                            <div className="separacionPeque" />
                            <p>Los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> tambi??n regulan y mantienen nuestro cuerpo al convertirse en enzimas u hormonas. Algunas hormonas com??nmente conocidas son tiroides, insulina, adrenalina, etc.</p>
                            <div className="separacionPeque" />
                            <p>Una funci??n m??s importante de los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> es suministrar energ??a al cuerpo. Por lo general, un cuerpo sano con una dieta promedio usa carbohidratos como ??cidoce primario del combustible, pero las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>prote??nas</b></Link> y los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> se pueden usar como ??ltimo recurso cuando los ??cidosceros primarios se agotan debido a un ejercicio riguroso.</p>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <img className="imagesAminoacids" src={aminoacidos5} alt="" />
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <p>Los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> tambi??n juegan un papel importante en el sabor de los alimentos. Las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>prote??nas</b></Link> no tienen mucho sabor, pero cada <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cido</b></Link> tiene su propio sabor, y la combinaci??n de estos es uno de los factores importantes para definir el sabor de los alimentos. El <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cido</b></Link> m??s conocido es el ??cido glut??mico, responsable del quinto sabor Umami.</p>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <img className="imagesAminoacids" src={aminoacidos6} alt="" />
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <p>Dado que nuestro cuerpo no puede producir todos los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link>, debemos consumir algunos <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> necesarios a trav??s de nuestra dieta de varios alimentos. Una dieta equilibrada completa con los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> necesarios es muy importante para el correcto funcionamiento del cuerpo.</p>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <img className="imagesAminoacids" src={aminoacidos7} alt="" />
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                        </div>

                        <hr />

                        <div className="subtitle">??Cu??l es el papel de los amino??cidos en el equilibrio de su nutrici??n?</div>
                        <div className="separacionTitulos" />
                        <div className="bloquee2">
                            <p>Obtener una nutrici??n equilibrada es importante para una vida sana. Es necesario obtener 5 nutrientes principales (<Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>prote??nas</b></Link>, grasas e hidratos de carbono, adem??s de vitaminas y minerales) de forma equilibrada. La ingesta diaria requerida de estos nutrientes est?? establecida por la Organizaci??n Mundial de la Salud (OMS) y en muchos pa??ses. Si este equilibrio se rompe, como cuando se ingiere un nutriente en exceso, aumenta el riesgo de obesidad y enfermedades relacionadas con el estilo de vida.</p>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <img className="imagesAminoacids" src={aminoacidos8} alt="" />
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <p>Del mismo modo, las cantidades necesarias de 9 <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> esenciales para nuestro organismo est??n definidas por los organismos internacionales (FAO / OMS / UNU). Estos se denominan patrones de puntuaci??n de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link>. Si un <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cido</b></Link> es menor que el patr??n de puntuaci??n de amino??cidos, se denomina amino??cido limitante. El valor nutricional de una <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>prote??na</b></Link> se puede mejorar complementando el <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cido</b></Link> limitante. La puntuaci??n de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> es un valor num??rico que muestra en qu?? medida el <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cido</b></Link> limitante m??s peque??o satisface el patr??n de puntuaci??n. Se puede decir que una <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>prote??na</b></Link> con una puntuaci??n de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> cercana a 100 es una <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>prote??na</b></Link> de buena calidad. En general, las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>prote??nas</b></Link> animales como los huevos son <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>prote??nas</b></Link> de buena calidad con altas puntuaciones de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link>. Por otro lado, se sabe que las puntuaciones de <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>prote??nas</b></Link> vegetales como el trigo y el ma??z son bajas.</p>
                        </div>

                        <div className="subtitle">Comprender el equilibrio de amino??cidos en las prote??nas con la teor??a del barril</div>
                        <div className="separacionTitulos" />
                        <div className="bloquee2">
                            <p>Para una vida sana es fundamental llevar una dieta con un equilibrio adecuado de <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>prote??nas</b></Link> de buena calidad; es decir, <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> esenciales, que el cuerpo no puede producir. Si los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> se ingieren en un equilibrio adecuado, el cuerpo puede utilizarlos eficazmente y se excretar??n menos desechos. Se propone una ingesta diaria necesaria para cada uno de los nueve <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> esenciales.</p>
                            <p>El equilibrio de los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> esenciales en los alimentos a menudo se ilustra como un barril de madera que se usa para llenar el agua. Cada tabla del barril representa cada tipo de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cido</b></Link> esencial en los alimentos. Un alimento con un equilibrio ideal de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link>, como un huevo, tiene un barril con cada tabla formando ordenadamente una l??nea a la misma altura. En el caso del trigo, sin embargo, las tablas son de diferente altura. Si alguna de las tablas es m??s corta que las otras, solo puede llenar el barril tan alto como la tabla m??s baja y el agua que se encuentra m??s all?? de ella sale del barril. De manera similar, si incluso un <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cido</b></Link> esencial est?? ausente, los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> restantes no se pueden usar de manera efectiva.</p>
                            <p>Entonces, ??qu?? pasar??a si los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> lisina, que son insuficientes, se agregan externamente en el barril para el trigo? Se ha descubierto que la tabla de lisina se hace m??s alta, lo que hace que otros tipos de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>amino??cidos</b></Link> se utilicen de manera m??s eficaz.</p>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <img className="imagesAminoacids" src={aminoacidos8} alt="" />
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <p>Esta teor??a se ha utilizado para mejorar la nutrici??n en muchos pa??ses con dietas deficientes, contribuyendo a la soluci??n de problemas sociales.</p>
                        </div>
                        <div className="separacionFooter" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aminoacidos;