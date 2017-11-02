class CreateWalks < ActiveRecord::Migration[5.1]
  def change
    create_table :walks do |t|
      t.integer :user_id
      t.integer :dog_id
      t.string :day
      t.time :time
      t.boolean :reserved, default: false

      t.timestamps
    end
  end
end
