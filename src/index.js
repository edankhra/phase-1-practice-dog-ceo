console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function()  {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    
    let breeds = []
    //fetch

    fetch(imgUrl)
      .then(res => res.json())
      .then(data => data.message.forEach(dogImage => renderImage(dogImage)))

    fetch(breedUrl)
      .then(res => res.json())
      .then(data => {
        breeds = Object.keys(data.message)
        renderBreeds(breeds)
      })

    //DOM selector
     const dropdown = document.getElementById('breed-dropdown')
     const ul = document.querySelector('#dog-breeds')

    
    //event listener
    dropdown.addEventListener('change', handleChange)


    //render function
    function renderImage(dogImage){
        
        const container = document.querySelector('#dog-image-container')
        const image = document.createElement('img')
        image.src = dogImage
        container.append(image)
        
    }

    function renderBreeds(breeds){
        //const ul = document.querySelector('#dog-breeds')
        breeds.forEach(breed => {
            const li = document.createElement('li')
            li.innerText = breed
            ul.append(li)
            li.addEventListener('click', changeColor)
    })
    }

    //callback function
    function changeColor(e){
        e.target.style.color = "red"
    }

    function handleChange(e){
        let letter = e.target.value
        let filterBreeds = breeds.filter(breed => breed.startsWith(letter))
        ul.textContent = ''
        renderBreeds(filterBreeds)
    }


  })