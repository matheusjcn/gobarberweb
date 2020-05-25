import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

function Profile() {
  const profile = useSelector((state) => state.user.profile);
  console.log(profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
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
