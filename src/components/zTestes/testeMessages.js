import SuccessErrorMessage from '../modelos/SuccessErrorMessage/SuccessErrorMessage'
function TesteMessages(){
    return(
        <div>
            <SuccessErrorMessage
                type="success"
                message="Deu tudo certo"
            ></SuccessErrorMessage>
        </div>
    )
}

export default TesteMessages;