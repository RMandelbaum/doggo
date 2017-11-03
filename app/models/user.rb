class User < ApplicationRecord
  has_many :walks
  has_many :dogs, through: :walks
  has_many :references
  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  #accepts_nested_attributes_for :references

def references_attributes=(new_reference)
  self.references.each do |r|
    if r.name == new_reference.name
      "You can't have duplicate references."
    else
      r.update(new_reference)
    end
  end
end

end
