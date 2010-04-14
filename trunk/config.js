var config      = new Array();
config['xbmc']  = new Array();

config['xbmc']['address']   = "localhost";
config['xbmc']['port']      = "8080";
config['xbmc']['username']  = "xbmc";
config['xbmc']['password']  = "xbmc";
config['xbmc']['debug']     = false;



//Do not edit below this line\\
var Xbmc            = new Xbmc(config['xbmc']);
var Application     = new Application(Xbmc);
var a_modules    = new Array();
a_modules[0]     = 'jsonrpc';
a_modules[1]     = 'player';
a_modules[2]     = 'audioplayer';
a_modules[3]     = 'videoplayer';
a_modules[4]     = 'pictureplayer';
a_modules[5]     = 'playlist';

$(document).ready(function ()
{
    var s_connectionMessage = (!Xbmc.JsonRpc.ping())? "Could not connect to XBMC.\nMake sure the webservice is enabled." : "Successfully connected to XBMC" ;
    Application.MessageBox.show(s_connectionMessage);

    for (var x=0; x<a_modules.length; x++)
        $('#'+a_modules[x]).load('view/'+a_modules[x]+'.html');
});
