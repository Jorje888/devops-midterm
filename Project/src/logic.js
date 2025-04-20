function IsMyCountPrime(count) {
  if (count < 2) {
    return false;
  }
  for (let i = 2; i < count; i++) {
    if (count % i == 0) {
      return false;
    }
  }
  return true;
}

export default IsMyCountPrime;
