class BackEnd::PagesController < ApplicationController
  before_action :authenticate_admin!
  before_action :check_admin
  before_action :set_back_end_page, only: [:edit, :update]

  layout 'base'

  def aboutus
    if BackEnd::Page.count.zero?
      @back_end_page = BackEnd::Page.create(body: "No Core")
    else
      @back_end_page= BackEnd::Page.first
    end
  end

  # GET /back_end/pages/1/edit
  def edit
  end

  # PATCH/PUT /back_end/pages/1
  # PATCH/PUT /back_end/pages/1.json
  def update
    respond_to do |format|
      if @back_end_page.update(back_end_page_params)
        format.html { redirect_to aboutus_back_end_pages_path, notice: 'Page was successfully updated.' }
        format.json { render :aboutus, status: :ok, location: @back_end_page }
      else
        format.html { render :edit }
        format.json { render json: @back_end_page.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_back_end_page
    @back_end_page = BackEnd::Page.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def back_end_page_params
    params.require(:back_end_page).permit(:body, :locale)
  end
end
