class AddLocaleToService < ActiveRecord::Migration
  def change
    add_column :back_end_services, :locale, :string, default: 'en'
    add_column :back_end_events, :locale, :string, default: 'en'
    add_column :back_end_pages, :locale, :string, default: 'en'
  end
end
