function Files (Xbmc)
{
    var s_namespace = 'Files';

    this.getSources = function ()
    {
        var o_result = Xbmc.post(s_namespace, 'GetSources');
        return (o_result)? o_result : false ;
    }

    this.download = function (s_filePath)
    {
        var o_result = Xbmc.post(s_namespace, 'Download', s_filePath);

        if (!o_result || o_result.path == undefined)
            return false;
        else
            return (o_result.path.indexOf('vfs/') == 0)? o_result.path.replace('vfs/', '') : o_result.path ;
    }

    this.getDirectory = function (s_directoryPath)
    {
        var o_result = Xbmc.post(s_namespace, 'GetDirectory', s_directoryPath);
        return (o_result)? o_result : false ;
    }
}