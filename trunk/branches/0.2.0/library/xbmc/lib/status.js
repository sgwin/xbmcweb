function Status (Xbmc)
{
    //Now playing
    this.activePlaylist     = undefined;
    this.playingItemIndex   = -1;
    this.playingItem        = undefined;
    this.playingLabel       = undefined;
    this.playingFile        = undefined;
    this.playingThumbnail   = undefined;
    this.playingTimeMs      = 0;
    this.playingTimeMsTotal = 0;
    this.playingSeconds     = 0;
    this.playingSecondsTotal= 0;
    this.playingTime        = '00:00';

    //Next item
    this.nextItem           = undefined;
    this.nextLabel          = undefined;
    this.nextFile           = undefined;
    this.nextThumbnail      = undefined;

    //Now playing media
    this.isMediaPlaying     = false;
    this.isVideoPlaying     = false;
    this.isAudioPlaying     = false;
    this.isPictureShowing   = false;
    this.activeMediaPlayer  = undefined;

    //Volume
    this.volume             = 0;
    this.isMuted            = false;

    //Progress percentage and playing time

    this.setActivePlaylist = function ()
    {
        if (!this.activeMediaPlayer)
        {
            this.activePlaylist = undefined;
            return false;
        }
        else
        {
            this.activePlaylist = Xbmc.Playlist.getCurrentPlaylist(this.activeMediaPlayer);
            return true;
        }
    }

    this.setPlayingItem = function ()
    {
        if (!this.activePlaylist || this.activePlaylist.current == undefined || !this.activePlaylist.items)
        {
             this.playingItemIndex  = -1;
             this.playingItem       = undefined;
             this.playingLabel      = undefined;
             this.playingFile       = undefined;
             this.playingThumbnail  = undefined;

             return false;
        }
        else
        {
             this.playingItemIndex  = this.activePlaylist.current;
             this.playingItem       = this.activePlaylist.items[this.playingItemIndex];
             this.playingLabel      = (this.playingItem && this.playingItem.label)? this.playingItem.label : undefined ;
             this.playingFile       = (this.playingItem && this.playingItem.file)? this.playingItem.file : undefined ;
             this.playingThumbnail  = (this.playingItem && this.playingItem.thumbnail)? 'thumb/' +this.playingItem.thumbnail+ '.jpg' : undefined ;

             return true;
        }
    }

    this.setNextItem = function ()
    {
        if (!this.activePlaylist || this.activePlaylist.current == undefined || !this.activePlaylist.items)
        {
             this.nextItem          = undefined;
             this.nextLabel         = undefined;
             this.nextFile          = undefined;
             this.nextThumbnail     = undefined;

             return false;
        }
        else
        {
             this.nextItem          = this.activePlaylist.items[this.playingItemIndex+1];
             this.nextLabel         = (this.nextItem && this.nextItem.label)? this.nextItem.label : undefined ;
             this.nextFile          = (this.nextItem && this.nextItem.file)? this.nextItem.file : undefined ;
             this.nextThumbnail     = (this.nextItem && this.nextItem.thumbnail)? 'thumb/' +this.nextItem.thumbnail+ '.jpg' : undefined ;

             return true;
        }
    }

    this.setPlayingTime = function ()
    {
        if (!this.activePlaylist || this.activePlaylist.current == undefined || !this.activePlaylist.items)
        {
            this.playingTimeMsTotal = 0;
            this.playingTimeMs      = 0;
            this.playingSeconds     = 0;
            this.playingPercentage  = 0;
            this.playingTime        = '00:00';
            this.playingTimeTotal   = '00:00';

            return false;
        }
        else
        {
            var o_milliSeconds      = Xbmc.Player.getTimeMs();
            this.playingTimeMsTotal = (o_milliSeconds && o_milliSeconds.total != undefined)? o_milliSeconds.total : 0 ;
            this.playingTimeMs      = (o_milliSeconds && o_milliSeconds.time != undefined)? o_milliSeconds.time : 0 ;
            this.playingSeconds     = (this.playingTimeMs)? (this.playingTimeMs/1000) : 0 ;
            this.playingSecondsTotal= (this.playingTimeMsTotal)? (this.playingTimeMsTotal/1000) : 0 ;
            this.playingPercentage  = (this.playingTimeMsTotal && this.playingTimeMs)? Math.round((this.playingTimeMs/this.playingTimeMsTotal)*100) : 0 ;
            this.playingTime        = (this.playingSeconds)? Xbmc.Helper.milliSecondsToTime(this.playingTimeMs): '00:00' ;
            this.playingTimeTotal   = (this.playingTimeMsTotal)? Xbmc.Helper.milliSecondsToTime(this.playingTimeMsTotal): '00:00' ;

            return true;
        }
    }

    this.setPlayingMedia = function ()
    {
        var a_player = Xbmc.Player.getActivePlayers();

        if (!a_player || a_player.length < 1)
        {
            this.isMediaPlaying     = false;
            this.isVideoPlaying     = false;
            this.isAudioPlaying     = false;
            this.isPictureShowing   = false;

            return false;
        }
        else
        {
            this.isMediaPlaying     = (Xbmc.Helper.in_array('video', a_player) || Xbmc.Helper.in_array('audio', a_player));
            this.isVideoPlaying     = Xbmc.Helper.in_array('video', a_player);
            this.isAudioPlaying     = Xbmc.Helper.in_array('audio', a_player);
            this.isPictureShowing   = Xbmc.Helper.in_array('picture', a_player);

            if (this.isVideoPlaying)
                this.activeMediaPlayer = 'video';
            else if (this.isAudioPlaying)
                this.activeMediaPlayer = 'audio';
            else
                this.activeMediaPlayer = undefined;

            return true;
        }
    }

    this.setVolume = function ()
    {
        this.volume     = Xbmc.getVolume();
        this.isMuted    = (this.volume == 0);
    }

    this.setProgress = function ()
    {
        this.progressPercentage = Xbmc.Player.getPercentage();
        this.progressSeconds    = Xbmc.Player.getTime();
    }

    this.update = function ()
    {
        this.setPlayingMedia();
        this.setActivePlaylist();
        this.setPlayingItem();
        this.setNextItem();
        this.setPlayingTime();
        this.setVolume();
    }
}


