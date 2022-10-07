import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import {
    Link
} from "react-router-dom";

import '../styles/moleculas.scss'

import tartaTradicional from '../images/cheesecake/tarta-de-queso-tradicional.jpeg'
import tartaChocolate from '../images/cheesecake/tarta-de-queso-y-chocolate.jpeg'
import tartaManzana from '../images/cheesecake/tarta-de-queso-y-manzana.jpeg'
import moleculas1 from '../images/moleculas/moleculas1.png'
import moleculas2 from '../images/moleculas/moleculas2.png'
import moleculas3 from '../images/moleculas/moleculas3.png'
import moleculas4 from '../images/moleculas/moleculas4.png'
import moleculas5 from '../images/moleculas/moleculas5.png'
import moleculas6 from '../images/moleculas/moleculas6.png'

const Moleculas = () => {
    return (
        <div className="moleculasJS">
            <div className="moleculas">
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
                        <img className="imagesAminoacids" src={moleculas1} alt="" />
                        <p>Una molécula es un conjunto de átomos unidos por enlaces químicos.</p>
                        <div className="separacionTitulos" />
                        <div className="separacionPeque" />
                        <div className="titlee">¿Qué es una Molécula?</div>
                        <div>
                            <div className="bloquee2">
                                <p>Una <Link to="/moleculas" className="ref" onClick={window.scrollTo(0, 0)}><b>molécula</b></Link> es un conjunto de átomos (de un mismo elemento químico o de muchos diferentes) que están organizados e interrelacionados mediante enlaces químicos. También se considera a una molécula como la parte más pequeña de una sustancia que aún conserva las propiedades físicas y químicas de la sustancia. Las moléculas suelen ser químicamente estables y eléctricamente neutras.</p>
                                <p>El estado de agregación de una sustancia depende en su mayor parte de la estructura y los tipos de átomos que conforman sus moléculas, pues estos determinan las fuerzas de las interacciones entre estas partículas. En este sentido, los sólidos son compuestos que tienen muy poca separación entre sus moléculas, los líquidos tienen una mediana o intermedia separación entre sus moléculas y los gases tienen mucha separación entre sus moléculas.</p>
                                <p>El estudio de las moléculas y su nomenclatura no solo comprende la cantidad de átomos que las componen y las propiedades que presentan, sino también su comprensión a partir de un modelo tridimensional de sus enlaces y estructuras, es decir, de la organización en el espacio de sus átomos constituyentes. Esto significa que existen moléculas que tienen la misma composición atómica pero diferentes estructuras espaciales (y por eso estas moléculas se nombran de forma distinta).</p>
                                <p>Las moléculas son muy comunes en la química orgánica, ya que forman parte de los gases atmosféricos y los océanos. Sin embargo, existe en la corteza terrestre una numerosa cantidad de compuestos químicos que no son moleculares. Por ejemplo, la mayoría de los metales y minerales de la corteza terrestre no son moléculas. Por otra parte, los cristales que conforman las sales tampoco son moléculas, a pesar de estar formados por unidades repetitivas.</p>
                            </div>

                            <hr />

                            <div className="subtitle">Ejemplos de moléculas</div>
                            <div className="separacionTitulos" />
                            <div className="bloquee2">
                                <img className="imagesAminoacids" src={moleculas2} alt="" />
                                <p>Algunos ejemplos de moléculas comunes son:</p>
                                <div className="separacionPeque" />
                                <p>✓ <b>Oxígeno</b>: O2</p>
                                <p>✓ <b>Ácido clorhídrico</b>: HCl</p>
                                <p>✓ <b>Monóxido de carbono</b>: CO</p>
                                <p>✓ <b>Ácido sulfúrico</b>: H2SO4</p>
                                <p>✓ <b>Etanol</b>: C2H5OH</p>
                                <p>✓ <b>Ácido fosfórico</b>: H3PO4</p>
                                <p>✓ <b>Glucosa</b>: C6H12O6</p>
                                <p>✓ <b>Cloroformo</b>: CHCl3</p>
                                <p>✓ <b>Sacarosa</b>: C12H22O11</p>
                                <p>✓ <b>Ácido paraaminobenzoico</b>: C7H7NO2</p>
                                <p>✓ <b>Acetona</b>: C3H6O</p>
                                <p>✓ <b>Celulosa</b>: (C6H10O5)n</p>
                                <p>✓ <b>Trinitrotolueno</b>: C7H5N3O6</p>
                                <p>✓ <b>Nitrato de plata</b>: AgNO3</p>
                                <p>✓ <b>Urea</b>: CO(NH2)2</p>
                                <p>✓ <b>Amoníaco</b>: NH3</p>
                            </div>

                            <hr />

                            <div className="subtitle">Tipos de moléculas</div>
                            <div className="separacionTitulos" />
                            <div className="bloquee2">
                                <img className="imagesAminoacids" src={moleculas3} alt="" />
                                <p>Las <Link to="/moleculas" className="ref" onClick={window.scrollTo(0, 0)}><b>moléculas</b></Link> se pueden clasificar de acuerdo a la complejidad de su constitución:</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <p>✓ <b>Moléculas discretas.</b> Presentan un número definido de átomos, ya sean de iguales elementos o de distintos elementos químicos. Pueden clasificarse, a su vez, según la cantidad de átomos distintos que componen su estructura: moléculas monoatómicas (un mismo tipo de átomo), moléculas diatómicas (dos tipos de átomos), moléculas triatómicas (tres tipos de átomos), moléculas tetraatómicas (cuatro tipos de átomos), etc.</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <p>✓ <b>Macromoléculas o polímeros.</b> Se llama así a las cadenas moleculares de gran tamaño. Están compuestas por piezas más simples, que se unen entre sí para lograr secuencias extensas y que adquieran propiedades nuevas y específicas. Los plásticos, por ejemplo, son un material compuesto a partir de macromoléculas orgánicas.</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <p>La polaridad es una propiedad que tienen las moléculas y está estrechamente relacionada con las separación de cargas eléctricas que tiene o que se genera dentro de cada molécula. Esta propiedad influye en la solubilidad, pues sustancias polares disuelven sustancias polares y sustancias apolares disuelven solo sustancias apolares, aunque siempre existen situaciones intermedias. Los puntos de fusión y ebullición, e incluso los estados de agregación, también están afectados por la polaridad. Por tanto, las moléculas se pueden clasificar también según su polaridad en:</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <p>✓ <b>Moléculas polares.</b> Son aquellas formadas por átomos con electronegatividad diferente, es decir, que el átomo con mayor electronegatividad atrae hacia sí mismo y con mayor fuerza a los electrones del enlace, por lo que queda una densidad de carga negativa alrededor de él. Por el contrario, quedará una densidad de carga positiva sobre el átomo menos electronegativo. Este proceso llevará finalmente a la formación de un dipolo, que es un sistema de dos cargas de signo opuesto e igual magnitud.</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <p>✓ <b>Moléculas apolares.</b> Son aquellas cuyos átomos poseen idéntica electronegatividad, es decir, no presentan desigualdad respecto a la atracción de los electrones y conservan una carga neutra en situación ordinaria.</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <p>La simetría de una molécula (la posición que ocupa cada uno de sus átomos en su estructura) también puede influir en la determinación de si una molécula es polar o apolar. Existen moléculas compuestas por átomos de electronegatividad distinta, pero que de igual manera son apolares, pues cuando se suman las densidades de carga de varias partes de la molécula, se anulan estas cargas, y la molécula queda finalmente con carga neutra, es decir, sin carga eléctrica.</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <img className="imagesAminoacids" src={moleculas4} alt="" />
                                <div className="separacionPeque" />
                            </div>
                        </div>

                        <hr />

                        <div id="bloquee">
                            <div className="subtitle">Diferencias entre átomo y molécula</div>
                            <div className="separacionTitulos" />
                            <img className="imagesAminoacids" src={moleculas5} alt="" />
                            <p>Las moléculas están formadas por átomos unidos entre sí por enlaces químicos, por tanto, los átomos son partículas más pequeñas que las moléculas. De hecho, la mayoría de las moléculas puede someterse a procedimientos de ruptura o lisis de sus enlaces químicos, transformándose a moléculas más simples, o a elementos químicos puros, es decir, átomos.</p>
                        </div>

                        <hr />

                        <div id="bloquee">
                            <div className="subtitle">Molécula de agua</div>
                            <div className="separacionTitulos" />
                            <img className="imagesAminoacids" src={moleculas6} alt="" />
                            <p>Una molécula de agua contiene únicamente dos elementos: un átomo de oxígeno y dos de hidrógeno (H2O) enlazados covalentemente. Esto se descubrió en 1782 gracias al químico Henry Cavendish, pues desde épocas antiguas el agua se pensaba como un elemento.</p>
                            <p>El agua tiene una estructura no lineal. Sus dos átomos de hidrógeno se encuentran enlazados al átomo de oxígeno y forman un ángulo de 104.5º entre sí. Esta distribución de sus átomos, sumado al alto valor de electronegatividad del átomo de oxígeno, genera la formación de un dipolo eléctrico que determina la polaridad del agua. Por lo tanto, el agua es una molécula polar.</p>
                            <p>El agua es considerada como el solvente universal, ya que casi todas las sustancias pueden disolverse en ella. Las sustancias solubles en agua son polares y llamadas hidrófilas. Las sustancias no polares (apolares), como el aceite o la gasolina, son llamadas hidrófobas y no se disuelven en agua.</p>
                            <p>La molécula del agua, sumamente abundante en nuestro planeta, forma también parte de numerosas sustancias orgánicas y de los cuerpos de los animales y las plantas.</p>
                        </div>

                        <div className="separacionFooter" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Moleculas;