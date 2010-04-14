function Xbmc (config)
{
    this.s_apiPath      = "";
    this.s_username     = "";
    this.s_password     = "";
    this.b_debug        = false;
    this.o_httpRequest  = new XMLHttpRequest();

    //Initialize objects
    this.Helper         = new Helper();
    this.JsonRpc 	= new JsonRpc(this);
    this.System		= new System(this);
    this.Files          = new Files(this);
    this.Player         = new Player(this);
    this.VideoPlayer    = new VideoPlayer(this);
    this.PicturePlayer  = new PicturePlayer(this);
    this.Playlist	= new Playlist(this);
    this.VideoLibrary   = new VideoLibrary(this);
    this.VideoPlaylist	= new VideoPlaylist(this);
    this.MusicLibrary	= new MusicLibrary(this);
    this.AudioPlaylist	= new AudioPlaylist(this);
    this.PicturePlayer	= new PicturePlayer(this);

    this.init = function (a_config)
    {
        this.s_apiPath      = "http://" +a_config['address']+ ":" +a_config['port']+ "/jsonrpc";
        this.s_username     = (a_config['username'] != undefined)? a_config['username'] : "" ;
        this.s_password     = (a_config['password'] != undefined)? a_config['password'] : "" ;
        this.b_debug        = (a_config['debug'] != undefined)? a_config['debug'] : false;
    }

    this.getApiPath = function ()
    {
        return this.apiPath;
    }

    this.debuggingEnabled = function ()
    {
        return this.b_debug;
    }

    this.post = function (s_namespace, s_method, a_parameters, i_id)
    {
        this.o_httpRequest.open("POST", this.s_apiPath, false);
        this.o_httpRequest.send(this.Helper.getJson(s_namespace, s_method, a_parameters, i_id));
        var o_response  = JSON.parse(this.o_httpRequest.responseText);
        var s_message   = "";

        if (o_response == undefined)
        {
            if (this.debuggingEnabled())
            {
                s_message = 'ERROR\n\nThe requested method could not be executed.\nConnection to XBMC lost.';
                alert(s_message);
            }

            return false;
        }
        else if (o_response.error)
        {
            if (this.debuggingEnabled())
            {
                s_message = 'ERROR\n\n code: ' +o_response.error.code+ '\n message: ' +o_response.error.message;
                alert(s_message);
            }

            return false;
        }
        
        return o_response.result;
    }

    this.init(config);
}
