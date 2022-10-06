import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import {
    Link
} from "react-router-dom";

import '../styles/glutamina.scss'

import tartaTradicional from '../images/cheesecake/tarta-de-queso-tradicional.jpeg'
import tartaChocolate from '../images/cheesecake/tarta-de-queso-y-chocolate.jpeg'
import tartaManzana from '../images/cheesecake/tarta-de-queso-y-manzana.jpeg'

const Glutamina = () => {
    return (
        <div className="glutaminaJS">
            <div className="glutamina">
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
                        <div className="titlee">¿Qué es la Glutamina?</div>

                        <div>
                            <div className="bloquee2">
                                <p>Es uno de los 20 <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> que intervienen en la formación de las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> y actúa como fuente de energía para los linfocitos y las células intestinales. Este <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> es de tipo no esencial, es decir, el organismo tiene la habilidad de sintetizarlo gracias a la intervención de los grupos amino que contienen los alimentos.</p>
                                <p>La <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>glutamina</b></Link> es el <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> más abundante en los grupos musculares, en el plasma sanguíneo, la médula espinal y el líquido cefalorraquídeo, y desempeña funciones imprescindibles en el organismo. De hecho, participa en el 60 por ciento de los procesos.</p>
                                <p>Aunque la <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>glutamina</b></Link> se genera de forma natural por el organismo, su demanda aumenta como consecuencia del estrés mental y físico. Es decir, cuanto más estrés soporte una persona, mayor necesidad tendrá el organismo de <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>glutamina</b></Link>. Además, su producción disminuye con la edad. En muchas ocasiones las personas tienen que tomar suplementos con <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>glutamina</b></Link> para completar esta necesidad y entre otros problemas, evitar que la masa muscular disminuya como consecuencia del estrés oxidativo. Si el estrés oxidativo es intenso puede llegar a provocar la muerte celular. Algunos deportistas relacionados con el culturismo lo consumen para que los músculos no bajen de volumen.</p>
                            </div>

                            <hr />

                            <div className="subtitle">¿Para qué sirve la glutamina?</div>
                            <div className="separacionTitulos" />
                            <div className="bloquee2">
                                <p>La <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>Glutamina</b></Link> es un <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> necesario y, aunque sea del grupo no esencial, importantísimo para tu cuerpo. Es significativo que sepas que este compuesto participa de forma activa en el 60% de los procesos orgánicos, a continuación te mencionamos algunos:</p>
                                <div className="separacionPeque" />
                                <p>✓ Las actividades metabólicas necesitan desempeñarse de forma adecuada. La <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>Glutamina</b></Link> gracias a su composición química de nitrógeno contribuye en el transporte equilibrado de este elemento por todo el cuerpo; así, las funciones metabólicas no se ven alteradas</p>
                                <div className="separacionPeque" />
                                <p>✓ Actuando directamente en los riñones y favoreciendo el equilibrio del ácido-base, la <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>Glutamina</b></Link> disocia el amoniaco en dicho órgano hasta beneficiar el predominio del bicarbonato. De esta forma está contribuyendo a la formación de células cutáneas nuevas, retrasando, así, el envejecimiento.</p>
                                <div className="separacionPeque" />
                                <p>✓ Una piel lozana y elástica es posible conseguirla a través del correcto abastecimiento de <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>Glutamina</b></Link>. Con los años, los niveles de este <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> en el cuerpo van disminuyendo hasta que (el organismo) se ve obligado de tomar energía de las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> directamente, es debido a esto que se produce lo que conocemos como pérdida de la masa muscular.</p>
                                <div className="separacionPeque" />
                                <p>✓ Tus procesos inmunológicos se ven mejorados gracias a la <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>Glutamina</b></Link>. Es imprescindible su presencia a la hora de sintetizar los nucleótidos y desempeña un papel clave en el crecimiento del cabello.</p>
                                <div className="separacionPeque" />
                                <p>✓ Cuando se trata de traumatismos, infecciones y el estrés la <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>Glutamina</b></Link> ataca estas situaciones con eficacia facilitando tu recuperación</p>
                                <div className="separacionTitulos" />
                                <div className="separacionPeque" />
                                <p>A pesar de tener funciones importantes, no es recomendable que sea aplicado en personas que sufren de cirrosis o algún problema renal.</p>
                            </div>
                        </div>

                        <hr />

                        <div id="bloquee">
                            <div className="subtitle">Beneficios y propiedades de la Glutamina</div>
                            <div className="separacionTitulos" />
                            <p>A continuación exponemos los beneficios y propiedades más importantes de la <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>glutamina</b></Link> en nuestro cuerpo y metabolismo:</p>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <p>✓ Es útil a la hora de evitar y tratar enfermedades como artritis</p>
                            <div className="separacionPeque" />
                            <p>✓ Con su consumo los niveles de estrés disminuyen y permite que, de esta forma, tomes el control sobre tu rutina para evitar sentimientos de abatimiento</p>
                            <div className="separacionPeque" />
                            <p>✓ Frena diarreas y neuropatías provocadas por tratamientos de quimioterapia</p>
                            <div className="separacionPeque" />
                            <p>✓ Protege el sistema inmune de personas que padecen de cáncer de esófago</p>
                            <div className="separacionPeque" />
                            <p>✓ Controla trastornos alimenticios</p>
                            <div className="separacionPeque" />
                            <p>✓ Combate la ansiedad, la depresión, el insomnio y la irritabilidad</p>
                            <div className="separacionPeque" />
                            <p>✓ Trata de forma efectiva el trastorno de hiperactividad y el déficit de atención</p>
                            <div className="separacionPeque" />
                            <p>✓ Disminuye la colitis ulcerosa</p>
                            <div className="separacionPeque" />
                            <p>✓ Combate la anemia</p>
                            <div className="separacionPeque" />
                            <p>✓ Favorece la recuperación de los tejidos y músculos</p>
                        </div>

                        <hr />

                        <div id="bloquee">
                            <div className="subtitle">¿Cómo tomar Glutamina?</div>
                            <div className="separacionTitulos" />
                            <p>El déficit de <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>Glutamina</b></Link> en el cuerpo es muy común padecerlo. Es debido a esto que los suplementos alimenticios son frecuentemente recomendados, sin embargo, el mundo vegetal y animal está altamente enriquecido por este <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link>. Te mencionamos algunos que puedes encontrar en tu rutina diaria:</p>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <p>✓ <b>Los lácteos</b></p>
                            <div className="separacionPeque" />
                            <p>✓ <b>La carne</b></p>
                            <div className="separacionPeque" />
                            <p>✓ <b>Espinaca</b></p>
                            <div className="separacionPeque" />
                            <p>✓ <b>Perejil</b></p>
                            <div className="separacionPeque" />
                            <p>✓ <b>Frutos secos</b></p>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <p>Debes saber que muchos de estos productos pierden sus propiedades naturales en <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>Glutamina</b></Link> una vez que son cocinados, es por eso que es recomendable que los ingieras crudos para tener acceso a las cantidades correctas de este <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link>.</p>
                        </div>

                        <hr />

                        <div className="subtitle">Alimentos con glutamina y alimentos ricos en glutamina</div>
                        <div className="separacionTitulos" />
                        <div className="bloquee2">
                            <p></p>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <table class="default">
                                <tr>
                                    <th>Alimentos de origen animal</th>
                                    <th>Glutamina (Ácido glutámico) 100grs</th>
                                </tr>
                                <tr>
                                    <td>Quesos</td>
                                    <td>6092 mg</td>
                                </tr>
                                <tr>
                                    <td>Salmón</td>
                                    <td>5871 mg</td>
                                </tr>
                                <tr>
                                    <td>Carne de res</td>
                                    <td>4011 mg</td>
                                </tr>
                                <tr>
                                    <td>Pescados</td>
                                    <td>2944 mg</td>
                                </tr>
                                <tr>
                                    <td>Huevos</td>
                                    <td>1760 mg</td>
                                </tr>
                                <tr>
                                    <td>Leche entera</td>
                                    <td>1581 mg</td>
                                </tr>
                                <tr>
                                    <td>Yogur</td>
                                    <td>1122 mg</td>
                                </tr>
                                <tr>
                                    <th>Alimentos de origen vegetal</th>
                                    <th>Glutamina (Ácido glutámico) 100grs</th>
                                </tr>
                                <tr>
                                    <td>Soya</td>
                                    <td>7875 mg</td>
                                </tr>
                                <tr>
                                    <td>Maíz</td>
                                    <td>1768 mg</td>
                                </tr>
                                <tr>
                                    <td>Tofu</td>
                                    <td>1721 mg</td>
                                </tr>
                                <tr>
                                    <td>Garbanzos</td>
                                    <td>1550 mg</td>
                                </tr>
                                <tr>
                                    <td>Lentejas</td>
                                    <td>1399 mg</td>
                                </tr>
                                <tr>
                                    <td>Frijoles negros</td>
                                    <td>1351 mg</td>
                                </tr>
                                <tr>
                                    <td>Habas</td>
                                    <td>1291 mg</td>
                                </tr>
                                <tr>
                                    <td>Frijoles blancos</td>
                                    <td>1106 mg</td>
                                </tr>
                                <tr>
                                    <td>Guisantes</td>
                                    <td>733 mg</td>
                                </tr>
                                <tr>
                                    <td>Arroz blanco</td>
                                    <td>524 mg</td>
                                </tr>
                                <tr>
                                    <td>Remolacha</td>
                                    <td>428 mg</td>
                                </tr>
                                <tr>
                                    <td>Espinacas</td>
                                    <td>343 mg</td>
                                </tr>
                                <tr>
                                    <td>Repollo</td>
                                    <td>294 mg</td>
                                </tr>
                                <tr>
                                    <td>Perejil</td>
                                    <td>249 mg</td>
                                </tr>
                            </table>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                        </div>

                        <hr />

                        <div className="subtitle">Efectos secundarios o negativos de la glutamina</div>
                        <div className="separacionTitulos" />
                        <div className="bloquee2">
                            <div className="separacionTitulos" />
                            <p>Algunos de los efectos secundarios o negativos que la L-glutamina puede ocasionar son los siguientes:</p>
                            <div className="separacionTitulos" />
                            <div className="separacionPeque" />
                            <p>✓ Estreñimiento</p>
                            <div className="separacionPeque" />
                            <p>✓ Náuseas</p>
                            <div className="separacionPeque" />
                            <p>✓ Dolor de cabeza</p>
                            <div className="separacionPeque" />
                            <p>✓ Dolor abdominal</p>
                            <div className="separacionPeque" />
                            <p>✓ Tos</p>
                            <div className="separacionPeque" />
                            <p>✓ Dolor de espalda, piernas, pies, manos o brazos.</p>
                        </div>

                        <hr />

                        <div className="subtitle">¿La glutamina engorda?</div>
                        <div className="separacionTitulos" />
                        <div className="bloquee2">
                            <p>Al tomarse en las cantidades recomendadas y bajo la orientación de un especialista, la <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>glutamina</b></Link> no engorda. Sin embargo, al ingerirse combinada con una rutina de ejercicios para estimular una masa muscular creciente, podría parecer que se engorda pero es debido a una mayor masa muscular.</p>
                            <div className="separacionPeque" />
                            <p>Sin embargo, si se ingiere sin indicación y sin realizar actividad física podría favorecer la acumulación de grasa y a su vez hacerte engordar.</p>
                        </div>

                        <hr />

                        <div className="subtitle">¿Qué funciones tiene la glutamina?</div>
                        <div className="separacionTitulos" />
                        <div className="bloquee2">
                            <p>Dada la composición de este <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> (contiene dos átomos de nitrógeno cuando lo habitual es que sólo disponga de uno), su función principal es el transporte corporal del nitrógeno para que se puedan desempeñar las actividades metabólicas del cuerpo.</p>
                            <div className="separacionPeque" />
                            <p>Otra de las funciones por las que destaca es su papel en la regulación del equilibro ácido-base. La <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>glutamina</b></Link> es capaz de disociar el amoniaco en los riñones, favoreciendo la eliminación del ácido y manteniendo el bicarbonato. Todo esto contribyuye a que se puedan producir células cutáneas nuevas y se retrase el envejecimiento.</p>
                            <div className="separacionPeque" />
                            <p>El abastecimiento de <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>glutamina</b></Link> es imprescindible para mantener una piel sana, tersa y elástica. Esta propiedad se va perdiendo con la edad puesto que dejan de producirse los niveles de <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>glutamina</b></Link> necesarios y el organismo los toma de las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link>, trasformando éstas en <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>glutamina</b></Link> y energía. De ahí la razón de que se produzca la pérdida de masa muscular.</p>
                            <div className="separacionPeque" />
                            <p>La <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>glutamina</b></Link> también interviene en los procesos inmunológicos mejorándolos. Es fundamental para la síntesis de los nucleótidos y desempeña un papel clave en el crecimiento del pelo.</p>
                            <div className="separacionPeque" />
                            <p>Este <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> puede transformarse en glucosa en los riñones sin modificar las cifras de la insulina ni del glucagón. Esto implica que el organismo pueda ganar más energía evitando la acumulación de grasa innecesaria que proviene de los alimentos por lo que puede ejercer un papel como controlador del peso.</p>
                            <div className="separacionPeque" />
                            <p>La <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>glutamina</b></Link> también está asociada con la fatiga. Causa una especie de tampón que neutraliza el exceso de ácido en los músculos que surge cuando se practica ejercicio anaeróbico de forma intensa y que ocasiona en los deportistas fatiga.</p>
                            <div className="separacionPeque" />
                            <p>También se relaciona este <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácido</b></Link> con el bajo rendimiento mental, la falta de concentración y el insomnio, entre otros. Estos síntomas se pueden producir en personas que tienen déficit de <Link to="/glutamina" className="ref" onClick={window.scrollTo(0, 0)}><b>glutamina</b></Link>. Si se presenta en niveles normales favorece la concentración y el sueño.</p>
                        </div>
                        <div className="separacionFooter" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Glutamina;