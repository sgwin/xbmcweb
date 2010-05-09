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
    this.activePlayer  = undefined;

    //Volume
    this.volume             = 0;
    this.isMuted            = false;

    //Progress percentage and playing time

    this.setActivePlaylist = function ()
    {
        this.activePlaylist = (!this.activePlayer)? undefined : Xbmc.Playlist.getCurrentPlaylist(this.activePlayer) ;
        return (!this.activePlayer)? false : true ;
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
        var a_playerStatus = Xbmc.Player.getActivePlayers();

        this.isMediaPlaying     = (a_playerStatus['audio'] || a_playerStatus['video']);
        this.isVideoPlaying     = (a_playerStatus['video']);
        this.isAudioPlaying     = (a_playerStatus['audio']);
        this.isPictureShowing   = (a_playerStatus['picture']);

        if (this.isVideoPlaying)
            this.activePlayer = 'video';
        else if (this.isAudioPlaying)
            this.activePlayer = 'audio';
        else if(this.isPictureShowing)
            this.activePlayer = 'picture';
        else
            this.activePlayer = undefined;

        return true;
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


