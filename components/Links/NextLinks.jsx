
const NextLink = ({children, page, ...props}) => (
<a {...props} href={`https://nextjs.org${page}`}>
{children}
</a>
)
export const NextHomeLink = (props) => (
    <NextLink {...props} page="/" />
)
export const NextDocsLink = (props) => (
    <NextLink {...props} page="/docs" />
)

export const NextLearnLink = (props) => (
    <NextLink {...props} page="/learn" />
)