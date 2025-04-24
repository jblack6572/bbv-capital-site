export function Button({ children, asChild=false, variant='default', size='md', className='', ...props }) {
  const Tag = asChild ? 'span' : 'button';
  const base = 'inline-flex items-center justify-center font-medium transition rounded-2xl';
  const sizes = {
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  const variants = {
    default: 'bg-primary text-white hover:bg-primary/80',
    ghost: 'bg-transparent text-primary hover:bg-primary/10'
  };
  const classes = [base, sizes[size] || sizes.md, variants[variant] || variants.default, className].join(' ');
  return <Tag className={classes} {...props}>{children}</Tag>;
}
