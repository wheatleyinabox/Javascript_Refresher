// fetch -> function used for making HHTP requests to fetch resources.
//          (JSON style data, images, files)

//          Simplifies asynchronous data fetching in JavaScript and
//          used for interacting with APIs to retrieve and send data
//          asynchonously over the web.

//          fetch(url, {options})

//          *Method Property:
//              GET - get a resource
//              POST - sends some data
//              PUT - replace some data
//              DELETE - delete some data



// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => 
//         {
//             if(!response.ok)
//             {
//                 throw new Error("Could not fetch resource");
//             }
//         return response.json();
//         })
//     .then(data => console.log(data.name))
//     .catch(error => console.log(error));

// if async/await...
// async function fetchData()
// {
//      try
//      {
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//         if (!response.ok)
//         {
//             throw new Error("Could not fetch resource");
//         }
//         const data = await response.json();
//         console.log(data);
//      }
//      catch(error)
//      {
//         console.log(error);
//      }
// }

async function fetchData()
{
     try
     {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok)
        {
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
     }
     catch(error)
     {
        console.log(error);
     }
}