class AddColumnsToService < ActiveRecord::Migration
  def change
    add_column :back_end_services, :identifier, :string
    add_column :back_end_services, :header, :text
  end
end
