function AudioPlayer (Xbmc)
{
    var s_media     = 'audio';
    var s_namespace = 'AudioPlayer';

    this.playPause = function ()
    {
        return Xbmc.Player.playPause(s_media);
    }

    this.stop = function ()
    {
        return Xbmc.Player.stop(s_media);
    }

    this.skipPrevious = function ()
    {
        return Xbmc.Player.skipPrevious(s_media);
    }

    this.skipNext = function ()
    {
        return Xbmc.Player.skipNext(s_media);
    }

    this.bigSkipBackward = function ()
    {
        return Xbmc.Player.bigSkipBackward(s_media);
    }

    this.bigSkipForward = function ()
    {
        return Xbmc.Player.bigSkipForward(s_media);
    }

    this.smallSkipBackward = function ()
    {
        return Xbmc.Player.smallSkipBackward(s_media);
    }

    this.smallSkipForward = function ()
    {
        return Xbmc.Player.smallSkipForward(s_media);
    }

    this.rewind = function ()
    {
        return Xbmc.Player.rewind(s_media);
    }

    this.forward = function ()
    {
        return Xbmc.Player.forward(s_media);
    }

    this.getTime = function ()
    {
        return Xbmc.Player.getTime(s_media);
    }

    this.getTimeMs = function ()
    {
        return Xbmc.Player.getTimeMs(s_media);
    }

    this.getPercentage = function ()
    {
        return Xbmc.Player.getPercentage(s_media);
    }

    this.seekTime = function (i_timeMs)
    {
        return Xbmc.Player.seekTime(i_timeMs, s_media);
    }

    this.record = function ()
    {
        if (Xbmc.Player.isAudioPlaying())
        {
            var o_result = Xbmc.post(s_namespace, 'Record');
            return (o_result && o_result == "OK")? true : false ;
        }
        else
            return false;
    }
}