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
            admin: false
          },
          {
           username: "Jen",
           email: "Jen@gmail.com",
           password: "Password",
           bio: "I love dogs so much I run this app, and decide which dogs go on the page.",
           admin: true
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
