// Adding Tests:
test("Submitting a new task adds it to the list", t => {
  let expected = 'Drink Coffee';
  let result = ToDoList[0].text;
  t.equal(result,expected)
});

// // test("Submitting a new task adds it to the list", t => {
// //   t.equal(Adding(Drink Coffee),'Drink Coffee')
// // });





// Checking Tests:
test("Checking an entry marks it as complete", t => {
  let expected = '1';
  let result = ToDoList[0].IsChecked;
    t.equal(result,expected)
  });

//   test("uncheck the entry", t => {
//       t.equal(Checking(Drink Coffee),'')
//     });





// // Deleting Tests:
// test("Deleting an entry removes it from the list", t => {
//     let expected = null;
//     let result = Deleting('Drink Coffee');
//     console.log(result);
//     t.equal(result,expected);
//   });






// // Toggling Tests:
// test("Toggling the filter hides completed tasks from the list", t => {
//     t.equal(Adding(Drink Coffee),'Drink Coffee')
//   });

//   test("Toggling the filter hides completed tasks from the list", t => {
//       t.equal(Adding(Drink Coffee),'Drink Coffee')
//     });
