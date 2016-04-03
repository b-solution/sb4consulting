class BackEnd::ContactsController < ApplicationController
  before_action :authenticate_admin!
  before_action :check_admin

  layout 'base'
  # GET /back_end/services
  # GET /back_end/services.json
  def index
    @contacts = Contact.where(is_archive: nil).order('id DESC').all
  end

  # GET /back_end/services/1
  # GET /back_end/services/1.json
  def show
    @contact = Contact.find(params[:id])
    @contact.update_attribute('is_read', true)
  end

  def archive
    @contact = Contact.find(params[:id])
    @contact.update_attribute('is_archive', true)
    redirect_to back_end_contacts_path
  end
end
