var config      = new Array();
config['xbmc']  = new Array();

config['xbmc']['address']   = "localhost";
config['xbmc']['port']      = "8080";
config['xbmc']['username']  = "xbmc";
config['xbmc']['password']  = "xbmc";
config['xbmc']['debug']     = false;



//Do not edit below this line\\
var Xbmc        = new Xbmc(config['xbmc']);
var Application = new Application(Xbmc);

$(document).ready(function ()
{
    var s_connectionMessage = (!Xbmc.JsonRpc.ping())? "Could not connect to XBMC.\nMake sure the webservice is enabled." : "Successfully connected to XBMC" ;
    Application.MessageBox.show(s_connectionMessage);
    $('#jsonrpc').load('view/jsonrpc.html');
    $('#player').load('view/player.html');
    $('#audioplayer').load('view/audioplayer.html');
    $('#videoplayer').load('view/videoplayer.html');
    $('#pictureplayer').load('view/pictureplayer.html');
});
