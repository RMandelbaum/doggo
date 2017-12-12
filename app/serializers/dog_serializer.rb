class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :age, :temperament, :walks
end
