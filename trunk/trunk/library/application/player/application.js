function Application(Xbmc)
{
    this.Xbmc           = Xbmc;
    this.Shares         = new Shares(this);
    this.MediaDetails   = new MediaDetails(this);
    this.Files          = new FileBrowser(this);
}