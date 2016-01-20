json.array!(@back_end_services) do |back_end_service|
  json.extract! back_end_service, :id, :name, :body, :active
  json.url back_end_service_url(back_end_service, format: :json)
end
