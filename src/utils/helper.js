const helper = {
  getRemSize() {
    const remfontSize = getComputedStyle(
      document.getElementsByTagName('html')[0],
      null,
    )['font-size'];

    let remSize = 18;
    if (remfontSize) {
      remSize = +remfontSize.replace(/[p|x]/g, '');
    }

    return remSize;
  },
};

export default helper;
