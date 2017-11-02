class User < ApplicationRecord
  has_many :walks
  has_many :dogs, through: :walks
  has_many :references
  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
end
