function VideoPlaylist (Xbmc)
{
    var s_media = 'video';

    this.play = function ()
    {
        return Xbmc.Playlist.play(s_media);
    }

    this.skipPrevious = function ()
    {
        return Xbmc.Playlist.skipPrevious(s_media);
    }

    this.skipNext = function ()
    {
        return Xbmc.Playlist.skipNext(s_media);
    }
    
    this.getCurrentPlaylist = function ()
    {
        return Xbmc.Playlist.getCurrentPlaylist(s_media);
    }

    this.getItems = function ()
    {
        return Xbmc.Playlist.getItems(s_media);
    }

    this.getCurrentItem = function ()
    {
        return Xbmc.Playlist.getCurrentItem(s_media);
    }

    this.getItemCount = function ()
    {
        return Xbmc.Playlist.getItemCount(s_media);
    }

    this.add = function ()
    {
        return Xbmc.Playlist.add(s_media);
    }

    this.clear = function ()
    {
        return Xbmc.Playlist.clear(s_media);
    }

    this.shuffle = function ()
    {
        return Xbmc.Playlist.shuffle(s_media);
    }

    this.unShuffle = function ()
    {
        return Xbmc.Playlist.unShuffle(s_media);
    }
}