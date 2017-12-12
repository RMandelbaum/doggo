class CreateComments < ActiveRecord::Migration[5.1]
  def change

    create_table :comments do |t|
      t.string :body
      t.integer :dog_id
      t.integer :user_id
    end
  end
end
