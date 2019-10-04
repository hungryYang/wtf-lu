export const classnames = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ')

interface classToggles {
    [K:string]: Boolean
}

export function scopedClass (componentClass?: string) {
    return function (c: string | classToggles, classes?: string) {
        const scArr = Object.entries(typeof c === 'object' ? c : {[c as string]: true})
        const a = scArr.filter((node) => {
            return node[1]
        })
        const b = a.map(node => {
            return [componentClass, node[0]].filter(Boolean).join('-')
        })
        return [...b, classes].filter(Boolean).join(' ')
    }
}
