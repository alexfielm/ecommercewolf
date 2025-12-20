function NavList(){
    return(
        <ul className='navLinks'>
            <li><Link to='/hombre'>Hombre</Link></li>
            <li><Link to='/mujer'>Mujer</Link></li>
            <li><Link to='/faq'>Preguntas frecuentes</Link></li>
            <li><Link to='/contacto'>Contactanos</Link></li>
            <li><Link to='/oferta'>Ofertas</Link></li>
        </ul>
    )
}

export default NavList