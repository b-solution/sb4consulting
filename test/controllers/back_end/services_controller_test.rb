require 'test_helper'

class BackEnd::ServicesControllerTest < ActionController::TestCase
  setup do
    @back_end_service = back_end_services(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:back_end_services)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create back_end_service" do
    assert_difference('BackEnd::Service.count') do
      post :create, back_end_service: { active: @back_end_service.active, body: @back_end_service.body, name: @back_end_service.name }
    end

    assert_redirected_to back_end_service_path(assigns(:back_end_service))
  end

  test "should show back_end_service" do
    get :show, id: @back_end_service
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @back_end_service
    assert_response :success
  end

  test "should update back_end_service" do
    patch :update, id: @back_end_service, back_end_service: { active: @back_end_service.active, body: @back_end_service.body, name: @back_end_service.name }
    assert_redirected_to back_end_service_path(assigns(:back_end_service))
  end

  test "should destroy back_end_service" do
    assert_difference('BackEnd::Service.count', -1) do
      delete :destroy, id: @back_end_service
    end

    assert_redirected_to back_end_services_path
  end
end
