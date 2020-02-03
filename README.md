**Cuidados com a conexão**

- 1: Verificar se configurou corretamente o usuário e a senha na string de conexão;
- 2: Verificar se o usuário está configurado certinho no Database Access;
- 3: Verificar o Network Access foi configurado como Allow All (0.0.0.0/0);
- 4: Se tudo estiver certo, tente trocar a versão de conexão do NodeJS na sessão connect do seu Cluster. Neste caso a string de conexão deve ser copiada novamente, e configurada no seu código como anteriormente, ou seja, usuário, senha, banco.
- 5: Se mesmo assim ainda estiver dando erro, é provavel que sua conexão esteja por trás de um proxy. Neste caso, acesse o endereço <portquiz.net:27017>, sendo que 27017 é a porta onde o Mongo DB é executado. Se você ver na página o seguinte trecho 'You have reached this page on port 27017', então está tudo ok e a porta para o Mongo DB está liberada, e neste caso, verifique novamente os passos acima.
Caso não veja a mensagem, ou a página não carregue, significa que sua rede está sob um proxy. A solução pode ser instalar o Mongo DB localmente (na sua máquina), ou então utilizar outra rede.


**Acesso aos dados do Mongo na máquina local**
- 1: Instalar o _MongoDB Compass Communit_
<https://www.mongodb.com/download-center/compass>
- 2: No cluster, clicar em 'Connect with MongoDB Compass'
