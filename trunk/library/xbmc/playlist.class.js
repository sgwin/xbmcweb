function Playlist (Xbmc)
{
    var a_namespace         = new Array();
    a_namespace['video']    = 'VideoPlaylist';
    a_namespace['audio']    = 'AudioPlaylist';
    var a_type              = new Array();
    a_type[0]               = 'audio';
    a_type[1]               = 'video';

    this.isAllowedType = function (s_type)
    {
        return Xbmc.Helper.in_array(a_type, s_type);
    }

    this.getBoolResponse = function (s_type, s_method, o_params)
    {
        s_type = (s_type == undefined)? Xbmc.Player.getActivePlayer() : s_type ;

        if (!this.isAllowedType(s_type) || s_method == undefined || !Xbmc.Player.isMediaPlaying())
            return false;
        else
        {
            var o_result = Xbmc.post(a_namespace[s_type], s_method, o_params);
            return (o_result && o_result == "OK")? true : false ;
        }
    }

    this.play = function (s_type)
    {
        return this.getBoolResponse(s_type, 'Play');
    }

    this.skipPrevious = function (s_type)
    {
        return this.getBoolResponse(s_type, 'SkipPrevious');
    }

    this.skipNext = function (s_type)
    {
        return this.getBoolResponse(s_type, 'SkipNext');
    }

    this.getCurrentPlaylist = function (s_type)
    {
        s_type = (s_type == undefined)? Xbmc.Player.getActivePlayer() : s_type ;

        if (!this.isAllowedType(s_type))
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
        return this.getBoolResponse(s_type, 'Add', s_filePath);
    }

    this.clear = function (s_type)
    {
        return this.getBoolResponse(s_type, 'Clear', s_filePath);
    }

    this.shuffle = function (s_type)
    {
        return this.getBoolResponse(s_type, 'Shuffle');
    }

    this.unShuffle = function (s_type)
    {
        return this.getBoolResponse(s_type, 'UnShuffle');
    }

    this.create = function (s_type, s_file)
    {

        s_type = (s_type == undefined)? Xbmc.Player.getActivePlayer() : s_type ;
        
    }
}