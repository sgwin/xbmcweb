function Helper ()
{
    this.getJson = function (s_namespace, s_method, a_parameters, i_id)
    {
        i_id                = (i_id == undefined || i_id == null)? 1 : i_id ;
        var s_parameters    = (a_parameters != undefined && a_parameters.constructor == Object)? ', "params": ' +JSON.stringify(a_parameters)+ ' ' : '' ;

        if (a_parameters != undefined)
            s_parameters = (a_parameters.constructor == Object)? ', "params": ' +JSON.stringify(a_parameters) : ', "params": ' +a_parameters ;
        else
            s_parameters = '';

        var s_json = '{"jsonrpc": "2.0", "method": "' +s_namespace+ '.' +s_method+ '"' +s_parameters+ ', "id": ' +i_id+ '}';

        return s_json;
    }

    this.isInt = function (i_value)
    {
        return (i_value.toString().search(/^-?[0-9]+$/) == 0);
    }

}