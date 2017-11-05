class Dog < ApplicationRecord
  has_many :walks
  has_many :users, through: :walks

  def most_walks
    @dogs = Dog.all
    @dogs.each do |dog|
      dog.name
      dog.walks.count
      end
    end
end
