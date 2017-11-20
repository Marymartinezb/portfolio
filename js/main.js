(function ($) {
  $(document).ready(function() {
    var navigation = ( function() {
    var menu = $("#menu");
    var openMenu = $("#openMenu");
    var closeMenu = $("#closeMenu");
    function displayNavigation() {
      openMenu.click(function () {
        menu.toggleClass("hide-content");
        closeMenu.toggleClass("hide-content");
      });

      closeMenu.click(function () {
        menu.toggleClass("hide-content");
        closeMenu.toggleClass("hide-content");
      });
    }

    return {
      displayNavigation :  displayNavigation
    };

    })();

    navigation.displayNavigation();
  });
}(jQuery));