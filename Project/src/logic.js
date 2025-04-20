function IsMyCountPrime(count) {
  for (let i = 2; i < count; i++) {
    if (count % i == 0) {
      return false;
    }
  }
  return true;
}
