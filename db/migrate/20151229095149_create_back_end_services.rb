class CreateBackEndServices < ActiveRecord::Migration
  def change
    create_table :back_end_services do |t|
      t.string :name
      t.text :body
      t.boolean :active

      t.timestamps null: false
    end
  end
end
