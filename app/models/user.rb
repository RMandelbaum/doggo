class User < ApplicationRecord
  has_many :walks
  has_many :dogs, through: :walks
  has_many :references
  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true

def references_attributes=(attributes)
   attributes.each do |key, reference_hash|
       if reference_hash[:id]
          reference = Reference.find(reference_hash[:id])
          reference.update(reference_hash)
        else
          self.references.new(reference_hash)
       end
   end
   end



end
