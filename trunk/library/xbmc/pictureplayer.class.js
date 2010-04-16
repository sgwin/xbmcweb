function PicturePlayer (Xbmc)
{
    var s_media     = 'picture';
    var s_namespace = 'PicturePlayer';

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

    this.moveLeft = function ()
    {
        if (Xbmc.Player.isPictureShowing())
        {
            var o_result = Xbmc.post(s_namespace, 'MoveLeft');
            return (o_result && o_result == "OK")? true : false ;
        }
        else
            return false;
    }

    this.moveRight = function ()
    {
        if (Xbmc.Player.isPictureShowing())
        {
            var o_result = Xbmc.post(s_namespace, 'MoveRight');
            return (o_result && o_result == "OK")? true : false ;
        }
        else
            return false;
    }

    this.moveDown = function ()
    {
        if (Xbmc.Player.isPictureShowing())
        {
            var o_result = Xbmc.post(s_namespace, 'MoveDown');
            return (o_result && o_result == "OK")? true : false ;
        }
        else
            return false;
    }

    this.moveUp = function ()
    {
        if (Xbmc.Player.isPictureShowing())
        {
            var o_result = Xbmc.post(s_namespace, 'MoveUp');
            return (o_result && o_result == "OK")? true : false ;
        }
        else
            return false;
    }

    this.zoomOut = function ()
    {
        if (Xbmc.Player.isPictureShowing())
        {
            var o_result = Xbmc.post(s_namespace, 'ZoomOut');
            return (o_result && o_result == "OK")? true : false ;
        }
        else
            return false;
    }

    this.zoomIn = function ()
    {
        if (Xbmc.Player.isPictureShowing())
        {
            var o_result = Xbmc.post(s_namespace, 'ZoomIn');
            return (o_result && o_result == "OK")? true : false ;
        }
        else
            return false;
    }

    this.zoom = function (i_level)
    {
        if (i_level != undefined && Xbmc.Helper.is_int(i_level) && i_level > 0 && i_level < 10 && Xbmc.Player.isPictureShowing())
        {
            var o_result = Xbmc.post(s_namespace, 'Zoom', i_level);
            return (o_result && o_result == "OK")? true : false ;
        }
        else
            return false;
    }

    this.rotate = function ()
    {
        if (Xbmc.Player.isPictureShowing())
        {
            var o_result = Xbmc.post(s_namespace, 'Rotate');
            return (o_result && o_result == "OK")? true : false ;
        }
        else
            return false;
    }
}