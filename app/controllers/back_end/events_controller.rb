class BackEnd::EventsController < ApplicationController
  before_action :authenticate_admin!
  before_action :check_admin
  before_action :set_back_end_event, only: [:show, :edit, :update, :destroy]

  layout 'base'
  # GET /back_end/events
  # GET /back_end/events.json
  def index
    @back_end_events = BackEnd::Event.all
  end

  # GET /back_end/events/1
  # GET /back_end/events/1.json
  def show
  end

  # GET /back_end/events/new
  def new
    @back_end_event = BackEnd::Event.new
  end

  # GET /back_end/events/1/edit
  def edit
  end

  # POST /back_end/events
  # POST /back_end/events.json
  def create
    @back_end_event = BackEnd::Event.new(back_end_event_params)

    respond_to do |format|
      if @back_end_event.save
        format.html { redirect_to @back_end_event, notice: 'Event was successfully created.' }
        format.json { render :show, status: :created, location: @back_end_event }
      else
        format.html { render :new }
        format.json { render json: @back_end_event.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /back_end/events/1
  # PATCH/PUT /back_end/events/1.json
  def update
    respond_to do |format|
      if @back_end_event.update(back_end_event_params)
        format.html { redirect_to @back_end_event, notice: 'Event was successfully updated.' }
        format.json { render :show, status: :ok, location: @back_end_event }
      else
        format.html { render :edit }
        format.json { render json: @back_end_event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /back_end/events/1
  # DELETE /back_end/events/1.json
  def destroy
    @back_end_event.destroy
    respond_to do |format|
      format.html { redirect_to back_end_events_url, notice: 'Event was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_back_end_event
      @back_end_event = BackEnd::Event.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def back_end_event_params
      params.require(:back_end_event).permit(:name, :identifier, :header, :body, :active, :date)
    end
end
