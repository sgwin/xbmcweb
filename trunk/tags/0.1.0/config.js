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
var a_modules       = new Array();
a_modules[0]       = 'xbmc';
a_modules[1]        = 'jsonrpc';
a_modules[2]        = 'system';
a_modules[3]        = 'files';
a_modules[4]        = 'player';
a_modules[5]        = 'player_audio';
a_modules[6]        = 'player_video';
a_modules[7]        = 'player_picture';
a_modules[8]        = 'playlist';
a_modules[9]        = 'playlist_audio';
a_modules[10]        = 'playlist_video';
a_modules[11]       = 'library';
a_modules[12]       = 'library_video';
a_modules[13]       = 'library_audio';

$(document).ready(function ()
{
    var s_connectionMessage = (!Xbmc.JsonRpc.ping())? "Could not connect to XBMC.\nMake sure the webservice is enabled." : "Successfully connected to XBMC" ;
    Application.MessageBox.show(s_connectionMessage);

    var x;

    for (x=0; x<a_modules.length; x++)
    {
        $('#'+a_modules[x]).load
        (
            'view/'+a_modules[x]+'.html',
            function ()
            {
                Application.Tooltip.init();
            }
        );
    }
});
