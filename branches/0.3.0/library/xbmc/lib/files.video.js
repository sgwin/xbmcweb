function VideoFiles (Files)
{
    //Namespace configuration
    var s_media = 'video';

    this.getSources = function ()
    {
        return Files.getSources(s_media);
    }

        this.getSharesCount = function ()
        {
            return Files.getSharesCount(s_media);
        }

        this.getShares = function ()
        {
            return Files.getShares(s_media);
        }

        this.getFiles = function (s_directoryPath)
        {
            return Files.getFiles(s_directoryPath, 'video');
        }
}