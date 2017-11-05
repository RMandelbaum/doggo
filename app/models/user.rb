class User < ApplicationRecord
  has_many :walks
  has_many :dogs, through: :walks
  has_many :references
  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  accepts_nested_attributes_for :references, :allow_destroy => true

def references_attributes=(attributes)
   attributes.each do |key, reference_hash|
       self.references << Reference.new(reference_hash)
     end
   end



end
