function Playlist (Xbmc)
{
    //Initialte child namespaces
    this.Video              = new VideoPlaylist(this);
    this.Audio              = new AudioPlaylist(this);

    //Namespace configuration
    var a_namespace         = new Array();
    a_namespace['video']    = 'VideoPlaylist';
    a_namespace['audio']    = 'AudioPlaylist';
    
    var a_type              = new Array();
    a_type[0]               = 'audio';
    a_type[1]               = 'video';

    //supporting methods
    this.isAllowedType = function (s_type)
    {
        return Xbmc.Helper.in_array(s_type, a_type);
    }

    this.getResponse = function (o_post)
    {
        o_post.media = (!o_post.media)? Xbmc.Player.getActivePlayer() : o_post.media ;

        if (!this.isAllowedType(o_post.media) || !o_post.method)
            return false;
        else
        {
            var o_result = Xbmc.post(a_namespace[o_post.media], o_post.method, o_post.parameter);

            if (o_post.boolResponse)
                return (o_result == "OK");
            else
                return (o_result)? o_result : false ;
        }
    }

    //XBMC method implementations
    this.play = function (s_type)
    {
        var o_post              = new Object();
        o_post.media            = s_type;
        o_post.method           = 'Play';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.skipPrevious = function (s_type)
    {
        var o_post              = new Object();
        o_post.media            = s_type;
        o_post.method           = 'SkipPrevious';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.skipNext = function (s_type)
    {
        var o_post              = new Object();
        o_post.media            = s_type;
        o_post.method           = 'SkipNext';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.getCurrentPlaylist = function (s_type)
    {
        var o_post              = new Object();
        o_post.media            = s_type;
        o_post.method           = 'GetItems';
        o_post.boolResponse     = false;

        return this.getResponse(o_post);
    }

        this.getItems = function (s_type)
        {
            var o_result = this.getCurrentPlaylist(s_type);
            return (!o_result.items)? false : o_result.items ;
        }

        this.getCurrentItem = function (s_type)
        {
            var o_result = this.getCurrentPlaylist(s_type);
            return (!o_result.current)? false : o_result.current ;
        }

        this.getItemCount = function (s_type)
        {
            var o_result = this.getCurrentPlaylist(s_type);
            return (!o_result.total)? false : o_result.total ;
        }


    this.add = function (s_type, s_filePath)
    {
        var o_post              = new Object();
        o_post.media            = s_type;
        o_post.method           = 'GetItems';
        o_post.boolResponse     = true;
        o_post.parameter        = s_filePath;
        
        return this.getResponse(o_post);
    }

    this.clear = function (s_type)
    {
        var o_post              = new Object();
        o_post.media            = s_type;
        o_post.method           = 'Clear';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.shuffle = function (s_type)
    {
        var o_post              = new Object();
        o_post.media            = s_type;
        o_post.method           = 'Shuffle';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.unShuffle = function (s_type)
    {
        var o_post              = new Object();
        o_post.media            = s_type;
        o_post.method           = 'UnShuffle';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.create = function (s_type, s_file)
    {
        var o_post              = new Object();
        o_post.media            = s_type;
        o_post.method           = 'Create';
        o_post.boolResponse     = true;
        o_post.parameter        = s_file;

        return this.getResponse(o_post);
    }
}