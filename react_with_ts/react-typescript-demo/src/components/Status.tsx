// UNION OF STRING LITERALS

type StatusProps = {
    // because any incoming string will be True, we will use String Union
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
    let message
    if(props.status === 'loading'){
        message = 'Loading...'
    }else if(props.status === 'success'){
        message = 'Data fetched successfully.'
    }else if(props.status === 'error'){
        message = 'Error fetching data!!!'
    }
    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}