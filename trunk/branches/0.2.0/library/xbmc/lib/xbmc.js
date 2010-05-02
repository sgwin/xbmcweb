function Xbmc (config)
{
    this.s_apiPath          = "";
    this.s_username         = "";
    this.s_password         = "";
    this.a_errorLog         = new Array();
    this.a_errorLog.length  = 0;
    this.b_debug            = false;
    this.o_httpRequest      = new XMLHttpRequest();
    var s_namespace         = 'XBMC';

    //Initialize objects
    this.Helper             = new Helper();
    this.JsonRpc            = new JsonRpc(this);
    this.System             = new System(this);
    this.Status             = new Status(this);
    this.Files              = new Files(this);
    this.Player             = new Player(this);
    this.Playlist           = new Playlist(this);
    this.Library            = new Library(this);

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
        {
            this.a_errorLog[this.a_errorLog.length].code    = 0;
            this.a_errorLog[this.a_errorLog.length].message = 'No namespace or method specified';

            return false;
        }
        else
        {
            this.o_httpRequest.open("POST", this.s_apiPath, false);
            this.o_httpRequest.send(this.Helper.getJson(s_namespace, s_method, a_parameters, i_id));
            var o_response = JSON.parse(this.o_httpRequest.responseText);

            if (o_response == undefined || o_response.error)
            {
                if (o_response.error)
                    this.a_errorLog[this.a_errorLog.length] = o_response.error;
                else
                {
                    this.a_errorLog[this.a_errorLog.length].code    = 1;
                    this.a_errorLog[this.a_errorLog.length].message = 'No response from server';
                }
                
                return false;
            }
            else
                return o_response.result;
        }
    }

    this.getResponse = function (o_post)
    {
        if (!o_post.method)
            return false;
        else
        {
            var o_result = this.post(s_namespace, o_post.method, o_post.parameter);

            if (o_post.boolResponse)
                return (o_result == "OK");
            else
                return (o_result)? o_result : false ;
        }
    }

    this.getVolume = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'GetVolume';
        o_post.boolResponse     = false;
        var o_response          = this.getResponse(o_post);
        
        return (!o_response)? 0 : o_response ;
    }

    this.setVolume = function (i_parameter)
    {
        var o_post              = new Object();
        o_post.method           = 'SetVolume';
        o_post.boolResponse     = true;
        o_post.parameter        = i_parameter;

        return this.getResponse(o_post);
    }

    this.getErrors = function ()
    {
        return this.a_errorLog;
    }

    this.getLastError = function ()
    {
        return this.a_errorLog[this.a_errorLog.length-1];
    }

    this.getLastErrorCode = function ()
    {
        if (this.a_errorLog[this.a_errorLog.length-1])
            return this.a_errorLog[this.a_errorLog.length-1].code;
        else
            return "No errors found";
    }

    this.getLastErrorMessage = function ()
    {
        if (this.a_errorLog[this.a_errorLog.length-1])
            return this.a_errorLog[this.a_errorLog.length-1].message;
        else
            return "No errors found";
    }

    this.init(config);
}
