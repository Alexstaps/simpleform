const Form = (props) => {

    const handleEmailChange = (event) => {
        props.setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password1 === password2) {
            alert("Vos deux mots de passe ne sont pas identiques");
        }


    }

    console.log(props);
    return <form onSubmit={handleSubmit} action="" className="formulaire">

        <label htmlFor="username">Name</label>
        <div>
            <input
                type="text"
                placeholder="Nom prénom"
                name="username"
                id="username"
                onChange={(event) => {
                    props.setUsername(event.target.value);
                }}
                value={props.username}
            />
        </div>

        <label htmlFor="email" >Email</label>
        <div>
            <input
                type="email"
                placeholder="alex@mail.fr"
                name="email" id="email"
                onChange={handleEmailChange}
                value={props.email}
            />
        </div>

        <label htmlFor="password1">Password</label>
        <div>
            <input
                type="password"
                placeholder="azerty"
                name="password1"
                id="password1"
                onChange={(event) => {
                    props.setPassword1(event.target.value);
                }}
                value={props.password1} />
        </div>

        <label htmlFor="password2">Confirm your password</label>
        <div>
            <input
                type="password"
                placeholder="azerty"
                name="password2"
                id="password2"
                onChange={(event) => {
                    props.setPassword2(event.target.value);
                }}
                value={props.password2} />
        </div>

        <input
            type="submit"
            value="Register"
            className="register"
        />

    </form>



}
export default Form;