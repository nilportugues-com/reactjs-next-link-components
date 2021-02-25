//components/Links/VercelLinks.jsx

const VercelLink = ({children, page, utm, ...props}) => (
<a 
    {...props} 
    href={`https://vercel.com{$page}${utm.join("&")}`}
    rel="noopener noreferrer"
>
{children}
</a>
)
    
export const VercelHomepageLink = (props) => (
<VercelLink 
    {...props} 
    page="/" 
    utm={[
        "utm_source=create-next-app",
        "utm_medium=default-template",
        "utm_campaign=create-next-app"
    ]}
    target="_blank"
/>
)

export const VercelDeployLink = (props) => (
<VercelLink 
    {...props} 
    page="/new" 
    utm={[
        "utm_source=create-next-app",
        "utm_medium=default-template",
        "utm_campaign=create-next-app"
    ]}
/>
)