function Shares (Application)
{
    var o_container;
    var o_selectedElement;

    this.init = function (s_container)
    {
        o_container = $(s_container);
    }

    this.show = function (s_media)
    {
        var a_items = Application.Xbmc.Files.getShares(s_media);

        if (a_items)
        {
            o_container.find('ul').remove();
            o_container.append('<ul></ul>');

            for (var i=0; i<a_items.length; i++)
                o_container.find('ul').append('<li class="directory closed"><div path="' +a_items[i].file+ '" media="' +s_media+ '" title="' +a_items[i].label+ '">' +a_items[i].label+ '</div></li>');

            applyContextMenu(o_container.find('ul'));
            bindClickEvent(o_container);
        }
    }

    var toggleExpand = function (o_elm)
    {
        o_selectedElement = o_elm.parent();

        if (o_selectedElement.is('.closed'))
        {
            var a_items = Application.Xbmc.Files.getDirectories($(o_selectedElement).find('div').attr('path'));
            o_container.find('div').removeClass('selected');
            o_elm.addClass('selected');

            if (a_items && a_items.length > 0)
            {
                o_selectedElement.find('ul').remove();
                o_selectedElement.append('<ul></ul>');
                o_selectedElement.find('ul').hide();

                for (var j=0; j<a_items.length; j++)
                    o_selectedElement.find('ul').append('<li class="directory closed"><div path="' +a_items[j].file+ '" media="' +o_elm.attr('media')+ '" title="' +a_items[j].label+ '">' +a_items[j].label+ '</div></li>');

                bindClickEvent(o_selectedElement);
                applyContextMenu(o_selectedElement);
                o_selectedElement.find('ul').slideDown('fast');
            }

            o_selectedElement.removeClass('closed').addClass('open');
            Application.Media.Files.show(o_selectedElement.find('div').attr('path'), o_selectedElement.find('div').attr('media'));
            Application.Media.selectTab(1);
        }
        else
        {
            Application.Media.Files.clear();
            o_container.find('div').removeClass('selected');
            o_selectedElement.find('ul').slideUp('fast');
            o_selectedElement.removeClass('open').addClass('closed');
        }
    }

    var bindClickEvent = function (o_container)
    {
        o_container.find('div').unbind('click');
        o_container.find('div').bind(
            'click',
            function ()
            {
                toggleExpand($(this));
            }
        );
    }

    var applyContextMenu = function (o_selectedElement)
    {
        o_selectedElement.find('div').contextMenu
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
                    Application.Xbmc.Playlist.Audio.playDirectory(s_dirPath, true);
                    Application.Media.selectTab(2);
                }
                else if (action == 'enque')
                {
                    Application.Xbmc.Playlist.Audio.addDirectory(s_dirPath, true);
                    Application.Media.selectTab(2);
                }
            }
        );
    }
}


