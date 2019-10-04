export const classnames = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ')

interface classToggles {
    [K:string]: Boolean
}

export function scopedClass (componentClass: string) {
    return function (c: string | classToggles, classes?: string) {
        const scArray = Object.entries(typeof c === 'object' ? c : {[c as string]: true})
            .filter((node) => node[1])
            .map(node => [componentClass, node[0]].filter(Boolean).join('-'))
        return [...scArray, classes].filter(Boolean).join(' ')
    }
}
