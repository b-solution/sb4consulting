class CreateBackEndEvents < ActiveRecord::Migration
  def change
    create_table :back_end_events do |t|
      t.string :name
      t.text :body
      t.boolean :active
      t.date :date

      t.timestamps null: false
    end
  end
end
