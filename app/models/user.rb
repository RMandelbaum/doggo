class User < ApplicationRecord
  has_many :walks
  has_many :dogs, through: :walks
  has_many :references
  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  #accepts_nested_attributes_for :references

def references_attributes=(references_attributes)
  references_attributes.each do |key, reference|
    self.references << Reference.new(reference)
  end
end





end
