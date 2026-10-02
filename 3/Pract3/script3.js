var date = new Date();
var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

alert("Номер дня недели (getDay): " + date.getDay());
alert("Название дня недели: " + days[date.getDay()]);
