// CHILDREN TYPE WHERE TYPE IS React.ReactNode

// because you use React ^17.0.0, no need to import it, functionality called addTypes
// otherwise it is neccessary

type OscarProps = {
    children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
    return <div>{props.children}</div>
}