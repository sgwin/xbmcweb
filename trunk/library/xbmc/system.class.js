function System (Xbmc)
{
    var s_namespace = 'System';

    this.shutdown = function ()
    {
        var o_result = Xbmc.post(s_namespace, 'Shutdown');
        return (o_result && o_result == "OK")? true : false ;
    }

    this.suspend = function ()
    {
        var o_result = Xbmc.post(s_namespace, 'Suspend');
        return (o_result && o_result == "OK")? true : false ;
    }

    this.hibernate = function ()
    {
        var o_result = Xbmc.post(s_namespace, 'Hibernate');
        return (o_result && o_result == "OK")? true : false ;
    }

    this.reboot = function ()
    {
        var o_result = Xbmc.post(s_namespace, 'Reboot');
        return (o_result && o_result == "OK")? true : false ;
    }

    this.getInfo = function ()
    {
        var o_result = Xbmc.post(s_namespace, 'GetInfo');
        return (o_result)? o_result : false ;
    }
}