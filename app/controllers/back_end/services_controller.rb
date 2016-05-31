class BackEnd::ServicesController < ApplicationController
  before_action :authenticate_admin!
  before_action :check_admin
  before_action :set_back_end_service, only: [:show, :edit, :update, :destroy]

  layout 'base'
  # GET /back_end/services
  # GET /back_end/services.json
  def index
    @back_end_services = BackEnd::Service.order('id ASC').all
  end

  # GET /back_end/services/1
  # GET /back_end/services/1.json
  def show
  end

  # GET /back_end/services/new
  def new
    @back_end_service = BackEnd::Service.new
  end

  # GET /back_end/services/1/edit
  def edit
  end

  # POST /back_end/services
  # POST /back_end/services.json
  def create
    @back_end_service = BackEnd::Service.new(back_end_service_params)

    respond_to do |format|
      if @back_end_service.save
        format.html { redirect_to @back_end_service, notice: 'Service was successfully created.' }
        format.json { render :show, status: :created, location: @back_end_service }
      else
        format.html { render :new }
        format.json { render json: @back_end_service.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /back_end/services/1
  # PATCH/PUT /back_end/services/1.json
  def update
    respond_to do |format|
      if @back_end_service.update(back_end_service_params)
        format.html { redirect_to @back_end_service, notice: 'Service was successfully updated.' }
        format.json { render :show, status: :ok, location: @back_end_service }
      else
        format.html { render :edit }
        format.json { render json: @back_end_service.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /back_end/services/1
  # DELETE /back_end/services/1.json
  def destroy
    @back_end_service.destroy
    respond_to do |format|
      format.html { redirect_to back_end_services_url, notice: 'Service was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_back_end_service
      @back_end_service = BackEnd::Service.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def back_end_service_params
      params.require(:back_end_service).permit(:name, :identifier, :header,  :body, :active, :locale)
    end
end
