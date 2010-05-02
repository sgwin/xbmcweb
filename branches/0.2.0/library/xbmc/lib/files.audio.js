function AudioFiles (Files)
{
    //Namespace configuration
    var s_media = 'music';

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
            return Files.getFiles(s_directoryPath, 'audio');
        }

    this.getDirectoryContent = function (s_directoryPath)
    {
        return Files.getDirectory(s_directoryPath);
    }
}