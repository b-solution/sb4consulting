class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :set_locale, except: :select_locale

  def set_locale
    l = session[:sb_locale] || request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first
    locale = ['fr', 'en'].include?(l) ? l : :en
    I18n.locale = locale
    # I18n.locale = :en
  end

  def select_locale
    l = params[:lang]
    locale = ['fr', 'en'].include?(l) ? l : :en
    session[:sb_locale] = locale
    I18n.locale = locale
    redirect_to :back
  end

  private

  def check_admin
    redirect_to root_path unless current_admin.admin?
  end
end
