import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { createIcon } from '@download/blockies'
import Jazzicon from 'jazzicon'
import { useActiveWeb3React } from '../../hooks'

const ToggleElement = styled.span<{ isActive?: boolean; isOnSwitch?: boolean }>`
  padding: 0.25rem 0.5rem;
  border-radius: 14px;
  background: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.primary1 : theme.text4) : 'none')};
  color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text3)};
  font-size: 1rem;
  font-weight: 400;

  padding: 0.35rem auto;
  border-radius: 12px;
  background: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.primary1 : theme.primary1) : 'none')};
  color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text2)};
  font-size: 1rem;
  font-weight: ${({ isOnSwitch }) => (isOnSwitch ? '500' : '400')};
  :hover {
    user-select: ${({ isOnSwitch }) => (isOnSwitch ? 'none' : 'initial')};
    background: ${({ theme, isActive, isOnSwitch }) =>
      isActive ? (isOnSwitch ? theme.primary1 : theme.primary1) : 'none'};
    color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.white) : theme.text3)};
  }
  width: 42px;
  height: 32px;
  text-align: center;
`

const StyledToggle = styled.button<{ isActive?: boolean; activeElement?: boolean }>`
  border-radius: 12px;
  border: none;
  /* border: 1px solid ${({ theme, isActive }) => (isActive ? theme.primary5 : theme.text4)}; */
  background: ${({ theme }) => theme.bg3};
  display: flex;
  width: fit-content;
  cursor: pointer;
  outline: none;
  padding: 0;
  /* background-color: transparent; */
`

const StyledIdenticonContainer = styled.div`
  height: 18px;
  width: 18px;
  border-radius: 1.125rem;
  background-color: ${({ theme }) => theme.bg4};
  overflow: hidden;
  margin-top:3px;
  margin-left:4px;
`

export interface ToggleProps {
  id?: string
  isActive: boolean
  toggle: () => void
}

export default function ToggleIdenticon({ id, isActive, toggle }: ToggleProps) {
  const refOn = useRef<HTMLDivElement>()
  const refOff = useRef<HTMLDivElement>()
  const { account } = useActiveWeb3React()
  
  useEffect(() => {
    if (account && refOn.current) {
      refOn.current.innerHTML = ''
      refOn.current.appendChild(createIcon({seed: account.toLowerCase(), size: 6, scale: 3}))
    }
    if (account && refOff.current) {
      refOff.current.innerHTML = ''
      refOff.current.appendChild(Jazzicon(18, parseInt(account.slice(2, 10), 16)))
    }
  }, [account])
  return (
    <StyledToggle id={id} isActive={isActive} onClick={toggle}>
      <ToggleElement isActive={isActive} isOnSwitch={true}>
      <StyledIdenticonContainer ref={refOn as any} />
      </ToggleElement>
      <ToggleElement isActive={!isActive} isOnSwitch={false}>
      <StyledIdenticonContainer ref={refOff as any} />
      </ToggleElement>
    </StyledToggle>
  )
}
