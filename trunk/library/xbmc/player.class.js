function Player (Xbmc)
{
    var o_parent        = Xbmc;
    var s_namespace     = 'Player';

    this.getActivePlayers = function ()
    {
        var o_result = o_parent.post(s_namespace, 'GetActivePlayers');
        return (o_result && o_result.length > 0)? o_result : false ;
    }
}


