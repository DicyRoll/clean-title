new MutationObserver(function () {
  let title = document.title;
  let regex = /^.+\(\d*?\)\s-\s.+$/;

  //remove thousands separator
  title = title.split(',').join('');

  if (title.match(regex)) {
    let arrayTitle = title.split(" ");
    let notificationRegex = /^\(\d*?\)$/

    arrayTitle.forEach(function (titleItem, index, arrayTitle) {
      if (titleItem.match(notificationRegex)) {
        arrayTitle.splice(index, 1);
      }
    });

    document.title = arrayTitle.join(" ");
  }
}).observe(
  document.querySelector('title'),
  { subtree: true, characterData: true, childList: true }
);
