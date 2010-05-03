function System (Xbmc)
{
    //Namespace configuration
    var s_namespace = 'System';

    //Supporting methods
    this.getResponse = function (o_post)
    {
        o_post.media = (!o_post.media)? Xbmc.Player.getActivePlayer() : o_post.media ;

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

    this.shutdown = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'Shutdown';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.suspend = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'Suspend';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.hibernate = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'Hibernate';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.reboot = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'Reboot';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.getInfo = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'GetInfo';
        o_post.boolResponse     = false;

        return this.getResponse(o_post);
    }
}