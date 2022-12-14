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
                        <p>Una mol??cula es un conjunto de ??tomos unidos por enlaces qu??micos.</p>
                        <div className="separacionTitulos" />
                        <div className="separacionPeque" />
                        <div className="titlee">??Qu?? es una Mol??cula?</div>
                        <div>
                            <div className="bloquee2">
                                <p>Una <Link to="/moleculas" className="ref" onClick={window.scrollTo(0, 0)}><b>mol??cula</b></Link> es un conjunto de ??tomos (de un mismo elemento qu??mico o de muchos diferentes) que est??n organizados e interrelacionados mediante enlaces qu??micos. Tambi??n se considera a una mol??cula como la parte m??s peque??a de una sustancia que a??n conserva las propiedades f??sicas y qu??micas de la sustancia. Las mol??culas suelen ser qu??micamente estables y el??ctricamente neutras.</p>
                                <p>El estado de agregaci??n de una sustancia depende en su mayor parte de la estructura y los tipos de ??tomos que conforman sus mol??culas, pues estos determinan las fuerzas de las interacciones entre estas part??culas. En este sentido, los s??lidos son compuestos que tienen muy poca separaci??n entre sus mol??culas, los l??quidos tienen una mediana o intermedia separaci??n entre sus mol??culas y los gases tienen mucha separaci??n entre sus mol??culas.</p>
                                <p>El estudio de las mol??culas y su nomenclatura no solo comprende la cantidad de ??tomos que las componen y las propiedades que presentan, sino tambi??n su comprensi??n a partir de un modelo tridimensional de sus enlaces y estructuras, es decir, de la organizaci??n en el espacio de sus ??tomos constituyentes. Esto significa que existen mol??culas que tienen la misma composici??n at??mica pero diferentes estructuras espaciales (y por eso estas mol??culas se nombran de forma distinta).</p>
                                <p>Las mol??culas son muy comunes en la qu??mica org??nica, ya que forman parte de los gases atmosf??ricos y los oc??anos. Sin embargo, existe en la corteza terrestre una numerosa cantidad de compuestos qu??micos que no son moleculares. Por ejemplo, la mayor??a de los metales y minerales de la corteza terrestre no son mol??culas. Por otra parte, los cristales que conforman las sales tampoco son mol??culas, a pesar de estar formados por unidades repetitivas.</p>
                            </div>

                            <hr />

                            <div className="subtitle">Ejemplos de mol??culas</div>
                            <div className="separacionTitulos" />
                            <div className="bloquee2">
                                <img className="imagesAminoacids" src={moleculas2} alt="" />
                                <p>Algunos ejemplos de mol??culas comunes son:</p>
                                <div className="separacionPeque" />
                                <p>??? <b>Ox??geno</b>: O2</p>
                                <p>??? <b>??cido clorh??drico</b>: HCl</p>
                                <p>??? <b>Mon??xido de carbono</b>: CO</p>
                                <p>??? <b>??cido sulf??rico</b>: H2SO4</p>
                                <p>??? <b>Etanol</b>: C2H5OH</p>
                                <p>??? <b>??cido fosf??rico</b>: H3PO4</p>
                                <p>??? <b>Glucosa</b>: C6H12O6</p>
                                <p>??? <b>Cloroformo</b>: CHCl3</p>
                                <p>??? <b>Sacarosa</b>: C12H22O11</p>
                                <p>??? <b>??cido paraaminobenzoico</b>: C7H7NO2</p>
                                <p>??? <b>Acetona</b>: C3H6O</p>
                                <p>??? <b>Celulosa</b>: (C6H10O5)n</p>
                                <p>??? <b>Trinitrotolueno</b>: C7H5N3O6</p>
                                <p>??? <b>Nitrato de plata</b>: AgNO3</p>
                                <p>??? <b>Urea</b>: CO(NH2)2</p>
                                <p>??? <b>Amon??aco</b>: NH3</p>
                            </div>

                            <hr />

                            <div className="subtitle">Tipos de mol??culas</div>
                            <div className="separacionTitulos" />
                            <div className="bloquee2">
                                <img className="imagesAminoacids" src={moleculas3} alt="" />
                                <p>Las <Link to="/moleculas" className="ref" onClick={window.scrollTo(0, 0)}><b>mol??culas</b></Link> se pueden clasificar de acuerdo a la complejidad de su constituci??n:</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <p>??? <b>Mol??culas discretas.</b> Presentan un n??mero definido de ??tomos, ya sean de iguales elementos o de distintos elementos qu??micos. Pueden clasificarse, a su vez, seg??n la cantidad de ??tomos distintos que componen su estructura: mol??culas monoat??micas (un mismo tipo de ??tomo), mol??culas diat??micas (dos tipos de ??tomos), mol??culas triat??micas (tres tipos de ??tomos), mol??culas tetraat??micas (cuatro tipos de ??tomos), etc.</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <p>??? <b>Macromol??culas o pol??meros.</b> Se llama as?? a las cadenas moleculares de gran tama??o. Est??n compuestas por piezas m??s simples, que se unen entre s?? para lograr secuencias extensas y que adquieran propiedades nuevas y espec??ficas. Los pl??sticos, por ejemplo, son un material compuesto a partir de macromol??culas org??nicas.</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <p>La polaridad es una propiedad que tienen las mol??culas y est?? estrechamente relacionada con las separaci??n de cargas el??ctricas que tiene o que se genera dentro de cada mol??cula. Esta propiedad influye en la solubilidad, pues sustancias polares disuelven sustancias polares y sustancias apolares disuelven solo sustancias apolares, aunque siempre existen situaciones intermedias. Los puntos de fusi??n y ebullici??n, e incluso los estados de agregaci??n, tambi??n est??n afectados por la polaridad. Por tanto, las mol??culas se pueden clasificar tambi??n seg??n su polaridad en:</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <p>??? <b>Mol??culas polares.</b> Son aquellas formadas por ??tomos con electronegatividad diferente, es decir, que el ??tomo con mayor electronegatividad atrae hacia s?? mismo y con mayor fuerza a los electrones del enlace, por lo que queda una densidad de carga negativa alrededor de ??l. Por el contrario, quedar?? una densidad de carga positiva sobre el ??tomo menos electronegativo. Este proceso llevar?? finalmente a la formaci??n de un dipolo, que es un sistema de dos cargas de signo opuesto e igual magnitud.</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <p>??? <b>Mol??culas apolares.</b> Son aquellas cuyos ??tomos poseen id??ntica electronegatividad, es decir, no presentan desigualdad respecto a la atracci??n de los electrones y conservan una carga neutra en situaci??n ordinaria.</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <p>La simetr??a de una mol??cula (la posici??n que ocupa cada uno de sus ??tomos en su estructura) tambi??n puede influir en la determinaci??n de si una mol??cula es polar o apolar. Existen mol??culas compuestas por ??tomos de electronegatividad distinta, pero que de igual manera son apolares, pues cuando se suman las densidades de carga de varias partes de la mol??cula, se anulan estas cargas, y la mol??cula queda finalmente con carga neutra, es decir, sin carga el??ctrica.</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <img className="imagesAminoacids" src={moleculas4} alt="" />
                                <div className="separacionPeque" />
                            </div>
                        </div>

                        <hr />

                        <div id="bloquee">
                            <div className="subtitle">Diferencias entre ??tomo y mol??cula</div>
                            <div className="separacionTitulos" />
                            <img className="imagesAminoacids" src={moleculas5} alt="" />
                            <p>Las mol??culas est??n formadas por ??tomos unidos entre s?? por enlaces qu??micos, por tanto, los ??tomos son part??culas m??s peque??as que las mol??culas. De hecho, la mayor??a de las mol??culas puede someterse a procedimientos de ruptura o lisis de sus enlaces qu??micos, transform??ndose a mol??culas m??s simples, o a elementos qu??micos puros, es decir, ??tomos.</p>
                        </div>

                        <hr />

                        <div id="bloquee">
                            <div className="subtitle">Mol??cula de agua</div>
                            <div className="separacionTitulos" />
                            <img className="imagesAminoacids" src={moleculas6} alt="" />
                            <p>Una mol??cula de agua contiene ??nicamente dos elementos: un ??tomo de ox??geno y dos de hidr??geno (H2O) enlazados covalentemente. Esto se descubri?? en 1782 gracias al qu??mico Henry Cavendish, pues desde ??pocas antiguas el agua se pensaba como un elemento.</p>
                            <p>El agua tiene una estructura no lineal. Sus dos ??tomos de hidr??geno se encuentran enlazados al ??tomo de ox??geno y forman un ??ngulo de 104.5?? entre s??. Esta distribuci??n de sus ??tomos, sumado al alto valor de electronegatividad del ??tomo de ox??geno, genera la formaci??n de un dipolo el??ctrico que determina la polaridad del agua. Por lo tanto, el agua es una mol??cula polar.</p>
                            <p>El agua es considerada como el solvente universal, ya que casi todas las sustancias pueden disolverse en ella. Las sustancias solubles en agua son polares y llamadas hidr??filas. Las sustancias no polares (apolares), como el aceite o la gasolina, son llamadas hidr??fobas y no se disuelven en agua.</p>
                            <p>La mol??cula del agua, sumamente abundante en nuestro planeta, forma tambi??n parte de numerosas sustancias org??nicas y de los cuerpos de los animales y las plantas.</p>
                        </div>

                        <div className="separacionFooter" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Moleculas;