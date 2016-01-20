class BackEnd::Page < ActiveRecord::Base
  validates_presence_of  :body
end
