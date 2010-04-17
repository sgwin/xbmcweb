function VideoPlaylist (Playlist)
{
    //Namespace configuration
    var s_media = 'video';

    //XBMC method implementations
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


    this.add = function ()
    {
        return Playlist.add(s_media);
    }

    this.clear = function ()
    {
        return Playlist.clear(s_media);
    }

    this.shuffle = function ()
    {
        return Playlist.shuffle(s_media);
    }

    this.unShuffle = function ()
    {
        return Playlist.unShuffle(s_media);
    }
}