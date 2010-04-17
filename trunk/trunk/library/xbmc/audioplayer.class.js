function AudioPlayer (Player)
{
    //Namespace configuration
    var s_media = 'audio';

    //XBMC method implementations
    this.playPause = function ()
    {
        return Player.playPause(s_media);
    }

    this.stop = function ()
    {
        return Player.stop(s_media);
    }

    this.skipPrevious = function ()
    {
        return Player.skipPrevious(s_media);
    }

    this.skipNext = function ()
    {
        return Player.skipNext(s_media);
    }

    this.bigSkipBackward = function ()
    {
        return Player.bigSkipBackward(s_media);
    }

    this.bigSkipForward = function ()
    {
        return Player.bigSkipForward(s_media);
    }

    this.smallSkipBackward = function ()
    {
        return Player.smallSkipBackward(s_media);
    }

    this.smallSkipForward = function ()
    {
        return Player.smallSkipForward(s_media);
    }

    this.rewind = function ()
    {
        return Player.rewind(s_media);
    }

    this.forward = function ()
    {
        return Player.forward(s_media);
    }

    this.getTime = function ()
    {
        return Player.getTime(s_media);
    }

    this.getTimeMs = function ()
    {
        return Player.getTimeMs(s_media);
    }

    this.getPercentage = function ()
    {
        return Player.getPercentage(s_media);
    }

    this.seekTime = function (i_timeMs)
    {
        return Player.seekTime(i_timeMs, s_media);
    }

    this.record = function ()
    {
        if (!Player.isAudioPlaying())
            return false;

        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'Record';
        o_post.boolResponse     = true;

        return Player.getResponse(o_post);
    }
}