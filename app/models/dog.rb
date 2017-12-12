class Dog < ApplicationRecord
  has_many :walks
  has_many :users, through: :walks
  has_many :comments
  accepts_nested_attributes_for :walks
end
