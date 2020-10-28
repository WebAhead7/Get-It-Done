// Adding Tests:
test("Submitting a new task adds it to the list", t => {
  let expected = 'Drink Coffee';
  Adding(expected);
  t.equal(ToDoList[ToDoList.length - 1].text, expected)
  t.equal(ToDoList[ToDoList.length - 1].IsChecked, 0)
});



// Checking Tests:
test("Checking an entry marks it as complete", t => {
  let current = ToDoList[ToDoList.length - 1].IsChecked;
  let expected = 0;
  if (current == 0) {
    expected = 1
  }
  Checking(ToDoList.length - 1)
  t.equal(ToDoList[ToDoList.length - 1].IsChecked, expected)
});


test("Checking an entry marks it as complete", t => {
  let current = ToDoList[ToDoList.length - 1].IsChecked;
  let expected = 0;
  if (current == 0) {
    expected = 1
  }
  Checking(ToDoList.length - 1)
  t.equal(ToDoList[ToDoList.length - 1].IsChecked, expected)
});


// Deleting Tests:
test("Deleting an entry removes it from the list", t => {
  let expected = ToDoList.length - 1;
  Deleting(ToDoList.length - 1);
  t.equal(ToDoList.length, expected);
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
    t.equal(i.text, expected.text)
  }
});

