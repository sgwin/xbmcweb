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
            var s_list = '<ul id="shares_list">';

            if ($('ul', o_container))
                $('ul', o_container).remove();

            for (var i=0; i<a_items.length; i++)
                s_list += '<li class="directory closed"><span path="' +a_items[i].file+ '" media="' +s_media+ '"><i>' +a_items[i].label+ '</i></span></li>';

            s_list += '</ul>';

            o_container.append(s_list);
            applyContextMenu($('#shares_list'));
            applyItemClick($('#shares_list'), s_media);
        }
        else
            alert('The ' +s_media+ ' shares could not be loaded.');
    }

    var toggleExpand = function (o_elm, s_media)
    {
        o_selectedElement = o_elm.parent();

        if (o_selectedElement.is('.closed'))
        {
            var a_items = o_parent.Xbmc.Files.getDirectories($(o_selectedElement).find('span').attr('path'));
            $('i', o_container).removeClass('selected');
            $('i', o_selectedElement).addClass('selected');

            if (a_items && a_items.length > 0)
            {
                var s_list = '';

                for (var j=0; j<a_items.length; j++)
                    s_list += '<li class="directory closed"><span path="' +a_items[j].file+ '" media="' +s_media+ '"><i>' +a_items[j].label+ '</i></span></li>';

                o_selectedElement.append('<ul></ul>');
                o_selectedElement.find('ul').hide();
                o_selectedElement.find('ul').append(s_list);
                applyItemClick(o_selectedElement.find('ul'), s_media);
                applyContextMenu(o_selectedElement.find('ul'));
                o_selectedElement.find('ul').slideDown('fast');
            }

            o_selectedElement.removeClass('closed').addClass('open');
        }
        else
        {
            o_selectedElement.find('ul').slideUp
            (
                'fast',
                function()
                {
                    o_selectedElement.find('ul').remove();
                }
            );

            o_selectedElement.removeClass('open').addClass('closed');
        }

        o_parent.Files.show(o_selectedElement.find('span').attr('path'), o_selectedElement.find('span').attr('media'));
    }

    var applyItemClick = function (o_list, s_media)
    {
        $('span', o_list).each(function (i_index, o_element)
        {
            $(this).unbind('click');
            $(this).bind
            (
                'click',
                function ()
                {
                    o_parent.MediaDetails.selectTab(1);
                    toggleExpand($(this), s_media);
                }
            );
        });
    }

    var applyContextMenu = function (o_list)
    {
        $('li span', o_list).contextMenu
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


