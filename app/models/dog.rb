class Dog < ApplicationRecord
  has_many :walks
  has_many :users, through: :walks
  accepts_nested_attributes_for :walks
end
