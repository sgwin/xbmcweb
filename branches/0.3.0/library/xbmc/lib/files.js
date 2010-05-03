function Files (Xbmc)
{
    //Initialte child namespaces
    this.Video      = new VideoFiles(this);
    this.Audio      = new AudioFiles(this);
    this.Picture    = new PictureFiles(this);

    //Namespace configuration
    var s_namespace = 'Files';

    //Supporting methods
    this.getResponse = function (o_post)
    {
        o_post.media = (!o_post.media)? Xbmc.Status.activeMediaPlayer : o_post.media ;

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
    this.getSources = function (s_media)
    {
        var o_parameters        = new Object();
        o_parameters.type       = (s_media)? s_media : undefined ;
        var o_post              = new Object();
        o_post.method           = 'GetSources';
        o_post.boolResponse     = false;
        o_post.parameter        = o_parameters;

        return this.getResponse(o_post);
    }

        this.getSharesCount = function (s_media)
        {
            var o_response = this.getSources(s_media);
            return (!o_response || o_response.total == undefined)? 0 : o_response.total ;
        }

        this.getShares = function (s_media)
        {
            var o_response = this.getSources(s_media);
            return (!o_response.shares)? false : o_response.shares ;
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

    this.getDirectory = function (s_directoryPath, s_type)
    {
        s_type = (s_type == undefined)? 'files' : s_type ;

        var o_parameters        = new Object();
        o_parameters.type       = s_type;
        o_parameters.directory  = s_directoryPath;
        var o_post              = new Object();
        o_post.method           = 'GetDirectory';
        o_post.boolResponse     = false;
        o_post.parameter        = o_parameters;
        
        return this.getResponse(o_post);
    }

        this.getFiles = function (s_directoryPath, s_type)
        {
            return this.getDirectory(s_directoryPath, s_type);
        }

        this.getDirectoryContent = function (s_directoryPath, s_media)
        {
            var o_response = this.getDirectory(s_directoryPath, s_media);
            return (o_response.directories)? o_response.directories.sort(Xbmc.Helper.sort_by('label', false)) : false ;
        }
}