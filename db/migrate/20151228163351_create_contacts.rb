class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :email
      t.boolean :is_read
      t.text :text
      t.string :subject
      t.boolean :is_archive

      t.timestamps null: false
    end
  end
end
