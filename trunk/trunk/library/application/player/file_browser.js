function FileBrowser (o_parent)
{
    var o_container;

    this.init = function (s_containerId)
    {
        o_container = $('#'+s_containerId);
    }

    this.show = function(s_path, s_media)
    {
        var a_items = o_parent.Xbmc.Files.getFiles(s_path, s_media);

        if (a_items)
        {
            o_container.find('ul').remove();
            o_container.append('<ul></ul>');

            for (var i=0; i<a_items.length; i++)
                o_container.find('ul').append('<li class="file '+s_media+ '" path="' +a_items[i].file+ '" title="click to play">' +a_items[i].label+ '</li>');

            o_container.find('li').bind
            (
                'click',
                function(e)
                {
                    s_media = (s_media == 'music')? 'audio' : s_media ;
                    o_parent.Xbmc.Playlist.clear(s_media);
                    o_parent.Xbmc.Playlist.add($(this).attr('path'), s_media);
                    o_parent.Xbmc.Playlist.play(0, s_media);
                }
            );
        }
    }
}


