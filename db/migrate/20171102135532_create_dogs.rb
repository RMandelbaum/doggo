class CreateDogs < ActiveRecord::Migration[5.1]
  def change
    create_table :dogs do |t|

      t.timestamps
    end
  end
end
