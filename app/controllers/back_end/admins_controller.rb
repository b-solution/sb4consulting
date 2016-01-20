class BackEnd::AdminsController < ApplicationController
  before_action :authenticate_admin!
  before_action :check_admin

  layout 'base'

  def index
    @project_name = "SB Consulting"
  end

end
