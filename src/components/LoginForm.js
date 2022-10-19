import {Link} from 'react-router-dom'

const LoginForm = (props) => {
    const kind = props.kind;
    const text={
        h1Text: 'Entra ya!',
        pText: 'Comienza a ver las predicciones!',
    }
    if(props.kind==='signup'){
        text.h1Text = `Reg${String.fromCharCode(237)}strate!`
        text.pText= 'Comienza a ver las predicciones!'
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">&iexcl;{text.h1Text}</h1>
                    <p className="py-6">&iexcl;{text.pText}</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Email" className="input input-bordered" />
                        </div>
                        { kind ==='signup' &&
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Email</span>
                                </label>
                                <input type="text" placeholder="Confirm Email" className="input input-bordered" />
                            </div>
                    }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contrase&ntilde;a</span>
                            </label>
                            <input type="text" placeholder="Contrase&ntilde;a" className="input input-bordered" />
                            {kind==='login' &&
                                <label className="label">
                                    <Link to='/forgotPassword' className='label-text-alt link link-hover'>&iquest;Olvidaste tu contrase&ntilde;a?</Link>
                                </label>
                        }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">{kind==='login' ? 'Entrar' : 'Registrarse' }</button>
                        </div>
                            {kind==='login' &&
                        <label className="label">
                            <span className='label-text-alt'>
                                &iquest;No tienes cuenta? &emsp;
                                <Link to='/signup' className="link link-hover">
                                    &iexcl;Registrate!
                                </Link>
                            </span>
                        </label>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
