import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.containerAbout}>


<h1 className={styles.h1}> Este es un Proyecto Final del bootcamp de SoyHenry junto con del programa de Codo a codo </h1>

<div>

      <div className={styles.Box}>
        <div >
      <h3 className={styles.h3}>Desarroladores:</h3>
        </div>

        <div>

      <h3>Carlos Julian Lichowski</h3>
      <h3>Cristian David Bejar</h3>
      <h3>Eliana </h3>
      <h3>Gustavo Braun</h3>
      <h3>Lautaro Celestino</h3>
        </div>
      </div>


      <div className={styles.Box}>
        <div>

        <h3 className={styles.h3}>Tecnologias Utilizadas</h3>
        </div>
      <h3>ReactJs</h3>
      <h3>NodeJs</h3>
      <h3>Express</h3>
      <h3>Sql</h3>
      </div>

        <div className={styles.Box}>
    <div>
      <h3 className={styles.h3} >Librerias Utilizadas</h3>
    </div>
      <h3>ReactJs</h3>
      <h3>NodeJs</h3>
      <h3>Express</h3>
      <h3>Sql</h3>
        </div>

      <div className={styles.Box}>
      <div>

      <h3 className={styles.h3}>Objetivos Alcanzados</h3>
      </div>
      <h3>Implementacion de sistema de pagos</h3>
      <h3>Rerizacion de productos</h3>
      <h3>Creacion de Usuario en base de datos</h3>
      <h3>Historial de Compras</h3>
      <h3>Agregar Productos</h3>
      </div>

</div>
      
      

       

    
    </div>
  )
}

export default About;
