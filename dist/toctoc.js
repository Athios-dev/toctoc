(function($) {
  $.toctoc = function(options) {

    // ⚙️ SETTINGS
    var settings = $.extend({
      headBackgroundColor: '#1c1c1c',
      headTextColor: '#fff',
      headLinkColor: '#add8e6',
      bodyBackgroundColor: '#f5f5f5',
      bodyLinkColor: '#000',
      borderStyle: 'solid',
      borderColor: '#000',
      borderWidth: '2px',
      headText: 'Table of contents',
      headLinkText: ['show', 'close'],
      opened: false,
      target: 'body'
    }, options);
    
    // 🎯 DOM ITEMS
    const toc = $('#toctoc');
    const tocHead = $("<div></div>").attr("id", "toctoc-head");
    const tocHeadToggler = $("<a></a>").attr("href", "#");
    const tocHeadText = $("<span></span>").text(settings.headText);
    const tocBody = $("<div></div>").attr("id", "toctoc-body");

    // ▶️ INITIALISATION
    init();
    function init() {
      tocHead.append(tocHeadText).append(tocHeadToggler);
      let titles = settings.target + " h2, " + settings.target + " h3, " + settings.target + " h4, " + settings.target + " h5, " + settings.target + " h6";
      $(titles).each(function(i) {
        let tag = $(this).prop('tagName').toLowerCase();
        let content = $(this).html();
        let anchor = 'toctoc-' + (i + 1);
        $(this).attr('id', anchor);
        tocBody.append("<a href='#"+anchor+"'><p class='link link-"+tag+"'>"+content+"</p></a>");
      });
      toc.append(
        tocHead.css({
          'background-color': settings.headBackgroundColor,
          'color': settings.headTextColor
        })
      ).append(
        tocBody.css({
          'background-color': settings.bodyBackgroundColor,
          'border-style': settings.borderStyle,
          'border-color': settings.borderColor,
          'border-width': settings.borderWidth
        })
      );
      tocHeadToggler.css({'color': settings.headLinkColor});
      $('#toctoc-body a').css({'color': settings.bodyLinkColor});  
      loadVisibility();
    }

    // 👀 EVENT LISTENER
    tocHeadToggler.on('click', (e) => {
      e.preventDefault();
      changeVisibility();
    });

    // ⚙️ CHANGE VISIBILITY
    function changeVisibility() { 
      settings.opened ? settings.opened = false : settings.opened = true;
      loadVisibility();
    }

    // ⚙️ LOAD VISIBILITY
    function loadVisibility() { 
      if (settings.opened) {
        tocHeadToggler.text(settings.headLinkText[1]);
        tocBody.removeAttr('hidden');
      } else {
        tocHeadToggler.text(settings.headLinkText[0]);
        tocBody.attr('hidden', '');
      }
    }
    
  };
})(jQuery);