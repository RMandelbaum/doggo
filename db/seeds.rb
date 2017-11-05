# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = User.create([
           {
             username: "Rachel",
            email: "Rachel@gmail.com",
            password: "Password",
            bio: "I love Dogs!!",

          },
          {
           username: "Jen",
           email: "Jen@gmail.com",
           password: "Password",
           bio: "I love dogs so much I run this app, and decide which dogs go on the page.",

          }
        ])

dogs = Dog.create([{
        name: 'Buddy',
        breed: 'Pug',
        age: 10,
        temperament: 'Calm'
  },
  {
        name: 'Sasha',
        breed: 'Poodle',
        age: 4,
        temperament: 'Hyper'
  },
  {
        name: 'Maxie',
        breed: 'Terrier',
        age: 7,
        temperament: 'Calm'
  },
  {
        name: 'Sammie',
        breed: 'Bulldog',
        age: 2,
        temperament: 'Hyper'
  }])

  walks = Walk.create([{
      user_id: 1,
      dog_id: 1,
      day: "Sunday",
      time: "10:00 AM" ,
      reserved: false
    },
 {
      user_id: 1,
      dog_id: 1,
      day: "Tuesday",
      time: "10:00 AM" ,
      reserved: false
    },
 {
      user_id: 1,
      dog_id: 1,
      day: "Wednesday",
      time: "10:00 AM",
      reserved: false
    },

    {
      user_id: 1,
      dog_id: 2,
      day: "Tuesday",
      time: "10:00 AM" ,
      reserved: false
      },
    {
      user_id: 2,
      dog_id: 3,
      day: "Monday",
      time:"10:00 AM" ,
      reserved: false
      }
      ])
