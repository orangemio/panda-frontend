import React from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/logo.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={chef} height={120} />}
        title="MasterChef is Ready"
        subtitle="Stake PandaSwap LP tokens to claim your very own yummy PDA!"
      />

      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      <StyledInfo>
        🏆<b>Pro Tip</b>: PDA-USDT PDA-V1 LP token pool yields 5x more token rewards per block.
      </StyledInfo>
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
          display:'flex'
        }}
      >
        <div className="indexBtns">
        <Button text="🏦 Exchange" href="https://app.pandaswap.io" variant="secondary" />
        </div>
        <div className="indexBtns">
        <Button text="🐼 Farms" href="https://farm.pandaswap.io" variant="secondary" />
        </div>


      </div>
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Home
