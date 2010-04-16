$(document).ready(function()
{
	$('li[tooltip]').each(function()
    {
        $(this).qtip(
        {
            content:    $(this).attr('tooltip'),
            delay:      0,
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
            delay:      0,
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
});
