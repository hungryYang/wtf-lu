export const classnames = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ')

export function scopedClass (componentClass?: string) {
    return function (c?: string) {
        return ['wtf',componentClass, c].filter(Boolean).join('-')
    }
}
