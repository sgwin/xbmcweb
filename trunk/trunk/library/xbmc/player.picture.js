function PicturePlayer (Player)
{
    //Namespace configuration
    var s_media     = 'picture';
    var i_minZoom   = 1;
    var i_maxZoom   = 9;

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

    this.moveLeft = function ()
    {
        if (!Player.isPictureShowing())
            return false;

        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'MoveLeft';
        o_post.boolResponse     = true;

        return Player.getResponse(o_post);
    }

    this.moveRight = function ()
    {
        if (!Player.isPictureShowing())
            return false;

        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'MoveRight';
        o_post.boolResponse     = true;

        return Player.getResponse(o_post);
    }

    this.moveDown = function ()
    {
        if (!Player.isPictureShowing())
            return false;

        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'MoveDown';
        o_post.boolResponse     = true;

        return Player.getResponse(o_post);
    }

    this.moveUp = function ()
    {
        if (!Player.isPictureShowing())
            return false;

        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'MoveUp';
        o_post.boolResponse     = true;

        return Player.getResponse(o_post);
    }

    this.zoomOut = function ()
    {
        if (!Player.isPictureShowing())
            return false;

        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'ZoomOut';
        o_post.boolResponse     = true;

        return Player.getResponse(o_post);
    }

    this.zoomIn = function ()
    {
        if (!Player.isPictureShowing())
            return false;

        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'ZoomIn';
        o_post.boolResponse     = true;

        return Player.getResponse(o_post);
    }

    this.zoom = function (i_level)
    {
        if (!i_level || !Xbmc.Helper.is_int(i_level) || i_level < i_minZoom || i_level > i_maxZoom || !Player.isPictureShowing())
            return false;

        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'Zoom';
        o_post.boolResponse     = true;

        return Player.getResponse(o_post);
    }

    this.rotate = function ()
    {
        if (!Player.isPictureShowing())
            return false;

        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'Rotate';
        o_post.boolResponse     = true;

        return Player.getResponse(o_post);
    }
}