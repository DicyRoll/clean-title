new MutationObserver(function () {
  let title = document.title;
  let regex = /^\(\d*?\)\s.+$/;

  if (title.match(regex)) {
    let arrayTitle = title.split(" ");

    arrayTitle.shift();
    document.title = arrayTitle.join(" ");
  }
}).observe(
  document.querySelector('title'),
  { subtree: true, characterData: true, childList: true }
);
