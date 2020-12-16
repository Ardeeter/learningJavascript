
$(() => {

    const getURLs = () => {
        let allURLs = [];
        for (let i = 0 ; i < 45 ; i++){
            let url = fetch(`https://www.anapioficeandfire.com/api/characters?page=${i}&pageSize=50`);
            allURLs.push(url);
        }
    
        return allURLs
    }
    
    var listOfURLs = getURLs();
    
    Promise.all(listOfURLs)
    .then(respArr => {
        let arr = [];
        for (i=0 ; i < respArr.length ; i++){
            arr.push(respArr[i].json());
        }
    
        return Promise.all(arr)
    })
    
    .then(data =>{
    
            let objectArr = [];
    
            data.forEach((char) => {
                objectArr = [...objectArr, ...char]
    
        })
        console.log(objectArr)

        objectArr.forEach((object) => {

            if (object.name != ""){
                let name = object.name;
                let listItemName = $('<li>').html(`Name: ${name}`);
                $('ul').append(listItemName);
                if (object.allegiances != ""){
                    let house = object.allegiances;
                    let listItemHouse = $('<li>').html(`House: ${house}`);
                    $('ul').append(listItemHouse);
                }
            } else{
                let name = object.aliases[0];
                let listItem = $('<li>').html(`Character name: ${name}`);
                $('ul').append(listItem);
            }
                
        })
    })
    
})







