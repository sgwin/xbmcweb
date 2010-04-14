function JsonRpc (Xbmc)
{
    var s_namespace = 'JSONRPC';

    this.introspect = function ()
    {
        var o_result = Xbmc.post(s_namespace, 'Introspect');
        return (o_result && o_result.commands != undefined)? o_result.commands : false ;
    }

    this.version = function ()
    {
        var o_result = Xbmc.post(s_namespace, 'Version');
        return (o_result && o_result.version != undefined)? o_result.version : false ;
    }

    this.permission = function ()
    {
        var o_result = Xbmc.post(s_namespace, 'Permission');
        return (o_result && o_result.permission != undefined)? o_result.permission : false ;
    }

    this.ping = function ()
    {
        var o_result = Xbmc.post(s_namespace, 'Ping');
        return (o_result && o_result == "pong")? true : false ;
    }

    this.announce = function (s_sender, s_message)
    {
        var o_parameters        = new Object();
        o_parameters.sender     = s_sender;
        o_parameters.message    = s_message;
        var o_result            = Xbmc.post(s_namespace, 'Announce', o_parameters);

        return (o_result && o_result == "OK")? true : false ;
    }
}