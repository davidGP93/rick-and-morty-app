import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCircleXmark } from '@fortawesome/free-solid-svg-icons'
import notFoundStyles from './NotFound.module.scss'

function NotFound() {
  return (
    <section className={notFoundStyles.container}>
    <p className={notFoundStyles['container-message']}><FontAwesomeIcon icon={faFileCircleXmark}/>  No hay resultados para este patrón de busqueda, intenta con otra categoria</p>
    </section>
  )
}

export default NotFound