var config      = new Array();
config['xbmc']  = new Array();
config['app']   = new Array();

config['xbmc']['address']       = "localhost";
config['xbmc']['port']          = "8080";
config['xbmc']['username']      = "xbmc";
config['xbmc']['password']      = "xbmc";
config['xbmc']['debug']         = false;

config['app']['name']           = 'player';
config['app']['upate_interval'] = 5; //seconds
config['app']['style_path']     = 'style/application/' +config['app']['name']+ '/';



//Do not edit below this line\\
var Xbmc        = new Xbmc(config['xbmc']);
var Application = new Application(Xbmc);
var a_modules   = new Array();
var o_statusUpdateInterval;

a_modules[0]                    = new Array();
a_modules[0]['content']         = 'now_playing';
a_modules[0]['region']          = 'north';

a_modules[1]                    = new Array();
a_modules[1]['content']         = 'media_browser';
a_modules[1]['region']          = 'east';

a_modules[2]                    = new Array();
a_modules[2]['content']         = 'media_details';
a_modules[2]['region']          = 'west';

a_modules[3]                    = new Array();
a_modules[3]['content']         = 'controls';
a_modules[3]['region']          = 'south';

$(document).ready(function ()
{
    clearInterval(o_statusUpdateInterval);
    Xbmc.Status.update();

    if (!Xbmc.JsonRpc.ping())
        alert("Could not connect to XBMC.\nMake sure the webservice is enabled.");
    else
    {
        for (var x=0; x<a_modules.length; x++)
            $('#' +a_modules[x]['region']).load('view/' +config['app']['name']+ '/'+a_modules[x]['content']+'.html');

        o_statusUpdateInterval = setInterval
        (
            function ()
            {
                Xbmc.Status.update();
            },
            (config['app']['upate_interval']*1000)
        );
    }
});