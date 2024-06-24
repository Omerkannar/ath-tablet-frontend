import { useState } from 'react'
import styled from 'styled-components'
import { Box2 } from '../Reposition.styles'
import Helicopter from '../../../Assets/helicopter-icon.png'

const HeliBtn = styled.button<{ active?: boolean, flip?: boolean }>`
  padding: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  outline: none;
  border: 3px solid ${p => p.active ? 'yellow' : 'skyblue'};
  background-image: url(${Helicopter});
  transform: ${p => p.flip ? 'scaleX(-1)' : ''};
  background-position: center;
  background-size: contain;
  color: white;
  cursor: pointer;
  opacity: ${p => p.active ? '1' : '0.7 '};
    &:hover {
    opacity: 1;
  }
  transition: 0.2s ease-in-out;
  box-shadow: inset 0rem 0.2rem 0.2rem 0 rgba(255, 255, 255, 0.4), inset 0 0 0.5rem 0 rgba(255, 255, 255, 0.2);
`
interface StyledSpanProps {
  align?: string;
}

const StyledSpan = styled.span<StyledSpanProps>`
  font-size: 1.2rem;
  color: #f2f2f2;
  font-family: Arial;
  font-weight: 500;
  text-align: ${(p) => p.align || 'left'};
  width: 100%;
  white-space: pre;
`

interface HeliProps {
  label1: string,
  label2: string,
  label3: string,
  direction: string,
  align?: string,
  flip?: boolean,
  caption: string,
  isActive: (active: boolean, caption: string) => void
  buttonActive: boolean
}

const HeliContainer = ({ label1, label2, label3, direction, align, flip, caption, isActive, buttonActive }: HeliProps) => {

  const [active, setActive] = useState(false);

  const onClickBtn = () => {
    setActive(!active)
    isActive(true, caption)
  }


  return (
    <Box2 direction={direction} gap='0' margin={flip ? '1.2rem 0 1rem -50px' : '1rem 0'}>
      <br />
      <br />
      <HeliBtn flip={flip} onClick={onClickBtn} active={buttonActive} />
      <Box2 direction='column' align='flex-start' padding='0 5px 0 5px'>
        <StyledSpan align={align}>{label1}</StyledSpan>
        <StyledSpan align={align}>{label2}</StyledSpan>
        <StyledSpan align={align}>{label3}</StyledSpan>
      </Box2>
    </Box2>
  )
}

export default HeliContainer