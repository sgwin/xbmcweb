function Helper ()
{
    this.getJson = function (s_namespace, s_method, a_parameters, i_id)
    {
        i_id  = (i_id == undefined || i_id == null || i_id == '')? 1 : i_id ;
        var s_parameters = '';

        if (a_parameters != undefined)
        {
            if (a_parameters.constructor == Object)
                s_parameters = ', "params": ' +JSON.stringify(a_parameters);
            else if (this.is_int(a_parameters))
                s_parameters = ', "params": ' +a_parameters ;
            else
                s_parameters = ', "params": "' +a_parameters+ '"' ;
        }

        return '{"jsonrpc": "2.0", "method": "' +s_namespace+ '.' +s_method+ '"' +s_parameters+ ', "id": ' +i_id+ '}';
    }

    this.is_int = function (i_value)
    {
        return (i_value.toString().search(/^-?[0-9]+$/) == 0);
    }

    this.in_array = function (needle, haystack, argStrict)
    {
        var key = '', strict = !!argStrict;

        if (strict)
        {
            for (key in haystack)
            {
                if (haystack[key] === needle)
                    return true;
            }
        }
        else
        {
            for (key in haystack)
            {
                if (haystack[key] == needle)
                    return true;
            }
        }
        
        return false;
    }

}