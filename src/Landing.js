import React from 'react'
import styles from './Landing.module.scss'
import Title from './Components/Title/Title'
import BodyText from './Components/BodyText/BodyText'
import Button from './Components/Button/Button'
import ImageRectangle from './Components/ImageRectangle/ImageRectangle'
import woman from './images/woman.png'
import maps from './images/maps.png'
const Landing = () => {
  return (
    <div className={`${styles.container}`}>
      <section className={`${styles.hero} flex mainCenter crossCenter`}>
        <ImageRectangle img={woman} />
        <div className={`flex column crossStart ${styles.text}`}>
          <Title>agende seu horário<br />e se transforme</Title>
          <BodyText>Conheça já o melhor tratamento de cabelos na cidade de Marília, contamos com equipamentos sofisticados que podem mudar sua beleza completamente.
            Além de cabelos, também fazemos procedimentos estéticos.</BodyText>
          <Button path="/cadastro">AGENDAR</Button>
        </div>
      </section>
      <section id="sobre" className={`${styles.second} flex column mainCenter crossCenter`}>
        <Title whiteText={true}>quem somos</Title>
        <BodyText center={true} whiteText={true}>Estamos no mercado da beleza desde 1995. Inovamos diversas vezes na maneira de se transformar e reiventar a beleza. Nossos clientes estão sempre muito satisfeitos com tudo o que podemos lhes oferecer.<br />E recentemente resolvemos adotar o agendamento para ter uma maneira de gerenciar melhor e atender os clientes de maneira eficaz e calorosa. Venha inovar com a gente pra ficarmos cada vez mais belos</BodyText>
      </section>
    </div>
  )
}

export default Landing
