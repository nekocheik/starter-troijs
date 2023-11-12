export function redirect(link: any, type: string) {
  window.open(link, type);
}

export function scrollCallback(callback: () => void) {
  let loading = false;
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 200 && !loading) {
    return callback();
  } else {
    window.innerHeight + window.pageYOffset <= document.body.offsetHeight - 300 ? (loading = false) : (loading = true);
  }
}
