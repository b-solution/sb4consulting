class BackEnd::Service < ActiveRecord::Base

  validates_presence_of :name, :identifier, :body, :active
  validates_uniqueness_of :identifier
  # before_validation :check_lenght_header

  def check_lenght_header
    if self.header.length > 200

    end

  end

  def self.active(locale= 'en')
    where( active: true).where(locale: locale.to_s)
  end


end
