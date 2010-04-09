function Xbmc ()
{
	this.Config		= new Config(this);
	this.Status 	= new Status(this);
	this.Controls	= new Controls(this);
	this.Keyboard	= new Keyboard(this);
	this.Library	= new Library(this);
	this.Videos		= new Videos(this);
	this.Music		= new Music(this);
	this.Pictures	= new Pictures(this);
}
