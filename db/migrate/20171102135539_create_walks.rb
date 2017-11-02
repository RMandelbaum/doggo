class CreateWalks < ActiveRecord::Migration[5.1]
  def change
    create_table :walks do |t|

      t.timestamps
    end
  end
end
