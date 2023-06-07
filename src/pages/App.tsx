import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter'
import Header from '../components/Header'
import Polling from '../components/Header/Polling'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import ErrorBoundary from '../components/ErrorBoundary'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import { FarmListPage } from './Farm/FarmList'
import Farm from './Farm/Farm'

import PoolV2 from './Pool/v2'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import Swap from './Swap'
import { RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
import { RedirectDuplicateTokenIdsV2 } from './AddLiquidityV2/redirects'
import { ThemedBackground } from '../theme'

import ApeModeQueryParamReader from 'hooks/useApeModeQueryParamReader'
import { StakingPage } from './Stake/StakingPage'
import { DisclaimerModal } from 'components/DisclaimerModal'
import { AssetsListPage } from './Assets/AssetsList'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`

// beradex: added as background
/* const DottedBackground = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-size: 40px 40px;
  background-image: radial-gradient(circle, #ffffff 1px, rgba(50, 50, 50, 0.5) 1px); */

const BodyWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-size: 40px 40px;
  background-image: radial-gradient(circle, #121212 1px, rgba(0, 0, 0, 0) 1px);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 200px;
  align-items: center;
  flex: 1;
  z-index: 1;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 16px;
    padding-top: 6rem;
  `};
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2;
`

const Marginer = styled.div`
  margin-top: 5rem;
`
/*
removed  <Route exact strict path="/stake" component={StakingPage} />
under    <Route exact strict path="/farm/:poolId" component={Farm} />

*/
export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={null}>
        <Route component={GoogleAnalyticsReporter} />
        <Route component={DarkModeQueryParamReader} />
        <Route component={ApeModeQueryParamReader} />
        <AppWrapper>
          <DisclaimerModal />
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <BodyWrapper>
            <ThemedBackground />
            <Popups />
            <Polling />
            <Web3ReactManager>
              <Switch>
                <Route exact strict path="/farm" component={FarmListPage} />
                <Route exact strict path="/farm/:poolId" component={Farm} />

                <Route exact strict path="/dashboard" component={AssetsListPage} />

                <Route exact strict path="/stake" component={StakingPage} />

                <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
                <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
                <Route exact strict path="/swap" component={Swap} />

                <Route exact strict path="/pool/import" component={PoolFinder} />
                <Route exact strict path="/pool/v2" component={PoolV2} />
                {/* <Route exact strict path="/pool" component={Pool} /> */}
                <Redirect from="/pool" to="/pool/v2" />
                {/* <Route exact strict path="/pool/:tokenId" component={PositionPage} /> */}

                <Route
                  exact
                  strict
                  path="/add/v2/:currencyIdA?/:currencyIdB?"
                  component={RedirectDuplicateTokenIdsV2}
                />

                <Route
                  exact
                  strict
                  path="/add/:currencyIdA?/:currencyIdB?/:feeAmount?"
                  component={RedirectDuplicateTokenIdsV2}
                />

                {/* <Route
                  exact
                  strict
                  path="/increase/:currencyIdA?/:currencyIdB?/:feeAmount?/:tokenId?"
                  component={AddLiquidity}
                /> */}

                <Route exact strict path="/remove/v2/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
                <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
                {/* <Route exact strict path="/remove/:tokenId" component={RemoveLiquidityV3} /> */}

                {/* <Route exact strict path="/migrate/v2" component={MigrateV2} /> */}
                {/* <Route exact strict path="/migrate/v2/:address" component={MigrateV2Pair} /> */}

                <Route component={RedirectPathToSwapOnly} />
              </Switch>
            </Web3ReactManager>
            <Marginer />
          </BodyWrapper>
        </AppWrapper>
      </Suspense>
    </ErrorBoundary>
  )
}
