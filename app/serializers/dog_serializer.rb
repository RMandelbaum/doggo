class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :age, :temperament, :created_at

  has_many :walks
end
