# Riemann, «Sobre las hipótesis que están en la base de la geometría» (1854)

Resumen detallado, con varios enfoques, de la lección de habilitación de Bernhard Riemann, preparado como apoyo para una ponencia sobre Deleuze, *El bergsonismo*, cap. V, y la teoría de las multiplicidades.

**Fuentes y convenciones de cita.** Se trabaja sobre dos ediciones electrónicas de EMIS (transcripción de D. R. Wilkins, 1998–2000): la traducción inglesa de William Kingdon Clifford (*Nature*, vol. VIII, núms. 183 y 184, 1873, pp. 14–17 y 36–37) y el original alemán tomado del tomo XIII de las *Abhandlungen der Königlichen Gesellschaft der Wissenschaften zu Göttingen*. Todas las traducciones al español son mías y se hacen desde el texto inglés de Clifford, cotejado con el alemán; cuando el término importa, conservo el inglés de Clifford entre corchetes y, si hace falta, el alemán precedido de «al.». La indicación «p. N» remite a la **página impresa** del PDF inglés (la paginación 1–14 que figura al pie de cada página); como el PDF lleva una portada sin numerar, la página N impresa es la página N+1 del visor. Cuando cito el alemán directamente añado «DE p. N» con la misma convención (paginación impresa 1–15 del PDF alemán). Las secciones se citan por partes: Plan; I §1–3; II §1–5; III §1–3; Sinopsis.

---

## 1. Ficha

**Título.** *Ueber die Hypothesen, welche der Geometrie zu Grunde liegen* [On the Hypotheses which lie at the Bases of Geometry]. Nótese que el título dice *Hypothesen*, no *Axiome* ni *Grundlagen*: la elección es deliberada y el texto la justifica en el Plan (véase §6a).

**Ocasión.** Lección de habilitación (*Habilitationsvortrag*) pronunciada el 10 de junio de 1854 en Gotinga. La edición alemana lleva una nota editorial al pie de la primera página que fija las circunstancias (DE p. 1; traducción mía):

> «Este tratado fue leído por el autor el 10 de junio de 1854, en el coloquio con la Facultad de Filosofía de Gotinga organizado con motivo de su habilitación. Esto explica la forma de la exposición, en la que las investigaciones analíticas solo pudieron ser insinuadas; algunos desarrollos de las mismas se encuentran en la respuesta al problema de concurso de París, junto con las notas a la misma.»
> [al. «Diese Abhandlung ist am 10. Juni 1854 von dem Verfasser bei dem zum Zweck seiner Habilitation veranstalteten Colloquium mit der philosophischen Facultät zu Göttingen vorgelesen worden. Hieraus erklärt sich die Form der Darstellung, in welcher die analytischen Untersuchungen nur angedeutet werden konnten…»]

Dos consecuencias para la lectura: la pieza fue concebida para un público de facultad (filósofos incluidos), de ahí que casi no tenga fórmulas, y el propio Riemann reconoce que lo analítico está solo «insinuado». La «respuesta al problema de París» es la *Commentatio mathematica* de 1861 sobre la conducción del calor, donde aparece explícitamente lo que hoy llamamos el tensor de curvatura; esto último es contexto histórico, no texto de la lección.

Sobre la presencia de Gauss: el texto de la lección no la menciona. Que Gauss, como miembro de la facultad y maestro de Riemann, eligió este tema entre los tres propuestos por el candidato y asistió a la lección, y que salió de ella impresionado, es lo que relata Richard Dedekind en la biografía de Riemann incluida en las *Werke* (1876). Lo doy como contexto bien documentado, no como algo verificable en las fuentes aquí usadas. En el texto, Riemann sí cita a Gauss por su nombre tres veces: como autor de «muy breves indicaciones» sobre magnitudes múltiplemente extensas (I, intro, p. 2), como autor de las *Disquisitiones generales circa superficies curvas* en que se fundan las dos partes del problema métrico (II, intro, p. 4) y como quien definió la «curvatura total» de una superficie (II §2, p. 7).

**Publicación.** Póstuma: Riemann murió en julio de 1866 y la lección apareció en 1868, editada por Dedekind, en el tomo XIII de las *Abhandlungen* de la Sociedad de Ciencias de Gotinga (la cabecera del PDF alemán lo confirma: «Aus dem dreizehnten Bande der Abhandlungen der Königlichen Gesellschaft der Wissenschaften zu Göttingen»). La edición alemana incluye al final una «Uebersicht» (Sinopsis) que recoge el plan sección por sección; Clifford la traduce también («Synopsis», pp. 13–14).

**Traducción de Clifford.** William Kingdon Clifford la publicó en inglés en *Nature* en 1873, en dos entregas (núms. 183 y 184). Es la traducción que fijó durante décadas el vocabulario inglés de Riemann («manifoldness», «measure-relations», «n-ply extended magnitude»). Varias de sus decisiones afectan a la lectura filosófica; las señalo en §3, §8 y §10. Las más importantes: traduce *Bestimmungsweisen* («modos de determinación») por «specialisations»; traduce *Unmessbargross* / *Unmessbarklein* («inmensurablemente grande / pequeño») por «infinitely great / small», con lo que borra la diferencia que Riemann mantiene con *Unendlichkleine* («infinitamente pequeño»); y omite en I §1 la cláusula «independiente de las determinaciones de medida» (*von Massbestimmungen unabhängigen*) al describir la parte general de la teoría de la magnitud.

**Estructura de la lección.**

- *Plan de la investigación* (pp. 1–2). Diagnóstico de la «oscuridad» de los fundamentos de la geometría; programa en dos tareas; tesis de que los hechos que determinan la métrica del espacio son hipótesis.
- *I. Noción de una magnitud n veces extensa* (pp. 2–4). §1: multiplicidades continuas y discretas; cuantos; contar frente a medir; la parte de la teoría de la magnitud independiente de la medida. §2: construcción de la multiplicidad simple, doble, …, n veces extensa. §3: reducción inversa de la determinación de lugar a n determinaciones de cantidad; multiplicidades que exigen infinitas determinaciones.
- *II. Relaciones métricas de que es capaz una multiplicidad de n dimensiones, bajo el supuesto de que las líneas tienen una longitud independiente de la posición* (pp. 4–9). §1: elemento de línea; la forma cuadrática; multiplicidades «planas». §2: coordenadas geodésicas; medida de la desviación respecto de la planitud (curvatura); $\tfrac{1}{2}n(n-1)$ funciones. §3: ilustración por superficies; curvatura de Gauss; curvatura de una multiplicidad n-dimensional en una dirección de superficie. §4: multiplicidades planas y de curvatura constante; movilidad de las figuras sin estiramiento. §5: superficies de curvatura constante.
- *III. Aplicación al espacio* (pp. 9–12). §1: tres sistemas de hechos suficientes. §2: lo que la experiencia garantiza; ilimitado frente a infinito. §3: lo infinitamente pequeño; el fundamento de las relaciones métricas; la física.
- *Sinopsis* (pp. 13–14).

---

## 2. Resumen lineal

### Plan de la investigación (pp. 1–2)

Riemann abre con un diagnóstico sobre el estado de la geometría: presupone «como cosas dadas» la noción de espacio y los primeros principios de construcción en el espacio, y de ellos solo da «definiciones meramente nominales», mientras que «las determinaciones verdaderas [true determinations; al. *die wesentlichen Bestimmungen*, las determinaciones esenciales] aparecen en forma de axiomas». El resultado:

> «La relación de estos supuestos queda, en consecuencia, en la oscuridad; no percibimos ni si su conexión es necesaria, y hasta qué punto, ni, a priori, si es posible.» (p. 1)
> [The relation of these assumptions remains consequently in darkness; we neither perceive whether and how far their connection is necessary, nor a priori, whether it is possible.]

Esa oscuridad no la disiparon «de Euclides a Legendre» ni los matemáticos ni «los filósofos que se ocuparon de ello». Y Riemann da la razón, que es también el programa de toda la lección:

> «La razón de ello es sin duda que la noción general de magnitudes múltiplemente extensas [multiply extended magnitudes; al. *mehrfach ausgedehnter Grössen*] (en las que están incluidas las magnitudes espaciales) permaneció enteramente sin elaborar. Me he propuesto, por tanto, en primer lugar, la tarea de construir la noción de una magnitud múltiplemente extensa a partir de nociones generales de magnitud. Se seguirá de ello que una magnitud múltiplemente extensa es capaz de diferentes relaciones métricas [measure-relations; al. *Massverhältnisse*] y, en consecuencia, que el espacio es solo un caso particular de una magnitud triplemente extensa.» (p. 1)

De ahí la «consecuencia necesaria»: las proposiciones de la geometría «no pueden derivarse de nociones generales de magnitud», y las propiedades que distinguen al espacio «de otras magnitudes triplemente extensas concebibles solo pueden tomarse de la experiencia». Surge la segunda tarea: descubrir «los hechos más simples [simplest matters of fact; al. *die einfachsten Thatsachen*] a partir de los cuales puedan determinarse las relaciones métricas del espacio». El problema «por la naturaleza del caso no está completamente determinado», porque varios sistemas de hechos pueden bastar; el más importante «para nuestro propósito presente» es el que Euclides puso como fundamento. Y entonces la frase que da título a la lección:

> «Estos hechos son —como todos los hechos— no necesarios, sino solo de certeza empírica; son hipótesis. Podemos por tanto investigar su probabilidad, que dentro de los límites de la observación es desde luego muy grande, e indagar sobre la legitimidad de su extensión más allá de los límites de la observación, tanto del lado de lo infinitamente grande como del lado de lo infinitamente pequeño.» (pp. 1–2)
> [These matters of fact are—like all matters of fact—not necessary, but only of empirical certainty; they are hypotheses. …on the side both of the infinitely great and of the infinitely small.]
> (al. «…sowohl nach der Seite des Unmessbargrossen, als nach der Seite des Unmessbarkleinen»: literalmente, de lo inmensurablemente grande y de lo inmensurablemente pequeño.)

### I. Noción de una magnitud n veces extensa (pp. 2–4)

**Introducción (p. 2).** Riemann pide «crítica indulgente» porque no está ejercitado «en empresas de naturaleza filosófica, en las que la dificultad está más en las nociones mismas que en la construcción», y declara sus únicos antecedentes: «algunas indicaciones muy breves» de Gauss (segunda memoria sobre residuos bicuadráticos, un anuncio en las *Göttingische gelehrte Anzeigen* y el escrito del jubileo) y «algunas investigaciones filosóficas de Herbart». No pudo «hacer uso de ningún otro trabajo previo».

**§1 (pp. 2–3).** Es el párrafo fundacional de la noción de multiplicidad; lo analizo palabra por palabra en §3. En resumen: una noción de magnitud exige una noción general antecedente que admita «diferentes especializaciones» [specialisations; al. *Bestimmungsweisen*]; si entre ellas hay «un camino continuo» forman una multiplicidad continua, si no, discreta; las especializaciones individuales se llaman «puntos» en el primer caso y «elementos» en el segundo. Las nociones con especializaciones discretas abundan (cualquier colección de cosas cae bajo algún concepto en «las lenguas cultivadas»); las nociones cuyas especializaciones forman una multiplicidad continua son raras en la vida ordinaria: «las posiciones de los objetos percibidos y los colores» son las únicas nociones simples de este tipo; las demás surgen «en la matemática superior».

Sigue la definición de *Quanta* («porciones definidas de una multiplicidad, distinguidas por una marca o por un límite»), y la división contar / medir: la comparación de cuantos «se efectúa, en el caso de las magnitudes discretas, contando; en el de las continuas, midiendo». Medir «consiste en la superposición de las magnitudes que han de compararse» y requiere «un medio de usar una magnitud como patrón de otra» (al. *die eine Grösse als Massstab für die andere fortzutragen*: transportar una magnitud como patrón de medida para la otra). A falta de ese medio, «dos magnitudes solo pueden compararse cuando una es parte de la otra; y en tal caso también solo podemos determinar el más o el menos, y no el cuánto» (pp. 2–3). Las investigaciones posibles en ese caso forman «una división general de la ciencia de la magnitud en la que las magnitudes se consideran no como existentes independientemente de la posición ni como expresables mediante una unidad, sino como regiones en una multiplicidad» (p. 3). Riemann anota que tales investigaciones se han hecho necesarias para las funciones analíticas multivaluadas y que su falta explica la larga esterilidad del teorema de Abel y de los trabajos de Lagrange, Pfaff y Jacobi sobre ecuaciones diferenciales. De esa parte general, «en la que no se presupone nada sino lo que está contenido en su noción», bastará destacar dos puntos: la construcción de la multiplicidad múltiplemente extensa (§2) y la reducción de las determinaciones de lugar a determinaciones de cantidad (§3), que «pondrá en claro el verdadero carácter de una extensión n-ple» (p. 3).

**§2 (p. 3).** Construcción ascendente. Si en una noción de especializaciones continuas «se pasa de una cierta especialización de un modo definido a otra, las especializaciones recorridas forman una multiplicidad simplemente extensa, cuyo verdadero carácter es que en ella un progreso continuo desde un punto solo es posible hacia dos lados, hacia adelante o hacia atrás». Si esa multiplicidad «pasa a su vez a otra enteramente diferente [entirely different; al. *völlig verschiedene*], y de nuevo de un modo definido, a saber, de modo que cada punto pasa a un punto definido de la otra», el conjunto de especializaciones forma una multiplicidad doblemente extensa; igual para la triple, «y es fácil ver cómo puede continuarse esta construcción». Y la reformulación en términos de variabilidad:

> «Si se considera el objeto variable en lugar de la noción determinable de él, esta construcción puede describirse como la composición de una variabilidad de n + 1 dimensiones a partir de una variabilidad de n dimensiones y una variabilidad de una dimensión.» (p. 3)
> [If one regards the variable object instead of the determinable notion of it, this construction may be described as a composition of a variability of n + 1 dimensions out of a variability of n dimensions and a variability of one dimension.]

**§3 (pp. 3–4).** Descomposición descendente, inversa de la anterior. Se toma «una función continua de la posición dentro de la multiplicidad dada, que además no sea constante en ninguna parte de esa multiplicidad» (una «pieza variable de una multiplicidad de una dimensión, contada desde un origen fijo»). Entonces «todo sistema de puntos en los que la función tiene un valor constante forma una multiplicidad continua de menos dimensiones que la dada» (p. 4); esas multiplicidades «pasan continuamente unas a otras cuando la función cambia», en general punto a punto («los casos de excepción, cuyo estudio es importante, pueden dejarse aquí de lado»). Así «la determinación de posición en la multiplicidad dada queda reducida a una determinación de cantidad y a una determinación de posición en una multiplicidad de menos dimensiones»; la nueva multiplicidad tiene $n-1$ dimensiones si la dada tenía $n$; repitiendo $n$ veces:

> «la determinación de posición en una multiplicidad n veces extensa queda reducida a n determinaciones de cantidad, y por tanto la determinación de posición en una multiplicidad dada queda reducida a un número finito de determinaciones de cantidad, cuando esto es posible. Hay multiplicidades en las que la determinación de posición requiere no un número finito, sino o bien una serie infinita o bien una multiplicidad continua de determinaciones de cantidad. Tales multiplicidades son, por ejemplo, las posibles determinaciones de una función para una región dada, las posibles formas de una figura sólida [al. *einer räumlichen Figur*, de una figura espacial], etc.» (p. 4)

### II. Relaciones métricas (pp. 4–9)

**Introducción (p. 4).** Resumen de lo ganado: «el verdadero carácter» de la multiplicidad de n dimensiones «consiste en la propiedad de que la determinación de posición en ella puede reducirse a n determinaciones de magnitud». Ahora el segundo problema: «el estudio de las relaciones métricas de las que tal multiplicidad es capaz, y de las condiciones que bastan para determinarlas». Estas relaciones «solo pueden estudiarse en nociones abstractas de cantidad, y su dependencia mutua solo puede representarse mediante fórmulas»; bajo ciertos supuestos, sin embargo, se descomponen en relaciones representables geométricamente, de modo que los resultados del cálculo «pueden presentarse después en forma geométrica». Los fundamentos de ambas partes están en las *Disquisitiones generales circa superficies curvas* de Gauss.

**§1 (pp. 4–6).** El supuesto de partida:

> «Las determinaciones de medida requieren que la cantidad sea independiente de la posición, lo cual puede ocurrir de varias maneras. La hipótesis que primero se presenta, y que desarrollaré aquí, es aquella según la cual la longitud de las líneas es independiente de su posición, y en consecuencia toda línea es medible por medio de cualquier otra.» (pp. 4–5)
> [Measure-determinations require that quantity should be independent of position, which may happen in various ways. The hypothesis which first presents itself…]

Con la posición de un punto expresada por $n$ variables $x_1,\dots,x_n$, una línea es dar las $x$ como funciones de una variable; el problema es «establecer una expresión matemática para la longitud de una línea», para lo cual las $x$ deben considerarse «expresables en ciertas unidades». Restricciones: (i) líneas en que las razones de los incrementos $dx$ varían continuamente, de modo que la línea se descompone en elementos dentro de los cuales esas razones son constantes y el problema se reduce a «una expresión general para el elemento lineal $ds$» que contendrá las $x$ y las $dx$; (ii) la longitud del elemento lineal «permanece inalterada, a primer orden, cuando todos los puntos de este elemento sufren el mismo desplazamiento infinitesimal», lo que implica que si todas las $dx$ crecen en la misma razón, $ds$ crece en esa razón. Bajo estos supuestos $ds$ puede ser «cualquier función homogénea de primer grado de las cantidades $dx$, que no cambia cuando cambiamos los signos de todas las $dx$, y en la que las constantes arbitrarias son funciones continuas de las cantidades $x$» (p. 5). Para hallar los casos más simples, Riemann busca la función de posición cuyas superficies de nivel son los lugares «equidistantes del origen del elemento lineal»; esa función tiene un mínimo en el origen, su primera diferencial se anula y la segunda no puede ser negativa (la supone «siempre positiva»); esa diferencial segunda es constante cuando $ds$ lo es y crece «en razón duplicada» con las $dx$, luego «debe ser $ds^2$ multiplicado por una constante»:

> «y en consecuencia ds es la raíz cuadrada de una función homogénea entera de segundo orden, siempre positiva, de las cantidades dx, en la que los coeficientes son funciones continuas de las cantidades x. Para el espacio, cuando la posición de los puntos se expresa mediante coordenadas rectilíneas, $ds=\sqrt{\sum(dx)^2}$; el espacio queda por tanto incluido en este caso, el más simple.» (p. 5)

El «caso siguiente en simplicidad» sería el de la raíz cuarta de una expresión diferencial cuártica; su estudio «no exigiría principios realmente distintos», pero sería largo y arrojaría «poca luz nueva sobre la teoría del espacio, sobre todo porque los resultados no pueden expresarse geométricamente» (p. 6). Riemann se limita a la raíz cuadrada de una expresión cuadrática. Un cambio de variables transforma una tal expresión en otra semejante, pero no cualquiera en cualquiera: la expresión tiene $\tfrac{1}{2}n(n+1)$ coeficientes que son funciones arbitrarias, y con nuevas variables solo se satisfacen $n$ condiciones; los $\tfrac{1}{2}n(n-1)$ restantes «están enteramente determinados por la naturaleza del continuo que ha de representarse», de modo que «se requieren $\tfrac{1}{2}n(n-1)$ funciones de posición para la determinación de sus relaciones métricas» (p. 6). Las multiplicidades en que, «como en el plano y en el espacio», el elemento se reduce a $\sqrt{\sum dx^2}$ son «solo un caso particular»; Riemann las llama **planas** [flat; al. *eben*]. Para «pasar revista a las verdaderas variedades [true varieties; al. *die wesentlichen Verschiedenheiten*, las diferencias esenciales] de todos los continuos representables en la forma supuesta» hay que eliminar «las dificultades que nacen del modo de representación», eligiendo las variables «según un cierto principio» (p. 6).

**§2 (pp. 6–7).** El principio: desde un punto cualquiera se construye el sistema de líneas más cortas [shortest lines; al. *kürzeste Linien*; Clifford también «geodesic»] que salen de él; un punto arbitrario queda determinado por la dirección inicial de la geodésica en que está y por su distancia $s$ a lo largo de ella. Con una elección lineal adecuada de variables (de modo que el valor inicial de $ds^2$ sea una suma de cuadrados) y tomando $x_1,\dots,x_n$ proporcionales a las direcciones y con $\sum x^2 = s^2$, el cuadrado del elemento de línea es $\sum dx^2$ para valores infinitesimales de las $x$, «pero el término de orden siguiente es igual a una función homogénea de segundo orden de las $\tfrac{1}{2}n(n-1)$ cantidades $(x_1dx_2-x_2dx_1), (x_1dx_3-x_3dx_1)\ldots$, un infinitesimal, por tanto, de cuarto orden», que dividido por «el cuadrado del triángulo infinitesimal cuyos vértices son $(0,0,0,\ldots)$, $(x_1,x_2,x_3,\ldots)$, $(dx_1,dx_2,dx_3,\ldots)$» da una cantidad finita (pp. 6–7). Y entonces:

> «Esta cantidad conserva el mismo valor mientras las x y las dx estén incluidas en la misma forma lineal binaria, o mientras las dos geodésicas de 0 a x y de 0 a dx permanezcan en el mismo elemento de superficie; depende por tanto solo del lugar y de la dirección. Es evidentemente cero cuando la multiplicidad representada es plana, es decir, cuando el cuadrado del elemento de línea es reducible a $\sum dx^2$, y puede por tanto considerarse como la medida de la desviación de la multiplicidad respecto de la planitud en el punto dado y en la dirección de superficie dada. Multiplicada por $-\tfrac{3}{4}$ se vuelve igual a la cantidad que el Consejero Privado Gauss ha llamado curvatura total de una superficie.» (p. 7)
> [This quantity retains the same value so long as the x and the dx are included in the same binary linear form … it depends therefore only on place and direction. … may therefore be regarded as the measure of the deviation of the manifoldness from flatness at the given point in the given surface-direction. Multiplied by −3/4 it becomes equal to the quantity which Privy Councillor Gauss has called the total curvature of a surface.]
> (al. *Krümmungsmass*, «medida de curvatura», donde Clifford escribe «total curvature».)

Como se necesitaban $\tfrac{1}{2}n(n-1)$ funciones de posición, si «la curvatura en cada punto en $\tfrac{1}{2}n(n-1)$ direcciones de superficie está dada, las relaciones métricas del continuo pueden determinarse a partir de ellas», siempre que no haya relaciones idénticas entre esos valores, «lo que de hecho, hablando en general, no ocurre» (p. 7). Así las relaciones métricas quedan expresadas «de un modo enteramente independiente de la elección de variables independientes». Un método semejante valdría para el elemento cuártico; allí la desviación respecto de la planitud en $ds^2$ sería «un infinitesimal de segundo orden, mientras que en aquellas multiplicidades era de cuarto orden»; por eso la propiedad de estas últimas «puede llamarse planitud en las partes más pequeñas [flatness in the smallest parts; al. *Ebenheit in den kleinsten Theilen*]» (p. 7). Y la razón por la que solo se las estudia: «las relaciones de las doblemente extensas pueden representarse geométricamente por superficies, y las de las múltiplemente extensas reducirse a las de las superficies contenidas en ellas» (p. 7).

**§3 (pp. 7–8).** En la idea de superficie, junto a «las relaciones métricas intrínsecas en las que solo se considera la longitud de las líneas sobre las superficies», está siempre mezclada «la posición de puntos fuera de la superficie». Se abstrae de las relaciones externas considerando las deformaciones que dejan inalteradas las longitudes, «es decir, si consideramos la superficie doblada de cualquier manera sin estiramiento [bent in any way without stretching; al. *ohne Dehnung gebogen*], y tratamos todas las superficies así relacionadas como equivalentes [al. *gleichartig*]». Así «cualquier superficie cilíndrica o cónica cuenta como equivalente a un plano», conserva «toda la planimetría», mientras que «cuentan como esencialmente diferentes [essentially different; al. *wesentlich verschieden*] de la esfera, que no puede transformarse en un plano sin estiramiento» (pp. 7–8). Para superficies, la curvatura total admite «una interpretación visible»: es el producto de las dos curvaturas de la superficie, o bien, multiplicada por el área de un pequeño triángulo geodésico, es igual a su exceso esférico (Riemann hace notar qué proposición presupone cada definición). Para dar «un sentido inteligible a la curvatura de una extensión n-ple en un punto dado y en una dirección de superficie dada» se parte de que una geodésica está «enteramente determinada cuando se da su dirección inicial»; prolongando todas las geodésicas que salen del punto en las direcciones de ese elemento de superficie «obtenemos una superficie determinada; esta superficie tiene en el punto dado una curvatura definida, que es también la curvatura del continuo n-ple en el punto dado y en la dirección de superficie dada» (p. 8).

**§4 (pp. 8–9).** Sobre las multiplicidades planas: en ellas la curvatura total es cero en todos los puntos y en todas las direcciones, aunque basta que lo sea en $\tfrac{1}{2}n(n-1)$ direcciones independientes en cada punto. Las de curvatura idénticamente nula son «un caso especial de aquellas cuya curvatura es constante». Y el carácter común de estas:

> «El carácter común de aquellos continuos cuya curvatura es constante puede expresarse también así: que las figuras pueden moverse en ellos sin estiramiento. Pues claramente las figuras no podrían desplazarse y girarse arbitrariamente en ellos si la curvatura en cada punto no fuese la misma en todas las direcciones. Por otra parte, sin embargo, las relaciones métricas de la multiplicidad están enteramente determinadas por la curvatura; son por tanto exactamente las mismas en todas las direcciones en un punto que en otro, y en consecuencia pueden hacerse desde él las mismas construcciones: de donde se sigue que en los agregados [aggregates; al. *Mannigfaltigkeiten*] de curvatura constante puede darse a las figuras cualquier posición arbitraria.» (p. 8)

Las relaciones métricas de estas multiplicidades «dependen solo del valor de la curvatura», y si ese valor se denota $\alpha$, el elemento de línea puede escribirse (p. 9):

$$ds=\frac{1}{1+\frac{\alpha}{4}\sum x^2}\sqrt{\sum dx^2}.$$

**§5 (p. 9).** Ilustración con superficies de curvatura constante. Una superficie de curvatura positiva «puede siempre enrollarse sobre una esfera cuyo radio es la unidad dividida por la raíz cuadrada de la curvatura». Para «pasar revista a toda la multiplicidad de estas superficies», Riemann toma una como esfera y las demás como superficies de revolución tangentes a ella en el ecuador: las de curvatura mayor la tocan por dentro y tienen la forma de la parte exterior de un anillo (se enrollan sobre zonas de esferas menores dando más de una vuelta); las de curvatura positiva menor se obtienen de esferas mayores recortando un huso entre dos semicírculos máximos y pegando los bordes; la de curvatura cero es un cilindro sobre el ecuador; las de curvatura negativa tocan el cilindro por fuera y tienen la forma de la parte interior de un anillo. «Si consideramos estas superficies como *locus in quo* de regiones de superficie que se mueven en ellas, como el espacio es *locus in quo* de los cuerpos» (el latín es de Clifford; el alemán dice *Ort*), las regiones pueden moverse en todas ellas sin estiramiento; en las de curvatura positiva pueden además moverse «sin doblarse» si se les da forma de esfera, no así en las negativas; y «además de esta independencia de las regiones de superficie respecto de la posición, hay en las superficies de curvatura cero también una independencia de la dirección respecto de la posición, que no existe en las anteriores» (p. 9).

### III. Aplicación al espacio (pp. 9–12)

**§1 (pp. 9–10).** Lo anterior permite «declarar las condiciones necesarias y suficientes para determinar las propiedades métricas del espacio, si suponemos la independencia de la longitud de las líneas respecto de la posición y la expresabilidad del elemento de línea como raíz cuadrada de una diferencial cuadrática, es decir, planitud en las partes más pequeñas». Tres formulaciones:

> «Primero, pueden expresarse así: que la curvatura en cada punto es cero en tres direcciones de superficie; y de ahí que las propiedades métricas del espacio quedan determinadas si la suma de los ángulos de un triángulo es siempre igual a dos rectos.
> Segundo, si suponemos con Euclides no solo una existencia de las líneas independiente de la posición, sino también de los cuerpos, se sigue que la curvatura es en todas partes constante; y entonces la suma de los ángulos está determinada en todos los triángulos cuando se la conoce en uno.
> Tercero, en lugar de tomar la longitud de las líneas como independiente de la posición y la dirección, podría suponerse también una independencia de su longitud y dirección respecto de la posición. Según esta concepción, los cambios o diferencias de posición son magnitudes complejas expresables en tres unidades independientes.» (pp. 9–10)

**§2 (pp. 10–11).** Recapitulación y giro epistemológico. «Distinguimos primero entre las relaciones de extensión o de partición [relations of extension or partition; al. *Ausdehnungs- oder Gebietsverhältnisse*, relaciones de extensión o de región] y las relaciones de medida, y hallamos que con las mismas propiedades extensivas eran concebibles diferentes relaciones métricas»; luego se buscaron los sistemas de determinaciones simples de los que se siguen necesariamente todas las proposiciones métricas; «queda por discutir cómo, en qué grado y hasta qué punto estos supuestos son avalados por la experiencia». Y aquí la asimetría decisiva:

> «A este respecto hay una distinción real entre las meras relaciones extensivas y las relaciones métricas; en cuanto que en las primeras, donde los casos posibles forman una multiplicidad discreta, las declaraciones de la experiencia no son, ciertamente, del todo ciertas, pero tampoco inexactas; mientras que en las segundas, donde los casos posibles forman una multiplicidad continua, toda determinación a partir de la experiencia permanece siempre inexacta, por grande que sea la probabilidad de que sea casi exacta.» (p. 10)
> [In this respect there is a real distinction between mere extensive relations, and measure-relations; in so far as in the former, where the possible cases form a discrete manifoldness, the declarations of experience are indeed not quite certain, but still not inaccurate; while in the latter, where the possible cases form a continuous manifoldness, every determination from experience remains always inaccurate…]

Esto importa al extender las determinaciones empíricas «más allá de los límites de la observación, a lo infinitamente grande y lo infinitamente pequeño», porque las métricas «pueden claramente volverse más inexactas más allá de los límites de la observación, pero no las primeras». Sigue la distinción entre lo ilimitado y lo infinito:

> «En la extensión de la construcción del espacio a lo infinitamente grande, debemos distinguir entre ilimitación [unboundedness; al. *Unbegrenztheit*] y extensión infinita [infinite extent; al. *Unendlichkeit*]; la primera pertenece a las relaciones de extensión, la segunda a las relaciones métricas. Que el espacio es una multiplicidad triplemente extensa ilimitada es un supuesto que se desarrolla [is developed; al. *angewandt wird*, se aplica] en toda concepción del mundo exterior, según el cual en cada instante la región de la percepción real se completa y se construyen las posiciones posibles de un objeto buscado, y que por estas aplicaciones se confirma sin cesar. La ilimitación del espacio posee de este modo una certeza empírica mayor que cualquier experiencia externa. Pero su extensión infinita en modo alguno se sigue de ello; por el contrario, si suponemos la independencia de los cuerpos respecto de la posición, y por tanto atribuimos al espacio una curvatura constante, este debe ser necesariamente finito con tal de que esta curvatura tenga un valor positivo por pequeño que sea.» (p. 10)

Prolongando todas las geodésicas que parten de un elemento de superficie se obtendría «una superficie ilimitada de curvatura constante, es decir, una superficie que en una multiplicidad plana de tres dimensiones tomaría la forma de una esfera, y por consiguiente sería finita» (pp. 10–11).

**§3 (pp. 11–12).** «Las cuestiones sobre lo infinitamente grande son, para la interpretación de la naturaleza, cuestiones ociosas [useless questions; al. *müssige Fragen*]. Pero no ocurre lo mismo con las cuestiones sobre lo infinitamente pequeño. De la exactitud con que seguimos los fenómenos hacia lo infinitamente pequeño depende esencialmente nuestro conocimiento de sus relaciones causales» (p. 11). El progreso de la mecánica se debe al cálculo infinitesimal y a los principios simples de Arquímedes, Galileo y Newton; en las ciencias naturales que aún carecen de tales principios se buscan las relaciones causales «siguiendo los fenómenos hasta lo muy pequeño, en la medida en que el microscopio lo permite». Por eso «las cuestiones sobre las relaciones métricas del espacio en lo infinitamente pequeño no son cuestiones superfluas».

Si los cuerpos existen independientemente de la posición, la curvatura es constante y «resulta de las medidas astronómicas que no puede ser diferente de cero; o en todo caso su recíproco debe ser un área en comparación con la cual el alcance de nuestros telescopios puede despreciarse». Pero si esa independencia no se da, «no podemos sacar conclusiones de las relaciones métricas de lo grande a las de lo infinitamente pequeño; en ese caso la curvatura en cada punto puede tener un valor arbitrario en tres direcciones, con tal de que la curvatura total de toda porción medible del espacio no difiera sensiblemente de cero». Relaciones «aún más complicadas» si el elemento no es la raíz de una cuadrática. Y entonces:

> «Ahora bien, parece que las nociones empíricas sobre las que se fundan las determinaciones métricas del espacio, la noción de cuerpo sólido y la de rayo de luz, dejan de ser válidas para lo infinitamente pequeño. Tenemos por tanto plena libertad para suponer que las relaciones métricas del espacio en lo infinitamente pequeño no se conforman a las hipótesis de la geometría; y de hecho deberíamos suponerlo si con ello pudiéramos obtener una explicación más simple de los fenómenos.» (p. 11)

El párrafo final sobre el fundamento:

> «La cuestión de la validez de las hipótesis de la geometría en lo infinitamente pequeño está ligada a la cuestión del fundamento [ground; al. *innern Grunde*, fundamento interno] de las relaciones métricas del espacio. En esta última cuestión, que todavía podemos considerar perteneciente a la doctrina del espacio, encuentra aplicación la observación hecha arriba: que en una multiplicidad discreta el fundamento [ground; al. *Princip*] de sus relaciones métricas está dado en la noción de ella, mientras que en una multiplicidad continua este fundamento debe venir de fuera. O bien, por tanto, la realidad que subyace al espacio [the reality which underlies space; al. *das dem Raume zu Grunde liegende Wirkliche*] debe formar una multiplicidad discreta, o bien debemos buscar el fundamento de sus relaciones métricas fuera de ella, en fuerzas de ligazón que actúan sobre ella [in binding forces which act upon it; al. *in darauf wirkenden bindenden Kräften*].» (p. 11)

La respuesta «solo puede obtenerse partiendo de la concepción de los fenómenos que hasta ahora ha sido justificada por la experiencia, y que Newton asumió como fundamento, y haciendo en esta concepción los cambios sucesivos que exijan hechos que ella no pueda explicar». Las investigaciones que parten de nociones generales, «como la que acabamos de hacer, solo pueden ser útiles para impedir que este trabajo sea entorpecido por visiones demasiado estrechas, y que el progreso en el conocimiento de la interdependencia de las cosas sea frenado por prejuicios tradicionales». Cierre: «Esto nos lleva al dominio de otra ciencia, la física, en el que el objeto de este trabajo no nos permite entrar hoy» (p. 12; al. «welches wohl die Natur der heutigen Veranlassung nicht zu betreten erlaubt»: en el que la naturaleza de la ocasión de hoy no permite entrar).

---

## 3. La noción de Mannigfaltigkeit

Esta es la sección central. Sigo el texto de I §1–3 casi frase por frase, con el alemán a la vista, y separo lo que Riemann dice de lo que yo infiero.

### 3.1 Una noción general y sus modos de determinación

> «Las nociones de magnitud [magnitude-notions; al. *Grössenbegriffe*] solo son posibles donde hay una noción general antecedente que admite diferentes especializaciones [specialisations; al. *Bestimmungsweisen*]. Según exista o no entre estas especializaciones un camino continuo de una a otra, forman una multiplicidad continua o discreta [a continuous or discrete manifoldness; al. *eine stetige oder discrete Mannigfaltigkeit*]; las especializaciones individuales se llaman, en el primer caso, puntos, y en el segundo, elementos de la multiplicidad.» (p. 2)
> [Magnitude-notions are only possible where there is an antecedent general notion which admits of different specialisations. According as there exists among these specialisations a continuous path from one to another or not, they form a continuous or discrete manifoldness; the individual specialisations are called in the first case points, in the second case elements, of the manifoldness.]

Observaciones literales:

1. **La multiplicidad no es una cosa sino el conjunto de los modos de determinación de un concepto.** El alemán es más claro que Clifford: *Bestimmungsweisen* son «maneras de estar determinado», los modos en que un concepto general puede especificarse. Un concepto como «color» admite modos de determinación (el rojo, el verde, este rojo preciso); el conjunto de tales modos *es* la multiplicidad. Clifford traduce «specialisations», que sugiere más bien «especies» o «casos particulares», y pierde el matiz de *Bestimmung* (determinación), que recorre toda la lección (*Ortsbestimmung*, *Grössenbestimmung*, *Massbestimmung*). Para un lector filosófico conviene leer siempre *Bestimmungsweise* donde Clifford pone *specialisation*.

2. **El orden de fundamentación es: noción general → modos de determinación → multiplicidad → magnitud.** Las nociones de magnitud «solo son posibles donde» hay esa noción general. La multiplicidad es anterior a la magnitud en el orden conceptual; la magnitud es lo que se obtiene cuando los modos de determinación pueden compararse (contarse o medirse).

3. **El criterio continuo/discreto es único y es de paso (*Uebergang*).** Hay multiplicidad continua «según exista un camino continuo de una [especialización] a otra» (al. *ein stetiger Uebergang stattfindet*). Riemann no define «continuo»; lo usa como primitivo. No hay ningún criterio cualitativo adicional: la división es exhaustiva y se decide por la existencia o no de transición continua entre los modos de determinación.

4. **Puntos frente a elementos.** La terminología está pensada: los modos de determinación de una multiplicidad continua se llaman *puntos*; los de una discreta, *elementos*. «Punto» ya no es el punto euclidiano (lo que no tiene partes) sino un modo de determinación de un concepto continuo; «elemento» es una unidad contable.

### 3.2 La rareza de lo continuo y los dos ejemplos de Riemann

> «Las nociones cuyas especializaciones forman una multiplicidad discreta son tan comunes que, al menos en las lenguas cultivadas, dadas cualesquiera cosas siempre es posible encontrar una noción en la que estén incluidas. (De ahí que los matemáticos hayan podido fundar sin vacilación la teoría de las magnitudes discretas sobre el postulado de que ciertas cosas dadas han de considerarse equivalentes [equivalent; al. *gleichartig*, homogéneas, de la misma especie].) Por el contrario, tan escasas y espaciadas son las ocasiones de formar nociones cuyas especializaciones constituyan una multiplicidad continua, que las únicas nociones simples cuyas especializaciones forman una multiplicidad múltiplemente extensa son las posiciones de los objetos percibidos [positions of perceived objects; al. *die Orte der Sinnengegenstände*, los lugares de los objetos de los sentidos] y los colores. Ocasiones más frecuentes para la creación y el desarrollo de estas nociones se presentan por primera vez en la matemática superior.» (p. 2)

Observaciones:

1. **Lo discreto es la forma normal del concepto.** Cualquier colección de cosas cae bajo un concepto (al menos «en las lenguas cultivadas», *in den gebildeteren Sprachen*); ese concepto tiene tantos modos de determinación como cosas; forman una multiplicidad discreta. La teoría de los números (magnitudes discretas) nace del «postulado» de tratar cosas dadas como *gleichartig*: homogéneas, de una misma especie. Clifford traduce «equivalent»; el alemán dice literalmente «de igual índole». Es decir: contar supone decidir que las cosas son de la misma clase. Riemann lo presenta como un postulado (*Forderung*), no como un hecho.

2. **La rareza de lo continuo en la vida ordinaria.** El alemán añade *im gemeinen Leben* («en la vida común»), que Clifford omite: las ocasiones de formar conceptos de modos de determinación continuos son raras *en la vida ordinaria*; solo la matemática superior las multiplica. El contraste es entre el lenguaje y la experiencia cotidiana (donde prima lo discreto) y la matemática (donde prolifera lo continuo).

3. **Los dos únicos ejemplos simples: lugares de los objetos sensibles y colores.** Riemann dice que son «probablemente» (*wohl*, omitido por Clifford) los únicos conceptos *simples* cuyos modos de determinación forman una multiplicidad *múltiplemente* extensa (nótese: no solo continua, sino de varias dimensiones). El lugar de un objeto sensible tiene tres grados de determinación; el color, a juzgar por el contexto (y por la teoría tricromática de la época; esto es contexto mío), también tres. Lo notable para un lector de Bergson: Riemann pone en el mismo plano la posición espacial y la cualidad cromática. El color es, para Riemann, una multiplicidad continua múltiplemente extensa tanto como el espacio; y nada en el texto dice que el color se resista a la medida, aunque tampoco que la admita: Riemann no vuelve sobre él.

4. **El espacio no es la fuente del concepto de multiplicidad, sino un caso.** Esto está ya en el Plan: «el espacio es solo un caso particular de una magnitud triplemente extensa». El espacio es una de las multiplicidades continuas triplemente extensas; lo que lo distingue de las otras concebibles es métrico y se aprende por experiencia.

### 3.3 Cuantos, contar y medir, el «más o menos» sin el «cuánto»

> «Porciones definidas de una multiplicidad, distinguidas por una marca o por un límite, se llaman cuantos [Quanta]. Su comparación en cuanto a la cantidad se efectúa, en el caso de las magnitudes discretas, contando; en el de las continuas, midiendo. La medida consiste en la superposición [superposition; al. *Aufeinanderlegen*] de las magnitudes que han de compararse; requiere por tanto un medio de usar una magnitud como patrón de otra [al. *die eine Grösse als Massstab für die andere fortzutragen*, transportar una magnitud como patrón para la otra]. A falta de él, dos magnitudes solo pueden compararse cuando una es parte de la otra; y en tal caso también solo podemos determinar el más o el menos, y no el cuánto [the more or less and not the how much; al. *das Mehr oder Minder, nicht das Wieviel*].» (pp. 2–3)

Observaciones:

1. **Un cuanto es una porción de multiplicidad.** No es una cantidad numérica sino una región delimitada (por «una marca o un límite»). La cantidad (*Quantität*) es lo que resulta de comparar cuantos.

2. **Contar y medir son las dos operaciones correlativas de los dos tipos de multiplicidad.** Lo discreto se cuenta; lo continuo se mide. Este es el único lugar donde Riemann asigna una operación propia a cada tipo, y es decisivo: la multiplicidad continua es, para Riemann, aquella cuyos cuantos se comparan *midiendo*. Medir no se opone a la continuidad; es su forma propia de comparación.

3. **Pero medir exige algo que la multiplicidad no da: un patrón transportable.** La medida es superposición, y superponer exige «un medio de transportar una magnitud como patrón de la otra». Ese medio no está contenido en la noción de multiplicidad continua; hay que añadirlo. Sin él, solo cabe la comparación por inclusión (parte/todo), y esta solo da el «más o menos», nunca el «cuánto».

4. **Hay, por tanto, una ciencia de lo continuo anterior a la medida.** Sigue el texto:

> «Las investigaciones que en este caso pueden emprenderse sobre ellas forman una división general de la ciencia de la magnitud [al. *einen allgemeinen von Massbestimmungen unabhängigen Theil der Grössenlehre*, una parte general de la teoría de la magnitud, independiente de las determinaciones de medida] en la que las magnitudes se consideran no como existentes independientemente de la posición ni como expresables mediante una unidad, sino como regiones en una multiplicidad [regions in a manifoldness; al. *Gebiete in einer Mannigfaltigkeit*].» (p. 3)

Clifford omite «independiente de las determinaciones de medida», que es precisamente la cláusula que interesa al lector filosófico: Riemann afirma que existe una parte de la teoría de la magnitud en la que *no* se presupone medida alguna, y en la que las magnitudes son solo «regiones en una multiplicidad», sin unidad y sin independencia respecto de la posición. Esta parte es lo que la Sinopsis llama «teoría de las meras relaciones de región [region-relations; al. *Gebietsverhältnisse*], en la que no se supone una independencia de las magnitudes respecto de la posición» (p. 13), frente a la «teoría de las relaciones de tamaño [size-relations; al. *Massverhältnisse*], en la que tal independencia debe suponerse». En términos actuales es la distinción entre topología y geometría métrica; Riemann no usa la palabra «topología» (en su artículo de 1857 sobre funciones abelianas habla de *Analysis situs*; contexto mío).

5. **La parte general no presupone nada «sino lo que está contenido en la noción» de magnitud extensa.** Riemann lo dice expresamente: «de esta parte general de la ciencia de la magnitud extensa, en la que no se presupone nada sino lo que está contenido en su noción» (p. 3; al. *wo weiter nichts vorausgesetzt wird, als was in dem Begriffe derselben schon enthalten ist*). Lo que está contenido en la noción es la estructura de extensión (dimensión, continuidad, regiones, límites). Lo que no está contenido es la métrica. Esta es la base textual de la tesis de que la métrica «se añade» (véase §3.6).

### 3.4 La construcción de la multiplicidad n veces extensa (§2)

La construcción es inductiva y procede por «paso definido» (*auf bestimmte Art*):

- **Simplemente extensa.** Si de un modo de determinación «se pasa de un modo definido a otro», los modos recorridos forman una multiplicidad simplemente extensa, cuyo «verdadero carácter» [true character; al. *wesentliches Kennzeichen*, rasgo esencial] es que «en ella un progreso continuo desde un punto solo es posible hacia dos lados, hacia adelante o hacia atrás» (p. 3). La unidimensionalidad se define por la bilateralidad del paso, no por un número.
- **Doblemente extensa.** Si esa multiplicidad «pasa a su vez a otra enteramente diferente [al. *völlig verschiedene*], y de nuevo de un modo definido, a saber, de modo que cada punto pasa a un punto definido de la otra», el total de los modos así obtenidos forma una multiplicidad doblemente extensa.
- **n veces extensa.** Iteración: «es fácil ver cómo puede continuarse esta construcción».
- **Reformulación.** «Si se considera el objeto variable en lugar de la noción determinable de él», la construcción es «la composición de una variabilidad de n + 1 dimensiones a partir de una variabilidad de n dimensiones y una variabilidad de una dimensión» (p. 3).

Observaciones:

1. Hay dos vocabularios equivalentes: el del concepto (*Begriff*) y sus modos de determinación, y el del objeto (*Gegenstand*) variable y su variabilidad (*Veränderlichkeit*). Riemann los declara intercambiables. El primero es lógico-conceptual; el segundo, dinámico. «Dimensión» aparece por primera vez en el vocabulario de la variabilidad.
2. La multiplicidad doble se obtiene haciendo que *toda* una multiplicidad simple pase a otra «enteramente diferente». La diferencia entre las capas es total (no hay solapamiento), y el paso es punto a punto. En términos modernos es un producto local de una curva por otra; Riemann no habla de producto.
3. El procedimiento no introduce medida alguna: solo transiciones continuas y correspondencias punto a punto. La dimensión es, por tanto, una propiedad de la estructura de extensión, no de la métrica.

### 3.5 La determinación de un punto por n magnitudes (§3) y el «verdadero carácter» de la n-extensión

El §3 invierte la construcción: dada una multiplicidad, se la descompone. El instrumento es «una función continua de la posición» no constante en ninguna región; sus conjuntos de nivel son multiplicidades continuas de menos dimensiones que «pasan continuamente unas a otras» cuando varía el valor. Así «la determinación de posición [determination of position; al. *Ortsbestimmung*] en la multiplicidad dada queda reducida a una determinación de cantidad [al. *Grössenbestimmung*] y a una determinación de posición en una multiplicidad de menos dimensiones» (p. 4). Iterando $n$ veces: $n$ determinaciones de cantidad. De ahí la conclusión que Riemann repite en la introducción de II: el «verdadero carácter» de una multiplicidad de $n$ dimensiones «consiste en la propiedad de que la determinación de posición en ella puede reducirse a $n$ determinaciones de magnitud» (p. 4).

Observaciones:

1. **La dimensión se define por el número de cantidades necesarias para fijar un punto.** Esto es lo que hoy llamaríamos un sistema de coordenadas local; Riemann no usa la palabra «coordenada» en I, sino *Grössenbestimmung*, *Quantitätsbestimmung*. Las «cantidades» aquí son solo valores de funciones continuas; no presuponen unidad ni métrica. En II §1 Riemann dirá que, *para medir*, hay que considerar esas cantidades «como expresables en ciertas unidades» (p. 5): ese es el paso adicional.
2. **La reducción vale «cuando esto es posible».** Riemann señala multiplicidades en las que la determinación de posición exige «una serie infinita o una multiplicidad continua de determinaciones de cantidad»: las determinaciones posibles de una función en una región, las formas posibles de una figura espacial (p. 4). En lenguaje actual, espacios de funciones y espacios de formas, de dimensión infinita. Es importante para el uso filosófico: Riemann admite multiplicidades continuas que *no* se reducen a un número finito de números. Pero incluso estas se describen por «determinaciones de cantidad», aunque infinitas.
3. **Los casos de excepción.** Riemann deja de lado los puntos donde la correspondencia punto a punto entre conjuntos de nivel falla (puntos críticos, en lenguaje actual), pero advierte que su estudio «es importante» (p. 4). Es la semilla de lo que después fue la topología diferencial (contexto mío).

### 3.6 Por qué las relaciones métricas no están contenidas en la noción de multiplicidad

Es la tesis estructural de la lección y se enuncia tres veces:

1. **En el Plan (p. 1):** «una magnitud múltiplemente extensa es capaz de diferentes relaciones métricas» (*verschiedener Massverhältnisse fähig ist*). «Capaz de» (*fähig*): la multiplicidad es compatible con varias métricas; ninguna le pertenece por concepto. Por eso la geometría no se deriva de la noción de magnitud, y lo que distingue al espacio se toma de la experiencia.

2. **En I §1 (pp. 2–3):** medir exige un patrón transportable que la noción no proporciona; hay una parte de la teoría de la magnitud «independiente de las determinaciones de medida», en la que no se supone «nada sino lo que está contenido en la noción».

3. **En III §3 (p. 11), como principio:** «en una multiplicidad discreta el fundamento [Princip] de sus relaciones métricas está dado en la noción de ella, mientras que en una multiplicidad continua este fundamento debe venir de fuera [al. *anders woher hinzukommen muss*, debe añadirse desde otra parte]».

Y a esto se suma el encabezamiento de la parte II, que es una cláusula condicional: «Relaciones métricas de que es capaz una multiplicidad de n dimensiones *bajo el supuesto de que* las líneas tienen una longitud independiente de la posición» (p. 4). La métrica entra con una hipótesis explícita: la independencia de la longitud respecto de la posición. Y en II §1: «Las determinaciones de medida requieren que la cantidad sea independiente de la posición, lo cual puede ocurrir de varias maneras» (p. 4). La «independencia respecto de la posición» es el contenido conceptual de lo que se añade: que una magnitud pueda transportarse sin alterarse, de modo que sirva de patrón. Esto no es un rasgo de la multiplicidad; es un supuesto sobre ella.

El razonamiento, reconstruido: en lo discreto, los modos de determinación son elementos ya individuados y homogéneos (*gleichartig*) por postulado; comparar es contar; el principio de la comparación está en el concepto mismo (número de elementos). En lo continuo, los modos de determinación son puntos entre los cuales hay transición continua; no hay unidad natural; comparar exige superponer, y superponer exige transportar; el transporte es una operación externa al concepto; luego la métrica viene de fuera. De ahí que en el caso del espacio físico la alternativa final sea: o lo real subyacente es discreto (y la métrica está en el concepto), o la métrica viene de las «fuerzas de ligazón».

### 3.7 Un cuadro de la noción

| Aspecto | Multiplicidad discreta | Multiplicidad continua |
|---|---|---|
| Modos de determinación | elementos | puntos |
| Criterio | sin camino continuo entre ellos | con camino continuo |
| Frecuencia | común (cualquier concepto del lenguaje) | rara: lugares de objetos sensibles, colores; matemática superior |
| Comparación de cuantos | contar | medir |
| Supuesto que exige la comparación | postulado de homogeneidad (*gleichartig*) | patrón transportable; independencia de la posición |
| Fundamento de la métrica | contenido en la noción | viene de fuera (añadido) |
| Sin métrica | — | solo «más o menos», no «cuánto»; relaciones de región |
| Determinación de posición | — | reducible a n determinaciones de cantidad (dimensión n), o a infinitas |
| Estatuto de las afirmaciones empíricas | exactas aunque no ciertas | siempre inexactas (III §2, p. 10) |

---

## 4. Las relaciones métricas

Esta sección explica el contenido matemático de la parte II con fórmulas en notación moderna, indicando en cada caso qué dice literalmente Riemann.

### 4.1 Elemento de línea y forma cuadrática

Riemann parte de una multiplicidad $n$ veces extensa con la posición dada por $n$ variables $x_1,\dots,x_n$ y busca una expresión para la longitud de una curva $x_i = x_i(t)$. El supuesto es que la longitud es aditiva y local: la curva se descompone en elementos y basta una expresión para el **elemento de línea** $ds$ en cada punto, función de las $x$ y de las $dx$. Las dos hipótesis de homogeneidad (p. 5) imponen que $ds$ sea una función homogénea de grado 1 en las $dx$, par (invariante al cambiar el signo de todas las $dx$), con coeficientes continuos en $x$. Esa clase es muy amplia (incluye lo que hoy se llaman métricas de Finsler; contexto mío). Riemann escoge el caso «más simple» mediante un argumento de mínimo: la función «distancia al origen» tiene un mínimo en el origen, su diferencial segunda es una forma cuadrática definida positiva y escala como $ds^2$; por tanto

$$ds^2=\sum_{i,j=1}^{n} g_{ij}(x)\,dx_i\,dx_j,\qquad g_{ij}=g_{ji},\quad (g_{ij})\ \text{definida positiva},$$

con los $g_{ij}$ funciones continuas de $x$. Es lo que hoy se llama métrica riemanniana. Riemann escribe esto en palabras: «$ds$ es la raíz cuadrada de una función homogénea entera de segundo orden, siempre positiva, de las cantidades $dx$, en la que los coeficientes son funciones continuas de las cantidades $x$» (p. 5). El espacio euclidiano en coordenadas rectilíneas es el caso $g_{ij}=\delta_{ij}$, $ds=\sqrt{\sum dx_i^2}$. Riemann menciona como «caso siguiente» $ds = \sqrt[4]{F_4(dx)}$ con $F_4$ cuártica, y lo descarta por no ser representable geométricamente.

### 4.2 Cuánto hay de intrínseco en una métrica

La matriz simétrica $(g_{ij})$ tiene $\tfrac{1}{2}n(n+1)$ entradas. Un cambio de variables $x_i = x_i(y_1,\dots,y_n)$ transforma la expresión en otra del mismo tipo, pero solo dispone de $n$ funciones arbitrarias; por tanto solo puede normalizar $n$ de los coeficientes. Los $\tfrac{1}{2}n(n+1)-n=\tfrac{1}{2}n(n-1)$ restantes «están enteramente determinados por la naturaleza del continuo que ha de representarse» (p. 6). Para $n=2$ es una función (la curvatura de Gauss); para $n=3$, tres; para $n=4$, seis. Este conteo es la primera formulación del hecho de que una métrica tiene «grados de libertad» que ningún cambio de coordenadas elimina, y que son estos los que distinguen «esencialmente» (*wesentlich*) un continuo de otro.

**Multiplicidades planas** (*eben*, «flat»): aquellas en que $ds^2$ puede llevarse, por cambio de variables, a la forma $\sum dx_i^2$. En el plano y en el espacio ordinario esto es posible; en general no. Riemann subraya que son «solo un caso particular».

### 4.3 Coordenadas geodésicas y la medida de curvatura

Para separar lo intrínseco de lo que depende de la representación, Riemann introduce lo que hoy se llaman **coordenadas normales de Riemann**: desde un punto $O$ se trazan las geodésicas (líneas más cortas) y cada punto se identifica por la dirección inicial y la distancia $s$; con las variables normalizadas de modo que $\sum x_i^2=s^2$, el elemento de línea satisface

$$ds^2=\sum_i dx_i^2+\text{(término de cuarto orden)}+\dots,$$

donde el término correctivo es una forma cuadrática en las $\tfrac{1}{2}n(n-1)$ cantidades $x_i\,dx_j-x_j\,dx_i$, es decir, en las componentes del bivector $x\wedge dx$. En notación moderna, con el tensor de curvatura $R_{ikjl}$ (que Riemann no escribe en 1854; aparece en su memoria de 1861),

$$g_{ij}(x)=\delta_{ij}-\tfrac{1}{3}\,R_{ikjl}\,x^k x^l+O(|x|^3),$$

de modo que la corrección a $ds^2$ es $-\tfrac{1}{3}R_{ikjl}\,x^k x^l\,dx^i dx^j$. Riemann divide esta corrección por el cuadrado del área del triángulo infinitesimal de vértices $0$, $x$, $dx$; esa área es $A=\tfrac{1}{2}|x\wedge dx|$, y en el plano bidimensional $\sigma$ generado por $x$ y $dx$ la corrección vale $-\tfrac{1}{3}K(\sigma)\,|x\wedge dx|^2$, donde $K(\sigma)$ es la curvatura de Gauss de la superficie geodésica tangente a $\sigma$. Entonces

$$\frac{\text{corrección}}{A^2}=\frac{-\tfrac{1}{3}K(\sigma)\,|x\wedge dx|^2}{\tfrac{1}{4}|x\wedge dx|^2}=-\tfrac{4}{3}K(\sigma),$$

y por tanto $K(\sigma)=-\tfrac{3}{4}\cdot\dfrac{\text{corrección}}{A^2}$. Esto es exactamente lo que Riemann afirma: la cantidad «multiplicada por $-\tfrac{3}{4}$ se vuelve igual a la cantidad que Gauss ha llamado curvatura total de una superficie» (p. 7). He verificado el factor con la fórmula moderna; coincide. La cantidad $K(\sigma)$ es lo que hoy se llama **curvatura seccional**: depende «solo del lugar y de la dirección» (del punto y del 2-plano $\sigma$). Riemann la define geométricamente en II §3: es la curvatura de Gauss de la superficie formada por las geodésicas que salen del punto en las direcciones de $\sigma$ (p. 8).

Como las $\tfrac{1}{2}n(n-1)$ funciones intrínsecas de la métrica se corresponden con las curvaturas seccionales en $\tfrac{1}{2}n(n-1)$ direcciones de superficie independientes en cada punto, Riemann concluye que dar estas curvaturas determina las relaciones métricas «de un modo enteramente independiente de la elección de variables» (p. 7), salvo relaciones idénticas que «en general» no se dan. (En rigor, para $n\ge 4$ el tensor de curvatura tiene más componentes independientes que $\tfrac{1}{2}n(n-1)$, pero la curvatura seccional como función sobre todos los 2-planos sí determina el tensor; Riemann habla de «direcciones de superficie» en general, y el conteo de funciones es un argumento heurístico de grados de libertad, no un teorema enunciado con precisión. Esto es observación mía.)

**Planitud en las partes más pequeñas.** Que la corrección sea de cuarto orden en las coordenadas normales (y no de segundo, como ocurriría con un elemento cuártico) significa que la métrica riemanniana es euclidiana hasta primer orden en cada punto: es lo que Riemann llama *Ebenheit in den kleinsten Theilen* (p. 7). Esta es la propiedad por la que estos continuos admiten representación geométrica mediante superficies.

### 4.4 Qué significa que la métrica sea «independiente de la posición»

Riemann usa «independencia respecto de la posición» (*Unabhängigkeit vom Ort / von der Lage*) en tres niveles crecientes, y la lectura filosófica debe distinguirlos:

1. **Independencia de la longitud de las líneas respecto de la posición** (encabezamiento de II; II §1, pp. 4–5). Es la hipótesis mínima que hace posible medir: la longitud de una curva es un número que no cambia si la curva se desplaza; «toda línea es medible por medio de cualquier otra». Técnicamente se traduce en que exista una función $ds$ definida en toda la multiplicidad; es decir, en que haya una métrica. No implica que las figuras puedan moverse rígidamente.

2. **Independencia de los cuerpos (figuras) respecto de la posición** (II §4, III §1 «segundo», pp. 8–10). Que una figura extensa pueda trasladarse y girarse «sin estiramiento» a cualquier lugar. Riemann muestra que esto exige curvatura igual en todas las direcciones en cada punto, y de ahí concluye que la curvatura es constante en toda la multiplicidad; recíprocamente, con curvatura constante «puede darse a las figuras cualquier posición arbitraria» (p. 8). Es la condición de los espacios homogéneos e isótropos: esfera, espacio euclidiano, espacio hiperbólico. (El paso de «isotropía en cada punto» a «constancia en toda la multiplicidad» para $n \ge 3$ es el teorema de Schur, 1886; Riemann lo afirma sin demostración. Contexto mío.)

3. **Independencia de la dirección respecto de la posición** (II §5, III §1 «tercero», pp. 9–10). Que además las direcciones puedan compararse de un punto a otro (paralelismo absoluto). Solo se da con curvatura cero: en la superficie plana «hay también una independencia de la dirección respecto de la posición, que no existe en las anteriores» (p. 9). En este caso «los cambios o diferencias de posición son magnitudes complejas expresables en tres unidades independientes» (p. 10): el espacio es un espacio vectorial, los desplazamientos se suman como vectores.

El primer nivel es el que la parte II añade como hipótesis a la noción de multiplicidad; el segundo y el tercero son hipótesis adicionales que restringen la métrica. La geometría euclidiana supone los tres.

### 4.5 Espacios de curvatura constante

Si la curvatura seccional tiene el mismo valor $\alpha$ en todo punto y toda dirección, Riemann da la forma explícita (p. 9):

$$ds=\frac{\sqrt{\sum dx_i^2}}{1+\frac{\alpha}{4}\sum x_i^2}.$$

He comprobado que esta expresión es correcta: para $\alpha=1/R^2$ es la métrica de la esfera de radio $R$ en proyección estereográfica (reescalada); para $\alpha=0$ es la euclidiana; para $\alpha<0$ es el modelo conforme (de Poincaré) del espacio hiperbólico, válido en la bola $\sum x_i^2<-4/\alpha$. Riemann no distingue por nombre estos tres casos ni menciona a Lobachevski o Bolyai; su único ejemplo detallado es el de las superficies ($n=2$) en II §5, donde el caso de curvatura negativa aparece como «la parte interior de un anillo» (p. 9). Las superficies de curvatura constante son las únicas en que las figuras «pueden moverse sin estiramiento», y entre ellas solo la esfera (y el plano) permiten moverlas también «sin doblarse» (p. 9).

Consecuencia que Riemann extrae en III §2: si la curvatura constante es positiva «por pequeña que sea», el espacio es finito aunque ilimitado (pp. 10–11), como la superficie de una esfera.

---

## 5. La aplicación al espacio

### 5.1 Tres sistemas de hechos

La parte III §1 presenta tres sistemas de hechos empíricos, cada uno suficiente para fijar la métrica del espacio físico, bajo los supuestos generales de independencia de la longitud y de planitud en las partes más pequeñas:

1. Curvatura cero en tres direcciones de superficie en cada punto; equivalentemente, «la suma de los ángulos de un triángulo es siempre igual a dos rectos» (p. 9).
2. Independencia de los *cuerpos* respecto de la posición (hipótesis euclidiana ampliada): curvatura constante; basta medir la suma de los ángulos de *un* triángulo (p. 10).
3. Independencia de longitud *y dirección* respecto de la posición: el espacio como magnitud compleja de tres unidades (p. 10).

Lo que Riemann llama «hechos» (*Thatsachen*) son estos enunciados; lo que llama «hipótesis» es su estatuto epistémico (empíricos, no necesarios).

### 5.2 Lo ilimitado y lo infinito

Es una de las distinciones más citadas de la lección y conviene reproducirla con precisión. Riemann distingue (p. 10):

- **Ilimitación** (*Unbegrenztheit*, «unboundedness»): pertenece a las relaciones de extensión (región). Que el espacio sea «una multiplicidad triplemente extensa ilimitada» es un supuesto que se usa en toda concepción del mundo exterior cada vez que completamos la región percibida y construimos los lugares posibles de un objeto buscado, y que se confirma sin cesar. Tiene «una certeza empírica mayor que cualquier experiencia externa».
- **Infinitud** (*Unendlichkeit*, «infinite extent»): pertenece a las relaciones métricas. No se sigue de la ilimitación. Si los cuerpos son independientes de la posición (curvatura constante) y la curvatura es positiva, el espacio es necesariamente finito.

La diferencia reposa en la distinción de la parte I: la ilimitación es una relación de región (no hay borde), decidible con exactitud; la infinitud es una cuestión de medida (volumen total), siempre inexacta. Que el espacio no tenga límite no dice nada sobre si su medida es finita.

### 5.3 Lo infinitamente grande y lo infinitamente pequeño

El vocabulario alemán tiene dos pares que Clifford funde en uno. Riemann escribe *Unmessbargross* / *Unmessbarklein* («inmensurablemente grande / pequeño») en el Plan, en III §2 y al principio de III §3; y *Unendlichkleine* («infinitamente pequeño») en el resto de III §3. Clifford traduce todo por «infinitely great / small». La diferencia es relevante: «inmensurable» designa lo que está más allá de los límites de la observación, no lo matemáticamente infinito. El lector hispano debe saber que donde lea «infinitamente grande» en la frase «las cuestiones sobre lo infinitamente grande son ociosas» el alemán dice *Unmessbargrosse*: lo que no podemos medir por grande.

El argumento (III §3, p. 11):

- Las cuestiones sobre lo inmensurablemente grande son «ociosas» para la explicación de la naturaleza. (Riemann no dice que sean falsas o sin sentido, sino *müssig*: no rinden fruto explicativo.)
- Las cuestiones sobre lo pequeño no lo son, porque el conocimiento de las relaciones causales depende «de la exactitud con que seguimos los fenómenos hacia lo infinitamente pequeño». La mecánica progresó por el cálculo infinitesimal; las demás ciencias naturales, por el microscopio.
- Si los cuerpos son independientes de la posición, la astronomía muestra que la curvatura constante es cero o despreciable. Pero si esa independencia no vale, «no podemos sacar conclusiones de las relaciones métricas de lo grande a las de lo infinitamente pequeño»: la curvatura puede variar de punto a punto con tal de que la curvatura total de toda porción medible sea sensiblemente cero.
- Las nociones empíricas en que se funda la métrica («cuerpo sólido» y «rayo de luz») «parecen» perder validez en lo infinitamente pequeño. Por eso «tenemos plena libertad» para suponer que allí la métrica no obedece a las hipótesis de la geometría, «y de hecho deberíamos suponerlo si con ello pudiéramos obtener una explicación más simple de los fenómenos».

### 5.4 La frase final sobre el fundamento y las fuerzas (verificación)

El pasaje (p. 11; DE p. 13) dice, en mi traducción desde Clifford y cotejada con el alemán:

> «O bien, por tanto, la realidad que subyace al espacio debe formar una multiplicidad discreta, o bien debemos buscar el fundamento de sus relaciones métricas fuera de ella, en fuerzas de ligazón que actúan sobre ella.»
> [Either therefore the reality which underlies space must form a discrete manifoldness, or we must seek the ground of its metric relations outside it, in binding forces which act upon it.]
> [al. «Es muss also entweder das dem Raume zu Grunde liegende Wirkliche eine discrete Mannigfaltigkeit bilden, oder der Grund der Massverhältnisse ausserhalb, in darauf wirkenden bindenden Kräften, gesucht werden.»]

Verificación y matices:

1. La cita que maneja el doctorando («en fuerzas de ligazón que actúan sobre él») es correcta en lo esencial. *Bindende Kräfte* puede traducirse «fuerzas de ligazón», «fuerzas ligantes» o «fuerzas vinculantes»; Clifford: «binding forces». La transcripción EMIS del alemán imprime «bindenen», evidente errata por «bindenden»; la lectura «bindenden» es la de las ediciones de las *Werke* (esto último lo afirmo de memoria, no lo he cotejado aquí).
2. El pronombre: *darauf* («sobre ello») tiene como antecedente gramatical más próximo *das dem Raume zu Grunde liegende Wirkliche* (lo real que subyace al espacio), aunque también puede leerse como el espacio mismo. Clifford deja «it». En español «sobre él» (el espacio) o «sobre ella» (la realidad) son ambas defendibles; conviene no cargar la elección.
3. La frase es una **disyunción**, no una tesis. Riemann no afirma que la métrica venga de fuerzas; afirma que *o bien* lo real es discreto *o bien* el fundamento está en fuerzas. La disyunción sigue del principio general (discreto: fundamento en el concepto; continuo: fundamento externo) aplicado al espacio. Y la decisión se remite a la física: «La respuesta a estas cuestiones solo puede obtenerse partiendo de la concepción de los fenómenos […] que Newton asumió como fundamento» (pp. 11–12).
4. *Grund* e *innerer Grund*: el alemán habla de «la cuestión del fundamento *interno* de las relaciones métricas del espacio» (*nach dem innern Grunde*); Clifford omite «interno». Y donde Riemann escribe *Princip* («en una multiplicidad discreta el *principio* de las relaciones métricas está contenido en el concepto»), Clifford traduce «ground». Para el lector filosófico: la pregunta es por el fundamento interno de la métrica, y la respuesta de Riemann es que, en lo continuo, ese fundamento no es interno.
5. Nótese también la distinción, implícita pero clara, entre «el espacio» (una multiplicidad, un concepto con sus modos de determinación) y «lo real que subyace al espacio» (*das Wirkliche*). Riemann no identifica el espacio geométrico con la realidad física; el espacio es la forma conceptual bajo la que se piensa esa realidad, y la pregunta es si esa realidad es discreta o continua.

---

## 6. Enfoques

### 6a. Enfoque epistemológico, de los axiomas a las hipótesis

La palabra del título es programática. Riemann distingue tres estratos:

- **Lo que está contenido en la noción** de magnitud extensa (relaciones de extensión o región: continuidad, dimensión, ilimitación). Esto es analítico respecto del concepto y no requiere experiencia para su posibilidad, aunque *cuál* multiplicidad es el espacio sí se decide por experiencia: que el espacio tenga tres dimensiones es una determinación empírica, pero del tipo que la experiencia decide «con exactitud aunque no con certeza», porque los casos posibles forman una multiplicidad discreta (III §2, p. 10).
- **Los hechos simples** (*einfache Thatsachen*) que fijan la métrica: suma de ángulos, movilidad de los cuerpos, etc. Son «de certeza empírica», «no necesarios», «hipótesis». Su «probabilidad» dentro de los límites de observación es «muy grande», pero toda determinación métrica desde la experiencia «permanece siempre inexacta» (p. 10), porque los casos posibles (los valores de la curvatura) forman una multiplicidad continua.
- **Las proposiciones de la geometría**, que se siguen necesariamente de los hechos simples (p. 10: «de los que todas las proposiciones sobre ellas son consecuencia necesaria»), pero heredan su estatuto hipotético.

Consecuencias que el texto autoriza:

1. Los axiomas de Euclides no son verdades a priori sobre el espacio sino un «sistema de hechos» entre otros posibles, elegido porque es «el más importante para nuestro propósito» (p. 1). El problema de los fundamentos «por la naturaleza del caso no está completamente determinado».
2. La extensión de las hipótesis más allá de lo observable no es ilegítima pero sí asimétrica: hacia lo grande es ociosa para la física; hacia lo pequeño es decisiva y allí hay «plena libertad» de abandonar las hipótesis geométricas si eso simplifica la explicación (p. 11). El criterio es la simplicidad explicativa, no la evidencia intuitiva.
3. El papel de las «investigaciones a partir de nociones generales» (como la lección misma) es negativo y liberador: evitar que la física «sea entorpecida por visiones demasiado estrechas» y por «prejuicios tradicionales» (p. 12). Riemann no pretende deducir la física del concepto; pretende abrir el espacio de hipótesis.
4. Lo que no está en el texto: Riemann no habla de «convención» ni de «elección libre» de la geometría en el sentido posterior de Poincaré; su posición es empirista en cuanto a la métrica y conceptual en cuanto a la extensión. Marcar esto como lectura mía.

### 6b. Enfoque ontológico, lo continuo como determinable sin medida previa

Si se toma la parte I como una ontología regional de lo continuo (lectura mía, aunque el texto la sugiere al llamarse a sí mismo «de naturaleza filosófica», p. 2), sus tesis serían:

1. **Lo continuo no es primariamente cantidad.** Es un conjunto de modos de determinación (*Bestimmungsweisen*) entre los cuales hay transición continua. La cantidad (el «cuánto») es lo que resulta de medir, y medir requiere algo que la continuidad no contiene. Antes de la medida, lo continuo ya es «extenso» (tiene regiones, dimensión, bilateralidad del paso) y solo admite el «más o menos» por inclusión.
2. **La medida es exterior a lo continuo.** El patrón transportable, la independencia respecto de la posición, el elemento de línea: todo esto se añade como hipótesis. Lo continuo es «capaz de» (*fähig*) múltiples métricas, es decir, está métricamente indeterminado por concepto. Esta indeterminación es positiva: es lo que hace del espacio un caso entre muchos.
3. **Lo discreto lleva su medida consigo.** El número de elementos está dado con el concepto. Por eso la alternativa de III §3: si lo real es discreto, la métrica es interna; si es continuo, viene de las fuerzas.
4. **Hay continuos que exceden toda determinación finita.** Los espacios de funciones y de formas requieren infinitas determinaciones de cantidad (p. 4). Riemann reconoce así una continuidad no reducible a $n$ números, aunque siga siendo determinable por cantidades (infinitas).
5. **La diferencia entre continuos es métrica, y es «esencial».** Las «diferencias esenciales» (*wesentliche Verschiedenheiten*, p. 6) de los continuos, una vez descontadas las que nacen del modo de representación, son las que la curvatura mide. Dos superficies que se obtienen una de otra «sin estiramiento» son *gleichartig* (equivalentes, de la misma índole); la esfera es «esencialmente diferente» del plano. En Riemann, por tanto, «esencial» y «métrico» no se oponen; la diferencia esencial entre continuos *es* la diferencia de curvatura.

### 6c. Enfoque histórico (contexto, no texto de Riemann)

Lo que sigue es contexto que puedo afirmar con razonable seguridad; nada de ello está en la lección salvo las menciones explícitas a Gauss y Herbart.

- **Gauss.** Riemann cita las *Disquisitiones generales circa superficies curvas* (1827/1828), donde Gauss define la curvatura de una superficie y demuestra que es intrínseca (*theorema egregium*): la parte II es una generalización de ese programa a $n$ dimensiones. Cita también la segunda memoria sobre residuos bicuadráticos (1832), en cuyo comentario Gauss habla de la representación de los números complejos en el plano y de «multiplicidades» de dos dimensiones, y el escrito del jubileo doctoral (1849, sobre el teorema fundamental del álgebra). Riemann presenta estas referencias como «indicaciones muy breves» (p. 2). Que Gauss eligió el tema y asistió lo relata Dedekind (1876).
- **Herbart.** Riemann menciona «algunas investigaciones filosóficas de Herbart» (p. 2). En fragmentos de su legado (publicados en las *Werke*), Riemann se declara herbartiano en psicología y teoría del conocimiento, no en filosofía natural. En Herbart hay una construcción psicológica del espacio a partir de «formas seriales» (*Reihenformen*) de representaciones, y una concepción del concepto como algo que se forma por fusión y determinación; la idea de un concepto general que admite modos de determinación entre los cuales se puede transitar continuamente tiene aire herbartiano. No puedo precisar aquí qué textos de Herbart leyó Riemann; la bibliografía especializada (Scholz, 1982, sobre Herbart y Riemann) lo discute.
- **El término *Mannigfaltigkeit*.** No es acuñación de Riemann. Kant usa *das Mannigfaltige* (lo múltiple, lo diverso) para lo dado en la intuición; Gauss lo usa en los textos citados. La novedad de Riemann es la construcción de la multiplicidad $n$ veces extensa y la separación entre relaciones de extensión y relaciones métricas.
- **Recepción inmediata.** La lección se publicó en 1868. Ese mismo año Hermann von Helmholtz publicó «Ueber die Thatsachen, die der Geometrie zum Grunde liegen» (nótese el título: *hechos* donde Riemann puso *hipótesis*), en el que toma como fundamento la libre movilidad de los cuerpos rígidos y deduce de ella la forma cuadrática del elemento de línea que Riemann había postulado; es el origen del «problema del espacio» de Helmholtz y Lie. También en 1868 Eugenio Beltrami mostró que la geometría de Lobachevski y Bolyai es la geometría de las superficies de curvatura constante negativa, lo que conectó la lección de Riemann con las geometrías no euclidianas, que Riemann no menciona.
- **Clifford.** Además de traducirla (1873), Clifford propuso en «On the Space-Theory of Matter» (leído en 1870, publicado en 1876) que la materia y su movimiento son variaciones de la curvatura del espacio: una lectura literal de la pregunta final de Riemann.
- **Hacia Einstein.** El aparato analítico (tensor de curvatura, cálculo diferencial absoluto) lo desarrollaron Christoffel (1869), Ricci y Levi-Civita (1900). La relatividad general (1915) hace de una métrica pseudo-riemanniana de cuatro dimensiones, determinada por la distribución de materia-energía, la geometría del espacio-tiempo: la métrica «viene de fuera», de la física, en el sentido de la disyunción final de Riemann. Einstein reconoció la deuda con Riemann en varios lugares (por ejemplo, en «Geometrie und Erfahrung», 1921). Hermann Weyl editó la lección con comentario en 1919 (tercera edición, 1923), señalando esa continuidad.
- **Advertencia terminológica.** El concepto formal de «variedad diferenciable» (cartas, atlas) es posterior (Weyl 1913 para superficies; Veblen y Whitehead, 1931–1932; Whitney, 1936). Riemann no dispone de él; sus «multiplicidades» se describen por construcción y por reducción a $n$ cantidades, con los «casos de excepción» apartados.

---

## 7. Lo que Deleuze y Bergson toman y lo que transforman

**Aviso.** No he leído a Deleuze ni a Bergson para esta tarea; lo que sigue compara exclusivamente el texto de Riemann con la tesis que el doctorando me ha descrito (Bergson recoge la multiplicidad riemanniana y la convierte en una distinción cualitativa entre multiplicidad numérica/espacial y multiplicidad continua/de duración). Todo lo que sigue es análisis mío sobre el texto de Riemann.

### 7.1 Lo que en Riemann puede sostener esa lectura

1. **La dicotomía está en Riemann y es exhaustiva.** «Forman una multiplicidad continua o discreta» (p. 2). Hay exactamente dos tipos, definidos por la existencia o no de transición continua. Un lector que busque un dualismo de multiplicidades lo encuentra literalmente.

2. **La fórmula del fundamento interno/externo de la métrica.** «En una multiplicidad discreta el principio de sus relaciones métricas está contenido en el concepto de ella, mientras que en una continua debe venir de otra parte» (p. 11). Es la frase de Riemann que con más facilidad se deja leer como una distinción de naturaleza: una multiplicidad que lleva su medida en sí frente a otra que no la lleva. Y la cláusula sobre las «fuerzas de ligazón» permite leer que la métrica de lo continuo depende de algo que actúa sobre ello, no de su propia estructura.

3. **El «más o menos» sin el «cuánto».** Riemann admite un régimen de comparación de lo continuo anterior a toda medida, por inclusión de regiones, que solo decide el más y el menos (pp. 2–3), y una «parte de la teoría de la magnitud independiente de las determinaciones de medida» en la que las magnitudes son «regiones en una multiplicidad» (p. 3; cláusula omitida por Clifford). Aquí hay un continuo que no es aún cantidad. Un lector bergsoniano puede ver en esto la posibilidad de una multiplicidad continua sin número.

4. **Los colores.** Riemann pone los colores, junto a los lugares de los objetos sensibles, como los únicos conceptos simples cuyos modos de determinación forman una multiplicidad continua múltiplemente extensa (p. 2). Una cualidad sensible es, para Riemann, el ejemplo paradigmático (con el espacio) de multiplicidad continua. Esto da pie a pensar las cualidades como multiplicidades.

5. **Multiplicidades que no se reducen a un número finito de determinaciones.** Las formas posibles de una figura, las determinaciones posibles de una función (p. 4). Riemann reconoce continuos cuya determinación de posición exige «una multiplicidad continua de determinaciones de cantidad». Si se busca en Riemann un continuo inagotable por la enumeración, está aquí.

6. **Las «diferencias esenciales» frente a las de representación.** Riemann distingue las diferencias entre continuos que nacen del modo de representación (coordenadas) de las «esenciales» (p. 6). Hay en él una noción de diferencia intrínseca que no es diferencia de descripción.

7. **La asimetría epistémica.** Lo discreto (relaciones de extensión) se decide por experiencia con exactitud; lo continuo (métrica), nunca con exactitud (p. 10). Si se quiere, lo continuo es en Riemann lo que escapa a la determinación exacta.

### 7.2 Lo que en Riemann contradice o desborda esa lectura

1. **El espacio es, para Riemann, el paradigma de la multiplicidad continua.** Toda la lección trata del espacio como «caso particular de una magnitud triplemente extensa» continua. Si la lectura descrita opone una multiplicidad «numérica/espacial» a una «continua/de duración», está desplazando el espacio al lado opuesto de donde Riemann lo pone. En Riemann lo espacial no es lo discreto; lo discreto son colecciones de cosas bajo un concepto, que se cuentan. La «homogeneidad» que un bergsoniano asocia al espacio es, en Riemann, el postulado de homogeneidad (*gleichartig*) que funda el contar, es decir, lo *discreto* (p. 2). Para hacer del espacio el medio de lo numérico habría que leer «espacio» como espacio *métrico euclidiano con cuerpos rígidos*, es decir, el espacio ya provisto de las tres hipótesis de independencia (§4.4), y no como la multiplicidad que Riemann construye en la parte I.

2. **La multiplicidad continua es la que se mide.** La correlación de Riemann es explícita: discreto/contar, continuo/medir (p. 2). Lejos de resistirse a la medida, lo continuo es aquello cuya forma propia de comparación es la medida; lo que ocurre es que la medida no está contenida en su concepto y se añade. Toda la parte II es la teoría de cómo lo continuo *recibe* métricas. Una multiplicidad continua que por naturaleza no admitiera medida no es riemanniana. Si Bergson convierte la distinción en una oposición entre lo mensurable y lo inmensurable, invierte el contenido riemanniano: en Riemann lo continuo es lo *mensurable por hipótesis*, y lo que escapa a la medida no es un tipo de multiplicidad sino el *nivel* pre-métrico (relaciones de región) de cualquier multiplicidad continua, incluido el espacio.

3. **La «diferencia» de Riemann es de dimensión y de métrica, no de naturaleza.** Las multiplicidades continuas difieren entre sí (a) por el número de dimensiones, que es un dato discreto (los casos posibles de las relaciones de extensión «forman una multiplicidad discreta», p. 10), y (b) por sus relaciones métricas (curvatura). No hay en el texto una tercera clase de diferencia. Cuando Riemann habla de diferencias «esenciales» (p. 6) o de superficies «esencialmente diferentes» (p. 8), se refiere a diferencias de curvatura: la esfera es esencialmente distinta del plano porque no se puede desplegar sin estiramiento. Lo «esencial» es métrico. Una lectura que oponga diferencia de grado (cantidad) a diferencia de naturaleza (cualidad) no encuentra apoyo en la articulación riemanniana, donde la diferencia esencial entre continuos *es* una diferencia de cantidades (las $\tfrac{1}{2}n(n-1)$ funciones intrínsecas).

4. **El «verdadero carácter» de la multiplicidad continua es la reducibilidad a n determinaciones de cantidad.** Riemann lo dice dos veces (pp. 3–4). Lo que define una multiplicidad $n$ veces extensa es que un punto se fija con $n$ números. Esto es lo opuesto de una multiplicidad cuyos elementos no se dejan yuxtaponer ni numerar. Incluso las multiplicidades de infinitas dimensiones se definen por «determinaciones de cantidad», aunque infinitas. En Riemann no hay multiplicidad sin determinabilidad cuantitativa de la posición; la cuestión es solo si la determinación es finita o infinita, y si además hay métrica.

5. **La división de una multiplicidad continua no cambia su naturaleza.** En §3, al descomponer una multiplicidad por conjuntos de nivel de una función, se obtienen multiplicidades continuas de menos dimensiones, del mismo tipo (p. 4). Dividir lo continuo riemanniano da continuos. Si la lectura bergsoniana sostiene que la multiplicidad continua «cambia de naturaleza al dividirse», esto no proviene de Riemann; en Riemann la división (por conjuntos de nivel, o en cuantos por «marca o límite») es una operación regular que conserva el tipo.

6. **El carácter conceptual, no vivido, de la multiplicidad.** La multiplicidad es el conjunto de modos de determinación de *un concepto general* (p. 2), o la variabilidad de un objeto bajo ese concepto. Es una estructura lógica de la determinabilidad. El texto no habla de experiencia interna, de sucesión ni de tiempo; «lugares de objetos sensibles» y «colores» son conceptos con modos de determinación, no vivencias. Trasladar la noción a la duración es una transposición que Riemann no prepara ni excluye; simplemente no está en su horizonte.

7. **La disyunción final no es una tesis sobre lo continuo en general.** Riemann no dice que toda multiplicidad continua reciba su métrica de fuerzas; dice que en una multiplicidad continua la métrica «viene de otra parte» (puede ser de una hipótesis libre, como en toda la parte II), y que *en el caso del espacio físico* esa otra parte sería «fuerzas de ligazón», *si* lo real no es discreto. Leer la frase como «las multiplicidades continuas encuentran su principio métrico en las fuerzas que actúan sobre ellas» generaliza una alternativa física a una ontología de lo continuo.

8. **La asimetría epistémica favorece a lo discreto, no a lo continuo.** Lo discreto se conoce con exactitud; lo continuo, siempre con inexactitud (p. 10). Riemann extrae de ello una consecuencia sobre la *extrapolación* (hacia lo pequeño las hipótesis métricas pueden fallar), no una tesis sobre una riqueza de lo continuo que la medida no alcanza.

### 7.3 Lo que Riemann permite decir con precisión

En resumen, el texto autoriza a decir: que Riemann distingue dos tipos de multiplicidad por el criterio de la transición continua; que lo continuo no contiene su métrica y lo discreto sí; que hay un régimen pre-métrico de lo continuo (regiones, más o menos); que los colores y los lugares son los ejemplos simples de lo continuo; que la métrica del espacio físico es hipotética y podría venir de fuerzas. No autoriza a decir: que lo continuo se oponga a la medida; que el espacio sea del lado de lo discreto; que haya en Riemann una diferencia de naturaleza distinta de la de dimensión y de métrica; que dividir una multiplicidad continua altere su tipo. Si Bergson, según Deleuze, transforma la distinción en cualitativa, lo que transforma es precisamente la correlación continuo/medida y el lugar del espacio; conviene que la ponencia lo diga como transformación, no como herencia.

---

## 8. Glosario

Términos en alemán (texto de 1868), inglés (Clifford, 1873) y español (propuesta mía), con la definición o el uso en el texto y la página.

| Alemán | Clifford | Español | Definición o uso en el texto |
|---|---|---|---|
| *Mannigfaltigkeit* | manifoldness (una vez: aggregates, p. 8) | multiplicidad (en matemáticas: variedad) | Conjunto de los modos de determinación de una noción general; continua o discreta según haya o no transición continua entre ellos (p. 2). |
| *stetige / discrete Mannigfaltigkeit* | continuous / discrete manifoldness | multiplicidad continua / discreta | Idem; sus modos de determinación se llaman puntos / elementos (p. 2). |
| *Bestimmungsweise* | specialisation | modo de determinación | Cada manera en que una noción general se determina; los «puntos» o «elementos» de la multiplicidad (p. 2). |
| *Begriff* / *allgemeiner Begriff* | notion / general notion | noción, concepto general | Lo antecedente que admite modos de determinación; condición de toda noción de magnitud (p. 2). |
| *Grösse* | magnitude, quantity | magnitud | Lo que resulta de la comparación de cuantos; las *Grössenbegriffe* (nociones de magnitud) presuponen una multiplicidad (p. 2). |
| *ausgedehnte Grösse*; *mehrfach / n fach ausgedehnte Grösse* | extended magnitude; multiply / n-ply extended magnitude | magnitud extensa; múltiplemente / n veces extensa | Magnitud cuyos modos de determinación forman una multiplicidad continua de varias dimensiones; el espacio es un caso de magnitud triplemente extensa (p. 1). |
| *Ausdehnung*; *n fache Ausdehnung* | extent; n-fold extent | extensión; extensión n-ple | Su «verdadero carácter» es la reducibilidad de la posición a n determinaciones de cantidad (pp. 3–4). |
| *Quanta* | Quanta | cuantos | Porciones definidas de una multiplicidad, distinguidas por una marca o un límite (p. 2). |
| *Zählung* / *Messung* | counting / measuring | contar / medir | Comparación de cuantos en lo discreto / en lo continuo (p. 2). |
| *Massstab fortzutragen* | using one magnitude as the standard for another | transportar una magnitud como patrón | Condición de la medida (superposición); si falta, solo cabe el «más o menos» (pp. 2–3). |
| *Gebiet*; *Gebietsverhältnisse* | region; region-relations (también «partition», p. 10) | región; relaciones de región | Parte de la teoría de la magnitud independiente de la medida; las magnitudes como regiones en una multiplicidad (p. 3; Sinopsis, p. 13). |
| *Ausdehnungsverhältnisse* | relations of extension (extensive relations) | relaciones de extensión | Distinguidas de las relaciones métricas; sus casos posibles forman una multiplicidad discreta (p. 10). |
| *Massverhältnisse* | measure-relations; metric relations; size-relations (p. 13) | relaciones métricas, relaciones de medida | Aquellas de las que una multiplicidad «es capaz» bajo hipótesis de independencia respecto de la posición (pp. 1, 4). |
| *Massbestimmungen* | measure-determinations | determinaciones de medida | Requieren independencia de la cantidad respecto de la posición (p. 4). |
| *Ortsbestimmung* / *Lage* / *Ort* | determination of position, place-fixing / position / place | determinación de lugar / posición / lugar | Reducible a n determinaciones de cantidad (pp. 3–4). |
| *Grössenbestimmung*, *Quantitätsbestimmung* | determination of quantity (magnitude) | determinación de cantidad | Los n valores que fijan un punto (p. 4). |
| *Veränderlichkeit* | variability | variabilidad | Vocabulario alternativo al del concepto: variabilidad de n dimensiones (p. 3). |
| *Dimension* | dimension | dimensión | Número de determinaciones de cantidad necesarias (pp. 3–4). |
| *Linienelement* (ds) | linear element, line-element | elemento de línea | Expresión general de la longitud infinitesimal en cada punto; raíz de una forma cuadrática (p. 5). |
| *eben*; *Ebenheit in den kleinsten Theilen* | flat; flatness in the smallest parts | plana; planitud en las partes más pequeñas | $ds^2$ reducible a suma de cuadrados (p. 6); desviación de la planitud de cuarto orden (p. 7). |
| *kürzeste Linie* | shortest line, geodesic | línea más corta, geodésica | Determinada por su dirección inicial (p. 8). |
| *Flächenrichtung* | surface-direction | dirección de superficie | 2-plano en un punto; la curvatura depende del punto y de ella (p. 7). |
| *Krümmungsmass*; *Krümmung* | total curvature; curvature | medida de curvatura; curvatura | Desviación de la planitud; por $-3/4$, la curvatura de Gauss (p. 7). |
| *Biegung ohne Dehnung* | bending without stretching | flexión sin estiramiento | Deformación que conserva las longitudes; criterio de equivalencia intrínseca (pp. 7–8). |
| *gleichartig* | equivalent | homogéneo, de la misma índole | Postulado del contar (p. 2); superficies equivalentes por flexión (p. 7). |
| *wesentliche Verschiedenheiten* | true varieties | diferencias esenciales | Las que no provienen del modo de representación (p. 6). |
| *Unbegrenztheit* / *Unendlichkeit* | unboundedness / infinite extent | ilimitación / infinitud | Relación de extensión / relación métrica (p. 10). |
| *Unmessbargross*, *Unmessbarklein* | infinitely great, infinitely small | inmensurablemente grande, pequeño | Más allá de los límites de la observación (pp. 2, 10, 11). |
| *Unendlichkleine* | infinitely small | infinitamente pequeño | Donde las nociones de cuerpo sólido y rayo de luz pierden validez (p. 11). |
| *Hypothesen* / *Thatsachen* / *Voraussetzungen* | hypotheses / matters of fact / assumptions | hipótesis / hechos / supuestos | Los hechos que fijan la métrica son hipótesis: de certeza empírica, no necesarios (pp. 1–2). |
| *Nominaldefinitionen* | definitions merely nominal | definiciones nominales | Lo que la geometría da del espacio (p. 1). |
| *das dem Raume zu Grunde liegende Wirkliche* | the reality which underlies space | lo real que subyace al espacio | Discreto, o con métrica fundada en fuerzas (p. 11). |
| *bindende Kräfte* | binding forces | fuerzas de ligazón, fuerzas ligantes | Fundamento externo posible de la métrica del espacio (p. 11). |
| *innerer Grund*; *Princip* | ground; ground | fundamento interno; principio | De las relaciones métricas: interno en lo discreto, externo en lo continuo (p. 11). |
| *fester Körper*, *Lichtstrahl* | solid body, ray of light | cuerpo sólido, rayo de luz | Nociones empíricas en que se funda la métrica del espacio (p. 11). |

---

## 9. Pasajes clave

Diez pasajes en mi traducción, con el inglés de Clifford debajo, página y comentario.

**1. El programa (Plan, p. 1).**
> «La razón de ello es sin duda que la noción general de magnitudes múltiplemente extensas (en las que están incluidas las magnitudes espaciales) permaneció enteramente sin elaborar. […] Se seguirá de ello que una magnitud múltiplemente extensa es capaz de diferentes relaciones métricas y, en consecuencia, que el espacio es solo un caso particular de una magnitud triplemente extensa.»
> [The reason of this is doubtless that the general notion of multiply extended magnitudes (in which space-magnitudes are included) remained entirely unworked. … It will follow from this that a multiply extended magnitude is capable of different measure-relations, and consequently that space is only a particular case of a triply extended magnitude.]

Comentario: «capaz de» (*fähig*) es la palabra que separa la multiplicidad de la métrica; «solo un caso particular» destrona al espacio como fuente del concepto.

**2. Hipótesis (Plan, pp. 1–2).**
> «Estos hechos son —como todos los hechos— no necesarios, sino solo de certeza empírica; son hipótesis.»
> [These matters of fact are—like all matters of fact—not necessary, but only of empirical certainty; they are hypotheses.]

Comentario: la tesis epistemológica en una frase. «Como todos los hechos»: la geometría métrica queda en pie de igualdad con la física.

**3. Definición de multiplicidad (I §1, p. 2).**
> «Las nociones de magnitud solo son posibles donde hay una noción general antecedente que admite diferentes modos de determinación [Clifford: specialisations]. Según exista o no entre estos modos de determinación un camino continuo de uno a otro, forman una multiplicidad continua o discreta; los modos individuales se llaman, en el primer caso, puntos, y en el segundo, elementos de la multiplicidad.»
> [Magnitude-notions are only possible where there is an antecedent general notion which admits of different specialisations. According as there exists among these specialisations a continuous path from one to another or not, they form a continuous or discrete manifoldness; the individual specialisations are called in the first case points, in the second case elements, of the manifoldness.]

Comentario: aquí traduzco *Bestimmungsweisen* por «modos de determinación» en lugar de seguir a Clifford, porque el término importa. La multiplicidad es el conjunto de modos de determinación de un concepto, y el criterio es la transición continua.

**4. Colores y lugares (I §1, p. 2).**
> «…tan escasas son las ocasiones de formar nociones cuyos modos de determinación constituyan una multiplicidad continua, que las únicas nociones simples cuyos modos de determinación forman una multiplicidad múltiplemente extensa son los lugares de los objetos sensibles y los colores.»
> […so few and far between are the occasions for forming notions whose specialisations make up a continuous manifoldness, that the only simple notions whose specialisations form a multiply extended manifoldness are the positions of perceived objects and colours.]

Comentario: el único lugar donde Riemann da ejemplos no matemáticos de multiplicidad continua. El alemán añade «en la vida común» y «probablemente» (*wohl*).

**5. Contar, medir, el más o menos (I §1, pp. 2–3).**
> «Su comparación en cuanto a la cantidad se efectúa, en el caso de las magnitudes discretas, contando; en el de las continuas, midiendo. La medida consiste en la superposición de las magnitudes que han de compararse; requiere por tanto un medio de usar una magnitud como patrón de otra. A falta de él, dos magnitudes solo pueden compararse cuando una es parte de la otra; y en tal caso también solo podemos determinar el más o el menos, y no el cuánto.»
> [Their comparison with regard to quantity is accomplished in the case of discrete magnitudes by counting, in the case of continuous magnitudes by measuring. Measure consists in the superposition of the magnitudes to be compared; it therefore requires a means of using one magnitude as the standard for another. In the absence of this, two magnitudes can only be compared when one is a part of the other; in which case also we can only determine the more or less and not the how much.]

Comentario: la correlación continuo/medir y la condición externa de la medida (el patrón transportable). El «más o menos» sin «cuánto» es el régimen pre-métrico de lo continuo.

**6. Regiones en una multiplicidad (I §1, p. 3).**
> «…una división general de la ciencia de la magnitud [al.: independiente de las determinaciones de medida] en la que las magnitudes se consideran no como existentes independientemente de la posición ni como expresables mediante una unidad, sino como regiones en una multiplicidad. […] esta parte general de la ciencia de la magnitud extensa, en la que no se presupone nada sino lo que está contenido en su noción.»
> […a general division of the science of magnitude in which magnitudes are regarded not as existing independently of position and not as expressible in terms of a unit, but as regions in a manifoldness. … this general part of the science of extended magnitude in which nothing is assumed but what is contained in the notion of it.]

Comentario: la base textual de la tesis de que la métrica no está en la noción. Clifford omite la cláusula alemana «independiente de las determinaciones de medida» (*von Massbestimmungen unabhängigen*).

**7. El verdadero carácter de la extensión n-ple (I §3, p. 4).**
> «Repitiendo entonces esta operación n veces, la determinación de posición en una multiplicidad n veces extensa queda reducida a n determinaciones de cantidad […] cuando esto es posible. Hay multiplicidades en las que la determinación de posición requiere no un número finito, sino o bien una serie infinita o bien una multiplicidad continua de determinaciones de cantidad.»
> [By repeating then this operation n times, the determination of position in an n-ply extended manifoldness is reduced to n determinations of quantity … when this is possible. There are manifoldnesses in which the determination of position requires not a finite number, but either an endless series or a continuous manifoldness of determinations of quantity.]

Comentario: la dimensión como número de cantidades que fijan un punto; y la admisión de continuos de infinitas dimensiones.

**8. La hipótesis métrica (II §1, pp. 4–5).**
> «Las determinaciones de medida requieren que la cantidad sea independiente de la posición, lo cual puede ocurrir de varias maneras. La hipótesis que primero se presenta, y que desarrollaré aquí, es aquella según la cual la longitud de las líneas es independiente de su posición, y en consecuencia toda línea es medible por medio de cualquier otra.»
> [Measure-determinations require that quantity should be independent of position, which may happen in various ways. The hypothesis which first presents itself, and which I shall here develop, is that according to which the length of lines is independent of their position, and consequently every line is measurable by means of every other.]

Comentario: lo que se añade a la multiplicidad para que haya métrica, y su carácter de hipótesis elegida entre varias.

**9. Ilimitado e infinito (III §2, p. 10).**
> «…debemos distinguir entre ilimitación y extensión infinita; la primera pertenece a las relaciones de extensión, la segunda a las relaciones métricas. […] La ilimitación del espacio posee de este modo una certeza empírica mayor que cualquier experiencia externa. Pero su extensión infinita en modo alguno se sigue de ello.»
> […we must distinguish between unboundedness and infinite extent, the former belongs to the extent relations, the latter to the measure-relations. … The unboundedness of space possesses in this way a greater empirical certainty than any external experience. But its infinite extent by no means follows from this.]

Comentario: la distinción extensión/métrica aplicada al espacio físico; la ilimitación es del orden de la región, la infinitud del orden de la medida.

**10. El fundamento de la métrica (III §3, p. 11).**
> «…en una multiplicidad discreta el fundamento [al. *Princip*] de sus relaciones métricas está dado en la noción de ella, mientras que en una multiplicidad continua este fundamento debe venir de fuera. O bien, por tanto, la realidad que subyace al espacio debe formar una multiplicidad discreta, o bien debemos buscar el fundamento de sus relaciones métricas fuera de ella, en fuerzas de ligazón que actúan sobre ella.»
> [in a discrete manifoldness, the ground of its metric relations is given in the notion of it, while in a continuous manifoldness, this ground must come from outside. Either therefore the reality which underlies space must form a discrete manifoldness, or we must seek the ground of its metric relations outside it, in binding forces which act upon it.]

Comentario: el pasaje que con más probabilidad está detrás de la lectura de Deleuze. Nótese la estructura: principio general (discreto/continuo) y disyunción aplicada al espacio físico, remitida a la física. Alemán: *innerer Grund* (fundamento interno) en la frase anterior; *bindenden* (transcripción EMIS: «bindenen», errata).

---

## 10. Preguntas abiertas y advertencias para un uso filosófico

1. **La multiplicidad riemanniana es una estructura de la determinabilidad conceptual, no una ontología de cosas.** Riemann habla de «nociones» y sus «modos de determinación». Trasladarla a la duración, a la vida o a la materia exige un paso que el texto no da. Conviene declarar ese paso.

2. **El criterio continuo/discreto es único y no cualitativo.** No hay en Riemann una multiplicidad «heterogénea» frente a una «homogénea»; hay transición continua o no. Lo «homogéneo» (*gleichartig*) aparece en Riemann como postulado del *contar*, es decir, del lado discreto, y como equivalencia por flexión del lado métrico. Hay que vigilar que la ponencia no atribuya a Riemann la homogeneidad del espacio como rasgo definitorio de lo continuo.

3. **Lo continuo se mide.** La frase «lo continuo es lo que no se cuenta sino que se mide» es riemanniana; «lo continuo es lo que no se mide» no lo es. La tesis de Riemann es que la medida de lo continuo no está en su concepto y se añade por hipótesis. Entre «no contener la métrica» y «resistir la métrica» hay toda la distancia entre Riemann y una lectura cualitativa.

4. **El lugar del espacio.** En Riemann el espacio es la multiplicidad continua por excelencia (con los colores). Cualquier esquema que coloque el espacio del lado de lo discreto o de lo numérico está hablando del espacio euclidiano con cuerpos rígidos (las tres hipótesis de independencia), no de la multiplicidad de la parte I. Es legítimo, pero debe decirse.

5. **La diferencia es de dimensión y de métrica.** Riemann no dispone de otra. La dimensión es un dato discreto y exacto; la métrica es un dato continuo e inexacto. Las «diferencias esenciales» entre continuos son métricas. Si se quiere hablar en Riemann de «diferencia de naturaleza», la única candidata es la diferencia continuo/discreto misma, que no es una diferencia *entre continuos*.

6. **Dividir no transforma.** Las operaciones de división en Riemann (cuantos por marca o límite; conjuntos de nivel) producen partes del mismo tipo. No hay base riemanniana para una multiplicidad que cambie de naturaleza al dividirse.

7. **La frase de las fuerzas es una disyunción condicionada al espacio físico.** No generalizarla a «toda multiplicidad continua recibe su métrica de fuerzas». Riemann la remite expresamente a la física y a la revisión de la concepción newtoniana.

8. **Vocabulario de Clifford.** «Specialisations» por *Bestimmungsweisen*; «infinitely» por *unmessbar*; omisión de «independiente de las determinaciones de medida» (p. 3) y de «interno» (*innern Grunde*, p. 11); «aggregates» por *Mannigfaltigkeiten* (p. 8); «partition» por *Gebiet* (p. 10). Al citar en español conviene cotejar siempre con el alemán, como se ha hecho aquí.

9. **Lo que Riemann no dice.** No menciona las geometrías no euclidianas de Lobachevski y Bolyai; no habla de «topología» ni de «variedad» en sentido moderno; no da el tensor de curvatura; no escribe «coordenadas» en la parte I; no habla de tiempo ni de sucesión; no habla de «intensidad» ni de «cualidad» salvo el ejemplo de los colores. Cualquier afirmación de la ponencia que necesite alguno de estos conceptos debe atribuirse a otro autor.

10. **El carácter oral y abreviado.** La propia edición advierte que lo analítico solo está «insinuado». Varios enunciados de la parte II (la suficiencia de las $\tfrac{1}{2}n(n-1)$ curvaturas; el paso de isotropía a constancia) son afirmaciones sin demostración, verdaderas con matices que la matemática posterior precisó. No hay que tomarlas como teoremas enunciados con todo rigor.

11. **Preguntas abiertas que el texto deja y que una ponencia puede explotar.** (a) ¿Es el régimen pre-métrico de lo continuo (regiones, «más o menos») un candidato riemanniano para pensar una multiplicidad sin número, y en qué difiere de la que Bergson necesita? (b) ¿Qué estatuto tienen los colores como multiplicidad continua: admiten o no una métrica «añadida» en el sentido de Riemann? El texto no lo decide. (c) ¿Qué significa que lo real que subyace al espacio pueda ser discreto? Riemann distingue el espacio (concepto) de lo real (sustrato); esta distinción es más fina que la oposición espacio/duración. (d) La asimetría epistémica (exactitud de lo discreto, inexactitud de lo continuo) invierte la jerarquía que una lectura vitalista podría esperar: ¿cómo se compone con la tesis de que lo continuo es lo más rico? (e) Riemann admite multiplicidades continuas de dimensión infinita (formas, funciones): ¿es ese, y no el continuo de n dimensiones, el pariente riemanniano más próximo de una multiplicidad «virtual» inagotable?
