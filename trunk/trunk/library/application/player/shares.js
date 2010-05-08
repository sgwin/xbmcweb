function Shares (o_parent)
{
    var o_container;
    var o_selectedElement;

    this.init = function (s_containerId)
    {
        o_container = $('#'+s_containerId);
    }

    this.show = function (s_media)
    {
        var a_items = o_parent.Xbmc.Files.getShares(s_media);

        if (a_items)
        {
            o_container.find('ul').remove();
            o_container.append('<ul></ul>');

            for (var i=0; i<a_items.length; i++)
                o_container.find('ul').append('<li class="directory closed"><span path="' +a_items[i].file+ '" media="' +s_media+ '">' +a_items[i].label+ '</span></li>');

            applyContextMenu(o_container.find('ul'));
            bindClickEvent(o_container);
        }
    }

    var toggleExpand = function (o_elm)
    {
        o_selectedElement = o_elm.parent();

        if (o_selectedElement.is('.closed'))
        {
            var a_items = o_parent.Xbmc.Files.getDirectories($(o_selectedElement).find('span').attr('path'));
            $(o_container).find('span').removeClass('selected');
            o_elm.addClass('selected');

            if (a_items && a_items.length > 0)
            {
                o_selectedElement.find('ul').remove();
                o_selectedElement.append('<ul></ul>');
                o_selectedElement.find('ul').hide();

                for (var j=0; j<a_items.length; j++)
                    o_selectedElement.find('ul').append('<li class="directory closed"><span path="' +a_items[j].file+ '" media="' +o_elm.attr('media')+ '">' +a_items[j].label+ '</span></li>');

                bindClickEvent(o_selectedElement);
                applyContextMenu(o_selectedElement);
                o_selectedElement.find('ul').slideDown('fast');
            }

            o_selectedElement.removeClass('closed').addClass('open');
        }
        else
        {
            o_selectedElement.find('ul').slideUp('fast');
            o_selectedElement.removeClass('open').addClass('closed');
        }

        o_parent.Files.show(o_selectedElement.find('span').attr('path'), o_selectedElement.find('span').attr('media'));
    }

    var bindClickEvent = function (o_container)
    {
        o_container.find('span').unbind('click');
        o_container.find('span').bind(
            'click',
            function ()
            {
                toggleExpand($(this));
                o_parent.MediaDetails.selectTab(1);
            }
        );
    }

    var applyContextMenu = function (o_selectedElement)
    {
        o_selectedElement.find('span').contextMenu
        (
            {
                menu: 'context_menu_shares'
            },
            function(action, el, pos)
            {
                var s_dirPath = el.attr('path');
                var a_dirContent;

                if (action == 'play')
                {
                    a_dirContent = o_parent.Xbmc.Files.getDirectories(s_dirPath);
                    if (a_dirContent)
                        o_parent.Xbmc.Playlist.Audio.recursivePlay(a_dirContent);
                    o_parent.MediaDetails.selectTab(2);
                }
                else if (action == 'enque')
                {
                    a_dirContent = o_parent.Xbmc.Files.getDirectories(s_dirPath);
                    if (a_dirContent)
                        o_parent.Xbmc.Playlist.Audio.recursiveAdd(a_dirContent);
                    o_parent.MediaDetails.selectTab(2);
                }
            }
        );
    }
}


