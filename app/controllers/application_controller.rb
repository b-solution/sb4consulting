class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :set_locale

  def set_locale
    l = request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first
    locale = ['fr', 'en'].include?(l) ? l : :en
    I18n.locale = locale
  end

  private

  def check_admin
    redirect_to root_path unless current_admin.admin?
  end
end
