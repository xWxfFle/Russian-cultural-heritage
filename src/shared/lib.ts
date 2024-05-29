export function prop<K extends string>(key: K) {
  return <T extends Record<K, unknown>>(target: T) => target[key]
}
