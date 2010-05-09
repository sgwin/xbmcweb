function PlaylistList (Application)
{
    var o_container;

    this.init = function (s_container)
    {
        o_container = $(s_container);
    }

    this.show = function(s_media)
    {
        var a_items = Application.Xbmc.Playlist.getItems(s_media);
        this.clear();

        if (a_items)
        {
            o_container.append('<ul></ul>');

            for (var i=0; i<a_items.length; i++)
                o_container.find('ul').append('<li class="playlistItem '+s_media+ '" index="' +i+ '" path="' +a_items[i].file+ '"><b>' +(i+1)+ '</b>. <span>' +a_items[i].label+ '</span></li>');

            o_container.find('ul').sortable(
            {
                opacity:        0.6,
                revert:         false,
                placeholder:    'ui-state-highlight',
                stop:           function (event, ui)
                {
                    var a_newItemOrder  = new Array();
                    var i_index         = 0;

                    $(this).find('li').each(function()
                    {
                        a_newItemOrder[i_index] = $(this).attr('index');
                        $(this).attr('index', i_index);
                        $(this).find('b').html(i_index+1);
                        i_index++;
                    });
                }
            });

            o_container.find('span').bind
            (
                'dblclick',
                function(e)
                {
                    Application.Xbmc.Playlist.play($(this).parent().attr('index'), s_media);
                }
            );
        }
    }

    this.clear = function ()
    {
        o_container.find('ul').remove();
    }
}