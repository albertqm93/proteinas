import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import {
    Link
} from "react-router-dom";

import '../styles/proteinas.scss'

import tartaTradicional from '../images/cheesecake/tarta-de-queso-tradicional.jpeg'
import tartaChocolate from '../images/cheesecake/tarta-de-queso-y-chocolate.jpeg'
import tartaManzana from '../images/cheesecake/tarta-de-queso-y-manzana.jpeg'

const Proteinas = () => {
    return (
        <div className="proteinasJS">
            <div className="proteinas">
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
                        <div className="titlee">¿Qué son las Proteínas? Tipos, Funciones y Beneficios</div>

                        <div>
                            <div className="bloquee2">
                                Cada célula del cuerpo contiene <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link>, debido a que esta es muy importante para mantener en buen estado los huesos, músculos, la piel y todos los tejidos.
                                <div className="separacionPeque" />
                                Esta se obtiene mediante la alimentación, teniendo en cuenta que, el requerimiento de <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> de una persona no es igual al de otra. Pueden ser tanto de origen animal como vegetal.
                                <div className="separacionPeque" />
                                Los dos temas principales que derivan las proteínas són: Los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> y las citocinas.
                            </div>

                            <hr />

                            <div className="subtitle">¿Qué son las proteínas y para qué sirven?</div>
                            <div className="separacionTitulos" />
                            <div className="bloquee2">
                                Las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> son moléculas de <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> unidas por enlaces peptídicos. Están presentes en todas las células del cuerpo, por lo tanto, participan en todos los procesos funcionales de las mismas. La composición química de las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> es la siguiente:                            <div className="separacionPeque" />
                                <div className="separacionPeque" />
                                ✓ Oxígeno
                                <br />
                                ✓ Carbono
                                <br />
                                ✓ Hidrógeno
                                <br />
                                ✓ Nitrógeno
                                <br />
                                ✓ Azufre
                                <br />
                                ✓ Fósforo
                                <div className="separacionPeque" />
                                La función que realizan las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> es de vital importancia. Gracias a su contenido de nitrógeno benefician el crecimiento corporal. También ayudan al mantenimiento de los tejidos. Además, permiten transportar compuestos esenciales a través de la sangre.
                            </div>

                        </div>

                        <hr />
                        <div id="bloquee">
                            <div className="subtitle">¿Cuáles son los alimentos con proteínas?</div>
                            <div className="separacionTitulos" />
                            Las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> se obtienen de la alimentación. El porcentaje adecuado de <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> es importante para tener una alimentación sana, equilibrada y con los elementos proteicos suficientes.

                            Muchas personas relacionan la proteína con carne, pero en realidad esta no se encuentra solamente en alimentos de origen animal, sino también en algunos alimentos de origen vegetal. Para tener una dieta rica en <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteína</b></Link>, mostraremos algunos alimentos proteicos:
                            <div className="separacionPeque" />
                            ✓ <b>Carnes</b>. La <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteína</b></Link> se encuentra en todo tipo de carne. Las más consumidas son las carnes de pollo, pescado, bovinos, cerdo y conejo.
                            <div className="separacionPeque" />
                            ✓ <b>Lácteos</b>. Todos los productos hechos a base de leche las contienen, ya sea queso, mantequilla, yogur, los dulces de leche, entre otros.
                            <div className="separacionPeque" />
                            ✓ <b>Granos</b>. Los granos más consumidos por su contenido proteico son las lentejas, la Soja, arvejas, frijol y los garbanzos.
                            <div className="separacionPeque" />
                            ✓ <b>Huevos</b>. Los huevos son un tipo de alimento muy consumido por su gran valor proteico. Los más conocidos son los de gallina y los de codorniz.
                            <div className="separacionPeque" />
                            ✓ <b>Cereales</b>. Algunos de los cereales son el arroz, el trigo, la cebada, quinoa y la avena.
                            <div className="separacionPeque" />
                            ✓ <b>Frutos secos</b>. Los frutos secos útiles para una excelente dieta son el maní, las nueces y las semillas de merey.
                            <div className="separacionPeque" />
                            Solo los alimentos de origen animal tienen proteínas completas, es decir, aportan todos los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> que el cuerpo requiere. Pero si se desean obtener todos los <Link to="/aminoacidos" className="ref" onClick={window.scrollTo(0, 0)}><b>aminoácidos</b></Link> con alimentos de origen vegetal se debe realizar una combinación entre los mismos, en este caso los suplementos ayudan a lograr una combinación óptima.
                        </div>

                        <hr />

                        <div className="subtitle">Tipos de proteínas</div>
                        <div className="separacionTitulos" />
                        <div className="bloquee2">
                            Los tipos de <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> se pueden definir según diferentes criterios, por eso no existe un sistema de clasificación único para ellas. Estas pueden clasificarse según su forma, solubilidad, su composición química o su origen.
                            <div className="separacionPeque" />
                            ✓ <b>Según la forma</b>. Las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> pueden ser fibrosas, globulares o mixtas.
                            <div className="separacionPeque" />
                            ✓ <b>Según la solubilidad</b>. De acuerdo a la solubilidad de las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link>, estas pueden ser globulares, fibrosas, integrales de membrana e intrínsecamente desordenadas.
                            <div className="separacionPeque" />
                            ✓ <b>Según composición química.</b> Estas pueden ser <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> simples o conjugadas.
                            <div className="separacionPeque" />
                            ✓ <b>Según el origen.</b> Las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> pueden ser de origen animal o vegetal.
                        </div>

                        <hr />

                        <div className="subtitle">¿Cuáles son las proteínas que necesita el cuerpo humano?</div>
                        <div className="separacionTitulos" />
                        <div className="bloquee2">
                            Se debe tener en cuenta que el cuerpo humano no almacena <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> de la misma manera que lo hace con las grasas, por lo tanto, es importante que la ingestión proteica sea a diario.
                            <div className="separacionPeque" />
                            Es común que las personas que desean realizar una dieta rica en alimentos proteicos pregunten ¿cuáles son las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> que necesita el cuerpo humano? O ¿cuáles son las proteínas más importantes? En este caso se debe saber que el cuerpo humano requiere distinta cantidad según varios parámetros; edad, actividad física, estado de salud…
                            <div className="separacionPeque" />
                            Tomar <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> de origen animal se debe hacer con moderación, ya que la carne suele tener un alto contenido en otros nutrientes como la grasa. Existen preparados de proteína para dietas o deportistas, estos preparados es preferible utilizarlos bajo recomendación de un especialista y con la cantidad adecuada.
                            <div className="separacionPeque" />
                            Para un adulto promedio se recomienda un consumo de <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteína</b></Link> al día de 0,83 gramos por cada kilogramo de peso corporal. Durante el desarrollo de los niños o el periodo de embarazo y lactancia, el consumo de alimentos proteicos debe ser relativamente alto, pues en dichos períodos aumentan las actividades metabólicas.
                        </div>

                        <hr />

                        <div className="subtitle">¿Que beneficios aportan las proteínas?</div>
                        <div className="separacionTitulos" />
                        <div className="bloquee2">
                            El ser humano no puede dejar de comer albuminoideo, pues estas son necesarias para que el organismo cumpla todas sus funciones. En adelante describiremos algunos de los beneficios que aporta la ingesta de <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link>:
                            <div className="separacionPeque" />
                            <div className="aportes">
                                <h5>Función a nivel celular</h5>
                                <p>Son claves en muchos procesos celulares, como puede ser la formación estructural en las células (formar membranas), función hormonal, función defensiva (contra patógenos externos), función reparadora (son los «albañiles» de nuestro cuerpo….</p>
                            </div>
                            <div className="aportes">
                                <h5>Mantiene la masa muscular</h5>
                                <p>Un buen consumo evita la pérdida progresiva de masa muscular. Esto resulta muy beneficioso para los adultos mayores, pues son quienes tienen mayor probabilidad de tener mucha perdida de músculo.</p>
                            </div>
                            <div className="aportes">
                                <h5>Aporta un mayor rendimiento físico</h5>
                                <p>Los albuminoides son la clave fundamental para reparar el tejido dañado después de tener mucha actividad física, ya sea al hacer ejercicios o al realizar trabajos forzosos. Por eso, la mayoría de los atletas las consumen en altas cantidades.</p>
                            </div>
                            <div className="aportes">
                                <h5>Control de peso</h5>
                                <p>Estudios han demostrado que la ingesta adecuada de alimentos proteicos produce sensación de saciedad en el cuerpo. Además, también ayudan a la pérdida de peso, especialmente cuando están libres de grasa.</p>
                            </div>
                        </div>

                        <div className="subtitle">¿Cuál es la mejor proteína para aumentar la masa muscular?</div>
                        <div className="separacionTitulos" />
                        <div className="bloquee2">

                            <p>Si se desea tener una apariencia atlética o un mejor rendimiento deportivo, es importante consumir alimentos proteicos, pues el tejido muscular está formado en mayor parte por <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link>.
                                <div className="separacionPeque" />
                                No todos los alimentos proteicos aumentan la masa muscular de forma eficiente, por eso, daremos a conocer los mejores alimentos  para conseguir un buen nivel de musculatura.
                                <div className="separacionPeque" />
                                Los alimentos más ricos son las carnes magras, los lácteos, los granos, los huevos y los frutos secos.
                                <div className="separacionPeque" />
                                Una manera eficaz de obtener un gran aporte es consumiendo suplementos proteicos, estos están hechos a base de <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteína</b></Link> de huevo, suero de leche y soja.
                                <div className="separacionPeque" />
                                Es importante tener en cuenta que, cada fisiología corporal es diferente, por lo tanto, los requerimientos de <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> también lo son. Además, cuando las personas realizan ejercicios, la necesidad de <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> dependen de la intensidad de los entrenamientos. Como resultado, es de vital importancia que cada persona tenga un buen consumo de <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link>.
                            </p>
                        </div>

                        <div className="subtitle">¿Cuál es la función principal de las proteínas?</div>
                        <div className="separacionTitulos" />
                        <div className="bloquee2">
                            <p>De entre todas las biomoléculas, las <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> desempeñan un papel fundamental en el organismo. Son esenciales para el crecimiento, gracias a su contenido de nitrógeno, que no está presente en otras moléculas como grasas o hidratos de carbono. También lo son para las síntesis y mantenimiento de diversos tejidos o componentes del cuerpo, como los jugos gástricos, la hemoglobina, las vitaminas, las hormonas y las enzimas (estas últimas actúan como catalizadores biológicos haciendo que aumente la velocidad a la que se producen las reacciones químicas del metabolismo). Asimismo, ayudan a transportar determinados gases a través de la sangre, como el oxígeno y el dióxido de carbono, y funcionan a modo de amortiguadores para mantener el equilibrio ácido-base y la presión oncótica del plasma.
                                <div className="separacionPeque" />
                                Otras funciones más específicas son, por ejemplo, las de los anticuerpos, un tipo de <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> que actúan como defensa natural frente a posibles infecciones o agentes externos; el colágeno, cuya función de resistencia lo hace imprescindible en los tejidos de sostén o la miosina y la actina, dos <Link to="/proteinas" className="ref" onClick={window.scrollTo(0, 0)}><b>proteínas</b></Link> musculares que hacen posible el movimiento, entre muchas otras.
                            </p>
                        </div>

                        <div className="subtitle">Poner los subtemas y redireccionar a ellos, aminoacidos citocinas,etc</div>
                        <div className="separacionTitulos" />
                        <div className="bloquee2">

                            <div className="types">
                                <div className="childs">
                                    <div className="subTypesSpecial"> <Link to="/cheesetraditional" className="ref" onClick={window.scrollTo(0, 0)}>Tarta de Queso tradicional</Link></div>
                                    <div className="separacionPeque" />
                                    <img src={tartaTradicional} className="imgType" alt="tradicional pic" />
                                </div>
                                <div className="childs">
                                    <div className="separacionPeque" />
                                    <div className="subTypesSpecial"> <Link to="/cheesecolate" className="ref">Tarta de Queso y Chocolate</Link></div>
                                    <div className="separacionPeque" />
                                    <img src={tartaChocolate} className="imgType" alt="chocolate pic" />
                                </div>
                                <div className="childs">
                                    <div className="subTypesSpecial"> <Link to="/cheeseapple" className="ref">Tarta de Queso y Manzana</Link></div>
                                    <div className="separacionPeque" />
                                    <img src={tartaManzana} className="imgType" alt="manzana pic" />
                                </div>
                                <div className="childs">
                                    <div className="subTypesSpecial"> <Link to="/cheeseblueberry" className="ref">Tarta de Queso y Arándanos</Link></div>
                                    <div className="separacionPeque" />
                                    <img src={tartaManzana} className="imgType" alt="arandanos pic" />
                                </div>
                                <div className="childs">
                                    <div className="subTypes"> <Link to="/cheesegreece" className="ref">Tarta de Queso y Yogur Griego</Link></div>
                                    <div className="separacionPeque" />
                                    <img src={tartaManzana} className="imgType" alt="yogur pic" />
                                </div>
                                <div className="childs">
                                    <div className="subTypes"> <Link to="/cheesesweet" className="ref">Tarta de Queso y Caramelo</Link></div>
                                    <div className="separacionPeque" />
                                    <img src={tartaManzana} className="imgType" alt="caramelo pic" />
                                </div>
                                <div className="childs">
                                    <div className="subTypes"> <Link to="/cheesecurd" className="ref">Tarta de Requesón</Link></div>
                                    <div className="separacionPeque" />
                                    <img src={tartaManzana} className="imgType" alt="requesón pic" />
                                </div>
                                <div className="childs">
                                    <div className="subTypes"> <Link to="/cheesericotta" className="ref">Tarta de Queso Ricotta y Mascarpone</Link></div>
                                    <div className="separacionPeque" />
                                    <img src={tartaManzana} className="imgType" alt="ricotta pic" />
                                </div>
                                <div className="childs">
                                    <div className="subTypes"> <Link to="/cheesebrownie" className="ref">Tarta de Queso Brownie</Link></div>
                                    <div className="separacionPeque" />
                                    <img src={tartaManzana} className="imgType" alt="brownie pic" />
                                </div>
                                <div className="childs">
                                    <div className="subTypes"> <Link to="/cheesewhite" className="ref">Tarta de Queso y Chocolate Blanco</Link></div>
                                    <div className="separacionPeque" />
                                    <img src={tartaManzana} className="imgType" alt="white pic" />
                                </div>
                                <div className="childs">
                                    <div className="subTypes"> <Link to="/cheesesalad" className="ref">Tarta de Queso Salada</Link></div>
                                    <div className="separacionPeque" />
                                    <img src={tartaManzana} className="imgType" alt="salad pic" />
                                </div>
                                <div className="childs">
                                    <div className="subTypes"> <Link to="/cheeselime" className="ref">Tarta de Queso y Lima</Link></div>
                                    <div className="separacionPeque" />
                                    <img src={tartaManzana} className="imgType" alt="lima pic" />
                                </div>
                                <div className="separacionFooter" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proteinas;