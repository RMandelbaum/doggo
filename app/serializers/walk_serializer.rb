class WalkSerializer < ActiveModel::Serializer
  attributes :id, :day, :time, :reserved, :dog_id

  belongs_to :dog
end
