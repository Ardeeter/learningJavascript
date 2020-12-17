
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


        let $listGroup = $('.list-group');
        let liTags = objectArr.map((object) => {
            if (object.name){
                return `<a href="${object.url}" class="list-group-item list-group-item-action"><b>${object.name} </b>| Houses: ${object.allegiances.length} </a>`
            } else {
                return `<a href="${object.url}" class="list-group-item list-group-item-action"><b>${object.aliases[0]} </b>| Houses: ${object.allegiances.length} </a>`
            }
            
        })

        $listGroup.html(liTags.join(''))
                
    })

    let $div = $('.list-group');

    $div.click((e) => {

        console.log("i'm here");
        e.preventDefault();

        $.get(e.target.href)
        .done((moreInfoChar) => {
            
            // console.log(object.name);

            let $modalBody = $(`.modal-body`);
            let $modalTitle = $(`#exampleModalLabel`);
            let $modalDialog = $(`#exampleModal`);
            let name = moreInfoChar.name;
            // let alias = moreInfoChar.aliases[0];
            let houses = moreInfoChar.allegiances;

           

            $modalTitle.html("");
            $modalBody.html("");

            if (name){
                $modalTitle.html(name);
            } else{
                if (moreInfoChar.aliases){
                    $modalTitle.html(moreInfoChar.aliases[0]);
                }
                
            }

            if (houses){

                houses.forEach((houseURL) => {
                    $.get(houseURL)
                    .done((houseObj)=>{
                        $modalBody.html(`<br>${$modalBody.html()}<br>${houseObj.name}`)
                    })
                })
            }

            $modalDialog.modal('show');

        })


    })


            
            
                
        // })
        
        // objectArr.forEach(async (object) => {
        //     if (object.allegiances && object.allegiances.length > 0) {
                
        //         let response = await fetch(object.allegiances[0]).then(res => res.json());
                
                // if (object.name != ""){
                //     let name = object.name;
                //     let listItemName = $('<li>').html(`Name: ${name}`);
                //     $('ul').append(listItemName);
                    
        //             const anchor = $(`<a href=${response.url}>`).html(`House: ${response.name}`)
        //             let listItemHouse = $('<li>').append(anchor);
        //             $('ul').append(listItemHouse);                  
        //         } else{
        //             let name = object.aliases[0];
                    
        //             let listItem = $('<li>').html(`Name: ${name}`);
        //             $('ul').append(listItem);
        //         }
                
        //     }          
                
        // })
    // })
    
})







