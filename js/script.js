jQuery(document).ready(function () {
   jQuery('.wppe-hover').each(function() {
       jQuery(this).find('img').wrap( "<figure></figure>" );
   });
});