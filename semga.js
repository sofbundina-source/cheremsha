const inventory = [];
let room = "врата";

function showInventory() {
    if (inventory.length === 0) {
        alert("Рюкзак пуст. Даже пыли не набрали.");
    } else {
        alert("В рюкзаке: " + inventory.join(", "));
    }
}

alert(
    "ПРОКЛЯТИЕ БУРМАЛДУЙСКОЙ ЛАБОРАТОРИИ\n\n" +
    "Шлепокрыл Черемшонищь пробудился!\n" +
    "Чтобы победить его найдите:\n\n" +
    "ключоныш, черемшулю, бурмалдуйский меч и маслице семги.\n\n" +
    "Исследуйте лабораторию и спасите бурмалдуйщину"
);


while (true) {
    if (room === "врата") {
        const choice = prompt(
            "Врата бурмалдуйщины\n" +
            "1 — Шующий коридор\n" +
            "2 — Тоннель зеленых испарений\n" +
            "3 — Проверить рюкзак\n" +
            "0 — Выйти из игры"
        );

        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            room = "Шующий коридор";
        } else if (choice === "2") {
            room = "тоннель";
        } else if (choice === "3") {
            showInventory();
        } else {
            alert("Такого прохода нет.");
        }
    }

    else if (room === "Шующий коридор") {
        const choice = prompt(
            "ШУЮЩИЙ КОРИДОР\n" +
            "1 — Архив древних бурмалдуев\n" +
            "2 — Вернуться к вратам\n" +
            "0 — Выйти из игры"
        );

        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            room = "архив";
        } else if (choice === "2") {
            room = "врата";
        } else {
            alert("Такого прохода нет.");
        }
    }

    else if (room === "архив") {
        const choice = prompt(
            "АРХИВ ДРЕВНИХ БУРМАЛДУЕВ\n" +
            "1 — Открыть секретную кладовку\n" +
            "2 — Вернуться в шующий коридор\n" +
            "0 — Выйти из игры"
        );

        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            room = "кладовка";
        } else if (choice === "2") {
            room = "Шующий коридор";
        } else {
            alert("Такого прохода нет.");
        }
    }

    else if (room === "кладовка") {
        const choice = prompt(
            "СЕКРЕТНАЯ КЛАДОВКА КЛЮЧОНЫШЕЙ\n" +
            "1 — Осмотреть сундук\n" +
            "2 — Вернуться в архив\n" +
            "0 — Выйти из игры"
        );

        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            if (inventory.includes("ключоныш")) {
                alert("Сундук пуст. Ключоныш уже у вас.");
            } else {
                const takeKey = confirm("В сундуке лежит ключоныш. Забрать его?");

                if (takeKey === true) {
                    inventory.push("ключоныш");
                    alert("Ключоныш добавлен в рюкзак!");
                } else {
                    alert("Вы оставили ключоныш в сундуке.");
                }
            }
        } else if (choice === "2") {
            room = "архив";
        } else {
            alert("Такого действия нет.");
        }
    }
    else if (room === "тоннель") {
        const choice = prompt(
            "ТОННЕЛЬ ЗЕЛЕННЫХ ИСПАРЕНИЙ\n" +
            "1 — Теплица черемшуль\n" +
            "2 — Кузница мечей\n" +
            "3 — Алтарь семгово масла\n" +
            "4 — Дверь в тронный зал\n" +
            "5 — Вернуться к вратам\n" +
            "0 — Выйти из игры"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            room = "теплица";
        } else if (choice === "2") {
            room = "кузница";
        } else if (choice === "3") {
            room = "алтарь";
        } else if (choice === "4") {
            if (inventory.includes("ключоныш")) {
                room = "тронный зал";
            } else {
                alert("Дверь заперта! Найдите ключоныш.");
            }
        } else if (choice === "5") {
            room = "врата";
        } else {
            alert("Такого прохода нет.")
        }
    }
    else if (room === "теплица") {
        const choice = prompt(
            "ТЕПЛИЦА ЧЕРЕМШУЛЬ\n" +
            "1 — Собрать черемшулю\n" +
            "2 — Вернуться в тоннель\n" +
            "0 — Выйти из игры"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            if (inventory.includes("черемшуля")) {
                alert("Черемшуля уже у вас.");
            } else {
                const takeItem = confirm("На грядке растет магическая черемшуля. Взять ее?");
                if (takeItem === true) {
                    inventory.push("черемшуля");
                    alert("Черемшуля добавлена в рюкзак!");
                } else {
                    alert("Вы оставили черемшулю на грядке.")
                }
            }
        } else if (choice === "2") {
            room = "тоннель";
        } else {
            alert("Такого действия нет.")
        }
    }
    else if (room === "кузница") {
        const choice = prompt(
            "КУЗНИЦА МЕЧЕЙ\n" +
            "1 — Осмотреть наковальню\n" +
            "2 — Вернуться в тоннель\n" +
            "0 — Выйти из игры"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            if (inventory.includes("бурмалдуйский меч")) {
                alert("Бурмалдуйский меч уже у вас.");
            } else {
                const takeItem = confirm("На наковальне лежал бурмалдуйский  меч. Взять?");
                if (takeItem == true) {
                    inventory.push("бурмалдуйский меч");
                    alert("Вы получили бурмалдуйский меч!");
                } else {
                    alert("Вы оставили меч в кузнице.");
                }
            }
        } else if (choice === "2") {
            room = "тоннель";
        } else {
            alert("Такого действия нет.")
        }
    }
    else if (room === "алтарь") {
        const choice = prompt(
            "АЛТАРЬ СЕМГОВОГО МАСЛА\n" +
            "1 — Осмотреть алтарь\n" +
            "2 — Вернуться в тоннель\n" +
            "0 — Выйти из игры"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            if (inventory.includes("маслице семги")) {
                alert("Маслице семги уже у вас.");
            } else {
                const takeItem = confirm("На алтаре стоит маслице семги. Забрать?");
                if (takeItem == true) {
                    inventory.push("маслице семги");
                    alert("Вы получили маслице семги!");
                } else {
                    alert("Вы оставили маслице на алтаре.");
                }
            }
        } else if (choice === "2") {
            room = "тоннель";
        } else {
            alert("Такого действия нет.")
        }
    }
    else if (room === "тронный зал") {
        const choice = prompt(
            "ТРОННЫЙ ЗАЛ ШЛЕПОКРЫЛА \n" +
            "Перед вами Шлепокрыл Черемщонищь\n\n" +
            "1 — Начать бой\n" +
            "2 — Вернуться за предметами\n" +
            "3 — Проверить рюкзак\n" +
            "0 — Выйти из игры"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            if (inventory.includes("бурмалдуйский меч")) {
                if (inventory.includes("черемшуля")) {
                    if (inventory.includes("маслице семги")) {
                        alert(
                            "ПОБЕДА!\n\n" +
                            "Вы победили Шлепокрыла Черемщонища!\n" +
                            "Черемшуля дала вам силу,\n " +
                            "а маслице семги защитило от магии.\n\n" +
                            "Лаборатория спасена!"
                        );
                        break;
                    } else {
                        alert(
                            "ПОРАЖЕНИЕ!\n\n" +
                            "У вас нет маслица семги.\n" +
                            "Магия босса оказалась слишком сильной."
                        );
                        break;
                    }
                } else {
                    alert(
                        "ПОРАЖЕНИЕ!\n\n" +
                        "У вас нет черемшули\n" +
                        "Вам не хватило магической силы!"
                    );
                    break
                }
            } else {
                alert(
                    "ПОРАЖЕНИЕ!\n\n" +
                    "У вас нет бурмалдуйского меча.\n" +
                    "Вы не смогли ранить босса!"
                );
                break
            }
        } else if (choice === "2") {
            room = "тоннель";
        } else if (choice === "3") {
            showInventory();
        } else {
            alert("Такого действия нет.");
        }
    }
}
    alert("Игра завершена.");