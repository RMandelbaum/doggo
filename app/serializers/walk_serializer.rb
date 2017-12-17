class WalkSerializer < ActiveModel::Serializer
  attributes :id, :day, :time, :dog_id

  belongs_to :dog
end
