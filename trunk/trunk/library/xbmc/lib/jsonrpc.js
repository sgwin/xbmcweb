function JsonRpc (Xbmc)
{
    //Namespace configuration
    var s_namespace = 'JSONRPC';

    //Supporting methods
    this.getResponse = function (o_post)
    {
        o_post.media = (!o_post.media)? Xbmc.Status.activePlayer : o_post.media ;

        if (!o_post.method)
            return false;
        else
        {
            var o_result = Xbmc.post(s_namespace, o_post.method, o_post.parameter);

            if (o_post.boolResponse)
                return (o_result == "OK");
            else
                return (o_result)? o_result : false ;
        }
    }

    //XBMC method implementations
    this.introspect = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'Introspect';
        o_post.boolResponse     = false;
        var o_response          = this.getResponse(o_post);

        return (o_response.commands)? o_response.commands : false ;
    }

    this.version = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'Version';
        o_post.boolResponse     = false;
        var o_response          = this.getResponse(o_post);

        return (o_response.version)? o_response.version : false ;
    }

    this.permission = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'Permission';
        o_post.boolResponse     = false;
        var o_response          = this.getResponse(o_post);

        return (o_response.permission)? o_response.permission : false ;
    }

    this.ping = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'Ping';
        o_post.boolResponse     = false;
        var o_response          = this.getResponse(o_post);

        return (o_response == "pong");
    }

    this.announce = function (s_sender, s_message)
    {
        var o_parameters        = new Object();
        o_parameters.sender     = s_sender;
        o_parameters.message    = s_message;
        var o_post              = new Object();
        o_post.method           = 'Announce';
        o_post.boolResponse     = true;
        o_post.parameter        = o_parameters;

        return this.getResponse(o_post);
    }
}