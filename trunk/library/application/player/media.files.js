function FileList (Application)
{
    var o_container;

    this.init = function (s_containerId)
    {
        o_container = $(s_containerId);
    }

    this.show = function(s_path, s_media)
    {
        var a_items = Application.Xbmc.Files.getFiles(s_path, s_media);

        if (a_items)
        {
            this.clear();
            o_container.append('<ul></ul>');

            for (var i=0; i<a_items.length; i++)
                o_container.find('ul').append('<li class="file '+s_media+ '" path="' +a_items[i].file+ '" title="click to play">' +a_items[i].label+ '</li>');

            o_container.find('li').bind
            (
                'click',
                function(e)
                {
                    s_media = (s_media == 'music')? 'audio' : s_media ;
                    Application.Xbmc.Playlist.clear(s_media);
                    Application.Xbmc.Playlist.addFile($(this).attr('path'), s_media);
                    Application.Xbmc.Playlist.play(0, s_media);
                }
            );
        }
    }

    this.clear = function ()
    {
        o_container.find('ul').remove();
    }
}


