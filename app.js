const loadBtn = document.querySelector(".btn");
var data;
const content = document.querySelector(".table");

// col is an array to store keys (used as table headers in table)
let col = [];

// fetching data from json
fetch("./data.json")
    .then((response) => response.json())
    .then((Data) => data = Data)


loadBtn.addEventListener('click',showTable);

function showTable() {

    if(loadBtn.textContent === 'Load Data')
    {
        loadBtn.textContent = 'Refresh Data';
    }

    for (let i = 0; i < data.length; i++) {

        for (let key in data[i]) {
            
            // to avoid duplicate keys in col
            if (col.indexOf(key) === -1) {
                col.push(key);
            } 
        }
    }
    
    let table = document.createElement('table');
    //inserting row at last
    let tr = table.insertRow(-1);

    for(let i=0; i< col.length;i++)
    {
        let th = tr.insertCell(i);
        th.textContent = col[i];
    }
    //Last Column
    th = tr.insertCell(-1);
    th.textContent = "Edit/Delete";
     
    //Fill data in table

    for(let i=0; i< data.length;i++)
    {
        tr = table.insertRow(-1);
        for(let j = 0;j<col.length;j++)
        {
            let td = tr.insertCell(-1);
            td.innerHTML = data[i][col[j]];
        }
        td = tr.insertCell(-1);
        let editBtn = document.createElement('button');
        editBtn.textContent = "Edit";
        editBtn.classList.add('edit');
        editBtn.addEventListener('click',editData)
        let dltBtn = document.createElement('button');
        dltBtn.textContent = "Delete";
        dltBtn.classList.add('delete');
        dltBtn.addEventListener('click',deleteData)
        td.append(editBtn);
        td.append(dltBtn);

    }
    
    //appending table in html
    content.innerHTML = "";
    content.append(table);

}

function editData(event)
{
    tr = event.target.parentElement.parentElement;
    console.log(tr);
    console.log(tr.children.length);
  if(event.target.innerHTML == "Edit")
  {
    event.target.innerHTML = "Save";
    event.target.nextElementSibling.innerHTML = "Cancel";
    tr.contentEditable = true;
    //last column should not be editable.
    event.target.contentEditable = false;
  }
  else if(event.target.innerHTML == "Save")
  {
    tr.contentEditable = false;
    let index = tr.rowIndex;
    //changing the data accordingly
    for(let i=0; i<tr.children.length-1;i++)
    {
      data[index-1][col[i]] = tr.children[i].innerHTML;
    }
    event.target.innerHTML = "Edit";
    event.target.nextElementSibling.innerHTML = "Delete";
  }
    
}

function deleteData(event)
{
  tr = event.target.parentElement.parentElement;
  if(event.target.innerHTML == "Delete")
  {
    index = tr.rowIndex;
    //deleting the row
    data.splice(index-1,1);
    tr.remove();
  }
  else if(event.target.innerHTML == "Cancel")
  {
    tr.contentEditable = false;
    event.target.innerHTML = "Delete";
    event.target.previousElementSibling.innerHTML = "Edit";
    showTable();
  }
  
}