function AudioPlayer (Xbmc)
{
    var s_audio     = 'audio';
    var s_namespace = 'AudioPlayer';

    this.playPause = function ()
    {
        return Xbmc.Player.playPause(s_audio);
    }

    this.stop = function ()
    {
        return Xbmc.Player.stop(s_audio);
    }

    this.skipPrevious = function ()
    {
        return Xbmc.Player.skipPrevious(s_audio);
    }

    this.skipNext = function ()
    {
        return Xbmc.Player.skipNext(s_audio);
    }

    this.bigSkipBackward = function ()
    {
        return Xbmc.Player.bigSkipBackward(s_audio);
    }

    this.bigSkipForward = function ()
    {
        return Xbmc.Player.bigSkipForward(s_audio);
    }

    this.smallSkipBackward = function ()
    {
        return Xbmc.Player.smallSkipBackward(s_audio);
    }

    this.smallSkipForward = function ()
    {
        return Xbmc.Player.smallSkipForward(s_audio);
    }

    this.rewind = function ()
    {
        return Xbmc.Player.rewind(s_audio);
    }

    this.forward = function ()
    {
        return Xbmc.Player.forward(s_audio);
    }

    this.getTime = function ()
    {
        return Xbmc.Player.getTime(s_audio);
    }

    this.getTimeMs = function ()
    {
        return Xbmc.Player.getTimeMs(s_audio);
    }

    this.getPercentage = function ()
    {
        return Xbmc.Player.getPercentage(s_audio);
    }

    this.seekTime = function (i_timeMs)
    {
        return Xbmc.Player.seekTime(i_timeMs, s_audio);
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