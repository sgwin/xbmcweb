function MediaDetails ()
{
    var o_tabsContainer;

    this.init = function (s_containerId)
    {
        o_tabsContainer = $('#' +s_containerId);
        o_tabsContainer.tabs();
    }

    this.selectTab = function (i_index)
    {
        this.activeTab = i_index;
        o_tabsContainer.tabs('select', i_index);
    }
}


