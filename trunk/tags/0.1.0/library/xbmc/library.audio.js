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
