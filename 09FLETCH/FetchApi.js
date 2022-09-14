const pokeApiUrl="https://pokeapi.co/api/v2/";
const pokedex=()=>{
    const pokemonStatsElements={
        hp:document.getElementById("pokemonStatHp"),
        attack:document.getElementById("pokemonStarAttack"),
        defense:document.getElementById("pokemonStatDefense"),
        specialAttack:document.getElementById("pokemonStatSpecialDefense"),
        speed:document.getElementById("pokemonStatSpeed")
    };
    let currentClassType=null;
    const imageTemplate="<img class='pokedisplay' src='{imgSrc}' alt='pokedisplay'/>";
    const images={
        imgPokemonNotFound:".img/404.png",
        imgLoading:"./img/loading.gif"
    };
    const container={
        imageContainer:document.getElementById("pokedisplay-container"),
        pokemonTypesContainer:document.getElementById("pokemonTypes"),
        pokemonNameElement:document.getElementById("pokemonNameResult"),
        pokemonAbilitiesElement:document.getElementById("pokemonAbilities"),
        pokemonMovesElement:document.getElementById("pokemonMoves"),
        pokemonIdElement:document.getElementById("pokemonId")
    };
    const buttons={
        all:Array.from(document.getElementById("btn")),
        search:document.getElementById("btnSearch"),
        next:document.getElementById("btnUp"),
        previous:document.getElementById("btnDown")
    };
    const processPokemonAbilities=(pokemonData)=>{
        let pokemonAbilitiesContent="";
        pokemonData.abilities?.forEach((pokemonAbility)=>{
            pokemonAbilitiesContent+=`<li>${pokemonAbility.ability.name}</li>`;
        });
        container.pokemonAbilitiesElement.innerHTML=pokemonAbilitiesContent;
    };
    const setLoading=()=>{
        container.imageContainer.innerHTML=imageTemplate.replace("{imgSrc}",images.imgLoading);
        buttons.all.forEach(button=>button.disable=true);
    }; 
    const setLoadingComplete=()=>{
        buttons.all.forEach(button=>checkDisabled(button));
    };
    
    const getPokemonData=async(pokemonName)=>
    fetch(`${pokeApiUrl}pokemon/${pokemonName}`,
    {method:'GET',headers:{'Content-Type':'application/json'}})
    .then((res)=>res.json())
    .catch((error)=>({requestFailed:true}));

    const checkDisabled=(button)=>{
        button.disable=button.id==="btnDown" && container.pokemonIdElement.value<=1;
    };
    const setPokemonData=async(pokemonName)=>{
        if(pokemonName){
            setLoading();
            const pokemonData=await getPokemonData(typeof pokemonName===typeof ""?pokemonName.toLowerCase():pokemonName);            
            if(pokemonData.requestFailed){
                container.imageContainer.innerHTML=imageTemplate.replace("{imgSrc}",images.imgPokemonNotFound);
            }else{
                container.imageContainer.innerHTML=`${imageTemplate.replace("{imgSrc}",pokemonData.sprites.front_default)} ${imageTemplate.replace("{imgSrc}",pokemonData.sprites.front_shiny)}`;
                container.pokemonNameElement.innerHTML=pokemonData.name;
                container.pokemonIdElement.value=pokemonData.id;
                processPokemonType(pokemonData);
                processPokemonStats(pokemonData);
                processPokemonAbilities(pokemonData);
                processPokemonMove(pokemonData);


            }
        }else{
            Swal.fire({
                title:"Error!",
                text:"Ingresa el nombre de un pokemon primero",
                icon:"error",
                confirmButtonText:"Aceptar"
            });
        }
    }

}
