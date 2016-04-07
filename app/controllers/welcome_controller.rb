class WelcomeController < ApplicationController
  def index
  end

  def services
    @services = BackEnd::Service.active
  end

  def news
    @events = BackEnd::Event.active
    # render :under_construction
  end

  def aboutus
    @page = BackEnd::Page.first
  end
end
