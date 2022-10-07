import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import {
    Link
} from "react-router-dom";

import '../styles/fenilalanina.scss'

import tartaTradicional from '../images/cheesecake/tarta-de-queso-tradicional.jpeg'
import tartaChocolate from '../images/cheesecake/tarta-de-queso-y-chocolate.jpeg'
import tartaManzana from '../images/cheesecake/tarta-de-queso-y-manzana.jpeg'
import fenilalanina1 from '../images/fenilalanina/fenilalanina1.png'
import fenilalanina2 from '../images/fenilalanina/fenilalanina2.png'


const Fenilalanina = () => {
    return (
        <div className="fenilalaninaJS">
            <div className="fenilalanina">
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
                        <p>Los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> son moléculas que se combinan para formar las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> en los alimentos y en el cuerpo. De los 20 <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> que se requieren, 9 de ellos son esenciales, es decir, deben ser suministrados con la dieta porque nuestro cuerpo no los sintetiza. La <Link to="/fenilalanina" className="ref" onClick={window.scrollTo(0, 0)}><b>fenilalanina</b></Link> es uno de ellos.</p>
                        <p>Son estas unidades las que ayudan al crecimiento y a la reparación de los tejidos. También funcionan para producir otros <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link>, formar anticuerpos, algunas hormonas y sintetizar los músculos.</p>
                        <p>Los alimentos que más lo contienen son los de origen animal y algunos vegetales. Existen endulzantes artificiales que son elaborados con <Link to="/fenilalanina" className="ref" onClick={window.scrollTo(0, 0)}><b>fenilalanina</b></Link>. Sin embargo, a pesar de sus beneficios, hay que cuidarse de un consumo excesivo.</p>
                        <p>Para saber más sobre las funciones de este interesante <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link>, dónde se encuentra en forma natural y las dosis recomendadas, te invitamos a seguir leyendo el artículo.</p>
                        <div className="titlee">¿Qué es la Fenilalanina?</div>

                        <div>
                            <div className="bloquee2">
                                <p>La <Link to="/fenilalanina" className="ref" onClick={window.scrollTo(0, 0)}><b>fenilalanina</b></Link>, al igual que otros 8 <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link>, debe ser ingerida con los alimentos porque el cuerpo no la sintetiza. Por eso se considera un <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> esencial.</p>
                                <p>Es conocida por las siglas F o Phe y se encuentra en las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> en su forma natural como L-<Link to="/fenilalanina" className="ref" onClick={window.scrollTo(0, 0)}><b>fenilalanina</b></Link>. También se producen las formas D-<Link to="/fenilalanina" className="ref" onClick={window.scrollTo(0, 0)}><b>fenilalanina</b></Link> o DPA y una mezcla de ellas conocida como DL-<Link to="/fenilalanina" className="ref" onClick={window.scrollTo(0, 0)}><b>fenilalanina</b></Link> o DLPA, sintetizadas en el laboratorio.</p>
                                <p>Desde el punto de vista químico, es considerado un <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> aromático. No por sus aromas, sino porque está unido a un anillo de benceno que lo hace insoluble en el agua.</p>
                                <p>Cumple ciertas funciones importantes dentro de nuestro organismo, incluyendo la producción de otros <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link>, como la tirosina. También se sintetizan otras moléculas de importancia biológica, como hormonas y neurotransmisores.</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <img className="imagesAminoacids" src={fenilalanina1} alt="" />
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                            </div>

                            <hr />

                            <div className="subtitle">Principales funciones en el organismo</div>
                            <div className="separacionTitulos" />
                            <div className="bloquee2">
                                <p>La <Link to="/fenilalanina" className="ref" onClick={window.scrollTo(0, 0)}><b>fenilalanina</b></Link> es un <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> esencial que forma parte de las estructuras de tejidos y las células del organismo, debido a que en conjunto con otros <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> se encarga de sintetizar <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> en el organismo.</p>
                                <div className="separacionPeque" />
                                <p>Asimismo, también es necesaria para la producción de otras moléculas como la tirosina, otro <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> que también forma parte de las estructuras y tejidos, y las catecolaminas, hormonas producidas por las glándulas suprarrenales como lo son la epinefrina, la norepinefrina y la dopamina, estas hormonas se encargan de regular el humor y la respuesta del organismo ante una situación de estrés.</p>
                            </div>

                            <hr />

                            <div className="subtitle">¿Para qué sirve la Fenilalanina?</div>
                            <div className="separacionTitulos" />
                            <div className="bloquee2">
                                <p>La <Link to="/fenilalanina" className="ref" onClick={window.scrollTo(0, 0)}><b>fenilalanina</b></Link> sirve para reparar las células del cuerpo, además de ser un componente esencial de los tejidos corporales. Por lo que el consumo de <Link to="/fenilalanina" className="ref" onClick={window.scrollTo(0, 0)}><b>fenilalanina</b></Link> tiene varios beneficios para la salud, como:</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <h5>✓ Podría aliviar el dolor crónico</h5>
                                <p>La fenilalanina tiene la capacidad de aumentar los niveles de endorfinas en el cerebro, que son sustancias que tienen un efecto analgésico natural, reduciendo incluso el dolor y las molestias crónicas.</p>
                                <p>Sin embargo, la fenilalanina no trata la causa del dolor, por lo que es importante consultar a un médico incluso si el dolor está mejorando.</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <h5>✓ Podría combatir la depresión</h5>
                                <p>La fenilalanina actúa en la producción de dopamina, una hormona que cuando es liberada en el organismo genera sensación de bienestar, placer, euforia y felicidad, por lo que ayudan a mejorar la disposición mental y a combatir los síntomas característicos de la depresión.</p>
                                <p>Algunos estudios han demostrado que durante una crisis depresiva los valores de los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> como la fenilalanina y la tirosina se encuentran disminuidos, por ello su consumo durante estos episodios podría ser beneficioso para el individuo, sin embargo es necesario más estudios para determinarlo.</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <h5>✓ Podría favorecer la pérdida de peso</h5>
                                <p>Ingerir fenilalanina antes de realizar ejercicio aparentemente acelera el metabolismo ayudando a aumentar la oxidación de las grasas. Recomendándose la suplementación de 1 a 2 gramos de fenilalanina al día para favorecer la pérdida de peso, sin embargo, esta suplementación debe realizarse bajo la supervisión de un nutricionista o médico.</p>
                                <p>Además de esto, la fenilalanina actúa en la formación de tirosina y catecolaminas, que están ligadas al control del apetito, disminuyendo la sensación de hambre. Además de mejorar el humor, dando más energía para realizar actividad física.</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <h5>✓ Podría tratar las manchas de vitiligo</h5>
                                <p>Debido a que ayuda en la producción de tirosina, la fenilalanina a veces puede usarse para enmascarar las manchas de vitiligo. Esto se debe a que la tirosina es esencial para la producción de melanina, la sustancia del color de la piel que falta en las personas con esta enfermedad.</p>
                                <p>Por lo general, el tratamiento para el vitiligo es mediante suplementos orales de fenilalanina y exposición a radiación UV. Además, la aplicación de cremas de L- fenilalanina al 10% también parece aumentar los resultados, ocultando mejor las manchas.</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <h5>✓ Podría ayudar a tratar diversas enfermedades</h5>
                                <p>La fenilalanina es un <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> esencial necesario para la formación de tirosina, una sustancia que aumenta la producción de varios neurotransmisores como la noradrenalina y la dopamina, permitiendo el equilibrio de problemas mentales y psicológicos como el trastorno bipolar, el déficit de atención y la enfermedad de Parkinson, sin embargo, son necesarios más estudios que lo comprueben.</p>
                            </div>
                        </div>

                        <hr />

                        <div id="bloquee">
                            <div className="subtitle">Alimentos que contienen Fenilalanina</div>
                            <div className="separacionTitulos" />
                            <img className="imagesAminoacids" src={fenilalanina2} alt="" />
                            <p>Las principales fuentes de <Link to="/fenilalanina" className="ref" onClick={window.scrollTo(0, 0)}><b>fenilalanina</b></Link> son la carne y los quesos, sin embargo, otros alimentos que contienen este <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> son:</p>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <p>✓ Leche y derivados</p>
                            <div className="separacionPeque" />
                            <p>✓ Comidas con soya</p>
                            <div className="separacionPeque" />
                            <p>✓ Semillas y nueces como cacahuate, semillas de calabaza, chía o semillas de girasol</p>
                            <div className="separacionPeque" />
                            <p>✓ Todos los tipos de pescado</p>
                            <div className="separacionPeque" />
                            <p>✓ Huevos</p>
                            <div className="separacionPeque" />
                            <p>✓ Frijoles, lentejas y guisantes</p>
                            <div className="separacionPeque" />
                            <p>✓ Papa, arroz, pan blanco, pan integral, pasta, maíz, harina de maíz, plátano</p>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <p>Además de esto, los productos con aspartame, el cual es utilizado especialmente como sustituto del azúcar en algunos dulces también son ricos en <Link to="/fenilalanina" className="ref" onClick={window.scrollTo(0, 0)}><b>fenilalanina</b></Link>.</p>
                        </div>

                        <hr />

                        <div id="bloquee">
                            <div className="subtitle">Cómo la fenilalanina intoxica a los fenilcetonúricos</div>
                            <div className="separacionTitulos" />
                            <p>La fenilalanina hidroxilasa es el nombre de la enzima que metaboliza la fenilalanina y la convierte en tirosina, y que por un problema a nivel genético los fenilcetonúricos no la tienen. Cuando el individuo ingiere alimentos ricos en este <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link>, este comienza a acumularse en la sangre y se convierte en una sustancia tóxica, afectando el desarrollo y la maduración del sistema nervioso, produciendo lesiones irreversibles a nivel neurológico como retardo mental y microcefalia.</p>
                            <div className="separacionPeque" />
                            <p>La fenilalanina no debe ser utilizada cuando un individuo sufre de fenilcetonuria, cualquier alimento que contenga más de 5% de <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteína</b></Link> está totalmente contraindicado. Por ello es importante leer el rótulo de los alimentos en caso de sufrir de esta enfermedad.</p>
                        </div>

                        <div className="separacionFooter" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fenilalanina;