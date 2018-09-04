const dog_api = 'https://dog.ceo/api/breeds/list/all';
const selectBreed = document.querySelector('#selectBreed')
const viewDog = document.querySelector('#viewDog')
const breedImage = document.querySelector("#breedImage")
function random(){
    //This is the code
    $.ajax({
        type:"GET",
        url: "https://dog.ceo/api/breeds/list",
        dataType: "json",
        success: data =>{
          // console.log(data);
           for(let i=0; i<=data.message.length; i++){
            selectBreed.innerHTML += `
            <option value="${data.message[i]}">${data.message[i]}</option>
            `
        }
        },
        error: error =>{
            console.log("error")
        }
        

    })
}
random();
viewDog.addEventListener('click', e => {
   
    const breedName = selectBreed.options[selectBreed.selectedIndex].value;
    $.ajax({
        type: "GET",
        url: `https://dog.ceo/api/breed/${breedName}/images/random`,
        dataType: "json",
        success: data =>{
           console.log(data);
            breedImage.setAttribute('src',data.message);
        },
        error : error =>{
            console.log("error");
            
        }
    })
})
   
