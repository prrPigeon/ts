// CHILDREN TYPE WHERE TYPE IS OPTIONAL

type GreetProps = {
    // and if you don't want to show success message if there is no messages at all
    // you use optinal type ? in declaring prop type  */
    name: string
    countMessages?: number
    isLoggedIN: boolean
}

export const Greet = (props: GreetProps) => {
    const { countMessages = 0} = props  // this destructuring is used for purpuse of default value which is 0, if there is no messages
    return (
        <div>
            <h2>
            {props.isLoggedIN ? `Welcome ${props.name}! You have ${countMessages} unread messages`: 'Welcome guest'}
            </h2>
        </div>
    )
}