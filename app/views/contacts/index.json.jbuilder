json.array!(@contacts) do |contact|
  json.extract! contact, :id, :email, :is_read, :text, :subject, :is_archive
  json.url contact_url(contact, format: :json)
end
