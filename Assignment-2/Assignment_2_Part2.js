var memory = [];

document.getElementById("add_cell").onclick = function(){
    const cells =  document.getElementById("cells");
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = cells.children.length;
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");
    col3.innerText = 0;
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    let input = document.createElement("input");
    input.id = cells.children.length;
    input.style = "width:99.5%";
    input.oninput = function(e){
        let change_id = parseInt(e.target.id);
        const cells =  document.getElementById("cells").children;
        cells[change_id].children[2].innerText = e.target.value.length;
    };
    if(memory.length>0){
        input.value = memory.pop();
        col3.innerText = input.value.length;
    }
    col2.appendChild(input);
    cells.appendChild(row);
}

document.getElementById("sort").onclick = function(){
    const cells =  document.getElementById("cells");
    let strs = [];
    for(let i =1;i<cells.children.length;i++){
        let str = cells.children[i].children[1].children[0].value;
        if(str.length>0){
            strs.push(str);
        }
    }
    strs.sort();
    for(let i =0;i<cells.children.length;i++){
        if(i<strs.length){
            cells.children[i+1].children[1].children[0].value = strs[i];
            cells.children[i+1].children[2].innerText = strs[i].length;
        }
        else{
            cells.children[i+1].children[1].children[0].value = "";
            cells.children[i+1].children[2].innerText = 0;
        }
        
    }
}

document.getElementById("rm_cell").onclick = function(){
    const cells = document.getElementById("cells").childNodes
    if(cells.length===3){
        alert("Cannot remove any more cells!");
        return;
    }
    let last = cells[cells.length-1]
    if(last.children[1].children[0].value.length>0){
        memory.push(last.children[1].children[0].value);
    }   
    last.remove();
}

document.getElementById("back").onclick = function(){
	window.location.href = "Assignments.html";
}

document.getElementById("add_cell").onclick();