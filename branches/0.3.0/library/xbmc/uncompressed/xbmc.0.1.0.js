function Helper ()
{
    this.getJson = function (s_namespace, s_method, a_parameters, i_id)
    {
        i_id  = (i_id == undefined || i_id == null || i_id == '')? 1 : i_id ;
        var s_parameters = '';

        if (a_parameters != undefined)
        {
            if (a_parameters.constructor == Object)
                s_parameters = ', "params": ' +JSON.stringify(a_parameters);
            else if (this.is_int(a_parameters))
                s_parameters = ', "params": ' +a_parameters ;
            else
                s_parameters = ', "params": "' +a_parameters+ '"' ;
        }

        return '{"jsonrpc": "2.0", "method": "' +s_namespace+ '.' +s_method+ '"' +s_parameters+ ', "id": ' +i_id+ '}';
    }

    this.is_int = function (i_value)
    {
        return (i_value.toString().search(/^-?[0-9]+$/) == 0);
    }

    this.in_array = function (needle, haystack, argStrict)
    {
        var key = '', strict = !!argStrict;

        if (strict)
        {
            for (key in haystack)
            {
                if (haystack[key] === needle)
                    return true;
            }
        }
        else
        {
            for (key in haystack)
            {
                if (haystack[key] == needle)
                    return true;
            }
        }
        
        return false;
    }
}

function JsonRpc (Xbmc)
{
    var s_namespace = 'JSONRPC';

    this.getResponse = function (o_post)
    {
        o_post.media = (!o_post.media)? Xbmc.Player.getActivePlayer() : o_post.media ;

        if (!o_post.method)
            return false;
        else
        {
            var o_result = Xbmc.post(s_namespace, o_post.method, o_post.parameter);

            if (o_post.boolResponse)
                return (o_result == "OK");
            else
                return (o_result)? o_result : false ;
        }
    }

    this.introspect = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'Introspect';
        o_post.boolResponse     = false;
        var o_response          = this.getResponse(o_post);

        return (o_response.commands)? o_response.commands : false ;
    }

    this.version = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'Version';
        o_post.boolResponse     = false;
        var o_response          = this.getResponse(o_post);

        return (o_response.version)? o_response.version : false ;
    }

    this.permission = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'Permission';
        o_post.boolResponse     = false;
        var o_response          = this.getResponse(o_post);

        return (o_response.permission)? o_response.permission : false ;
    }

    this.ping = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'Ping';
        o_post.boolResponse     = false;
        var o_response          = this.getResponse(o_post);

        return (o_response == "pong");
    }

    this.announce = function (s_sender, s_message)
    {
        var o_parameters        = new Object();
        o_parameters.sender     = s_sender;
        o_parameters.message    = s_message;
        var o_post              = new Object();
        o_post.method           = 'Announce';
        o_post.boolResponse     = true;
        o_post.parameter        = o_parameters;

        return this.getResponse(o_post);
    }
}

function System (Xbmc)
{
    var s_namespace = 'System';

    this.getResponse = function (o_post)
    {
        o_post.media = (!o_post.media)? Xbmc.Player.getActivePlayer() : o_post.media ;

        if (!o_post.method)
            return false;
        else
        {
            var o_result = Xbmc.post(s_namespace, o_post.method, o_post.parameter);

            if (o_post.boolResponse)
                return (o_result == "OK");
            else
                return (o_result)? o_result : false ;
        }
    }

    this.shutdown = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'Shutdown';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.suspend = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'Suspend';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.hibernate = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'Hibernate';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.reboot = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'Reboot';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.getInfo = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'GetInfo';
        o_post.boolResponse     = false;

        return this.getResponse(o_post);
    }
}

function Files (Xbmc)
{
    var s_namespace = 'Files';

    this.getResponse = function (o_post)
    {
        o_post.media = (!o_post.media)? Xbmc.Player.getActivePlayer() : o_post.media ;

        if (!o_post.method)
            return false;
        else
        {
            var o_result = Xbmc.post(s_namespace, o_post.method, o_post.parameter);

            if (o_post.boolResponse)
                return (o_result == "OK");
            else
                return (o_result)? o_result : false ;
        }
    }

    this.getSources = function ()
    {
        var o_post              = new Object();
        o_post.method           = 'GetSources';
        o_post.boolResponse     = false;
        
        return this.getResponse(o_post);
    }

    this.download = function (s_filePath)
    {
        var o_post              = new Object();
        o_post.method           = 'Download';
        o_post.boolResponse     = false;
        o_post.parameter        = s_filePath;
        var o_response          = this.getResponse(o_post);

        if (!o_response.path)
            return false;
        else
            return (o_response.path.indexOf('vfs/') == 0)? o_response.path.replace('vfs/', '') : o_response.path ;
    }

    this.getDirectory = function (s_directoryPath)
    {
        var o_post              = new Object();
        o_post.method           = 'GetDirectory';
        o_post.boolResponse     = false;
        o_post.parameter        = s_directoryPath;
        
        return this.getResponse(o_post);
    }
}

function Player (Xbmc)
{
    this.Video              = new VideoPlayer(this);
    this.Audio              = new AudioPlayer(this);
    this.Picture            = new PicturePlayer(this);

    var a_namespace         = new Array();
    a_namespace['player']   = 'Player';
    a_namespace['video']    = 'VideoPlayer';
    a_namespace['audio']    = 'AudioPlayer';
    a_namespace['picture']  = 'PicturePlayer';
    
    var a_media              = new Array();
    a_media[0]               = 'audio';
    a_media[1]               = 'video';
    a_media[2]               = 'picture';
    a_media[3]               = 'player';

    this.isAllowedType = function (s_media)
    {
        return Xbmc.Helper.in_array(s_media, a_media);
    }

    this.getResponse = function (o_post)
    {
        o_post.media = (!o_post.media)? Xbmc.Player.getActivePlayer() : o_post.media ;

        if (!this.isAllowedType(o_post.media) || !o_post.method)
            return false;
        else
        {
            var o_result = Xbmc.post(a_namespace[o_post.media], o_post.method, o_post.parameter);

            if (o_post.boolResponse)
                return (o_result == "OK");
            else
                return (o_result)? o_result : false ;
        }
    }

    this.getActivePlayers = function ()
    {
        var o_post              = new Object();
        o_post.media            = 'player';
        o_post.method           = 'GetActivePlayers';
        o_post.boolResponse     = false;
        var o_response          = this.getResponse(o_post);

        return (o_response.length && o_response.length > 0)? o_response : false ;
    }

    this.getActivePlayer = function ()
    {
        var o_activePlayers = this.getActivePlayers();
        return (!o_activePlayers)? false : o_activePlayers[0] ;
    }

    this.isMediaPlaying = function ()
    {
        var a_activePlayers = this.getActivePlayers();
        return (a_activePlayers[0] == 'audio' || a_activePlayers[0] == 'video');
    }

    this.isAudioPlaying = function ()
    {
        var a_activePlayers = this.getActivePlayers();
        return (a_activePlayers && a_activePlayers[0] == 'audio');
    }

    this.isVideoPlaying = function ()
    {
        var a_activePlayers = this.getActivePlayers();
        return (a_activePlayers && a_activePlayers[0] == 'video');
    }

    this.isPictureShowing = function ()
    {
        var a_activePlayers = this.getActivePlayers();
        return Xbmc.Helper.in_array('picture', a_activePlayers);
    }

    this.playPause = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'PlayPause';
        o_post.boolResponse     = false;
        var o_response          = this.getResponse(o_post);

        return (o_response.paused)? false : true ;
    }

    this.stop = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'Stop';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.skipPrevious = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'SkipPrevious';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.skipNext = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'SkipNext';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.bigSkipBackward = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'BigSkipBackward';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.bigSkipForward = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'BigSkipForward';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.smallSkipBackward = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'SmallSkipBackward';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.smallSkipForward = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'SmallSkipForward';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.rewind = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'Rewind';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.forward = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'Forward';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.getTime = function (s_media)
    {
        var o_default           = new Object();
        o_default.time          = 0;
        o_default.total         = 0;
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetTime';
        o_post.boolResponse     = false;
        var o_response          = this.getResponse(o_post);

        return (o_response)? o_response : o_default ;
    }

    this.getTimeMs = function (s_media)
    {
        var o_default           = new Object();
        o_default.time          = 0;
        o_default.total         = 0;
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetTimeMS';
        o_post.boolResponse     = false;
        var o_response          = this.getResponse(o_post);

        return (o_response)? o_response : o_default ;
    }

    this.getPercentage = function (s_media)
    {
        var f_default           = 0.0;
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetPercentage';
        o_post.boolResponse     = false;
        var f_response          = this.getResponse(o_post);

        return (f_response)? f_response : f_default ;
    }

    this.seekTime = function (i_timeMs, s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'SeekTime';
        o_post.boolResponse     = true;
        o_post.parameter        = i_timeMs;

        return this.getResponse(o_post);
    }
}

function VideoPlayer (Player)
{
    var s_media = 'video';

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
}

function AudioPlayer (Player)
{
    var s_media = 'audio';

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

function PicturePlayer (Player)
{
    var s_media     = 'picture';
    var i_minZoom   = 1;
    var i_maxZoom   = 9;

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

function Playlist (Xbmc)
{
    this.Video              = new VideoPlaylist(this);
    this.Audio              = new AudioPlaylist(this);

    var a_namespace         = new Array();
    a_namespace['video']    = 'VideoPlaylist';
    a_namespace['audio']    = 'AudioPlaylist';
    
    var a_media             = new Array();
    a_media[0]              = 'audio';
    a_media[1]              = 'video';

    this.isAllowedMedia = function (s_media)
    {
        return Xbmc.Helper.in_array(s_media, a_media);
    }

    this.getResponse = function (o_post)
    {
        o_post.media = (!o_post.media)? Xbmc.Player.getActivePlayer() : o_post.media ;

        if (!this.isAllowedMedia(o_post.media) || !o_post.method)
            return false;

        var o_result = Xbmc.post(a_namespace[o_post.media], o_post.method, o_post.parameter);

        if (o_post.boolResponse)
            return (o_result == "OK");
        else
            return (o_result)? o_result : false ;
    }

    this.play = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'Play';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.skipPrevious = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'SkipPrevious';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.skipNext = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'SkipNext';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.getCurrentPlaylist = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetItems';
        o_post.boolResponse     = false;

        return this.getResponse(o_post);
    }

        this.getItems = function (s_media)
        {
            var o_result = this.getCurrentPlaylist(s_media);
            return (!o_result.items)? false : o_result.items ;
        }

        this.getCurrentItem = function (s_media)
        {
            var o_result = this.getCurrentPlaylist(s_media);
            return (!o_result.current)? false : o_result.current ;
        }

        this.getItemCount = function (s_media)
        {
            var o_result = this.getCurrentPlaylist(s_media);
            return (!o_result.total)? false : o_result.total ;
        }

    this.shuffle = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'Shuffle';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.unShuffle = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'UnShuffle';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.add = function (s_file, s_media)
    {
        var o_parameters        = new Object();
        o_parameters.playlist   = (s_media)? s_media : undefined ;
        o_parameters.file       = s_file;
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'Add';
        o_post.boolResponse     = true;
        o_post.parameter        = o_parameters;

        return this.getResponse(o_post);
    }

    this.clear = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'Clear';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }

    this.create = function (s_file, s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'Create';
        o_post.boolResponse     = true;
        o_post.parameter        = s_file;

        return this.getResponse(o_post);
    }

    this.destroy = function (s_file, s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'Destroy';
        o_post.boolResponse     = true;
        o_post.parameter        = s_file;

        return this.getResponse(o_post);
    }

    this.remove = function (i_item, s_media)
    {
        var o_parameters        = new Object();
        o_parameters.playlist   = s_media;
        o_parameters.item       = i_item;
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'Remove';
        o_post.boolResponse     = true;
        o_post.parameter        = o_parameters;

        return this.getResponse(o_post);
    }

    this.swap = function (i_item1, i_item2, s_media)
    {
        var o_parameters        = new Object();
        o_parameters.playlist   = (s_media)? s_media : undefined ;
        o_parameters.item1      = i_item1;
        o_parameters.item2      = i_item2;
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'Swap';
        o_post.boolResponse     = true;
        o_post.parameter        = o_parameters;

        return this.getResponse(o_post);
    }
}

function VideoPlaylist (Playlist)
{
    var s_media = 'video';

    this.play = function ()
    {
        return Playlist.play(s_media);
    }

    this.skipPrevious = function ()
    {
        return Playlist.skipPrevious(s_media);
    }

    this.skipNext = function ()
    {
        return Playlist.skipNext(s_media);
    }
    
    this.getCurrentPlaylist = function ()
    {
        return Playlist.getCurrentPlaylist(s_media);
    }

        this.getItems = function ()
        {
            return Playlist.getItems(s_media);
        }

        this.getCurrentItem = function ()
        {
            return Playlist.getCurrentItem(s_media);
        }

        this.getItemCount = function ()
        {
            return Playlist.getItemCount(s_media);
        }

    this.shuffle = function ()
    {
        return Playlist.shuffle(s_media);
    }

    this.unShuffle = function ()
    {
        return Playlist.unShuffle(s_media);
    }

    this.add = function (s_file)
    {
        return Playlist.add(s_file, s_media);
    }

    this.clear = function ()
    {
        return Playlist.clear(s_media);
    }

    this.create = function (s_file)
    {
        return Playlist.create(s_file, s_media);
    }

    this.destroy = function (s_file)
    {
        return Playlist.destroy(s_file, s_media);
    }

    this.remove = function (i_item)
    {
        return Playlist.remove(i_item, s_media);
    }

    this.swap = function (i_item1, i_item2)
    {
        return Playlist.swap(i_item1, i_item2, s_media);
    }
}

function AudioPlaylist (Playlist)
{
    var s_media = 'audio';

    this.play = function ()
    {
        return Playlist.play(s_media);
    }

    this.skipPrevious = function ()
    {
        return Playlist.skipPrevious(s_media);
    }

    this.skipNext = function ()
    {
        return Playlist.skipNext(s_media);
    }

    this.getCurrentPlaylist = function ()
    {
        return Playlist.getCurrentPlaylist(s_media);
    }

        this.getItems = function ()
        {
            return Playlist.getItems(s_media);
        }

        this.getCurrentItem = function ()
        {
            return Playlist.getCurrentItem(s_media);
        }

        this.getItemCount = function ()
        {
            return Playlist.getItemCount(s_media);
        }

    this.shuffle = function ()
    {
        return Playlist.shuffle(s_media);
    }

    this.unShuffle = function ()
    {
        return Playlist.unShuffle(s_media);
    }

    this.add = function (s_file)
    {
        return Playlist.add(s_file, s_media);
    }

    this.clear = function ()
    {
        return Playlist.clear(s_media);
    }

    this.create = function (s_file)
    {
        return Playlist.create(s_file, s_media);
    }

    this.destroy = function (s_file)
    {
        return Playlist.destroy(s_file, s_media);
    }

    this.remove = function (i_item)
    {
        return Playlist.remove(i_item, s_media);
    }

    this.swap = function (i_item1, i_item2)
    {
        return Playlist.swap(i_item1, i_item2, s_media);
    }
}

function Library (Xbmc)
{
    this.Video              = new VideoLibrary(this);
    this.Audio              = new MusicLibrary(this);

    var a_namespace         = new Array();
    a_namespace['video']    = 'VideoLibrary';
    a_namespace['audio']    = 'MusicLibrary';

    var a_media             = new Array();
    a_media[0]              = 'audio';
    a_media[1]              = 'video';

    this.isAllowedMedia = function (s_media)
    {
        return Xbmc.Helper.in_array(s_media, a_media);
    }

    this.getResponse = function (o_post)
    {
        if (!this.isAllowedMedia(o_post.media) || !o_post.method)
            return false;

        var o_result = Xbmc.post(a_namespace[o_post.media], o_post.method, o_post.parameter);

        if (o_post.boolResponse)
            return (o_result == "OK");
        else
            return (o_result)? o_result : false ;
    }

    this.scanForContent = function (s_media)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'ScanForContent';
        o_post.boolResponse     = true;

        return this.getResponse(o_post);
    }
}

function VideoLibrary (Library)
{
    var s_media = 'video';

    this.getMovies = function (o_parameters)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetMovies';
        o_post.parameter        = o_parameters;
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.movies && o_response.movies.length > 0)? o_response.movies : false ;
    }

    this.getMovieCount = function ()
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetMovies';
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.total)? o_response.total : 0 ;
    }

    this.getTvShows = function (o_parameters)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetTvShows';
        o_post.parameter        = o_parameters;
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.tvshows && o_response.tvshows.length > 0)? o_response.tvshows : false ;
    }

    this.getTvShowCount = function ()
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetTvShows';
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.total)? o_response.total : 0 ;
    }

    this.getSeasons = function (o_parameters)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetSeasons';
        o_post.parameter        = o_parameters;
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.length && o_response.length > 0)? o_response : false ;
    }

    this.getSeasonCount = function (o_parameters)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetSeasons';
        o_post.parameter        = o_parameters;
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.total)? o_response.total : 0 ;
    }

    this.getEpisodes = function (o_parameters)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetEpisodes';
        o_post.parameter        = o_parameters;
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.length && o_response.length > 0)? o_response : false ;
    }

    this.getEpisodeCount = function (o_parameters)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetEpisodes';
        o_post.parameter        = o_parameters;
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.total)? o_response.total : 0 ;
    }

    this.getMusicVideoAlbums = function ()
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetMusicVideoAlbums';
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.length && o_response.length > 0)? o_response : false ;
    }

    this.getMusicVideoAlbumCount = function ()
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetMusicVideoAlbums';
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.total)? o_response.total : 0 ;
    }

    this.getMusicVideos = function (o_parameters)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetMusicVideos';
        o_post.parameter        = o_parameters;
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.length && o_response.length > 0)? o_response : false ;
    }

    this.getMusicVideoCount = function (o_parameters)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetMusicVideos';
        o_post.parameter        = o_parameters;
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.total)? o_response.total : 0 ;
    }

    this.getRecentlyAddedMovies = function (o_parameters)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetRecentlyAddedMovies';
        o_post.parameter        = o_parameters;
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.length && o_response.length > 0)? o_response : false ;
    }

    this.getRecentlyAddedMovieCount = function ()
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetRecentlyAddedMovies';
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.total)? o_response.total : 0 ;
    }

    this.getRecentlyAddedEpisodes = function (o_parameters)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'getRecentlyAddedEpisodes';
        o_post.parameter        = o_parameters;
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.length && o_response.length > 0)? o_response : false ;
    }

    this.getRecentlyAddedEpisodeCount = function ()
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'getRecentlyAddedEpisodes';
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.total)? o_response.total : 0 ;
    }

    this.getRecentlyAddedMusicVideos = function (o_parameters)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetRecentlyAddedMusicVideos';
        o_post.parameter        = o_parameters;
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.length && o_response.length > 0)? o_response : false ;
    }

    this.getRecentlyAddedMusicVideoCount = function ()
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetRecentlyAddedMusicVideos';
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.total)? o_response.total : 0 ;
    }

    this.scanForContent = function ()
    {
        return Library.scanForContent(s_media);
    }
}

function MusicLibrary (Library)
{
    var s_media = 'audio';

    this.getArtists = function ()
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetArtists';
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.artists && o_response.artists.length > 0)? o_response.artists : false ;
    }

    this.getArtistCount = function ()
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetArtists';
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.total)? o_response.total : 0 ;
    }

    this.getAlbums = function (s_filter)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetAlbums';
        o_post.parameter        = s_filter;
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.albums && o_response.albums.length > 0)? o_response.albums : false ;
    }

    this.getAlbumCount = function ()
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetAlbums';
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.total)? o_response.total : 0 ;
    }

    this.getSongs = function (s_filter)
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetSongs';
        o_post.parameter        = s_filter;
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.songs && o_response.songs.length > 0)? o_response.songs : false ;
    }

    this.getSongCount = function ()
    {
        var o_post              = new Object();
        o_post.media            = s_media;
        o_post.method           = 'GetSongs';
        o_post.boolResponse     = false;
        var o_response          = Library.getResponse(o_post);

        return (o_response.total)? o_response.total : 0 ;
    }

    this.scanForContent = function ()
    {
        return Library.scanForContent(s_media);
    }
}

function Xbmc (config)
{
    this.s_apiPath      = "";
    this.s_username     = "";
    this.s_password     = "";
    this.b_debug        = false;
    this.o_httpRequest  = new XMLHttpRequest();
    var s_namespace     = 'XBMC';

    this.Helper         = new Helper();
    this.JsonRpc 	= new JsonRpc(this);
    this.System		= new System(this);
    this.Files          = new Files(this);
    this.Player         = new Player(this);
    this.Playlist	= new Playlist(this);
    this.Library	= new Library(this);

    this.init = function (a_config)
    {
        this.s_apiPath      = "http://" +a_config['address']+ ":" +a_config['port']+ "/jsonrpc";
        this.s_username     = (a_config['username'] != undefined)? a_config['username'] : "" ;
        this.s_password     = (a_config['password'] != undefined)? a_config['password'] : "" ;
        this.b_debug        = (a_config['debug'] != undefined)? a_config['debug'] : false;
    }

    this.getApiPath = function ()
    {
        return this.s_apiPath;
    }

    this.debuggingEnabled = function ()
    {
        return this.b_debug;
    }

    this.log = function (s_message, s_level)
    {
        if (s_message == undefined || s_level == undefined)
            return false;

        var o_parameters        = new Object();
        o_parameters.message    = s_message;
        o_parameters.level      = s_level;

        var o_result = this.post(s_namespace, 'Log', o_parameters);
        return (o_result == "OK");
    }

    this.post = function (s_namespace, s_method, a_parameters, i_id)
    {
        if (s_namespace == undefined || s_method == undefined)
            return false;
        else
        {
            this.o_httpRequest.open("POST", this.s_apiPath, false);
            this.o_httpRequest.send(this.Helper.getJson(s_namespace, s_method, a_parameters, i_id));
            var o_response = JSON.parse(this.o_httpRequest.responseText);

            return (o_response == undefined || o_response.error)? false : o_response.result ;
        }
    }

    this.init(config);
}


















