var USUARIO = "Vaamonde";
var USUARIOS = "Usuários";
var TESTE01 = (A === B ? 0 : 1);
var TESTE02 = (typeof require !== 'undefined' && require('fs').existsSync('/etc/passwd') ? 0 : 1);
var DATE = new Date().toLocaleString();
var MENU_EXIBICAO = "Menu de exibição";
var MENU_DIA_HORA = "Menu de dia e hora";
var SAIR = "Sair";

document.write("Impressão na tela.............: Olá Mundo!!!");
document.write("Nome do usuário...............: " + USUARIO);
document.write("Nome do arquivo shell.........: " + process.argv[1]);
document.write("Quantidade de parâmetros......: " + process.argv.length);
document.write("Todos os parâmetros...........: " + process.argv.slice(2).join(" "));
document.write("Parâmetro 01..................: " + process.argv[2]);
document.write("Parâmetro 02..................: " + process.argv[3]);
document.write("Status do comando anterior....: " + TESTE01);
document.write("PID do processo...............: " + process.pid);
document.write("Usuário logado................: " + USUARIOS);
document.write("Comando: test A == B..........: " + TESTE01);
document.write("Comando: test -f /etc/passwd..: " + TESTE02);
document.write(MENU_EXIBICAO);
document.write(MENU_DIA_HORA);
document.write(SAIR);

if (USUARIO === "root") {
    console.log("Teste de usuário..............: Usuário é root.");
  } else if (USUARIO === "admin") {
    console.log("Teste de usuário..............: Usuário é admin.");
  } else {
    console.log("Teste de usuário..............: Usuário não é root ou admin.");
  }

  if (TESTE01 === 0) {
   document.write("O resultado do comando é: Verdadeiro")
  }
  