function Application(XbmcInstance)
{
    this.Xbmc       = XbmcInstance;
    this.MessageBox = new MessageBox(this);
    this.Controls   = new Controls(this);
}