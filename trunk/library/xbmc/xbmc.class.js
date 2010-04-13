function Xbmc (config)
{
    var s_apiPath       = "";
    this.apiPath        = "";
    this.jQuery         = jQuery;
    this.JsonRpc 	= new JsonRpc(this);
    this.System		= new System(this);
    this.Controls       = new Controls(this);
    this.Player         = new Player(this);
    this.Playlist	= new Playlist(this);
    this.Files          = new Files(this);
    this.VideoLibrary   = new VideoLibrary(this);
    this.VideoPlayer    = new VideoPlayer(this);
    this.MusicLibrary	= new MusicLibrary(this);
    this.MusicPlayer	= new MusicPlayer(this);
    this.Slideshow	= new Slideshow(this);

    this.init = function (a_config)
    {
        s_apiPath       = "http://" +a_config['address']+ ":" +a_config['port']+ "/jsonrpc";
        this.apiPath    = s_apiPath;
    }

    this.getApiPath = function ()
    {
        return this.apiPath;
    }

    this.post = function (s_namespace, s_method, s_parameters)
    {
        var s_postData  = '{"jsonrpc": "2.0", "method": "' +s_namespace+ '.' +s_method+ '", "id": 1}';
        var o_response  = null;

        this.jQuery.ajax(
        {
            type:     'POST',
            url:      s_apiPath,
            dataType: 'json',
            data:     s_postData,
            success:  function (data)
            {
              o_response = data;
            }
        });

        return o_response;
    }

    this.init(config);

    alert(this.post('JSONRPC', 'Permission'));
}
