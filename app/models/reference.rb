class Reference < ApplicationRecord
  belongs_to :user
  validates :phone_number, length: { is: 10 }
  validates :name, presence: true

end
