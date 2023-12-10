
import styled from 'styled-components'

import styles from './index.module.css'
import Sliders from './Slider.jsx/Sliders';




const Index = () => {

  const ImgContainer = styled.div`
    width: 900px;
    height: 900px;
    margin: 0 auto;
  `
    

    
  return (
    <div className={styles.maincontainer}>
        <ImgContainer >
            <Sliders/>

        </ImgContainer>
    </div>
  )
}

export default Index