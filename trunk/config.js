var config      = new Array();
config['xbmc']  = new Array();

config['xbmc']['address']   = "localhost";
config['xbmc']['port']      = "8080";
config['xbmc']['username']  = "xbmc";
config['xbmc']['password']  = "xbmc";



//Do not edit below this line\\
jQuery.noConflict();
var xbmc = null;

jQuery(document).ready(function ()
{
    xbmc = new Xbmc(config['xbmc']);
});
