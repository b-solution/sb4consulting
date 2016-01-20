class WelcomeController < ApplicationController
  def index
  end

  def services
    @services = BackEnd::Service.active
  end

  def events
    # @events = BackEnd::Event.active
    render :under_construction
  end

  def aboutus
    @page = BackEnd::Page.first
  end
end
