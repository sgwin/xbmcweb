function Xbmc (config)
{
    var s_apiPath       = "";
    this.apiPath        = "";
    this.Config		= new Config(this);
    this.Status 	= new Status(this);
    this.Controls	= new Controls(this);
    this.Keyboard	= new Keyboard(this);
    this.Library	= new Library(this);
    this.Videos		= new Videos(this);
    this.Music		= new Music(this);
    this.Pictures	= new Pictures(this);

    this.init = function (a_config)
    {
        s_apiPath       = "http://" +a_config['address']+ ":" +a_config['port']+ "/jsonrpc";
        this.apiPath    = s_apiPath;

        var s_postData  = '{"jsonrpc": "2.0", "method": "MusicLibrary.GetAlbums", "id": 1}';

        $.ajax(
        {
          type:     'POST',
          url:      s_apiPath,
          dataType: 'json',
          data:     s_postData,
          success:  function (data) {alert(data);}
        });

    }

    this.init(config);
}
