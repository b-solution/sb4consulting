# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u = Admin.new
u.firstname= 'Sadika'
u.lastname= 'Sadika'
u.email= 'Sadika.guedidi@gmail.com'
u.admin = true
u.password= 'poipoipoi'
u.save
