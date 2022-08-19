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
let uniqueRestaurants = []

// looping through ratingData
ratingData.forEach(element => {
    
    // if restaurant is not already present in uniqueRestaurants then indexOf returns -1
    if(uniqueRestaurants.indexOf(element.restaurant)==-1){

        // restaurant is pushed to uniqueRestaurant array
        uniqueRestaurants.push(element.restaurant)

    }
});

// array to store output
let  output = []

// looping through unique restaurants
uniqueRestaurants.forEach(element=>{

    // variables to store sum of rating and count
    let sumOfRating =0
    let count = 0

    // looping through rataingData
    ratingData.forEach(R=>{
        
        // if unique restaurant element and restaurant property of ratingData object are equal
        if(element === R.restaurant){

            // adding rating
            sumOfRating = sumOfRating + R.rating;
            // incrementing count
            count++;

        }
    })

    // calculating average
    let avgRating = sumOfRating/count;

    // creating a new object
    rest ={

        restaurant : element,

        averageRating : avgRating

    }

    // adding object to output array
    output.push(rest)

})

// printing output array
console.log(output)

// finding restaurants whose rating is greater than or equal to 4
let output2 = output.filter(element=>element.averageRating>=4)

// printing array
console.log(output2)