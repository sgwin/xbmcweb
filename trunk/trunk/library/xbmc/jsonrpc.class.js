function JsonRpc (Xbmc)
{
    var o_parent        = Xbmc;
    var s_namespace     = 'JSONRPC';

    this.introspect = function ()
    {
        var o_result = o_parent.post(s_namespace, 'Introspect');
        return (o_result)? o_result.commands : false ;
    }

    this.version = function ()
    {
        var o_result = o_parent.post(s_namespace, 'Version');
        return (o_result)? o_result.version : false ;
    }

    this.permission = function ()
    {
        var o_result = o_parent.post(s_namespace, 'Permission');
        return (o_result)? o_result.permission : false ;
    }

    this.ping = function ()
    {
        var o_result = o_parent.post(s_namespace, 'Ping');
        return (o_result == "pong")? true : false ;
    }

    this.announce = function (s_sender, s_message)
    {
        var a_parameters        = new Object();
        a_parameters.sender     = s_sender;
        a_parameters.message    = s_message;
        var o_result            = o_parent.post(s_namespace, 'Announce', a_parameters);

        return (o_result == "OK")? true : false ;
    }
}