require 'test_helper'

class BackEnd::EventsControllerTest < ActionController::TestCase
  setup do
    @back_end_event = back_end_events(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:back_end_events)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create back_end_event" do
    assert_difference('BackEnd::Event.count') do
      post :create, back_end_event: { active: @back_end_event.active, body: @back_end_event.body, date: @back_end_event.date, name: @back_end_event.name }
    end

    assert_redirected_to back_end_event_path(assigns(:back_end_event))
  end

  test "should show back_end_event" do
    get :show, id: @back_end_event
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @back_end_event
    assert_response :success
  end

  test "should update back_end_event" do
    patch :update, id: @back_end_event, back_end_event: { active: @back_end_event.active, body: @back_end_event.body, date: @back_end_event.date, name: @back_end_event.name }
    assert_redirected_to back_end_event_path(assigns(:back_end_event))
  end

  test "should destroy back_end_event" do
    assert_difference('BackEnd::Event.count', -1) do
      delete :destroy, id: @back_end_event
    end

    assert_redirected_to back_end_events_path
  end
end
