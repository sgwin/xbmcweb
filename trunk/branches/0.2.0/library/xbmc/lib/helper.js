function Helper ()
{
    this.getJson = function (s_namespace, s_method, a_parameters, i_id)
    {
        i_id  = (i_id == undefined || i_id == null || i_id == '')? 1 : i_id ;
        var s_parameters = '';

        if (a_parameters != undefined)
        {
            if (a_parameters.constructor == Object)
                s_parameters = ',"params":' +JSON.stringify(a_parameters);
            else if (this.is_int(a_parameters))
                s_parameters = ',"params":' +a_parameters ;
            else
                s_parameters = ',"params":"' +a_parameters+ '"' ;
        }

        return '{"jsonrpc":"2.0","method":"' +s_namespace+ '.' +s_method+ '"' +s_parameters+ ',"id":' +i_id+ '}';
    }

    this.milliSecondsToTime = function (i_milliSeconds)
    {
        var o_date      = new Date(i_milliSeconds);
        var i_hours     = o_date.getUTCHours();
        i_hours         = (i_hours > 0 && i_hours < 10)? "0" +i_hours : i_hours ;
        var i_minutes   = o_date.getUTCMinutes();
        i_minutes       = (i_minutes > 0 && i_minutes < 10)? "0" +i_minutes : i_minutes ;
        var i_seconds   = o_date.getUTCSeconds();
        i_seconds       = (i_seconds > 0 && i_seconds < 10)? "0" +i_seconds : i_seconds ;

        var s_time      = "";
        s_time          += (i_hours > 0)? i_hours+ ":" : "" ;
        s_time          += (i_minutes > 0)? i_minutes+ ":" : "00:" ;
        s_time          += (i_seconds > 0)? i_seconds : "00" ;

        return s_time;
    }

    this.sort_by = function(field, reverse, primer)
    {
       reverse = (reverse) ? -1 : 1;

       return function(a, b)
       {
           a = a[field];
           b = b[field];

           if (primer != undefined)
           {
               a = primer(a);
               b = primer(b);
           }

           if (a<b) return reverse * -1;
           if (a>b) return reverse * 1;
           return 0;
       }
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