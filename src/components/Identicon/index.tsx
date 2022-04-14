import React, { useEffect, useRef } from 'react'

import styled from 'styled-components'

import { useActiveWeb3React } from '../../hooks'
// import Jazzicon from 'jazzicon'
import { createIcon } from '@download/blockies'

const StyledIdenticonContainer = styled.div`
  height: 18px;
  width: 18px;
  border-radius: 1.125rem;
  background-color: ${({ theme }) => theme.bg4};
  overflow: hidden;
`

export default function Identicon() {
  const ref = useRef<HTMLDivElement>()

  const { account } = useActiveWeb3React()

  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = ''
      // ref.current.appendChild(Jazzicon(18, parseInt(account.slice(2, 10), 16)))
      ref.current.appendChild(createIcon({seed: account.toLowerCase(), size: 6, scale: 3}))
    }
  }, [account])

  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
  return <StyledIdenticonContainer ref={ref as any} />
}
