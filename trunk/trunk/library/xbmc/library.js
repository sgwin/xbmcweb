function Library (Xbmc)
{

    //Initialte child namespaces
    this.Video              = new VideoLibrary(this);
    this.Audio              = new MusicLibrary(this);

    //Namespace configuration
    var a_namespace         = new Array();
    a_namespace['video']    = 'VideoLibrary';
    a_namespace['audio']    = 'MusicLibrary';

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
        if (!this.isAllowedMedia(o_post.media) || !o_post.method)
            return false;

        var o_result = Xbmc.post(a_namespace[o_post.media], o_post.method, o_post.parameter);

        if (o_post.boolResponse)
            return (o_result == "OK");
        else
            return (o_result)? o_result : false ;
    }
}


