function Playlist (Xbmc)
{
    var a_namespace         = new Array();
    a_namespace['video']    = 'VideoPlaylist';
    a_namespace['audio']    = 'AudioPlaylist';

    //returns true if paused
    this.play = function (s_type)
    {
        if (!Xbmc.Player.isAudioPlaying() && !Xbmc.Player.isVideoPlaying())
            return false;
        else
        {
            var s_activePlayer = Xbmc.Player.getActivePlayer();

            if (!s_activePlayer)
                return false;

            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_activePlayer] ;
            var o_result    = Xbmc.post(s_namespace, 'Play');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.skipPrevious = function (s_type)
    {
        if (!Xbmc.Player.isAudioPlaying() && !Xbmc.Player.isVideoPlaying())
            return false;
        else
        {
            var s_activePlayer = Xbmc.Player.getActivePlayer();

            if (!s_activePlayer)
                return false;

            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_activePlayer] ;
            var o_result    = Xbmc.post(s_namespace, 'SkipPrevious');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.skipNext = function (s_type)
    {
        if (!Xbmc.Player.isAudioPlaying() && !Xbmc.Player.isVideoPlaying())
            return false;
        else
        {
            var s_activePlayer = Xbmc.Player.getActivePlayer();

            if (!s_activePlayer)
                return false;

            var s_namespace = (s_type != undefined)? a_namespace[s_type] : a_namespace[s_activePlayer] ;
            var o_result    = Xbmc.post(s_namespace, 'SkipNext');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.getCurrentPlaylist = function (s_type)
    {
        if (s_type == undefined || (s_type != 'video' && s_type != 'audio'))
            return false;
        else
        {
            var o_result = Xbmc.post(a_namespace[s_type], 'GetItems');
            return (o_result)? o_result : false ;
        }
    }

    this.getItems = function (s_type)
    {
        var o_result = this.getCurrentPlaylist(s_type);
        return (!o_result || o_result.items == undefined)? false : o_result.items ;
    }

    this.getCurrentItem = function (s_type)
    {
        var o_result = this.getCurrentPlaylist(s_type);
        return (!o_result || o_result.current == undefined)? false : o_result.current ;
    }

    this.getItemCount = function (s_type)
    {
        var o_result = this.getCurrentPlaylist(s_type);
        return (!o_result || o_result.total == undefined)? false : o_result.total ;
    }

    this.add = function (s_type, s_filePath)
    {
        if (s_type == undefined || (s_type != 'video' && s_type != 'audio') || s_filePath == undefined)
            return false;
        else
        {
            var o_result = Xbmc.post(a_namespace[s_type], 'Add', s_filePath);
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.clear = function (s_type)
    {
        if (s_type == undefined || (s_type != 'video' && s_type != 'audio'))
            return false;
        else
        {
            var o_result = Xbmc.post(a_namespace[s_type], 'Clear');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.shuffle = function (s_type)
    {
        if (s_type == undefined || (s_type != 'video' && s_type != 'audio'))
            return false;
        else
        {
            var o_result = Xbmc.post(a_namespace[s_type], 'Shuffle');
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.unShuffle = function (s_type)
    {
        if (s_type == undefined || (s_type != 'video' && s_type != 'audio'))
            return false;
        else
        {
            var o_result = Xbmc.post(a_namespace[s_type], 'UnShuffle');
            return (o_result && o_result == "OK")? true : false ;
        }
    }
}