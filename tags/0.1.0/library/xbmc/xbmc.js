function Xbmc (config)
{
    this.s_apiPath      = "";
    this.s_username     = "";
    this.s_password     = "";
    this.b_debug        = false;
    this.o_httpRequest  = new XMLHttpRequest();
    var s_namespace     = 'XBMC';

    //Initialize objects
    this.Helper         = new Helper();
    this.JsonRpc 	= new JsonRpc(this);
    this.System		= new System(this);
    this.Files          = new Files(this);
    this.Player         = new Player(this);
    this.Playlist	= new Playlist(this);
    this.Library	= new Library(this);

    this.init = function (a_config)
    {
        this.s_apiPath      = "http://" +a_config['address']+ ":" +a_config['port']+ "/jsonrpc";
        this.s_username     = (a_config['username'] != undefined)? a_config['username'] : "" ;
        this.s_password     = (a_config['password'] != undefined)? a_config['password'] : "" ;
        this.b_debug        = (a_config['debug'] != undefined)? a_config['debug'] : false;
    }

    this.getApiPath = function ()
    {
        return this.s_apiPath;
    }

    this.debuggingEnabled = function ()
    {
        return this.b_debug;
    }

    this.log = function (s_message, s_level)
    {
        if (s_message == undefined || s_level == undefined)
            return false;

        var o_parameters        = new Object();
        o_parameters.message    = s_message;
        o_parameters.level      = s_level;

        var o_result = this.post(s_namespace, 'Log', o_parameters);
        return (o_result == "OK");
    }

    this.post = function (s_namespace, s_method, a_parameters, i_id)
    {
        if (s_namespace == undefined || s_method == undefined)
            return false;
        else
        {
            this.o_httpRequest.open("POST", this.s_apiPath, false);
            this.o_httpRequest.send(this.Helper.getJson(s_namespace, s_method, a_parameters, i_id));
            var o_response = JSON.parse(this.o_httpRequest.responseText);

            return (o_response == undefined || o_response.error)? false : o_response.result ;
        }
    }

    this.init(config);
}
