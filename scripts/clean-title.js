new MutationObserver(function () {
    let title = document.title;
    let regex = /\(\d+\)/;

    if (title.match(regex)) {
        let newTitle = title.replace(regex, '');
        document.title = newTitle.trim();
    }
}).observe(
    document.querySelector('title'),
    { subtree: true, characterData: true, childList: true }
);
