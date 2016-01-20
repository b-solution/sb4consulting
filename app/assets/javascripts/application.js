// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require "front_end/jquery-1.6.3.min.js" 
//= require "front_end/cufon-yui.js"
//= require "front_end/cufon-replace.js"
//= require "front_end/NewsGoth_400.font.js"
//= require "front_end/NewsGoth_700.font.js"
//= require "front_end/NewsGoth_Lt_BT_italic_400.font.js"
//= require "front_end/Vegur_400.font.js"
//= require "front_end/FF-cash.js"
//= require "front_end/jquery.featureCarousel.js"
    $(document).ready(function() {
        $("#carousel").featureCarousel({
            autoPlay:7000,
            trackerIndividual:false,
            trackerSummation:false,
            topPadding:50,
            smallFeatureWidth:.9,
            smallFeatureHeight:.9,
            sidePadding:0,
            smallFeatureOffset:0
        });
    });


$(document).ready(function(){
    $('form').addClass("form-horizontal")
})