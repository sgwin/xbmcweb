function Application(Xbmc)
{
    this.Xbmc           = Xbmc;
    this.Sources        = new Sources(this);
    this.Media          = new Media(this);
}