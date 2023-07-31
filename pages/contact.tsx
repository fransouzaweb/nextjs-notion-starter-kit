import React from 'react'

const contact = () => {
  return (
    <div>
      <div className='contact'>
        Pagina Contato

        <form action="">
          <input type="text" placeholder='Nome'/>
          <input type="email" placeholder='E-Mail'/>
          <textarea name="" id="" cols="30" rows="10" placeholder='Mensagem'></textarea>

          <button>Enviar</button>
          
        </form>
      </div>
    </div>
  )
}

export default contact