var array=[];
var idName = 0;
var listId='';
var boardId='';
var projectListObject = [
    {
        name: 'Javascript One'
    },
    {
        name: 'Javascript Two'
    }
];



function showProject(listId){

    projectListObject.forEach(function(value,index){
        var template = '<div class ="project-card">'+
        value.name+ 
        '<ul>'+
            '<li class="taskList">Task one</li>'+
            '<li class="taskList">Task two</li>'+
        '</ul>'+
        '</div>';
       
            document.getElementById(listId).innerHTML += template;
    })
}
    

function toggleMenu() {
    var toggleVariable = document.getElementsByClassName('menu-block')[0];
    if(toggleVariable.style.display == 'none') {
        toggleVariable.style.display = '';
    }else {
        toggleVariable.style.display = 'none'
    }
}

function removeCard(value1){
    console.log(value1.id);
    document.getElementById(value1.id).style.display='none';
}

function addBoard(id){
    if (id.value.length < 5) {
        alert("Board name can't be less than five characters!");
        return;
      } else {
    idName++;
     listId = 'projectList_'+idName;
     boardId = 'board_'+idName; 
    var templateBlock = '<section class ="board-block" id ='+boardId+'>'+
    '<div class="board-name">'+id.value+'<button id ="removeBoards" onclick="removeCard('+boardId+')">Remove Card</button></div>'+
    '<div class="project-block" id ='+listId+'>'+
    '</div>'+
    '</section>'
   
    document.getElementById('boardBlockList').innerHTML += templateBlock;
    showProject(listId);
    document.getElementById('menuList').innerHTML +='<li onclick="loadMenu('+boardId+')">'+id.value+'</li>';
    alert("Board name" + id.value + " added!");
    id.value=id.defaultValue;//setting doms's value back to default value
    
      }
}
//note here: if boardId passed as argument in this method. Be careful about argument variable names
function loadMenu(value){
    
array.push(value.id); //stores all the board-Id'
console.log(value.id);
document.getElementById(value.id).style.display = 'block';
for (var i=0;i<array.length;i++){
    if (array[i]!=value.id){
     document.getElementById(array[i]).style.display = 'none';   
    }
}
}

// DOM Manipulation=dynamic manipulation of html element