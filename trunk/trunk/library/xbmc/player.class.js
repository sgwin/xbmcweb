function Player (Xbmc)
{
    var a_namespace         = new Array();
    a_namespace['video']    = 'VideoPlayer';
    a_namespace['audio']    = 'AudioPlayer';
    a_namespace['picture']  = 'PicturePlayer';

    this.getActivePlayers = function ()
    {
        var o_result = Xbmc.post('Player', 'GetActivePlayers');
        return (o_result && o_result.length > 0)? o_result : false ;
    }

    this.getActivePlayer = function ()
    {
        var o_activePlayers = this.getActivePlayers();
        return (!o_activePlayers)? false : o_activePlayers[0] ;
    }

    this.isMediaPlaying = function ()
    {
        var a_activePlayers = this.getActivePlayers();

        if (!a_activePlayers)
            return false;
        else if (a_activePlayers[0] == 'audio' || a_activePlayers[0] == 'video')
            return true;
        else
            return false;
    }

    this.isAudioPlaying = function ()
    {
        var a_activePlayers = this.getActivePlayers();

        if (!a_activePlayers)
            return false;
        else if (a_activePlayers[0] == 'audio')
            return true;
        else
            return false;
    }

    this.isVideoPlaying = function ()
    {
        var a_activePlayers = this.getActivePlayers();

        if (!a_activePlayers)
            return false;
        else if (a_activePlayers[0] == 'video')
            return true;
        else
            return false;
    }

    this.isPictureShowing = function ()
    {
        var a_activePlayers = this.getActivePlayers();

        if (!a_activePlayers)
            return false;
        else if (Xbmc.Helper.in_array('picture', a_activePlayers))
            return true;
        else
            return false;
    }

    //returns true if paused
    this.playPause = function (s_type)
    {
        var s_activePlayer = this.getActivePlayer();

        if (!s_activePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_activePlayer] ;
            var o_result    = Xbmc.post(s_namespace, 'PlayPause');
            return (o_result && o_result.paused == true)? true : false ;
        }
    }

    this.stop = function (s_type)
    {
        var s_activePlayer = this.getActivePlayer();

        if (!s_activePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_activePlayer] ;
            var o_result    = Xbmc.post(s_namespace, 'Stop');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.skipPrevious = function (s_type)
    {
        var s_activePlayer  = this.getActivePlayer();

        if (!s_activePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_activePlayer] ;
            var o_result    = Xbmc.post(s_namespace, 'SkipPrevious');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.skipNext = function (s_type)
    {
        var s_activePlayer = this.getActivePlayer();

        if (!s_activePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_activePlayer] ;
            var o_result    = Xbmc.post(s_namespace, 'SkipNext');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.bigSkipBackward = function (s_type)
    {
        var s_activePlayer = this.getActivePlayer();

        if (!s_activePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_activePlayer] ;
            var o_result    = Xbmc.post(s_namespace, 'BigSkipBackward');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.bigSkipForward = function (s_type)
    {
        var s_activePlayer = this.getActivePlayer();

        if (!s_activePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_activePlayer] ;
            var o_result    = Xbmc.post(s_namespace, 'BigSkipForward');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.smallSkipBackward = function (s_type)
    {
        var s_activePlayer = this.getActivePlayer();

        if (!s_activePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_activePlayer] ;
            var o_result    = Xbmc.post(s_namespace, 'SmallSkipBackward');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.smallSkipForward = function (s_type)
    {
        var s_activePlayer = this.getActivePlayer();

        if (!s_activePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_activePlayer] ;
            var o_result    = Xbmc.post(s_namespace, 'SmallSkipForward');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.rewind = function (s_type)
    {
        var s_activePlayer = this.getActivePlayer();

        if (!s_activePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_activePlayer] ;
            var o_result    = Xbmc.post(s_namespace, 'Rewind');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.forward = function (s_type)
    {
        var s_activePlayer = this.getActivePlayer();

        if (!s_activePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_activePlayer] ;
            var o_result    = Xbmc.post(s_namespace, 'Forward');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.getTime = function (s_type)
    {
        var s_activePlayer     = this.getActivePlayer();
        var o_result            = new Object();
        o_result.time           = 0;
        o_result.total          = 0;

        if (s_activePlayer != false)
        {
            var s_namespace     = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_activePlayer] ;
            var o_response      = Xbmc.post(s_namespace, 'GetTime');
            o_result            = (o_response)? o_response : o_result ;
        }

        return o_result;
    }

    this.getTimeMs = function (s_type)
    {
        var s_activePlayer     = this.getActivePlayer();
        var o_result            = new Object();
        o_result.time           = 0;
        o_result.total          = 0;

        if (s_activePlayer != false)
        {
            var s_namespace     = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_activePlayer] ;
            var o_response      = Xbmc.post(s_namespace, 'GetTimeMS');
            o_result            = (o_response)? o_response : o_result ;
        }

        return o_result;
    }

    this.getPercentage = function (s_type)
    {
        var s_activePlayer = this.getActivePlayer();
        var f_nullValue     = 0.0;

        if (!s_activePlayer)
            return f_nullValue;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_activePlayer] ;
            var o_result    = Xbmc.post(s_namespace, 'GetPercentage');
            return (o_result)? o_result : f_nullValue ;
        }
    }

    this.seekTime = function (i_timeMs, s_type)
    {
        var s_activePlayer = this.getActivePlayer();

        if (!s_activePlayer || !Xbmc.Helper.is_int(i_timeMs))
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_activePlayer] ;
            if (i_timeMs == undefined || i_timeMs > this.getTimeMs())
                return false;

            var o_result = Xbmc.post(s_namespace, 'SeekTime', i_timeMs);
            return (o_result && o_result == "OK")? true : false ;
        }
    }
}


