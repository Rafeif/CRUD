let firstName=document.getElementById('firstName');
let lastName=document.getElementById('lastName');
let adress=document.getElementById('adress');
let phoneNumber=document.getElementById('phoneNumber');
let addNew=document.getElementById('addNew');
let clearData=document.getElementById('clearData');
let deleteAll=document.getElementById('deleteAll');
let information=document.getElementById('information');
let search=document.getElementById('search');
let alertdanger=document.getElementById('ops')
let alertprimary=document.getElementById('ops2')

var clients;
if (localStorage.getItem('clients list')==null){
clients=[];
}else{
clients=JSON.parse(localStorage.getItem('clients list'));
}
displayData();
addNew.addEventListener('click',function(){
    if (addNew.innerHTML=='<i class="fa-solid fa-plus"></i> Add New'){
        if(firstName.value!==null && lastName.value!==null && phoneNumber.value!==null){
    addClient();}
    else{addNew.setAttribute('disabled','disabled')}}
    else{
        editInformation();
        addNew.innerHTML='<i class="fa-solid fa-plus"></i> Add New'
        addNew.setAttribute('disabled','disabled')
    }
    displayData(); 
}
)
function addClient(){
    var client={
        first_name:firstName.value,
        last_name:lastName.value,
        _adress:adress.value,
       phone_number:phoneNumber.value,
        }
        clients.push(client);
}
//show data 
function displayData(){
    let result=' ';
for (var i=0;i<clients.length;i++){
    result+=`
    <tr>
    <td>${i}</td>
    <td>${clients[i].first_name}</td>
    <td>${clients[i].last_name}</td>
    <td>${clients[i]._adress}</td>
    <td>${clients[i].phone_number}</td>
    <td><button class="btn" onclick='getItem(${i})'><i class="fa-solid fa-pen-to-square"></i>Edit..</button>
    <button class="btn" onclick='deleteItem(${i})'><i class="fa-solid fa-trash-can"></i>Delete</button></td>
    </tr>`
}
information.innerHTML=result;
localStorage.setItem("clients list",JSON.stringify(clients))
clearDataFunction();

};
//clear data
clearData.addEventListener('click',clearDataFunction);
function clearDataFunction(){
    firstName.value=' ',
    lastName.value=' ',
    adress.value=' ',
    phoneNumber.value=' '};

    //delete all
deleteAll.addEventListener('click',function(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('clients list');
clients=[];
information.innerHTML=' ';
          Swal.fire(
          
            'success'
          )
        }
      })


    });

    //delete item
function deleteItem(index){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#A80000',
        cancelButtonColor: '#A80000',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            clients.splice(index,1);
            localStorage.setItem('clients list',JSON.stringify(clients))
            displayData();
          Swal.fire(
            'Deleted!',
        
          )
        }
      })
    
    
  
};
//Edit data
function getItem(index){
var info=clients[index];
firstName.value=info.first_name;
lastName.value=info.last_name;
adress.value=info._adress;
phoneNumber.value=info.phone_number;
addNew.innerHTML=`<i class="fa-solid fa-pen-to-square"></i> Edit`;
addNew.removeAttribute('disabled')
currentIndex=index;
}
let currentIndex;
function editInformation(){
    var client={
        first_name:firstName.value,
        last_name:lastName.value,
        _adress:adress.value,
       phone_number:phoneNumber.value,
    };
    clients[currentIndex].first_name=client.first_name
    clients[currentIndex].last_name=client.last_name
    clients[currentIndex]._adress=client._adress
    clients[currentIndex].phone_number=client.phone_number
    localStorage.setItem("clients list",JSON.stringify(clients))
}
//Search
function searchData(e){
    let result=' ';
    for (var i=0;i<clients.length;i++){
        if(clients[i].first_name.toLowerCase().includes(e.value.toLowerCase())){
        result+=`
        <tr>
        <td>${i}</td>
        <td>${clients[i].first_name}</td>
        <td>${clients[i].last_name}</td>
        <td>${clients[i]._adress}</td>
        <td>${clients[i].phone_number}</td>
        <td><button class="btn" onclick='getItem(${i})'><i class="fa-solid fa-pen-to-square"></i>Edit..</button>
        <button class="btn" onclick='deleteItem(${i})'><i class="fa-solid fa-trash-can"></i>Delete</button></td>
        </tr>`
}}
information.innerHTML=result}

//validation
firstName.addEventListener('keyup',function(){
    
    var regName = /^[A-Z][a-z]{0,50}$/;
    if(regName.test(firstName.value.trim())){
        firstName.classList.add('is-valid')
        firstName.classList.remove('is-invalid')
        alertdanger.classList.add('d-none');
    }
    else {
        firstName.classList.remove('is-valid')
        firstName.classList.add('is-invalid')
        alertdanger.classList.remove('d-none')
        alertdanger.classList.add('d-block')
    

    }
})
lastName.addEventListener('keyup',function(){
    var regNam = /^[A-Z][a-z]{0,50}$/;
    if(regNam.test(lastName.value.trim())){
        lastName.classList.add('is-valid')
        lastName.classList.remove('is-invalid')
        alertprimary.classList.remove('d-block')
        alertprimary.classList.add('d-none');
        
        }
    else {
        lastName.classList.remove('is-valid')
        lastName.classList.add('is-invalid')
        alertprimary.classList.remove('d-none')
        alertprimary.classList.add('d-block')
    

    }
})
phoneNumber.addEventListener('keyup',function(){
    var regNum=/^[0-9]{9}$/;
    if(regNum.test(phoneNumber.value) ){
        addNew.removeAttribute('disabled')
        
        }
    else {
        addNew.setAttribute('disabled','disabled')

    }
})













