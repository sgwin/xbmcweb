function Player (Xbmc)
{
    //Initiate child namespaces
    this.Video              = new VideoPlayer(this);
    this.Audio              = new AudioPlayer(this);
    this.Picture            = new PicturePlayer(this);

    //Namespace configuration
    var a_namespace         = new Array();
    a_namespace['player']   = 'Player';
    a_namespace['video']    = 'VideoPlayer';
    a_namespace['audio']    = 'AudioPlayer';
    a_namespace['picture']  = 'PicturePlayer';
    
    var a_media              = new Array();
    a_media[0]               = 'audio';
    a_media[1]               = 'video';
    a_media[2]               = 'picture';
    a_media[3]               = 'player';

    //Supporting methods
    this.isAllowedType = function (s_media)
    {
        return Xbmc.Helper.in_array(s_media, a_media);
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
    this.getActivePlayers = function ()
    {
        var o_post              = new Object();
        o_post.media            = 'player';
        o_post.method           = 'GetActivePlayers';
        o_post.boolResponse     = false;
        var o_response          = this.getResponse(o_post);

        return (o_response.length && o_response.length > 0)? o_response : false ;
    }

    this.getActivePlayer = function ()
    {
        var o_activePlayers = this.getActivePlayers();
        return (!o_activePlayers)? false : o_activePlayers[0] ;
    }

    this.isMediaPlaying = function ()
    {
        var a_activePlayers = this.getActivePlayers();
        return (a_activePlayers[0] == 'audio' || a_activePlayers[0] == 'video');
    }

    this.isAudioPlaying = function ()
    {
        var a_activePlayers = this.getActivePlayers();
        return (a_activePlayers && a_activePlayers[0] == 'audio');
    }

    this.isVideoPlaying = function ()
    {
        var a_activePlayers = this.getActivePlayers();
        return (a_activePlayers && a_activePlayers[0] == 'video');
    }

    this.isPictureShowing = function ()
    {
        var a_activePlayers = this.getActivePlayers();
        return Xbmc.Helper.in_array('picture', a_activePlayers);
    }

    //returns true if playing
    this.playPause = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'PlayPause';
        o_post.boolResponse     = false;
        var o_response          = this.getResponse(o_post);

        return (o_response.paused)? false : true ;
    }

    this.stop = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'Stop';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.skipPrevious = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'SkipPrevious';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.skipNext = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'SkipNext';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.bigSkipBackward = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'BigSkipBackward';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.bigSkipForward = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'BigSkipForward';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.smallSkipBackward = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'SmallSkipBackward';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.smallSkipForward = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'SmallSkipForward';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.rewind = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'Rewind';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.forward = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'Forward';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.getTime = function (s_media)
    {
        var o_default           = new Object();
        o_default.time          = 0;
        o_default.total         = 0;
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetTime';
        o_post.boolResponse     = false;
        var o_response          = this.getResponse(o_post);

        return (o_response)? o_response : o_default ;
    }

    this.getTimeMs = function (s_media)
    {
        var o_default           = new Object();
        o_default.time          = 0;
        o_default.total         = 0;
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetTimeMS';
        o_post.boolResponse     = false;
        var o_response          = this.getResponse(o_post);

        return (o_response)? o_response : o_default ;
    }

    this.getPercentage = function (s_media)
    {
        var f_default           = 0.0;
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetPercentage';
        o_post.boolResponse     = false;
        var f_response          = this.getResponse(o_post);

        return (f_response)? f_response : f_default ;
    }

    this.seekTime = function (i_timeMs, s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'SeekTime';
        o_post.boolResponse     = true;
        o_post.parameter        = i_timeMs;

        return this.getResponse(o_post);
    }
}


