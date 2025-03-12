function merge<T extends {}, K> (objA: T, objB: K): T | K {
    return Object.assign(objA, objB);
  }
  