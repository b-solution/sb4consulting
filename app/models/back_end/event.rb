class BackEnd::Event < ActiveRecord::Base
  validates_presence_of :name, :identifier, :body, :active
  validates_uniqueness_of :identifier

  default_scope {order("id DESC")}

  def self.active
    where active: true
  end
end