const Form = () => {
    return(
        <form>
            <div>
                <label>Nome</label>
                <input type="text" name="" id="" placeholder="Digite seu nome" />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="" id="" placeholder="Digite seu email" />
            </div>
            <div>
                <a href="#">Termos de uso</a>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label>Concordo com os termos</label>
                </div>
            </div>
            <button>Cadastrar</button>
        </form>
    )
}

export default Form;