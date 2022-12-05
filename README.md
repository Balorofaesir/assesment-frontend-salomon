# Assesment-Frontend


El objetivo de esta misión es poner en práctica lo que has aprendido en el programa. Los temas que se cubrirán son: Scrum, Git, HTML y CSS, JavaScript y React.

La misión consta de dos partes: primero deberás construir un proyecto en React y después deberás responder una serie de preguntas. En el reporte de la misión deberás agregar el link al repositorio del proyecto y las respuestas a las preguntas.
<h1></h1>

<h1>Respuestas a las preguntas</h1>

<h1>¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?</h1>
Sprint planing.

- El Sprint Planning al comienzo del Sprint: define lo que se debe realizar en el sprint.
- Daily Scrums a diario: para ver como va el proyecto a diario.
- Un Sprint Review al final del Sprint para inspeccionar el incremento realizado de ese periodo.
- Retrospectiva para inspeccionar el equipo y levantar mejoras que se apliquen en el siguiente Sprint.


<h1>¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.</h1>


- es una estructura visual que representa el esqueleto de una pagina web o aplicación, es algo así como un esquema.

<h1>Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.</h1>

- var: variable que no tiene una limitación scope, toma todo el codigo global uncluso afectando el codigo fuera de la función o cualquier alcance global.

- let: variable con limitación scope, solo afecta lo que esté dentro de la función o la limitación del scope.

- const: son constantes, por lo cual modificar su valor es mucho mas limitado y no se modifican con la misma facilidad de las variables, el identificador de la variable no puede ser reasignado.

<h1>Explicar la diferencia entre git merge y git rebase.</h1>

- El merge es una opción "segura" en el sentido que no borra el historial de commits y crea un nuevo commit, el rebase borra el historial de commits e incluso no es necesario un nuevo commit para realizarlo.

<h1>¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?</h1>

- Git pull permite extraer o descargar un repositorio remoto, al contrario el pull request lo que intenta es fusionar o hacer merge entre dos ramas del proyecto en git.

- Una Pull Request es la acción de git de validar un código con el fin de realizar merge de una rama a otra.

<h1>¿Qué es el Virtual DOM?</h1>

- Es una versión documental de una apicación web donde se actualiza cada vez que es necesario en relación a los eventos o estados de la aplicación

<h1>Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta.</h1>


<h1>Respuesta: Codigo</h1>

body{
  display:flex;
  justify-content:center;
}
.c-section{
    background-color: rgb(255, 255, 255);
    max-width: 800px;
    height: 600px;
}

.c-section__title{
    background-color: grey;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
}

.c-services{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 0;
}

.c-services__item{
    background-color: rgb(230, 230, 230);
    width: 350px;
    height: 150px;
    list-style:none;

}

.c-services__item:hover{
    box-shadow: 10px 10px 10px -10px;
    
}

h3{
    text-align: center;
}
