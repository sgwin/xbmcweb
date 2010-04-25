function VideoLibrary (Library)
{
    var s_media = 'video';

    /* getMovies :: Parameters example (all parameters are optional)
     *
     * var o_parameters         = new Object();
     * o_parameters.fields      = new Array('plot', 'title', 'rating');
     * o_parameters.sortmethod  = 'rating';
     * o_parameters.sortorder   = 'descending';
     * o_parameters.start       = 0;
     * o_parameters.end         = 30;
     */
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

    /* getTvShows :: Parameters example (all parameters are optional)
     *
     * var o_parameters         = new Object();
     * o_parameters.fields      = new Array('plot', 'label', 'rating');
     * o_parameters.sortmethod  = 'label';
     * o_parameters.sortorder   = 'descending';
     * o_parameters.start       = 0;
     * o_parameters.end         = 30;
     */
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

    /* getSeasons :: Parameters example (all parameters are optional)
     *
     * var o_parameters         = new Object();
     * o_parameters.tvshowid    = 14;
     * o_parameters.fields      = new Array('season', 'label');
     * o_parameters.sortmethod  = 'season';
     * o_parameters.sortorder   = 'ascending';
     * o_parameters.start       = 0;
     * o_parameters.end         = 30;
     */
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

    /* getSeasonCount :: Parameters example (all parameters are optional)
     *
     * var o_parameters         = new Object();
     * o_parameters.tvshowid    = 14;
     */
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

    /* getEpisodes :: Parameters example (all parameters are optional)
     *
     * var o_parameters         = new Object();
     * o_parameters.tvshowid    = 14;
     * o_parameters.season      = 1;
     * o_parameters.fields      = new Array('season', 'label');
     * o_parameters.sortmethod  = 'label';
     * o_parameters.sortorder   = 'ascending';
     * o_parameters.start       = 0;
     * o_parameters.end         = 30;
     */
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

    /* getEpisodeCount :: Parameters example (all parameters are optional)
     *
     * var o_parameters         = new Object();
     * o_parameters.tvshowid    = 14;
     * o_parameters.season      = 1;
     */
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

    /* getMusicVideos :: Parameters example (all parameters are optional)
     *
     * var o_parameters         = new Object();
     * o_parameters.artistid    = 56;
     * o_parameters.albumid     = 34;
     * o_parameters.fields      = new Array('year', 'title');
     * o_parameters.sortmethod  = 'year';
     * o_parameters.sortorder   = 'ascending';
     * o_parameters.start       = 0;
     * o_parameters.end         = 30;
     */
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

    /* getMusicVideoCount :: Parameters example (all parameters are optional)
     *
     * var o_parameters         = new Object();
     * o_parameters.artistid    = 56;
     * o_parameters.albumid     = 34;
     */
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

    /* getRecentlyAddedMovies :: Parameters example (all parameters are optional)
     *
     * var o_parameters         = new Object();
     * o_parameters.fields      = new Array('plot', 'title', 'rating');
     * o_parameters.sortmethod  = 'date_added';
     * o_parameters.sortorder   = 'descending';
     * o_parameters.start       = 0;
     * o_parameters.end         = 30;
     */
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

    /* getRecentlyAddedEpisodes :: Parameters example (all parameters are optional)
     *
     * var o_parameters         = new Object();
     * o_parameters.fields      = new Array('plot', 'title', 'rating');
     * o_parameters.sortmethod  = 'date_added';
     * o_parameters.sortorder   = 'descending';
     * o_parameters.start       = 0;
     * o_parameters.end         = 30;
     */
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

    /* getRecentlyAddedMusicVideos :: Parameters example (all parameters are optional)
     *
     * var o_parameters         = new Object();
     * o_parameters.fields      = new Array('plot', 'title', 'rating');
     * o_parameters.sortmethod  = 'date_added';
     * o_parameters.sortorder   = 'descending';
     * o_parameters.start       = 0;
     * o_parameters.end         = 30;
     */
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
