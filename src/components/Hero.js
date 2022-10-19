import Card from './Card'

const Hero = () => {
    return (
        <div className="hero min-h-[80vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
            <Card/>
                    <h1 className="text-5xl font-bold">&iexcl;Entra ya!</h1>
                    <p className="py-6">&iexcl;Comienza a ver las predicciones!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contrase&ntilde;a</span>
                            </label>
                            <input type="text" placeholder="Contrase&ntilde;a" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">&iquest;Olvidaste tu contrase&ntilde;a?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Entrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
