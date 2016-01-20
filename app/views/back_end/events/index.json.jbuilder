json.array!(@back_end_events) do |back_end_event|
  json.extract! back_end_event, :id, :name, :body, :active, :date
  json.url back_end_event_url(back_end_event, format: :json)
end
