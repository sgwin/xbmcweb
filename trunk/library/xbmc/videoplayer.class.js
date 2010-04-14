function VideoPlayer (Xbmc)
{
    var s_video = 'video';

    this.playPause = function ()
    {
        return Xbmc.Player.playPause(s_video);
    }

    this.stop = function ()
    {
        return Xbmc.Player.stop(s_video);
    }

    this.skipPrevious = function ()
    {
        return Xbmc.Player.skipPrevious(s_video);
    }

    this.skipNext = function ()
    {
        return Xbmc.Player.skipNext(s_video);
    }

    this.bigSkipBackward = function ()
    {
        return Xbmc.Player.bigSkipBackward(s_video);
    }

    this.bigSkipForward = function ()
    {
        return Xbmc.Player.bigSkipForward(s_video);
    }

    this.smallSkipBackward = function ()
    {
        return Xbmc.Player.smallSkipBackward(s_video);
    }

    this.smallSkipForward = function ()
    {
        return Xbmc.Player.smallSkipForward(s_video);
    }

    this.rewind = function ()
    {
        return Xbmc.Player.rewind(s_video);
    }

    this.forward = function ()
    {
        return Xbmc.Player.forward(s_video);
    }

    this.getTime = function ()
    {
        return Xbmc.Player.getTime(s_video);
    }

    this.getTimeMs = function ()
    {
        return Xbmc.Player.getTimeMs(s_video);
    }

    this.getPercentage = function ()
    {
        return Xbmc.Player.getPercentage(s_video);
    }

    this.seekTime = function (i_timeMs)
    {
        return Xbmc.Player.seekTime(i_timeMs, s_video);
    }
}