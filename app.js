const name = document.querySelector('#name')
const country = document.querySelector('#country')
const price = document.querySelector('#price')
const btn = document.querySelector('.btn')
const bookList = document.querySelector('#Item-list')

btn.addEventListener('click',function(event){
    event.preventDefault()
    

    //Basic validation
    if(name.value=='' || country.value=='' || price.value=='')
    {
        alert("Enter all the fields")
    }
    else{
        const newRow = document.createElement('tr');

    //Creating new title
    const newName = document.createElement('th')
    newName.innerHTML = name.value
    newRow.appendChild(newName)

    //Creating new author
    const newCountry = document.createElement('th')
    newCountry.innerHTML = country.value
    newRow.appendChild(newCountry)

    //Creating new year
    const newPrice = document.createElement('th')
    newPrice.innerHTML = price.value
    newRow.appendChild(newPrice)

    //displaying in table
    bookList.appendChild(newRow)
    }
    
})