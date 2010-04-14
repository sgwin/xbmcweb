function Controls (Application)
{
    var o_parent = Application;

    this.setSeekTime = function (s_playerType)
    {
        var s_time = o_parent.Xbmc.Player.getTime(s_playerType);

        if (s_time.total == 0)
            o_parent.MessageBox.show("No media is playing!")
        else
        {
            var i_userValue = prompt("Enter a value between 0 and " +s_time.total);

            if (i_userValue && s_time.total > 0 && i_userValue <= s_time.total)
            {
                var b_seekTimeSet = o_parent.Xbmc.Player.seekTime(i_userValue, s_playerType);

                if (b_seekTimeSet)
                    o_parent.MessageBox.show("Seek time successfully set to " +i_userValue+ "s");
                else
                    o_parent.MessageBox.show("Seek time could not be set to " +i_userValue);
            }
            else
                o_parent.MessageBox.show("The value enterd is incorrect or to high...");
        }
    }

    this.zoomPicture = function ()
    {
        var i_userValue = prompt("Enter a zoom level...");

        if (i_userValue && o_parent.Xbmc.Helper.is_int(i_userValue))
        {
            if (o_parent.Xbmc.Player.zoom(i_userValue))
                o_parent.MessageBox.show("Zoom level successfully set to " +i_userValue);
            else
                o_parent.MessageBox.show("Zoom level could not be set");
        }
        else
            o_parent.MessageBox.show("Incorrect zoom value entered");
    }
}


