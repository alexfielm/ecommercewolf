import { useState, useEffect, useRef } from 'react'
import './Filter.css'

function Filter() {
    const [openDropdown, setOpenDropdown] = useState(null)
    const filterRef = useRef(null)

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name)
    }

    // Close dropdowns if clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setOpenDropdown(null)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [filterRef])

    return (
        <div className="filterContainer" ref={filterRef}>
            <div className="dropdown">
                <button onClick={() => toggleDropdown('categorias')} className="dropbtn">
                    Categorías {openDropdown === 'categorias' ? '▲' : '▼'}
                </button>
                <div className={`dropdown-content ${openDropdown === 'categorias' ? 'show' : ''}`}>
                    <a href="#">Zapatillas</a>
                    <a href="#">Remeras</a>
                    <a href="#">Pantalones</a>
                </div>
            </div>

            <div className="dropdown">
                <button onClick={() => toggleDropdown('genero')} className="dropbtn">
                    Genero {openDropdown === 'genero' ? '▲' : '▼'}
                </button>
                <div className={`dropdown-content ${openDropdown === 'genero' ? 'show' : ''}`}>
                    <a href="#">Hombre</a>
                    <a href="#">Mujer</a>
                    <a href="#">Unisex</a>
                </div>
            </div>

            <div className="dropdown">
                <button onClick={() => toggleDropdown('color')} className="dropbtn">
                    Color {openDropdown === 'color' ? '▲' : '▼'}
                </button>
                <div className={`dropdown-content ${openDropdown === 'color' ? 'show' : ''}`}>
                    <a href="#">Negro</a>
                    <a href="#">Blanco</a>
                    <a href="#">Rojo</a>
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn filters-btn">
                    Filtros
                </button>
            </div>
        </div>
    )
}

export default Filter