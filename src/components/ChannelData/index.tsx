import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import { ChannelMessage, Mention } from '../ChannelMessage';

export const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    } 
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {
          Array.from(Array(15).keys()).map((n) => (
            <ChannelMessage  
              key={n}
              author="Guilherme Rodz"
              date="21/06/2020"
              content={`Mensagem de teste #${n}`}
            />
          ))
        }

        <ChannelMessage  
          author="Diego Fernandes"
          date="21/06/2020"
          content={
            <>
              <Mention>@Guilherme Rodz</Mention>, me carrega no LoL por favor?
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}
