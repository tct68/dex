import styled from 'styled-components/macro'
import { AutoColumn } from '../Column'

import beraBanner from '../../assets/images/beradex-banner.png'

import noise from '../../assets/images/noise.png'
import { RowBetween } from 'components/Row'
import { Glow } from '../../pages/AppBody'

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  width: fit-content;
  justify-self: flex-end;
`

export const DataCard = styled(AutoColumn)<{ disabled?: boolean }>`
  /* background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%); */
  border-radius: 10px;
  width: 100%;
  position: relative;
  overflow: hidden;
`

export const CardBGImage = styled.span<{ desaturate?: boolean }>`
  background: url(${beraBanner});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 10px;
  opacity: 0.4;
  top: -160px;
  left: -160px;
  transform: rotate(180deg);
  user-select: none;
  ${({ desaturate }) => desaturate && `filter: saturate(0)`};
  backdrop-filter: blur(20px) saturate(150%);
`

export const CardNoise = styled.span`
  background: url(${noise});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`

export const CardSection = styled(AutoColumn)<{ disabled?: boolean }>`
  padding: 1rem;
  z-index: 1;
  opacity: ${({ disabled }) => disabled && '0.4'};
  backdrop-filter: blur(3px) saturate(350%) brightness(50%) grayscale(40%);
  border-radius: 10px;
`

export const Break = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`

export const DataRow = styled(RowBetween)`
  justify-content: center;
  gap: 12px;
  backdrop-filter: blur(4px) saturate(150%);
  border-radius: 10px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    gap: 12px;
  `};
  ${Glow}
`

export const DataButtonRow = styled(RowBetween)`
  justify-content: center;
  gap: 12px;
  border-radius: 10px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    gap: 12px;
  `};
`
