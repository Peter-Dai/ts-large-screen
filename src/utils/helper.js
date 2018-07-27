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
  isPromissFn(target) {
    if (!!target && typeof target === 'function') {
      const getTargetPromise = target();
      if (typeof getTargetPromise.then === 'function') {
        return getTargetPromise;
      }
    }
    return null;
  },
};

export default helper;
