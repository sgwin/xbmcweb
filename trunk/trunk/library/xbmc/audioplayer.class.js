function AudioPlayer (Xbmc)
{
    var o_parent        = Xbmc;
    var s_namespace     = 'AudioPlayer';

    //returns true if paused
    this.togglePause = function ()
    {
        var o_result = o_parent.post(s_namespace, 'PlayPause');
        return (o_result && o_result.paused == true)? true : false ;
    }

    this.stop = function ()
    {
        var o_result = o_parent.post(s_namespace, 'Stop');
        return (o_result && o_result == "OK")? true : false ;
    }
    
    this.skipPrevious = function ()
    {
        var o_result = o_parent.post(s_namespace, 'SkipPrevious');
        return (o_result && o_result == "OK")? true : false ;
    }

    this.skipNext = function ()
    {
        var o_result = o_parent.post(s_namespace, 'SkipNext');
        return (o_result && o_result == "OK")? true : false ;
    }

    this.bigSkipBackward = function ()
    {
        var o_result = o_parent.post(s_namespace, 'BigSkipBackward');
        return (o_result && o_result == "OK")? true : false ;
    }

    this.bigSkipForward = function ()
    {
        var o_result = o_parent.post(s_namespace, 'BigSkipForward');
        return (o_result && o_result == "OK")? true : false ;
    }

    this.smallSkipBackward = function ()
    {
        var o_result = o_parent.post(s_namespace, 'SmallSkipBackward');
        return (o_result && o_result == "OK")? true : false ;
    }

    this.smallSkipForward = function ()
    {
        var o_result = o_parent.post(s_namespace, 'SmallSkipForward');
        return (o_result && o_result == "OK")? true : false ;
    }

    this.rewind = function ()
    {
        var o_result = o_parent.post(s_namespace, 'Rewind');
        return (o_result && o_result == "OK")? true : false ;
    }

    this.forward = function ()
    {
        var o_result = o_parent.post(s_namespace, 'Forward');
        return (o_result && o_result == "OK")? true : false ;
    }

    this.getTime = function ()
    {
        var o_result = o_parent.post(s_namespace, 'GetTime');

        if (o_result)
            return o_result;
        else
        {
            o_result        = new Object();
            o_result.time   = 0;
            o_result.total  = 0;
        }
    
        return o_result;
    }

    this.getTimeMs = function ()
    {
        var o_result = o_parent.post(s_namespace, 'GetTimeMS');

        if (o_result)
            return o_result;
        else
        {
            o_result        = new Object();
            o_result.time   = 0;
            o_result.total  = 0;
        }

        return o_result;
    }

    this.getPercentage = function ()
    {
        var o_result = o_parent.post(s_namespace, 'GetPercentage');
        return (o_result)? o_result : 0.0 ;
    }

    this.seekTime = function (i_timeMs)
    {
        if (i_timeMs == undefined || i_timeMs > this.getTimeMs())
            return false;
        
        var o_result = o_parent.post(s_namespace, 'SeekTime', i_timeMs);
        return (o_result && o_result == "OK")? true : false ;
    }

    this.record = function ()
    {
        var o_result = o_parent.post(s_namespace, 'Record');
        return (o_result && o_result == "OK")? true : false ;
    }
}