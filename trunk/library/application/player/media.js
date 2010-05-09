function Media (Application)
{
    this.Files      = new FileList(Application);
    this.Playlist   = new PlaylistList(Application);
    var o_tabsContainer;

    this.init = function (s_container)
    {
        o_tabsContainer = $(s_container);
        o_tabsContainer.tabs();
    }

    this.selectTab = function (i_index)
    {
        o_tabsContainer.tabs('select', i_index);
    }
}


