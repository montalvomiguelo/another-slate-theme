window.slate = window.slate || {};
window.theme = window.theme || {};

/*================ Slate ================*/
// =require slate/a11y.js
// =require slate/cart.js
// =require slate/utils.js
// =require slate/rte.js
// =require slate/sections.js
// =require slate/currency.js
// =require slate/images.js
// =require slate/variants.js

/*================ Sections ================*/
// =require sections/product.js
// =require sections/header-section.js
// =require sections/gallery.js
// =require sections/featured-products.js
// =require sections/pieces-list.js
// =require sections/instagram.js
// =require sections/modal-request.js
// =require sections/modal-thank-you.js
// =require sections/newsletter-popup.js
// =require sections/featured-content.js
// =require sections/lookbook.js
// =require sections/cart-template.js

/*================ Global ================*/
// =require global/qty-selector.js

/*================ Templates ================*/
// =require templates/customers-addresses.js
// =require templates/customers-login.js

/*================ Modules ================*/
// =require modules/sticky-header.js
// =require modules/mobile-nav.js
// =require modules/ajax-cart.js

$(document).ready(function() {
  var sections = new slate.Sections();
  sections.register('product', theme.Product);
  sections.register('header-section', theme.HeaderSection);
  sections.register('gallery', theme.Gallery);
  sections.register('featured-products', theme.FeaturedProducts);
  sections.register('pieces-list', theme.PiecesList);
  sections.register('instagram', theme.Instagram);
  sections.register('modal-request', theme.ModalRequest);
  sections.register('modal-thank-you', theme.ModalThankYou);
  sections.register('newsletter-popup', theme.NewsletterPopup);
  sections.register('featured-content', theme.FeaturedContent);
  sections.register('lookbook', theme.Lookbook);
  sections.register('cart-template', theme.CartTemplate);

  // Common a11y fixes
  slate.a11y.pageLinkFocus($(window.location.hash));

  $('.in-page-link').on('click', function(evt) {
    slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
  });

  // Target tables to make them scrollable
  var tableSelectors = '.rte table';

  slate.rte.wrapTable({
    $tables: $(tableSelectors),
    tableWrapperClass: 'rte__table-wrapper',
  });

  // Target iframes to make them responsive
  var iframeSelectors =
    '.rte iframe[src*="youtube.com/embed"],' +
    '.rte iframe[src*="player.vimeo"]';

  slate.rte.wrapIframe({
    $iframes: $(iframeSelectors),
    iframeWrapperClass: 'rte__video-wrapper'
  });

  // Apply a specific class to the html element for browser support of cookies.
  if (slate.cart.cookiesEnabled()) {
    document.documentElement.className = document.documentElement.className.replace('supports-no-cookies', 'supports-cookies');
  }
});
