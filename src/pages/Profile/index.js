import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

function Profile() {
  return (
    <Container>
      <Form>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" placeholder="Seu e-mail" />
        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha Atual"
        />

        <Input name="password" type="password" placeholder="Nova Senha" />

        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmar Senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>

      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}

export default Profile;
