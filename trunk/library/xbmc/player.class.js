function Player (Xbmc)
{
    var o_parent            = Xbmc;
    var a_namespace         = new Array();
    a_namespace['video']    = 'VideoPlayer';
    a_namespace['audio']    = 'AudioPlayer';
    a_namespace['music']    = 'AudioPlayer';
    a_namespace['picture']  = 'PicturePlayer';
    a_namespace['image']    = 'PicturePlayer';
    a_namespace['photo']    = 'PicturePlayer';

    this.getActivePlayers = function ()
    {
        var o_result = o_parent.post('Player', 'GetActivePlayers');
        return (o_result && o_result.length > 0)? o_result : false ;
    }

    this.getDefaultPlayer = function ()
    {
        var o_activePlayers = this.getActivePlayers();
        return (!o_activePlayers)? false : o_activePlayers[0] ;
    }

    //returns true if paused
    this.playPause = function (s_type)
    {
        var s_defaultPlayer = this.getDefaultPlayer();

        if (!s_defaultPlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_defaultPlayer] ;
            var o_result    = o_parent.post(s_namespace, 'PlayPause');
            return (o_result && o_result.paused == true)? true : false ;
        }
    }

    this.stop = function (s_type)
    {
        var s_defaultPlayer = this.getDefaultPlayer();

        if (!s_defaultPlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_defaultPlayer] ;
            var o_result    = o_parent.post(s_namespace, 'Stop');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.skipPrevious = function (s_type)
    {
        var s_defaultPlayer = this.getDefaultPlayer();

        if (!s_defaultPlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_defaultPlayer] ;
            var o_result    = o_parent.post(s_namespace, 'SkipPrevious');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.skipNext = function (s_type)
    {
        var s_defaultPlayer = this.getDefaultPlayer();

        if (!s_defaultPlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_defaultPlayer] ;
            var o_result    = o_parent.post(s_namespace, 'SkipNext');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    //PicturePlayer only
    this.moveLeft = function ()
    {
        var a_activePlayers = this.getActivePlayers();

        if (a_activePlayers != false && o_parent.Helper.in_array('picture', a_activePlayers))
        {
            var o_result = o_parent.post(a_namespace['picture'], 'MoveLeft');
            return (o_result && o_result == "OK")? true : false ;
        }
        else
            return false;
    }

    //PicturePlayer only
    this.moveRight = function ()
    {
        var a_activePlayers = this.getActivePlayers();

        if (a_activePlayers != false && o_parent.Helper.in_array('picture', a_activePlayers))
        {
            var o_result = o_parent.post(a_namespace['picture'], 'MoveRight');
            return (o_result && o_result == "OK")? true : false ;
        }
        else
            return false;
    }

    //PicturePlayer only
    this.moveDown = function ()
    {
        var a_activePlayers = this.getActivePlayers();

        if (a_activePlayers != false && o_parent.Helper.in_array('picture', a_activePlayers))
        {
            var o_result = o_parent.post(a_namespace['picture'], 'MoveDown');
            return (o_result && o_result == "OK")? true : false ;
        }
        else
            return false;
    }

    //PicturePlayer only
    this.moveUp = function ()
    {
        var a_activePlayers = this.getActivePlayers();

        if (a_activePlayers != false && o_parent.Helper.in_array('picture', a_activePlayers))
        {
            var o_result = o_parent.post(a_namespace['picture'], 'MoveUp');
            return (o_result && o_result == "OK")? true : false ;
        }
        else
            return false;
    }

    //PicturePlayer only
    this.zoomOut = function ()
    {
        var a_activePlayers = this.getActivePlayers();

        if (a_activePlayers != false && o_parent.Helper.in_array('picture', a_activePlayers))
        {
            var o_result = o_parent.post(a_namespace['picture'], 'ZoomOut');
            return (o_result && o_result == "OK")? true : false ;
        }
        else
            return false;
    }

    //PicturePlayer only
    this.zoomIn = function ()
    {
        var a_activePlayers = this.getActivePlayers();

        if (a_activePlayers != false && o_parent.Helper.in_array('picture', a_activePlayers))
        {
            var o_result = o_parent.post(a_namespace['picture'], 'ZoomIn');
            return (o_result && o_result == "OK")? true : false ;
        }
        else
            return false;
    }

    //PicturePlayer only
    this.zoom = function (i_level)
    {
        var a_activePlayers = this.getActivePlayers();

        if (i_level != undefined && o_parent.Helper.is_int(i_level) && a_activePlayers != false && o_parent.Helper.in_array('picture', a_activePlayers))
        {
            var o_result = o_parent.post(a_namespace['picture'], 'Zoom', i_level);
            return (o_result && o_result == "OK")? true : false ;
        }
        else
            return false;
    }

    this.rotate = function ()
    {
        var a_activePlayers = this.getActivePlayers();

        if (a_activePlayers != false && o_parent.Helper.in_array('picture', a_activePlayers))
        {
            var o_result = o_parent.post(a_namespace['picture'], 'Rotate');
            return (o_result && o_result == "OK")? true : false ;
        }
        else
            return false;
    }

    this.bigSkipBackward = function (s_type)
    {
        var s_defaultPlayer = this.getDefaultPlayer();

        if (!s_defaultPlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_defaultPlayer] ;
            var o_result    = o_parent.post(s_namespace, 'BigSkipBackward');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.bigSkipForward = function (s_type)
    {
        var s_defaultPlayer = this.getDefaultPlayer();

        if (!s_defaultPlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_defaultPlayer] ;
            var o_result    = o_parent.post(s_namespace, 'BigSkipForward');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.smallSkipBackward = function (s_type)
    {
        var s_defaultPlayer = this.getDefaultPlayer();

        if (!s_defaultPlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_defaultPlayer] ;
            var o_result    = o_parent.post(s_namespace, 'SmallSkipBackward');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.smallSkipForward = function (s_type)
    {
        var s_defaultPlayer = this.getDefaultPlayer();

        if (!s_defaultPlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_defaultPlayer] ;
            var o_result    = o_parent.post(s_namespace, 'SmallSkipForward');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.rewind = function (s_type)
    {
        var s_defaultPlayer = this.getDefaultPlayer();

        if (!s_defaultPlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_defaultPlayer] ;
            var o_result    = o_parent.post(s_namespace, 'Rewind');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.forward = function (s_type)
    {
        var s_defaultPlayer = this.getDefaultPlayer();

        if (!s_defaultPlayer)
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_defaultPlayer] ;
            var o_result    = o_parent.post(s_namespace, 'Forward');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.getTime = function (s_type)
    {
        var s_defaultPlayer     = this.getDefaultPlayer();
        var o_result            = new Object();
        o_result.time           = 0;
        o_result.total          = 0;

        if (s_defaultPlayer != false)
        {
            var s_namespace     = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_defaultPlayer] ;
            var o_response      = o_parent.post(s_namespace, 'GetTime');
            o_result            = (o_response)? o_response : o_result ;
        }

        return o_result;
    }

    this.getTimeMs = function (s_type)
    {
        var s_defaultPlayer     = this.getDefaultPlayer();
        var o_result            = new Object();
        o_result.time           = 0;
        o_result.total          = 0;

        if (s_defaultPlayer != false)
        {
            var s_namespace     = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_defaultPlayer] ;
            var o_response      = o_parent.post(s_namespace, 'GetTimeMS');
            o_result            = (o_response)? o_response : o_result ;
        }

        return o_result;
    }

    this.getPercentage = function (s_type)
    {
        var s_defaultPlayer = this.getDefaultPlayer();
        var f_nullValue     = 0.0;

        if (!s_defaultPlayer)
            return f_nullValue;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_defaultPlayer] ;
            var o_result    = o_parent.post(s_namespace, 'GetPercentage');
            return (o_result)? o_result : f_nullValue ;
        }
    }

    this.seekTime = function (i_timeMs, s_type)
    {
        var s_defaultPlayer = this.getDefaultPlayer();

        if (!s_defaultPlayer || !o_parent.Helper.is_int(i_timeMs))
            return false;
        else
        {
            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_defaultPlayer] ;
            if (i_timeMs == undefined || i_timeMs > this.getTimeMs())
                return false;

            var o_result = o_parent.post(s_namespace, 'SeekTime', i_timeMs);
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    //AudioPlayer only
    this.recordAudio = function ()
    {
        var a_activePlayers = this.getActivePlayers();

        if (a_activePlayers != false && o_parent.Helper.in_array('audio', a_activePlayers))
        {
            var o_result = o_parent.post(a_namespace['audio'], 'Record');
            return (o_result && o_result == "OK")? true : false ;
        }
        else
            return false;
    }
}


