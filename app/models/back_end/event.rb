class BackEnd::Event < ActiveRecord::Base
  validates_presence_of :name, :body, :active
  # validates_uniqueness_of :identifier

  default_scope {order("id DESC")}

  def self.active(locale = 'en')
    where(active: true).where(locale: locale.to_s)
  end
end
