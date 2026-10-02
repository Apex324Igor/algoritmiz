var date = new Date();
alert("Исходная дата: " + date.toDateString());

date.setFullYear(2030);
date.setMonth(11); // 11 - это декабрь
date.setDate(25);

alert("Измененная дата после set-методов: " + date.toDateString());
