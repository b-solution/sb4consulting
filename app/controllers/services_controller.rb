class ServicesController < ApplicationController


  def show
    @service = BackEnd::Service.find_by(identifier: params[:identifier])
  end
end