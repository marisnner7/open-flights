# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "cleaning airlines"
Airline.destroy_all

airlines = Airline.create([
    { 
        image_url: "https://open-flights.s3.amazonaws.com/United-Airlines.png",
        name: "United Airlines"
    }, 
    { 
        image_url: "https://open-flights.s3.amazonaws.com/Southwest-Airlines.png",
        name: "Southwest"
    },
    { 
        image_url: "https://open-flights.s3.amazonaws.com/Delta.png",
        name: "Delta"
    }, 
    { 
        image_url: "https://open-flights.s3.amazonaws.com/Alaska-Airlines.png",
        name: "Alaska Airlines"
    }, 
    { 
        image_url: "https://open-flights.s3.amazonaws.com/JetBlue.png",
        name: "JetBlue"
    }, 
    { 
        image_url: "https://open-flights.s3.amazonaws.com/American-Airlines.png",
        name: "American Airlines"
    }
])
    
puts "Created airlines"

puts "cleaning reviews"
Review.destroy_all

reviews = Review.create([
    {
        title: "cold food served",
        description: "they served bad food",
        score: 1,
        airline: airlines.first
    },
    {
        title: "amazing flight attendent",
        description: "they are always smiling",
        score: 5,
        airline: airlines.first
    }
])

puts "created reviews"