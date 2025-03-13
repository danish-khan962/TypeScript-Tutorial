//ENUM:

/*
    Enums is a way to define a set of named constants. Enums allow you to define a collection of related values that can be used interchangeably in your code.
*/

//for eg....
/*
For example,  let's say you're building a weather app and you want to define a set of possible weather conditions like "sunny", "cloudy", "rainy", and "snowy".

                enum WeatherConditions{
                    Sunny,
                    Cloudy,
                    Rainy, 
                    Snowy,
                }

In this example, WeatherConditions is the  name of the enum, and each of the values (e.g. Sunny, Cloudy, etc..) is assigned an automatic numerical value starting from 0.
*/

enum WeatherConditions {
    Sunny = "sunny",
    Cloudy = "cloudy",
    Rainy = "rainy",
    Snowy = "snowy",
}

const weather =  WeatherConditions.Cloudy;
console.log(`Today's weather is like ${weather}`);