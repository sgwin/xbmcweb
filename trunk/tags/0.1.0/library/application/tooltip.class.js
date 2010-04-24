function Tooltip (Application)
{
    this.init = function ()
    {
        $('#elmDetails').hide();
        var tmout = null;

        $('li[tooltip]').each(function()
        {
            $(this).bind('mouseover', function()
            {
                $('#elmDetails').html($(this).attr('tooltip'));
            });

            $(this).bind('mouseover', function()
            {
                clearTimeout(tmout);
                $('#elmDetails').filter(":hidden").slideDown('fast');
            });

            $(this).bind('mouseout', function()
            {
                tmout = setTimeout(function()
                {
                    $('#elmDetails').filter(":visible").slideUp('fast');
                },
                2000);
            });
        });
    }

    /*
    this.init = function ()
    {
        $('li[tooltip]').each(function()
        {
            $(this).qtip(
            {
                content:    $(this).attr('tooltip'),
                show:
                {
                    delay: 0,
                    solo: true,
                    effect:
                    {
                        length: 0
                    }
                },
                hide:
                {
                    delay: 0,
                    effect:
                    {
                        length: 0
                    }
                },
                position:
                {
                    corner:
                    {
                        target: 'rightMiddle',
                        tooltip: 'leftMiddle'
                    }
                },
                style:
                {
                    width:
                    {
                        min:    0,
                        max:    500
                    },
                    border:
                    {
                        radius: 3,
                        width:  2,
                        color:  '#000000'
                    },
                    padding:    7,
                    background: '#FFCC00',
                    color:      '#000000'
                }
            });
        });

        $('li[subTooltip]').each(function()
        {
            $(this).qtip(
            {
                content:    $(this).attr('subTooltip'),
                show:
                {
                    delay: 0,
                    solo: true,
                    effect:
                    {
                        length: 0
                    }
                },
                hide:
                {
                    delay: 0,
                    effect:
                    {
                        length: 0
                    }
                },
                position:
                {
                    corner:
                    {
                        target: 'leftMiddle',
                        tooltip: 'rightMiddle'
                    }
                },
                style:
                {
                    width:
                    {
                        min:    0,
                        max:    500
                    },
                    border:
                    {
                        radius: 3,
                        width:  2,
                        color:  '#000000'
                    },
                    padding:    7,
                    background: '#FFFFFF',
                    color:      '#000000'
                }
            });
        });
    }
    */
}


