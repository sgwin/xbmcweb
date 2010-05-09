function Library (Xbmc)
{

    //Initialte child namespaces
    this.Video              = new VideoLibrary(this);
    this.Audio              = new MusicLibrary(this);

    //Namespace configuration
    var a_namespace         = new Array();
    a_namespace['video']    = 'VideoLibrary';
    a_namespace['audio']    = 'AudioLibrary';

    var a_media             = new Array();
    a_media[0]              = 'audio';
    a_media[1]              = 'video';

    //supporting methods
    this.isAllowedMedia = function (s_media)
    {
        return Xbmc.Helper.in_array(s_media, a_media);
    }

    this.getResponse = function (o_post)
    {
        o_post.media = (!o_post.media)? Xbmc.Status.activePlayer : o_post.media ;

        if (!this.isAllowedMedia(o_post.media) || !o_post.method)
            return false;

        var o_result = Xbmc.post(a_namespace[o_post.media], o_post.method, o_post.parameter);

        if (o_post.boolResponse)
            return (o_result == "OK");
        else
            return (o_result)? o_result : false ;
    }

    //XBMC method implementations
    this.scanForContent = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'ScanForContent';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }
}


