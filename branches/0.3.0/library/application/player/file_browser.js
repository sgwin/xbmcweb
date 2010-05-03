function FileBrowser (o_parent)
{
    var o_container;

    this.init = function (s_containerId)
    {
        o_container = $('#'+s_containerId);
    }

    this.show = function(s_path, s_media)
    {
        var a_items = o_parent.Xbmc.Files.getDirectoryContent(s_path, s_media);

        if (a_items)
        {
            var s_list = '<ul id="file_list">';

            if ($('ul', o_container))
                $('ul', o_container).remove();

            for (var i=0; i<a_items.length; i++)
            {
                if (a_items[i].file.charAt(a_items[i].file.length-1) != "/" && a_items[i].file.charAt(a_items[i].file.length-1) != "\\")
                    s_list += '<li class="file ' +s_media+ '" path="' +a_items[i].file+ '">' +a_items[i].label+ '</li>';
            }

            s_list += '</ul>';

            o_container.append(s_list);
        }
        else
            alert('The ' +s_media+ ' could not be loaded.');
        
    }
}


