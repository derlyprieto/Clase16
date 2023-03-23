import React from 'react'

const Loginform = () => {
  return (
    <div>
        <h1>Iniciar Sesion</h1>
        <form>
        <input data-testid='name' type="text" />
        <input type="password" />
        <button>Enviar</button>
        </form>
    </div>
  )
}

export default Loginform