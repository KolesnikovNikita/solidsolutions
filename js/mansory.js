imagesLoaded(".cases-grid", function () {
  new Masonry(".grid", {
    itemSelector: ".grid-item",
    gutter: ".gutter-sizer",
    columnWidth: ".grid-sizer",
    horizontalOrder: 1,
  });
});
