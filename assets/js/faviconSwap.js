matcher = window.matchMedia('(prefers-color-scheme: light)');

lightSchemeIcon = document.querySelector('link#light-scheme-icon');
darkSchemeIcon = document.querySelector('link#dark-scheme-icon');

function onUpdate() {
  if (matcher.matches) {
    darkSchemeIcon.remove();
    document.head.append(lightSchemeIcon);
  } else {
    lightSchemeIcon.remove();
    document.head.append(darkSchemeIcon);
  }
}

onUpdate();
