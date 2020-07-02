<div align="center">
  <img src="./src/assets/logo.svg">
</div>




### Sobre:


O **GoBarber** é uma plataforma WEB e MOBILE para agendamentos de serviços de barbearia.


Você está no repostório da plataforma **Web** do **GoBarber** que é voltado para o prestador de serviço gerenciar seus agendamentos, atendimentos e clientes.


### Recursos da Plataforma:


:lock: **Recuperação de senha**


- [x] Permite que um usuário consiga recuperar a senha informando o e-mail cadastrado;
- [x] A API envia para o usuário um e-mail con instruções de recuperação de senha;
- [x] A API envia um link com token por e-mail para resetar a senha e por segurança o token enviado expira em 2h;
- [x] Cadastro e autenticação de usuários com geração de JwToken;
- [x] Autenticação de usuários com JwToken;


:busts_in_silhouette: **Atualização de perfil de usuário**


- [x] Permite usuário cadastrar-se e atualizar seu perfil (incluindo imagem de avatar);
- [x] Validação de e-mails no cadastro, não é possível cadastrar dois usuários com mesmo e-mail;
- [x] Para atualizar a senha, o usuário deve informar a senha antiga e a nova senha;


:computer: **Painel do Prestador de serviços (Barbeiro)**


- [x] Lista os agendamentos do prestador de serviços de um dia específico;
- [x] O prestador recebe uma notificação sempre que houver um novo agendamento;
- [x] O prestador pode visualizar as notificações não lidas;
- [x] A notificação possui estado de lida ou não-lida para que o prestador de serviços consiga gerenciar suas notificações;
- [x] Os agendamentos do prestador no dia também são armazenados em cache para acelerar o carregamento;
- [x] As notificações do prestador de serviço são armazenadas no MongoDB;
- [x] As notificações do prestador de serviço são enviadas em tempo real utilizando Socket.io;



:date: **Agendamento de serviços**


- [x] O usuário pode listar todos os prestadores de serviços cadastrado;
- [x] O usuário pode listar os dias de um mês com pelo meos um horário disponível de um prestador de serviço;
- [x] O usuário pode listar os horários disponíveis em um dia específico de um prestador;
- [x] O usuário deve poder realizar um novo agendamento com um prestador;
- [x] Por padrão, cada agendamento possui duração de 1h;
- [x] Os agendamentos estão disponíveis das 8h00 às 18h00 (Primeiro às 8h, último às 17h);
- [x] Os usuário não pode agendar um serviços em uma data ou horário que já passou;
- [x] O usuário não pode agendar serviços consigo mesmo;
- [x] A listagem de prestadores é armazenada em cache para acelerar o carregamento;



### Banco de Dados e estratégias de armazenamento:


O backend foi desenvolvido em **NodeJs**. Para banco de dados, foi utilizado o **Postgres** para armazenar os dados que envolvem relacionamentos da regra de negócio da aplicação, **MongoDB** para armazenar as notificações e **Redis** para lidar com filas de processamentos em segundo plano.



### Ferramentas, Técnicas e Bibliotecas da API:



- [x] Utilização da biblioteca [Unform](https://unform.dev/) para lidar com os dados de formulários;



<div align="center">
  <small>Rodrigo Gonçalves Santana - 2020</small>
</div>
