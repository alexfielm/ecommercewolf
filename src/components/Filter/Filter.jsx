import { useState, useEffect, useRef } from 'react'
import './Filter.css'

function Filter() {
    const [openDropdown, setOpenDropdown] = useState(null)
    const filterRef = useRef(null)

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name)
    }

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
                    <a href="#">Remeras</a>
                    <a href="#">Sueters</a>
                </div>
            </div>
        </div>
    )
}

export default Filter