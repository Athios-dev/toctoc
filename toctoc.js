(function($) {
  $.toctoc = function(options) {

    var settings = $.extend({
      headBackgroundColor: '#1c1c1c',
      headTextColor: '#fff',
      headLinkColor: 'lightBlue',
      headText: 'Table of contents',
      headLinkText: ['show', 'hide'],
      bodyBackgroundColor: '#f5f5f5',
      bodyLinkColor: '#000',
      borderWidth: '2px',
      borderColor: '#000',
      borderStyle: 'solid',
      minimized: true,
      target: 'body'
    }, options);
    
    const container = $('#toctoc');
    const head = $("<div id='toctoc-head'></div>");
    const body = $("<div id='toctoc-body'></div>");

    createToc();
    toggleLink();

    $('#toctoc #toggle').on('click', () => {
      toggleLink();
    });

    function createToc() {
      head.append("<p><span>" + settings.headText + "</span> [<a href='#' id='toggle'></a>]</p>");
      let titles = settings.target + " h2, " + settings.target + " h3, " + settings.target + " h4, " + settings.target + " h5, " + settings.target + " h6";
      $(titles).each(function(i) {
        let tag = $(this).prop('tagName').toLowerCase();
        let content = $(this).html();
        let anchor = 'toctoc-' + i;
        $(this).attr('id', anchor);
        body.append("<a href='#"+anchor+"'><p class='link link-"+tag+"'>"+content+"</p></a>");
      });

      container.append(head);
      container.append(body);

      customize();
    }

    function customize() {
      head.css({
        'background-color': settings.headBackgroundColor,
        'color': settings.headTextColor
      });
      body.css({
        'background-color': settings.bodyBackgroundColor,
        'border-style': settings.borderStyle,
        'border-color': settings.borderColor,
        'border-width': settings.borderWidth
      });
      $('#toctoc-head a').css({'color': settings.headLinkColor});
      $('#toctoc-body a').css({'color': settings.bodyLinkColor});
    }
    
    function toggleLink() {
      if (settings.minimized) {
        settings.minimized = false;
        $('#toctoc-head a').text(settings.headLinkText[0]);
        body.addClass('hidden');
      } else {
        settings.minimized = true;
        $('#toctoc-head a').text(settings.headLinkText[1]);
        body.removeClass('hidden');
      }
    }
    
  };
})(jQuery);