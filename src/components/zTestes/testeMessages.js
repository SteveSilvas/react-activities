import SuccessErrorMessage from '../modelos/SuccessErrorMessage/SuccessErrorMessage'
function TesteMessages(){
    return(
        <div>
            <SuccessErrorMessage
                type={1}
                message="Deu tudo certo de novo"
            ></SuccessErrorMessage>
        </div>
    )
}

export default TesteMessages;