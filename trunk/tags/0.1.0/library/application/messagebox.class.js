function MessageBox (Application)
{
    var o_parent = Application;

    this.show = function (o_message, s_title)
    {
        s_title = (s_title == undefined || s_title == '')? undefined : {header: s_title} ;
        $.jGrowl(JSON.stringify(o_message), s_title);
    }
}