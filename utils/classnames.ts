const classnames = (...classes: (string | undefined)[]) => {
   return classes.filter(Boolean).join(' ')
}

export default classnames
