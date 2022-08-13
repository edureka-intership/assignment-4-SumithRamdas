// given cutsomer's rating of different restaurants

ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
    ]


// array to store unique restaurants
uniqueRestaurants = []

// looping through ratingData
ratingData.forEach(element => {
    // if restaurant is not already present in uniqueRestaurants then indexOf returns -1
    if(uniqueRestaurants.indexOf(element.restaurant)==-1){

        // restayrant is pushed to uniqueRestaurant arry
        uniqueRestaurants.push(element.restaurant)

    }
});

// array to store output
var output=[]

// looping through unique restaurants
uniqueRestaurants.forEach(element=>{

    // variables to store sum of rating and count
    let sumOfRating =0
    let count = 0

    // looping through rataingData
    ratingData.forEach(R=>{
        
        if(element === R.restaurant){

            sumOfRating = sumOfRating + R.rating;
            count++;

        }
    })

    let avgRating = sumOfRating/count;

    rest ={

    }

    rest.restaurant = element;

    rest.averageRating = avgRating;

    output.push(rest)


})


console.log(output)


let output2 = output.filter(element=>element.averageRating>=4)

console.log(output2)