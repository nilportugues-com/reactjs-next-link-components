import Link from 'next/link';

export const SecondPageLink = ({children, ...props}) => (
<Link href="/secondary-page" as="/secondary-page">
    <a {...props} >{children}</a>
</Link>
)