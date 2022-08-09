import bcrypt from "bcryptjs";

// Interaaces
import { IModulo } from "../interfaces";

interface SeedGrade {
  module1?: number[];
  module2?: number[];
  module3?: number[];
}

interface SeedUser {
  name: string;
  email: string;
  password: string;
  role: "admin" | "teacher";
  exp?: number;
  grades?: SeedGrade;
  answers?: Array<Array<number[]>>;
}

interface SeedData {
  users: SeedUser[];
  modulos: IModulo[];
}

export const initialData: SeedData = {
  users: [
    {
      name: "Juan Camilo Ramírez",
      email: "jcramirezr@correo.udistrital.edu.co",
      password: bcrypt.hashSync("123456"),
      role: "admin",
    },
    {
      name: "Teacher 1",
      email: "teacher1@virtus-training.com",
      password: bcrypt.hashSync("123456"),
      role: "teacher",
      exp: 1200,
      grades: {
        module1: [5, 5, 5, 5, 5, 5],
      },
      answers: [
        [
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
        ],
      ],
    },
    {
      name: "Teacher 2",
      email: "teacher2@virtus-training.com",
      password: bcrypt.hashSync("123456"),
      role: "teacher",
      exp: 1600,
      grades: {
        module1: [5, 5, 5, 5, 5, 5],
        module2: [5, 5],
      },
      answers: [
        [
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
        ],
        [
          [1, 2, 3],
          [1, 2, 3],
        ],
      ],
    },
    {
      name: "Teacher 3",
      email: "teacher3@virtus-training.com",
      password: bcrypt.hashSync("123456"),
      role: "teacher",
      exp: 3400,
      grades: {
        module1: [5, 5, 5, 5, 5, 5],
        module2: [5, 5, 5, 5],
        module3: [5, 5, 5, 5, 5, 5, 5],
      },
      answers: [
        [
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
        ],
        [
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
        ],
        [
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
        ],
      ],
    },
    {
      name: "Teacher 4",
      email: "teacher4@virtus-training.com",
      password: bcrypt.hashSync("123456"),
      role: "teacher",
      exp: 3000,
      grades: {
        module1: [5, 5, 5, 5, 5, 5],
        module2: [5, 5, 5, 5],
        module3: [5, 5, 5, 5, 5],
      },
      answers: [
        [
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
        ],
        [
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
        ],
        [
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
        ],
      ],
    },
    {
      name: "Teacher 5",
      email: "teacher5@virtus-training.com",
      password: bcrypt.hashSync("123456"),
      role: "teacher",
      exp: 0,
      grades: {},
      answers: [],
    },
  ],
  modulos: [
    {
      name: "Introducción al pensamiento computacional",
      descripcion: "Bases del pensamiento computacional",
      keyWords: [
        "Principiante",
        "Estudiante",
        "Programación",
        "Algoritmo",
        "VIRTUS",
      ],
      goals: [
        "Entender conceptualmente que es el pensamiento computacional",
        "Analizar los objetivos del pensamiento computacional y sus características",
        "Abarcar las bases del pensamiento computacional en la programación",
      ],
      requirements: ["Sin requerimientos previos"],
      content: [
        {
          name: "Definición del pensamiento computacional",
          to: "1-introduction",
          description:
            "Conjunto de habilidades de abstracción y las técnicas de resolución de problemas utilizados por los científicos e ingenieros de la computación.",
          modulo: "Introducción al pensamiento computacional",
          exp: 100,
          content: "En el año 2012, Furber indicó que el pensamiento computacional es el proceso de reconocer apectos de la computación en el mundo que nos rodea y de aplicación de técnicas y herramientas de las Ciencias de la Computación para entender y razonar acerca de los sistemas y procesos naturales y artificiales. En el año 2014, Jeannette Wing definió al pensamiento computacional como los procesos de pensamiento involucrados en la formulación de problemas y representación de sus soluciones, de manera que dichas soluciones puedan ser ejecutadas efectivamente por un agente de procesamiento de información (humano, computadora o combinaciones de humanos y computadoras). Wing propone que las habilidades de abstracción y las técnicas de resolución de problemas utilizados por los científicos e ingenieros de la computación se enseñen y apliquen en otras disciplinas o actividades de la vida cotidiana. Se puede desarrollar el pensamiento computacional sin utilizar computadores. Si bien los dispositivos digitales permiten abordar problemas que sin ellos nadie se atrevería a enfrentar. Por otra parte, es una competencia básica que todo ciudadano debería conocer para desenvolverse en la sociedad digital, pero no es una habilidad -rutinaria- o -mecánica-, ya que es una forma de resolver problemas de manera inteligente e imaginativa (cualidades humanas que no poseen los computadores). Para enterder el pensamiento computacional se agrupan ciertos conceptos para generar el -core- del pensamiento computacional. Beecher indica que los conceptos -core- son: - Pensamiento lógico. - Pensamiento algorítmico. - Descomposición. - Generalización y reconocimiento de patrones. - Modelamiento. - Abstracción. - Evaluación. Estos conceptos serán estudiados en el transcurso del curso. Otros conceptos periféricos serán mencionados, pero no tratados como esenciales para el tema del pensamiento computacional. Se incluyen: - Representación de datos. - Pensamiento crítico. - Ciencias de la computación. - Automatización. - Simulación o visualización.",
          bibliography:
            "http://www.pensamientocomputacional.org/index.php/curso-pc",
          time: 15,
          test: {
            name: "Test introductorio I",
            modulo: "Introducción al pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Propósito y objetivos del pensamiento computacional",
          to: "1-goals",
          description:
            "Pensamiento computacional y el fortalecimiento de habilidades.",
          modulo: "Introducción al pensamiento computacional",
          exp: 100,
          content: "Una primera y errónea idea que se tiene del pensamiento computacional es suponer que es exclusivo de los ámbitos de la ingeniería informática y computación. La labor pedagógica para el desarrollo del pensamiento computacional debe estar orientado al desarrollo de capacidades que permitan un pensamiento que permita entender y resolver problemas con ayuda de herramientas informáticas. Según lo mencionó Bosagain Rico (2018), -el poder del pensamiento computacional no está en aprender a programar, está en entender cómo podemos expresar una idea utilizando una computadora o cualquier herramienta que permita insertar instrucciones-. El mayor logro del pensamiento computacional es potenciar las habilidades relacionadas con la resolución creativa de problemas. Según Gabriela Vilanova (2018), estas habilidades se apoyan en una serie de actitudes, entre las que se incluyen: a) Confianza en uno mismo para el manejo de la complejidad; b) Perseverancia al enfrentar problemas difíciles; c) Tolerancia frente a situaciones ambiguas; d) Habilidad para combatir problemas no estructurados. Mauricio Palencia (2017) indica que, por lo tanto, las habilidades de una persona con pensamiento computacional supera la capacidad de la apropiación técnica y le incorpora habilidades para afrontar, entender y resolver problemas con mayor eficacia, lo cual le permita solucionar problemas en los diversos ámbitos de la vida. Alberto Rincón y William Ávila proponen que los objetivos del pensamiento computacional son: a) Formular problemas de tal manera que sea posible utilizar computadores y otras herramientas para solucionarlos. b) Representar datos con el recurso de las abstracciones, como modelos y simulaciones. c) Automatizar soluciones mediante el pensamiento algorítmico. d) Identificar, analizar e implementar posibles soluciones para encontrar la combinación más eficiente y efectiva de pasos y recursos. e) Generalizar y transferir el proceso de solución de problemas a una gran diversidad de estos.",
          bibliography:
            "http://seer.upf.br/index.php/rep/article/view/8702/114114609",
          time: 15,
          test: {
            name: "Test introductorio II",
            modulo: "Introducción al pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Contextualización",
          to: "1-context",
          description:
            "Pensamiento computacional en la ciencia. Pensamiento computacional como proceso de pensamiento en la formulación de problemas.",
          modulo: "Introducción al pensamiento computacional",
          exp: 100,
          content: "Saber utilizar un computador es diferente a saber computación. Por ejemplo, saber utilizar una calculadora no significa comprender los conceptos de la aritmética. El computador actualmente es desaprovechado porque la gente desconoce los conceptos de la computación y no es capaz de utilizarla en formas más creativas y explotar su capacidad de apoyo como herramienta para el desarrollo del conocimiento. Heinz Pagels describe el potencial de la computadora como el instrumento científico de la próxima generación de científicos y como la base de una nueva revolución científica. El computador proporciona los medios para simular lo que era demasiado complejo para ser entendido únicamente con la mente. El computador, por lo general, no es más que un instrumento que se utiliza para el trabajo de oficina, en tareas esenciales, pero no aporta un cambio revolucionario en la manera de confrontar los problemas de nuestro siglo. Precisamente, mediante el pensamiento computacional, la computadora puede explotarse de diversas maneras como un nuevo instrumento científico. Jeannette Wing sostiene que la esencia del pensamiento computacional es la abstracción y que las abstracciones para la computación son las herramientas -mentales- , y las computadoras las herramientas -metálicas- que automatizan las abstracciones. Para entender cómo el pensamiento computacional actúa, es necesario definir problema. Un problema es una relación entre un conjunto de instancias y un conjunto de soluciones. Un problema permite establecer formalmente la relación deseada entre las instancias de entrada y las soluciones de salida. El problema se resuelve si se obtiene al menos una solución correspondiente para cada instancia.",
          bibliography:
            "http://www.pensamientocomputacional.org/index.php/curso-pc",
          time: 15,
          test: {
            name: "Test introductorio III",
            modulo: "Introducción al pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Características del pensamiento computacional",
          to: "1-features",
          description:
            "Análisis de las características del pensamiento computacional, una mirada de retroalimentación que envuelve las matices que definen el pensamiento computacional.",
          modulo: "Introducción al pensamiento computacional",
          exp: 100,
          content: "Las personas que lo desarrollan, también desarrollan ciertas características y habilidades, las cuales se detallarán a continuación: - La comprensión de que las características de un problema son sensibles a ser solucionadas a través del uso de la computación. - Valorar los instrumentos y métodos computacionales que son más apropiados para un problema. - Comprendes cuales son las restricciones y aptitudes de los instrumentos y métodos computacionales. - Ajustar los instrumentos o métodos computacionales con el fin de darles un nuevo uso. - Explorar las oportunidades de emplear los métodos computacionales de una forma innovadora. - Emplear las habilidades computacionales en cualquier entorno.",
          bibliography:
            "https://tiposdepensamiento.com/pensamiento-computacional/",
          time: 15,
          test: {
            name: "Test introductorio IV",
            modulo: "Introducción al pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Ecologías del aprendizaje",
          to: "1-learning-ecologies",
          description:
            "Ofrecer una perspectiva al público objetivo del pensamiento computacional desde  perspectivas socioconstructivas que analizen los diseños curriculares.",
          modulo: "Introducción al pensamiento computacional",
          exp: 100,
          content: "-Logo- fue el primer lenguaje de programación basado en un enfoque pedagógico que permitió el aprendizaje de matemáticas, cibernética y ciencias de una forma innovadora. La principal novedad fue la introducción de un objeto gráfico (-tortuga-) sobre el que se aplicaban las instrucciones que los alumnos escribían en un código de fácil comprensión. -Logo- introdujo la programación orientada a objetos dentro de la educación y la mayoría de lenguajes profesionales de programación la utilizan, por ser un método de fácil aprendizaje por su carácter intuitivo. -Logo- fue el precursor de otro entorno de programación con un gran potencialidad educativa que se denomina -Scratch-. Éste último tiene un gato de color naranja que puede moverse, emitir sonidos o dibujar, entre otras posibles acciones que se diseñan a través de piezas preconfiguradas, que se encajan a modo de rompecabezas en una secuencia codificada según las intenciones del usuario. El aprendizaje es un proceso social y en el ámbito de la cultura digital, las comunidades de usuarios conforman una nueva ecología de aprendizaje caracterizada por una alta motivación hacia la participación y la colaboración. La creación de programas no es un proceso que se realice de modo aislado sino en un contexto social. Las experiencias más innovadoras se sitúan fuera del sistema educativo. Una de las más representativas es The Intel Computer Clubhouse Network que posee centros en todo el mundo para que los jóvenes puedan, de manera voluntaria, producir vídeos, música y gráficos digitales. Esta iniciativa se inició en el año 1993 como un servicio del Museo de la Ciencia de Boston en colaboración con el Media Lab del Instituto Tecnológico de Massachusetts (MIT) y se ha expandido por 19 países a través de un centenar de centros. La actividad en estos centros se basa en cuatro principios que constituyen su modelo de aprendizaje: a) Llevar a cabo tareas que motiven a los jóvenes a trabajar como diseñadores, inventores y creadores; b) Fomentar que los jóvenes trabajen en proyectos relacionados con sus propios intereses; c) Crear un sentido de comunidad, donde los jóvenes trabajen juntos con el apoyo y orientación de adultos; d) Ofrecer recursos y oportunidades para aquellos que no pueden tener accesos a las tecnologías digitales, en un ambiente de confianza y respeto. El entorno de aprendizaje de los Computer Clubhouse está diseñado para lograr los siguientes resultados de aprendizaje: - Capacidad para expresarse con tecnologías. - Habilidad para colaborar, comunicar y trabajar en equipos. - Capacidad para resolver problemas complejos. - Habilidad para desarrollar, planificar y ejecutar proyectos complejos. - Desarrollar la autoestima y la autoconfianza. Cada miembro posee diversos contextos sociales y el centro les ofrece un espacio de práctica para afrontar sus retos y desarrollar sus oportunidades en cualquiera de sus espacios de relación. Están orientados a la creación de comunidades de aprendizaje de modo que las competencias, habilidades, herramientas y conexiones individuales revierten en el propio Clubhouse y en otros pertenecientes a la red. Gracias a la participación se desarrollan entornos de aprendizaje que conducen a resultados de aprendizaje muy positivos, ofreciendo un modelo para la innovación en los centros educativos. Recientemente, ha crecido la comunidad de Scratch conformada por más de 1 millón de usuarios registrados entre los 11 y los 18 años, que comparten más de 10 millones de proyectos. Los usuarios realizan animaciones, videojuegos, historietas, simulaciones científicas y arte interactivo a través de un entorno visual de programación que permite compartir el código y participar activamente en una red social para valorar los proyectos, crear colecciones y colaborar en los proyectos de otros usuarios. Sólo un 29% de los usuarios de Scratch comparten proyectos. Aunque el mayor número de usuarios de Scratch son menores de 18 años, existen experiencias educativas con adultos que subrayan el valor social y emancipador de esta tecnología. El movimiento del software libre se ha beneficiado del entusiasmo entre los jóvenes por participar en la construcción de códigos fuente, cuya finalidad es hacer el desarrollo tecnológico accesible y explícito dentro de un contexto de máxima colaboración y creatividad. Los productos Lego/Logo permiten construir todo tipo de robots con motores y engranajes que son controlados por programas para realizar acciones e interactuar con el entorno. Ayudando a los usuarios a interacturar con objetos virtuales y reales a través de la programación. Visto de esta forma, la programación se transforma en una competencia social y cultural generando un -aprendizaje conectado-, el cual, es algo más que un lenguaje de programación ya que permite comprender cómo funciona la tecnología y cómo el diseño puede incorporar nuevas posibilidades y soluciones a problemas de la vida cotidiana.",
          bibliography:
            "Jesús V. Berrocoso, María R. Sánchez, María G. Arroyo (2009). El pensamiento computacional y las nuevas ecologías del aprendizaje",
          time: 15,
          test: {
            name: "Test introductorio V",
            modulo: "Introducción al pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Introducción a la conceptualización de la programación",
          to: "1-programming-conceptualization",
          description:
            "Interpretar el estado de transición del pensamiento complejo al pensamiento computacional.",
          modulo: "Introducción al pensamiento computacional",
          exp: 100,
          content: "La complejidad es el espacio apropiado de integración de expresiones diversas y de nuevas relaciones simbólicas el espacio propicio para reflexionar sobre el futuro de la educación a partir de la mediación de las tecnologías de la información y comunicación, las redes sociales y el Internet. En este sentido, el pensamiento computacional aparece como una alternativa de estas nuevas expresiones del pensamiento. Según Angel Perez Gómez (2010), La era de la información y de la incertidumbre requiere ciudadanos capaces de entender la complejidad de situaciones y el incremento exponencial de la información, así como de adaptarse creativamente a la velocidad del cambio y a la incertidumbre que le acompaña. El concepto -pensamiento computacional- tiene su complejidad en sí, dando que se lo puede relacionar con una competencia compleja de u grado de dificultad alto, que puede relacionar con niveles de pensamiento abstracto, matemático, pragmático e ingenieril aplicados en diferentes momentos de la vida cotidiana. El pensamiento computacional amplía las facultades con la ayuda de las herramientas informáticas donde la imaginación y la creatividad encuentran el terreno fértil para las ideas en mundos virtuales. La inteligencia humana unida a la informática no deja de ser humana sino que se enriquece haciendo posible resolver problemas de manera más rápida, eficiente y con niveles de complejidad y organización que a las máquinas no les representa el mismo esfuerzo que a las personas. Para comprender mejor el pensamiento computacional se han determinado algunos elementos y las relaciones con otros tipos de pensamiento con los que converge en varios aspectos. Según Chun y Piotrowski (2012) los elementos del pensamiento computacional son los siguientes: - Análisis de los efectos de la computación: se refiere a establecer los alcances, ventajas así como limitaciones que pueden presentar el uso de herramientas informáticas para la solución de un problema. - Producir artefactos computacionales: es importante que las nuevas generaciones pasen de un cómodo e irreflexivo uso de la tecnología informática que los limita a ser consumidores a productores de sus propias tecnologías. - Uso de abstracción y modelos: muchos de los problemas reales encuentran solución cuando se abstrae sus elementos o propiedades fundamentales y a partir de ellos se construyen modelos que permitan analizarlos o modificar sus condiciones. Este elemento es fundamental puesto que muchos de los fenómenos naturales o sociales no pueden ser manipulados de forma directa. - Analizar problemas y artefactos: la descomposición de los problemas es un método de solución que ha permitido elaborar sistemas informáticos complejos, acerca del proceso de análisis que permiten resolver problemas. - Reconocimiento y generalización de patrones: para el pensamiento computacional el mundo que nos rodea se compone de elementos que interactúan y muestran procesos repetitivos que a partir de su detección y determinación de las características pueden ser clasificados, este proceso pueden realizarlo tanto los individuos como las computadoras con la única diferencia en tiempos de respuesta. - Algoritmización: es la habilidad de organizar procesos secuenciales y lógicos de forma que resuelvan problemas. En el caso del pensamiento computacional corresponde a un paso previo a la utilización de las herramientas informáticas y los lenguajes de programación. Los seres humanos enseñan a las máquinas los algoritmos que permiten realizar acciones frente a una situación específica, pero se considera que a futuro ellas serán capaces de aprender por si solas estos algoritmos. - Comunicar procesos y resultados: compartir la información de manera que esta sea puesta al servicio de la sociedad y además sirva de base para la creación de nuevos conocimientos. - Trabajo efectivo en equipo: la construcción de conocimientos y la resolución de problemas pueden alcanzar mejores rendimientos cuando existen grupos de personas compartiendo sus experiencias e ideas.",
          bibliography:
            "Jorge A. Balladares Burgos, Mauro R. Avilés Salvador, Hamilton O. Pérez Narváez. (2016) Del pensamiento complejo al pensamiento computacional: retos para la educación contemporánea.",
          time: 15,
          test: {
            name: "Test introductorio VI",
            modulo: "Introducción al pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
      ],
    },
    {
      name: "Cuatro pilares fundamentales del pensamiento computacional",
      descripcion:
        "Análisis a: Descomposición, Reconocimiento de patrones, Pensamiento algorítmico, Abstracción",
      keyWords: [
        "Intermedio",
        "Estudiante",
        "Pilares",
        "Computación",
        "VIRTUS",
      ],
      goals: [
        "Aprender a reconocer los 4 pilares del pensamiento computacional",
        "Entender la descomposición de un problema",
        "Conocer el proceso de reconocimiento de patrones",
        "Analizar el pensamiento algorítmico",
        "Entender la abstracción en el pensamiento computacional",
      ],
      requirements: [
        "Completar exitosamente el modulo introductorio del curso.",
      ],
      content: [
        {
          name: "Descomposición",
          to: "2-descomposition",
          description:
            "La descomposición busca romper un problema complejo en partes más simples que sean fáciles de entender.",
          modulo: "Cuatro pilares fundamentales del pensamiento computacional",
          exp: 100,
          content: "La descomposición es un enfoque que busca dividir un problema complejo en partes más simple que hagan más fácil tratar con ello. Los programadores y científicos de la computación usualmente trabajan con problemas grands y complejos que son divididos en múltiples partes interrelacionadas. La descomposición es una estrategia de divide-y-conquistarás, lo que facilita ver un problema grande y complejo por partes sin dejar de considerar todo el problema. Por ejemplo, un problema puede contener algunas partes interrelacionadas, o un proceso particular puede ser dividido en pasos numerosos que necesitan ser descritos. Aplicando la descomposición a un problema implica separar las partes y estudiarlas, sin dejar de tener en cuenta que pertenecen a un problema. Aplicando la descomposición, se obtendrán un número de subproblemas que pueden ser estudiados, entendidos y resueltos individualmente. Es decir, el problema es reformulado como una serie de problemas pequeños. Se puede presentar que los problemas más pequeños sigan siendo muy complejos. En estos casos se propone dividir el pequeño problema en otros problemas aún más pequeños. Para realizarlo se puede utilizar el principio de recursividad. La recursividad es una técnica usada para simplificar un problema. Define la solución a un problema grande y complejo en términos de problemas más simples y pequeños en la misma forma que el problema original. Es una idea muy poderosa y muy úsada en el pensamiento computacional. La descomposición no resultará en un plan de acción completo, pero puede dar un punto de inicio para formular uno. Por ejemplo, la definición de un problema completamente desglosado puede mostrar todas las tareas individuales, pero no necesariamente muestra el orden en el que se debería buscar una solución. Por lo tanto, las relaciones entre los subproblemas individuales podrían dar una pauta para determinar un orden de solución. La descomposición permite la colaboración. Si se realizó un buen desglose (que los subproblemas pueden ser abordados independientemente), se puede dar la participación de varias personas en las diferentes tareas, posiblemente en paralelo.",
          bibliography:
            "Karl Beecher. (2017) Computational Thinking. A beginner's guide to problem-solving and programming.",
          time: 15,
          test: {
            name: "Test intermedio I",
            modulo:
              "Cuatro pilares fundamentales del pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Reconocimiento de patrones",
          to: "2-recognition-of-patterns",
          description:
            "Concentra algoritmos, metodologías, teorías y sistemas que permiten diferenciar, asociar y clasificar datos de forma automatizada.",
          modulo: "Cuatro pilares fundamentales del pensamiento computacional",
          exp: 100,
          content: "Diariamente se identifican objetos vinculando información con elementos que son caracterizados, diferenciados, asociados y clasificados. Las investigaciones en ciencias de la computación y en Inteligencia Artificial tratan de facultar a los sistemas de cómputo de la posibilidad de reconocer objetos y categorizarlos en la misma forma que lo hace el ser humano. Inicialmente, se extraen características del objeto (real o abstracto) que se está estudiando. Luego se hallan",
          bibliography:
            "http://www.pensamientocomputacional.org/index.php/curso-pc",
          time: 15,
          test: {
            name: "Test intermedio II",
            modulo:
              "Cuatro pilares fundamentales del pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Pensamiento algorítmico",
          to: "2-algorithm-thinking",
          description:
            "Los algoritmos son uno de los tópicos principales del pensamiento computacional porque representan las soluciones a nivel conceptual en el proceso de resolución de problemas.",
          modulo: "Cuatro pilares fundamentales del pensamiento computacional",
          exp: 100,
          content: "Lógica y algoritmos no son lo mismo. Los algoritmos se construyen usando la lógica porque facilitan la toma de decisiones lógicas. La lógica da un conjunto de reglas que permiten razonar acerca de algún aspecto del mundo. La lógica puede tratar con cosas que son dinámicas y continuamente cambiantes. Algunas veces las proposiciones son verdaderas y otras veces son falsas. Trabajando sus valores de verdad, se puede llegar a conclusiones acerca de las diferentes situaciones. Pero si se desea llegar más allá, si se desea construir sistemas funcionales basado en reglas, entonces la lógica no es suficiente. Se requiere algo que pueda integra las reglas y ejecutar acciones basado en la salida de las evaluaciones de esas reglas. Ese -algo- son los algoritmos, los cuales generan todo el potenciasl de los sistemas computacionales actuales. El vocablo algoritmo es de origen árabe y proviene del sobrenombre del matemático Al-Khowarizmi. Un algoritmo se puede definir como una secuencia de pasos claramente definidos que describen el proceso de seguir un conjunto finito de instrucciones no ambiguas con un inicio y fin claro. Los algoritmos son una forma de especificar tareas de múltiples pasos, y que son especialmente útiles cuando se requiere explicar a un tercero cómo ejecutarlos con extrema precisión. Entender cómo usar los algoritmos mejorará su pensamiento algorítmico. Esto es importante porque un algoritmo correcto es la clave de cualquier solución basada en cómputo. Definiendo algoritmos. La definición de un algoritmo es compleja e involucra algunas propiedades. Conjunto de pasos individuales. Un algoritmo es un conjunto de pasos individuales. Una algoritmo es como una receta, se deben seguir los pasos uno a uno para obtener un buen plato. - Definición de casa paso. La siguiente propiedad es la definición, significa que cada paso debe definirse de manera precisa. Cada paso en un algoritmo debe tener uno y solo un significado, de otra forma se dice que es ambiguo. Es similar al comportamiento de un chef, el cual tiene una forma de generar platillos usando medidas muy precisas en lugar de escribir una receta usando expresiones como -algo de azucar- o -cocínelo un poquito-. - Secuencialidad de los pasos. Los algoritmos son secuenciales. Los pasos que crean el proceso debe estan ubicados en un orden específico. Si no se organizan de esta forma, el resultado del algoritmo puede ser incorrecto. No es lo mismo pelar la cebolla y luego freirla que freir la cebolla y luego tratar de pelarla. - Desvío: Estado en los algoritmos. El estado de un algoritmo es la configuración actual de toda la información registrada en cualquier instante de tiempo. El estado de un algoritmo ayuda a determinar el progreso de ejecución. Es normal que el estado del algoritmo cambie si las condiciones de ejecución cambian a medida que se avanza paso a paso. Cabe aclarar que no hay una visión global de todos los estados del algoritmo. Se puede hacer seguimiento y determinar cuál es la información que se tiene en determinado instante de tiempo, pero no se garantiza que se pueda saber la totalidad de todos los estados y de toda la información que maneja el algoritmo. El entorno de ejecución puede variar lo que implica que las condiciones de ejecución puede variar. Haciendo la analogía con las recetas de cocina, los ingredientes se mezclan, se procesan y se unen para formar un plato pero no se tiene la individualidad del ingrediente todo el tiempo, se pueden tomar fotos para verificar los cambios de estado del proceso, pero no hay una vista global de todo el proceso, solo unas capturas momentáneas. Esto implica que para que el algoritmo pueda recordar cosas que ocurrieron en unos pasos anteriores, se requiere de un espacio donde pueda almacenar información temporal. Para ellos los algoritmos cuentas con un recurso llamado variable. Las variables. Una variable almacena información temporalmente para facilitar su uso durante la ejecución del proceso. Una variable es un espacio reservado en la memoria que puede cambiar de contenido a lo largo de la ejecución de un programa. - Control de la ejecución del algoritmo. Para controlar la ejecución del algoritmo se definen varias estructuras, a continuación se revisaran algunas: + Iteración. Una iteración, también llamada -ciclo-, permite repetir una serie de pasos uno tras otro, sin que se requiera escribir o indicar cada repetición manualmente. Si se trata de explicar una receta que implique amasar 3 o 4 veces, solo se explica la primera vez y luego se da la indicación de -repetir tantas veces-. Esta indicación de -repetir- es lo que da origen a una iteración. Por lo general, las iteraciones van acompañadas de una condición de control con el fin de indicar qué tantas veces se repiten los pasos dentro de la iteración o en qué momento la iteración se termina. + Condicional. Es una forma de evaluar si el valor actual de una variable cumple con un valor de decisión. Se puede decir que un valor es igual o diferente a otro. Adicionalmente, en el caso de los números se puede indicar si uno es mayor que otro. El condicional permite establecer un flujo de ejecución de la aplicación de acuerdo a unos puntos de control que ayudan a decidir si el estado de un proceso cambia o se mantiene. Representación de un algoritmo. Los algoritmos se representan de varias formas, incluyendo: - el lenguaje natural, - diagramas de flujo, - seudocódigo y - lenguajes de programación. Las descripciones en lenguaje natural pueden ser ambiguas y extensas, mientras que los diagramas de flujo y el seudocódigo evitan las ambigüedades del lenguaje natural porque son representaciones más estructuradas de los algoritmos. Además, son independientes de los lenguajes de programación. Seudocódigo. El seudocódigo es una descripción informal de alto nivel de un algoritmo que utiliza las convenciones de un lenguaje de programación real. El seudocódigo está diseñado para que el algoritmo sea leído por un humano. Por esta razón, el seudocódigo se complementa, donde sea conveniente, con descripciones detalladas en lenguaje natural, o con notación matemática. El seudocódigo es menos formal que un lenguaje de programación y es menos gráfico que un diagrama de flujo. Diagramas de flujo. Los diagramas de flujo son la representación visual de cada paso del algoritmo por medio de símbolos que representan las operaciones ejecutadas sobre los datos. Por lo general, tienen un conjunto de símbolos estandarizados para facilitar su comprensión. Se busca tener una expresión gráfica del algoritmo, aunque se debe cumplir con las recomendaciones para graficarlos. El seudocódigo tiene las siguientes ventajas sobre los diagramas de flujo: 1) El espacio utilizado en la descripción del problema es menor. 2) Las operaciones complejas se representan de forma sencilla. 3) Las reglas de sangrías permiten observar claramente los niveles en la estructura del algoritmo. Ejemplo de un algoritmo. Usando lenguaje natural, un algoritmo sencillo se ve cómo el siguiente: 1: levantarse 2: quitarse la pijama 3: tomar un baño 4: vestirse 5: desayunar 6: tomar el transporte hacia el laboratorio 7: llegar al laboratorio. Usando seudocódigo, un algoritmo se puede ver cómo sigue: // Algoritmo para calcular el promedio de horas. 1:  total = 0; 2:  n = 0; 3:  introducir(horas) 4:  mientras horas != −1 hacer 5:    total = total + horas;  //Acumulador 6:    introducir(horas) 7:    n = n + 1;              //Contador 8:  fin mientras 9:  si n != 0 entonces 10:   promedio = total/n 11: si no 12:   No hay horas 13: fin si",
          bibliography:
            "Karl Beecher. (2017) Computational Thinking. A beginner's guide to problem-solving and programming.",
          time: 15,
          test: {
            name: "Test intermedio III",
            modulo:
              "Cuatro pilares fundamentales del pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Abstracción",
          to: "2-abstraction",
          description:
            "La abstracción es el filtro utilizado para quedarse con lo que se considera esencial, eliminando toda la complejidad innecesaria.",
          modulo: "Cuatro pilares fundamentales del pensamiento computacional",
          exp: 100,
          content: "La abstracción es una habilidad inherente a todos los seres humanos. No obstante, cada individuo abstrae de forma única debido a que se desarrolla de manera diferente. La abstacción es una forma de expresar una idea en un contexto específico mientras al mismo tiempo se omiten detalles irrelevantes en ese contexto. La abstracción es fundamental para la ciencia e ingeniería en general, juega un papel crítico en la creación de teorías, modelos, análisis y producción de dispositivos de ingeniería. El pensamiento computacional identifica a la abstracción como una de las grandes ideas de las ciencias computacionales y que las habilidades de abstracción son cruciales para el futuro en el desarrollo científico y tecnológico. Las matemáticas son una excelente herramienta para la enseñanza y desarrollo del pensamiento abstracto. Las habilidades de abstracción se pueden mejorar mediante la presentación del formalismo matemático de una manera orientada a los problemas. La abstracción puede incluir cambios importantes en la formulación de un problema, pero que facilitan su solución o que nos llevan a soluciones novedosas. Una aplicación de la abstracción es la mostrada por un mapa. En un mapa se resaltan únicamente la esencia de la información de interés y se eliminan detalles innecesarios, como árboles, edificios, automóviles, entre muchos otros elementos del entorno. Modelamiento. Un modelo es una representación de una cosa del mundo real que omite ciertos detalles. Los modelos son un tipo de abstracción que tiene una gran importancia en el pensamiento computacional. El modelamiento es la construcción de modelos, por lo que se vuelve la práctica fundamental para el pensamiento computacional. En un modelo hay entidades, las cuales representan los conceptos principales del objeto o situación de la que se está abstrayendo. Un modelo también tiene relaciones, las cuales son una conexión entre las entidades. Un modelo muestra las entidades que participan en la solución de un problema y las relaciones entre ellas, descartando la información no relevante al contexto del problema. Modelos estáticos. Es un modelo que da una vista congelada del sistema. Son muy útiles para dar una vista estructural del objeto o situación que se modela. Modelos dinámicos. Un modelo dinámico está orientado a mostrar estados del objeto modelado o los puntos de transición, donde cambia de estado. También permite mostrar los eventos, internos o externos, que pueden intervenir en el comportamiento del objeto modelado. ",
          bibliography:
            "Karl Beecher. (2017) Computational Thinking. A beginner's guide to problem-solving and programming.",
          time: 15,
          test: {
            name: "Test intermedio IV",
            modulo:
              "Cuatro pilares fundamentales del pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
      ],
    },
    {
      name: "Pilares complementarios y técnicas de pensamiento computacional",
      descripcion:
        "Análisis a los pilares complementarios del pensamiento computacional e introducción a las técnicas de pensamiento computacional.",
      keyWords: [
        "Avanzado",
        "Estudiante",
        "Técnicas",
        "Complementario",
        "VIRTUS",
      ],
      goals: [
        "Reconocer los pilares complementarios del pensamiento computacional",
        "Entender las técnicas de pensamiento computacional",
        "Practicar las técnicas de pensamiento computacional",
      ],
      requirements: ["Completar exitosamente el modulo intermedio del curso."],
      content: [
        {
          name: "Depuración",
          to: "3-debugging",
          description:
            "Esta habilidad consiste en la capacidad de analizar un problema y discriminar la información no relevante o que no aporta valor al planteamiento de una solución.",
          modulo:
            "Pilares complementarios y técnicas de pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "Xabier B. Olabe, Miguel Á. Olabe Basogain, Juan C. Olabe Basogain - Pensamiento Computacional a través de la Programación: Paradigma de Aprendizaje.",
          time: 15,
          test: {
            name: "Test avanzado I",
            modulo:
              "Pilares complementarios y técnicas de pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Pensamiento lógico",
          to: "3-logic-thinking",
          description:
            "Habilidad de identificar con que se cuenta y que se necesita para poder resolver un problema.",
          modulo:
            "Pilares complementarios y técnicas de pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "Xabier B. Olabe, Miguel Á. Olabe Basogain, Juan C. Olabe Basogain - Pensamiento Computacional a través de la Programación: Paradigma de Aprendizaje.",
          time: 15,
          test: {
            name: "Test avanzado II",
            modulo:
              "Pilares complementarios y técnicas de pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Reflexión",
          to: "3-reflection",
          description:
            "Habilidad de establecer juicios de valor sobre los resultados de las decisiones tomadas en la solución de problemas complejos.",
          modulo:
            "Pilares complementarios y técnicas de pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "Xabier B. Olabe, Miguel Á. Olabe Basogain, Juan C. Olabe Basogain - Pensamiento Computacional a través de la Programación: Paradigma de Aprendizaje.",
          time: 15,
          test: {
            name: "Test avanzado III",
            modulo:
              "Pilares complementarios y técnicas de pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Codificación",
          to: "3-coding",
          description:
            "Técnica aplicada para los sistemas de información en entornos virtuales, que subyacen a partir del modelamiento del problema traducido en codificación y productos de software que soportan variaciones en los requerimientos iniciales de la problemática inicial.",
          modulo:
            "Pilares complementarios y técnicas de pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "Miguel Zapata-Ros - Pensamiento computacional: Una nueva alfabetización digital.",
          time: 15,
          test: {
            name: "Test avanzado IV",
            modulo:
              "Pilares complementarios y técnicas de pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Diseño",
          to: "3-design",
          description:
            "Técnica que se enfoca en trabajar la estructura y funcionalidad de los componentes, de manera que sea legible y entendible por otras personas.",
          modulo:
            "Pilares complementarios y técnicas de pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "Miguel Zapata-Ros - Pensamiento computacional: Una nueva alfabetización digital.",
          time: 15,
          test: {
            name: "Test avanzado V",
            modulo:
              "Pilares complementarios y técnicas de pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Analizar",
          to: "3-analyze",
          description:
            "Consiste en un conjunto de los pilares fundamentales y complementarios mencionados anteriormente (descomposición, depuración y abstracción), el cual tiene como propósito la identificación de los algoritmos y/o generalizaciones que se puedan procesar mediante pensamiento algorítmico.",
          modulo:
            "Pilares complementarios y técnicas de pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "Miguel Zapata-Ros - Pensamiento computacional: Una nueva alfabetización digital.",
          time: 15,
          test: {
            name: "Test avanzado VI",
            modulo:
              "Pilares complementarios y técnicas de pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Aplicar",
          to: "3-apply",
          description:
            "Esta técnica consta de usar soluciones preexistentes que pueden o no partir del conocimiento empírico o colaborativo de problemas semejantes bajo circunstancias parecidas.",
          modulo:
            "Pilares complementarios y técnicas de pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "Miguel Zapata-Ros - Pensamiento computacional: Una nueva alfabetización digital.",
          time: 15,
          test: {
            name: "Test avanzado VII",
            modulo:
              "Pilares complementarios y técnicas de pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
      ],
    },
  ],
};
