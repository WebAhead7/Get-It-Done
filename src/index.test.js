// Adding Tests:
test("Submitting a new task adds it to the list", t => {
  let expected = 'Drink Coffee';
  Adding(expected);
  t.equal(ToDoList[ToDoList.length - 1].text, expected)
  t.equal(ToDoList[ToDoList.length - 1].IsChecked, 0)
});
test("Submitting a new task adds it to the list", t => {
  let expected = 'Play Football';
  Adding(expected);
  t.equal(ToDoList[ToDoList.length - 1].text, expected)
  t.equal(ToDoList[ToDoList.length - 1].IsChecked, 0)
});
test("Submitting an empty task doesn't add it to the list", t => {
  let expected = '';//empty text
  let len = ToDoList.length;
  Adding(expected);
  t.equal(len, ToDoList.length)
});
test("Submitting a new task which is an html element to the list", t => {
  let expected = `<img src="hello.png" onerror="alert('Hello World!')'/>`;
  Adding(expected);
  t.equal(ToDoList[ToDoList.length - 1].text, expected)
  t.equal(ToDoList[ToDoList.length - 1].IsChecked, 0)
});


// Deleting Tests:
test("Deleting an existed entry removes it from the list", t => {
  let expected = ToDoList.length - 1;
  Deleting(ToDoList.length - 1);
  t.equal(ToDoList.length, expected);
});
test("Deleting unexisted entry removes it from the list", t => {
  let expected = ToDoList.length;
  Deleting(ToDoList.length + 10);
  t.equal(ToDoList.length, expected);
});


// Checking Tests:
test("Checking an entry marks it as completed one", t => {
  let current = ToDoList[ToDoList.length - 1].IsChecked;
  let expected = 0;
  if (current == 0) {
    expected = 1
  }
  Checking(ToDoList.length - 1)
  t.equal(ToDoList[ToDoList.length - 1].IsChecked, expected)
});
test("Checking an entry marks it as completed one", t => {
  let current = ToDoList[ToDoList.length - 1].IsChecked;
  let expected = 0;
  if (current == 0) {
    expected = 1
  }
  Checking(ToDoList.length - 1)
  t.equal(ToDoList[ToDoList.length - 1].IsChecked, expected)
});
test("Checking an entry marks it as completed one", t => {
  let current = ToDoList[ToDoList.length - 1].IsChecked;
  let expected = 0;
  if (current == 0) {
    expected = 1
  }
  Checking(ToDoList.length - 1)
  t.equal(ToDoList[ToDoList.length - 1].IsChecked, expected)
});

// Toggling Tests:
test("Toggling the filter hides completed tasks from the list", t => {
  let target_id = Toggle.id;
  let expected = ToDoList;
  if (target_id === 'false') {
    expected = ToDoList.filter(mission => !mission.IsChecked);
  }
  let result = Toggling(target_id);
  for (let i in result) {
    t.equal(result[i].text, expected[i].text)
  }
});
test("Toggling the filter hides completed tasks from the list", t => {
  let target_id = Toggle.id;
  let expected = ToDoList;
  if (target_id === 'false') {
    expected = ToDoList.filter(mission => !mission.IsChecked);
  }
  let result = Toggling(target_id);
  for (let i in result) {
    t.equal(result[i].text, expected[i].text)
  }
});

