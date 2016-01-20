class AddColumnsToEvent < ActiveRecord::Migration
  def change
    add_column :back_end_events, :identifier, :string
    add_column :back_end_events, :header, :text
  end
end
