function Files (Xbmc)
{
    //Namespace configuration
    var s_namespace = 'Files';

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

    //XBMC method implementations
    this.getSources = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'GetSources';
        o_post.boolResponse     = false;
        
        return this.getResponse(o_post);
    }

    this.download = function (s_filePath)
    {
        var o_post              = new Object();
        o_post.method           = 'Download';
        o_post.boolResponse     = false;
        o_post.parameter        = s_filePath;
        var o_response          = this.getResponse(o_post);

        if (!o_response.path)
            return false;
        else
            return (o_response.path.indexOf('vfs/') == 0)? o_response.path.replace('vfs/', '') : o_response.path ;
    }

    this.getDirectory = function (s_directoryPath)
    {
        var o_post              = new Object();
        o_post.method           = 'GetDirectory';
        o_post.boolResponse     = false;
        o_post.parameter        = s_directoryPath;
        
        return this.getResponse(o_post);
    }
}