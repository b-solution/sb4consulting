class CreateBackEndPages < ActiveRecord::Migration
  def change
    create_table :back_end_pages do |t|
      t.text :body
    end
  end
end
