class AddColumnsToContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :name, :string
    add_column :contacts, :organisation, :string
  end
end
