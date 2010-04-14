function Player (Xbmc)
{
    var o_parent            = Xbmc;
    var a_namespace         = new Array();
    a_namespace['video']    = 'VideoPlayer';
    a_namespace['audio']    = 'AudioPlayer';
    a_namespace['music']    = 'AudioPlayer';

    this.getActivePlayers = function ()
    {
        var o_result = o_parent.post('Player', 'GetActivePlayers');
        return (o_result && o_result.length > 0)? o_result : false ;
    }

    this.getFirstActivePlayer = function ()
    {
        var o_activePlayers = this.getActivePlayers();
        return (!o_activePlayers)? false : o_activePlayers[0] ;
    }

    //returns true if paused
    this.playPause = function (s_type)
    {
        var s_firstActivePlayer = this.getFirstActivePlayer();

        if (!s_firstActivePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_firstActivePlayer] ;
            var o_result    = o_parent.post(s_namespace, 'PlayPause');
            return (o_result && o_result.paused == true)? true : false ;
        }
    }

    this.stop = function (s_type)
    {
        var s_firstActivePlayer = this.getFirstActivePlayer();

        if (!s_firstActivePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_firstActivePlayer] ;
            var o_result    = o_parent.post(s_namespace, 'Stop');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.skipPrevious = function (s_type)
    {
        var s_firstActivePlayer = this.getFirstActivePlayer();

        if (!s_firstActivePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_firstActivePlayer] ;
            var o_result    = o_parent.post(s_namespace, 'SkipPrevious');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.skipNext = function (s_type)
    {
        var s_firstActivePlayer = this.getFirstActivePlayer();

        if (!s_firstActivePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_firstActivePlayer] ;
            var o_result    = o_parent.post(s_namespace, 'SkipNext');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.bigSkipBackward = function (s_type)
    {
        var s_firstActivePlayer = this.getFirstActivePlayer();

        if (!s_firstActivePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_firstActivePlayer] ;
            var o_result    = o_parent.post(s_namespace, 'BigSkipBackward');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.bigSkipForward = function (s_type)
    {
        var s_firstActivePlayer = this.getFirstActivePlayer();

        if (!s_firstActivePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_firstActivePlayer] ;
            var o_result    = o_parent.post(s_namespace, 'BigSkipForward');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.smallSkipBackward = function (s_type)
    {
        var s_firstActivePlayer = this.getFirstActivePlayer();

        if (!s_firstActivePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_firstActivePlayer] ;
            var o_result    = o_parent.post(s_namespace, 'SmallSkipBackward');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.smallSkipForward = function (s_type)
    {
        var s_firstActivePlayer = this.getFirstActivePlayer();

        if (!s_firstActivePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_firstActivePlayer] ;
            var o_result    = o_parent.post(s_namespace, 'SmallSkipForward');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.rewind = function (s_type)
    {
        var s_firstActivePlayer = this.getFirstActivePlayer();

        if (!s_firstActivePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_firstActivePlayer] ;
            var o_result    = o_parent.post(s_namespace, 'Rewind');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.forward = function (s_type)
    {
        var s_firstActivePlayer = this.getFirstActivePlayer();

        if (!s_firstActivePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_firstActivePlayer] ;
            var o_result    = o_parent.post(s_namespace, 'Forward');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.getTime = function (s_type)
    {
        var s_firstActivePlayer = this.getFirstActivePlayer();
        var o_result            = new Object();
        o_result.time           = 0;
        o_result.total          = 0;

        if (s_firstActivePlayer != false)
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_firstActivePlayer] ;
            o_result        = o_parent.post(s_namespace, 'GetTime');
        }

        return o_result;
    }

    this.getTimeMs = function (s_type)
    {
        var s_firstActivePlayer = this.getFirstActivePlayer();
        var o_result            = new Object();
        o_result.time           = 0;
        o_result.total          = 0;

        if (s_firstActivePlayer != false)
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_firstActivePlayer] ;
            o_result        = o_parent.post(s_namespace, 'GetTimeMS');
        }

        return o_result;
    }

    this.getPercentage = function (s_type)
    {
        var s_firstActivePlayer = this.getFirstActivePlayer();
        var f_nullValue         = 0.0;

        if (!s_firstActivePlayer)
            return f_nullValue;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_firstActivePlayer] ;
            var o_result    = o_parent.post(s_namespace, 'GetPercentage');
            return (o_result)? o_result : f_nullValue ;
        }
    }

    this.seekTime = function (i_timeMs, s_type)
    {
        var s_firstActivePlayer = this.getFirstActivePlayer();

        if (!s_firstActivePlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_firstActivePlayer] ;
            if (i_timeMs == undefined || i_timeMs > this.getTimeMs())
                return false;

            var o_result = o_parent.post(s_namespace, 'SeekTime', i_timeMs);
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    //Audio only
    this.record = function ()
    {
        var s_firstActivePlayer = this.getFirstActivePlayer();

        if (s_firstActivePlayer == 'audio')
        {
            var o_result = o_parent.post(a_namespace['audio'], 'Record');
            return (o_result && o_result == "OK")? true : false ;
        }
        else
            return false;
    }
}


