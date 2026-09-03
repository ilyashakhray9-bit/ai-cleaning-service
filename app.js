const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkRequest(request) {
  if (!request.service) {
  console.log("Услуга не указана.");


  } else if (!request.object) {
    console.log("Объект не указан.");

  } else if (!request.date) {
    console.log("Дата не указана.");

  } else if (!request.time) {
    rl.question("Во сколько вам удобно? ", (answer) => {
      request.time = answer;

      checkRequest(request);
    });

  } else {
    console.log("Заявка полностью заполнена!");
  }
}
function createRequest() {
  const request = createRequest();

  return request;
}
function chat() {
  rl.question("Напиши что-нибудь: ", (message) => {
    message = message.toLowerCase();

    if (message === "привет") {
      console.log("Привет! Рад тебя видеть.");

    } else if (message === "как дела") {
      console.log("У меня всё хорошо! А у тебя?");

    } else if (message === "хочу заказать") {
      console.log("Хорошо, давайте оформим заявку.");

      const request = {
        service: null,
        object: null,
        date: null,
        time: null
      };

      rl.question("Какую услугу вы хотите заказать? ", (answer) => {
        request.service = answer;

        rl.question("Какой объект нужно убрать? ", (answer) => {
          request.object = answer;

          rl.question("На какую дату нужна уборка? ", (answer) => {
            request.date = answer;

            rl.question("Во сколько вам удобно? ", (answer) => {
              request.time = answer;

              checkRequest(request);
            });
          });
        });
      });

      return;

    } else if (message === "пока") {
      console.log("До встречи!");
      rl.close();
      return;

    } else {
      console.log("Я пока не знаю, что на это ответить.");
    }

    chat();
  });
}

chat();