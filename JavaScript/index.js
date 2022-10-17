
//DESAFIO CADASTROS DEVs

function createLabel(text, htmlFor){
    const label = document.createElement('label');
    label.htmlFor = htmlFor;
    label.innerText = text;
    return label    
}

function createInput(id,value, name, type ='text', placeholder ){
    var campTec =  document.createElement('input');
    campTec.id = id;
    campTec.value = value;
    campTec.name = name;
    campTec.type = type;
    campTec.placeholder = placeholder;
    return campTec;


}

const formDevs = document.getElementById("formularios");
const btn = document.getElementById("addAcao");

const developers = [];
let inputRows = 0

btn.addEventListener('click', function(ev){
    const tecno = document.getElementById("addTecno");

    var newRow = document.createElement('div');
    var rowIndex = inputRows;
    inputRows++
    newRow.id = 'inputRow-' + rowIndex;
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('TECNOLOGIAS \n', ' techName-' + rowIndex);
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName');

    const expLabel = createLabel('\n\nEXPERIENCIA: \n');
    var id1 = 'expRadio-' + rowIndex + ' .1'
    const expRadio1 = createInput( id1,' 0-2 anos ',  ' techExp- ' + rowIndex, 'radio', '\n' );
    const expLabel1 = createLabel(' 0-2 anos ', id1, )

    var id2 = 'expRadio-' + rowIndex + ' .2'
    const expRadio2 = createInput( id2,'3-4 anos ',  ' techExp- ' + rowIndex, 'radio' );
    const expLabel2 = createLabel(' 3-4 anos ', id2)

    var id3 = 'expRadio-' + rowIndex + ' .3'
    const expRadio3 = createInput( id3,' 5 ou + anos ',  ' techExp- ' + rowIndex, 'radio' );
    const expLabel3 = createLabel(' 5 ou + anos ', id3 )

    const removeRows = document.createElement('button');
    removeRows.type = 'button';
    removeRows.innerHTML = "REMOVER";
    removeRows.addEventListener('click', function(){
        tecno.removeChild(rows)
    })

    

    newRow.append(techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expRadio3, expLabel3, removeRows)
    tecno.appendChild(newRow)

})

formDevs.addEventListener('submit', function(ev){
    ev.preventDefault();

    const fullName = document.getElementById('nomeCompleto');
    const inputRows = document.querySelectorAll('.inputRow');

    var technologies = []
    inputRows.forEach(function (row){
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value;
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value;
        technologies.push({ name: techName, exp: techExp})
    })

    const newDev =  {
        fullname: fullName.value,
        technologies: technologies
    }
    developers.push(newDev)

    alert(`Dev Cadastrado com Sucesso!`);

    fullName.value = '';
    inputRows.forEach(function (row){
        row.remove();
    })

    console.log(developers)
})




    
    





    
    




