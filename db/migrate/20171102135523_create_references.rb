class CreateReferences < ActiveRecord::Migration[5.1]
  def change
    create_table :references do |t|
      t.string :name
      t.string :email
      t.string :phone_number
      t.integer :user_id 

      t.timestamps
    end
  end
end
