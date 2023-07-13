import React from 'react'
import styles from './Info.module.css'

const Info = (props) => {
  return (
    <section class={styles.Info}>
      <div class={styles.WrapText} >
        <h2>IKEA의 비전</h2>
        <p> 예산은 적지만 큰 꿈을 가진 사람들에게 좋은 디자인과 우수한 성능,<br /> 내구성, 합리적인 가격을 갖춘 지속가능한 홈퍼니싱 솔루션을<br /> 제공하죠. IKEA는 세상에 관심이 많고, 사람들의
          삶에<br /> 긍정적인
          영향을 미치고자 합니다.
        </p>
      </div>
    </section>
  )
}

export default Info