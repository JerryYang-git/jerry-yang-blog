// pjax
$(function () {
    $(document).pjax('#pjax-a', '#main',
        {
            fragment: '#main',
            timeout: 8000
        });
    $(document)
        .on(
            'pjax:start', NProgress.start
        )
        .on(
            'pjax:end', NProgress.done
        );
    // showTime();
    $(document).on('ready pjax:end', function (event) {
        $(event.target).fetch()
    })
})