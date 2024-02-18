import {Selector} from 'testcafe';
fixture('Todo Status Test')
    // .page('http://localhost:8181/')
    .page('http://34.64.140.229:8181/')

// //npm run SearchTest

// test('TC00000061 Search test', async t=> {
//     const CreateTodo = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-17',
//         status: '대기중'
//     } //투두 생성하라고 요청보냄
//
//     //요청한거 응답하는지 확인
//     const CheckReq = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo,
//
//     })
//     await t.expect(CheckReq.status).eql(200)
//
//     const{num, ...others}= CheckReq.body[CheckReq.body.length-1];
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//     await t.setNativeDialogHandler(() => true); //네이티브 대화 상자에 대한 핸들러 설정 ('확인'버튼 누르도록)
//
//     //Dialog[Alert, Confirm, Prompt]가 표시되었었는지 조회
//     const history = await t.getNativeDialogHistory();
//     // 해당 Dialog 의 Type 이 Alert 인지 확인
//     await t.expect(history[0].type).eql('alert')
//         // 해당 Dialog 텍스트가 일치하는지 확인
//         .expect(history[0].text).eql('내용 or 날짜를 입력하세요.');
//
//     const ScrollDiv = Selector('#scrollDiv')
//     await t.expect(ScrollDiv.hasChildElements).ok()
//         .expect(ScrollDiv.textContent).contains('Test title') // 자식요소에 이글자가 있나오
//         .wait(2000);
//
//     const StatusBtn = Selector('#statusBtn'+ num);
//     await t.expect(StatusBtn.textContent).contains('대기중');
//
//
//     //테스트 다 했으면 삭제 요청하기
//     //const ScrollDiv = Selector('#scrollDiv')
//     const DelReq = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq.status).eql(200); //삭제요청 잘됐나
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(ScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000062 Search test', async t=> {
//     const CreateTodo = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-17',
//         status: '대기중'
//     } //투두 생성하라고 요청보냄
//
//     //요청한거 응답하는지 확인
//     const CheckReq = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo,
//
//     })
//     await t.expect(CheckReq.status).eql(200)
//
//     const{num, ...others}= CheckReq.body[CheckReq.body.length-1];
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//     const SearchContent = Selector('#searchTitle')
//     await t.typeText(SearchContent, 'apple')
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//
//
//     const ScrollDiv = Selector('#scrollDiv')
//     await t.expect(ScrollDiv.hasChildElements).notOk()
//         .wait(2000);
//
//
//
//     //테스트 다 했으면 삭제 요청하기
//     //const ScrollDiv = Selector('#scrollDiv')
//     const DelReq = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq.status).eql(200); //삭제요청 잘됐나
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(ScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000063 Search test', async t=> {
//     const CreateTodo1 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-17',
//         status: '대기중'
//     }
//     const CreateTodo2 = {
//         title: 'Second Todo',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CheckReq1 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo1,
//     })
//     const CheckReq2 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo2,
//     })
//     await t.expect(CheckReq1.status).eql(200);
//     await t.expect(CheckReq2.status).eql(200);
//
//     const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
//     const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];
//
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//
//     const SearchContent = Selector('#searchTitle')
//     await t.typeText(SearchContent, 'Test title')
//     await t.wait(1000);
//
//     await t.expect(SearchContent.value).eql('Test title');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함
//
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//
//
//     const ScrollDiv = Selector('#scrollDiv')
//     await t.expect(ScrollDiv.hasChildElements).ok()
//     await t.expect(ScrollDiv.textContent).contains('Test title')
//         .wait(2000);
//
//
//
//     //테스트 다 했으면 삭제 요청하기
//     const DelScrollDiv = Selector('#scrollDiv')
//     const DelReq1 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     const DelReq2 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
//     await t.expect(DelReq2.status).eql(200);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000064 Search test', async t=> {
//     const CreateTodo1 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-17',
//         status: '대기중'
//     }
//     const CreateTodo2 = {
//         title: 'Second Todo',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CheckReq1 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo1,
//     })
//     const CheckReq2 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo2,
//     })
//     await t.expect(CheckReq1.status).eql(200);
//     await t.expect(CheckReq2.status).eql(200);
//
//     const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
//     const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];
//
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//
//     const SearchContent = Selector('#searchTitle')
//     await t.typeText(SearchContent, 'Test ti')
//     await t.wait(1000);
//
//     // await t.expect(SearchContent.value).eql('Test title');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함
//
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//
//
//     const ScrollDiv = Selector('#scrollDiv')
//     await t.expect(ScrollDiv.hasChildElements).ok()
//     await t.expect(ScrollDiv.textContent).contains('Test ti')
//         .wait(2000);
//
//
//
//     //테스트 다 했으면 삭제 요청하기
//     const DelScrollDiv = Selector('#scrollDiv')
//     const DelReq1 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     const DelReq2 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
//     await t.expect(DelReq2.status).eql(200);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000065 Search test', async t=> {
//     const CreateTodo1 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-17',
//         status: '대기중'
//     }
//     const CreateTodo2 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CheckReq1 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo1,
//     })
//     const CheckReq2 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo2,
//     })
//     await t.expect(CheckReq1.status).eql(200);
//     await t.expect(CheckReq2.status).eql(200);
//
//     const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
//     const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];
//
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//
//     const SearchContent = Selector('#searchTitle')
//     await t.typeText(SearchContent, 'Test title')
//     await t.wait(1000);
//
//     // await t.expect(SearchContent.value).eql('Test title');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함
//
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//
//
//     const ScrollDiv = Selector('#scrollDiv')
//     await t.expect(ScrollDiv.hasChildElements).ok()
//
//
//     const TodoItems = Selector('#scrollDiv .card-body');
//
//     // 'Test title'을 포함하는 모든 자식 요소에 대해 확인합니다.
//     await t.expect(TodoItems.withText('Test title').count).eql(2)
//         .wait(2000);
//
//
//     //테스트 다 했으면 삭제 요청하기
//     const DelScrollDiv = Selector('#scrollDiv')
//     const DelReq1 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     const DelReq2 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
//     await t.expect(DelReq2.status).eql(200);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000066 Search test', async t=> {
//     const CreateTodo1 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-17',
//         status: '대기중'
//     }
//     const CreateTodo2 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CheckReq1 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo1,
//     })
//     const CheckReq2 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo2,
//     })
//     await t.expect(CheckReq1.status).eql(200);
//     await t.expect(CheckReq2.status).eql(200);
//
//     const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
//     const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];
//
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//
//     const SearchContent = Selector('#searchTitle')
//     await t.typeText(SearchContent, 'Test ti')
//     await t.wait(1000);
//
//     // await t.expect(SearchContent.value).eql('Test title');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함
//
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//
//
//     const ScrollDiv = Selector('#scrollDiv')
//     await t.expect(ScrollDiv.hasChildElements).ok()
//
//
//     const TodoItems = Selector('#scrollDiv .card-body');
//
//     // 'Test title'을 포함하는 모든 자식 요소에 대해 확인합니다.
//     await t.expect(TodoItems.withText('Test ti').count).eql(2)
//         .wait(2000);
//
//
//     //테스트 다 했으면 삭제 요청하기
//     const DelScrollDiv = Selector('#scrollDiv')
//     const DelReq1 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     const DelReq2 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
//     await t.expect(DelReq2.status).eql(200);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000067 Search test', async t=> {
//     const CreateTodo1 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CreateTodo2 = {
//         title: 'Second Todo',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CheckReq1 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo1,
//     })
//     const CheckReq2 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo2,
//     })
//     await t.expect(CheckReq1.status).eql(200);
//     await t.expect(CheckReq2.status).eql(200);
//
//     const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
//     const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];
//
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//
//     const SearchContent = Selector('#searchTitle')
//     await t.typeText(SearchContent, 'Second Todo')
//     await t.wait(1000);
//
//     // await t.expect(SearchContent.value).eql('Test title');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함
//
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//
//
//     const ScrollDiv = Selector('#scrollDiv')
//     const DivCard = Selector('#scrollDiv .card'); //#scrollDiv 아래에 있는 모든 .card 클래스를 가진 요소를 선택
//     //Selector('#scrollDiv > .card')로 하면 #scrollDiv 안에 있는 첫 번째 .card를 선택
//
//     await t
//         .expect(DivCard.exists).ok()        // 카드가 한 번 이상 존재하는지 확인
//         .expect(DivCard.count).eql(1)       // 카드가 정확히 한 번만 존재하는지 확인
//         .expect(DivCard.textContent).contains('Second Todo')  // 특정 텍스트를 포함하는지 확인
//         .wait(2000);
//     // await t.expect(ScrollDiv.textContent).contains('Test title')
//     //     .wait(2000);
//
//
//
//
//
//     //테스트 다 했으면 삭제 요청하기
//     const DelScrollDiv = Selector('#scrollDiv')
//     const DelReq1 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     const DelReq2 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
//     await t.expect(DelReq2.status).eql(200);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000068 Search test', async t=> {
//     const CreateTodo1 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CreateTodo2 = {
//         title: 'Second Todo',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CheckReq1 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo1,
//     })
//     const CheckReq2 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo2,
//     })
//     await t.expect(CheckReq1.status).eql(200);
//     await t.expect(CheckReq2.status).eql(200);
//
//     const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
//     const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];
//
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//
//     const SearchContent = Selector('#searchTitle')
//     await t.typeText(SearchContent, 'Second To')
//     await t.wait(1000);
//
//     // await t.expect(SearchContent.value).eql('Test title');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함
//
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//
//
//     const ScrollDiv = Selector('#scrollDiv')
//     const DivCard = Selector('#scrollDiv .card'); //#scrollDiv 아래에 있는 모든 .card 클래스를 가진 요소를 선택
//     //Selector('#scrollDiv > .card')로 하면 #scrollDiv 안에 있는 첫 번째 .card를 선택
//
//     await t
//         .expect(DivCard.exists).ok()        // 카드가 한 번 이상 존재하는지 확인
//         .expect(DivCard.count).eql(1)       // 카드가 정확히 한 번만 존재하는지 확인
//         .expect(DivCard.textContent).contains('Second To')  // 특정 텍스트를 포함하는지 확인
//         .wait(2000);
//     // await t.expect(ScrollDiv.textContent).contains('Test title')
//     //     .wait(2000);
//
//
//
//
//
//     //테스트 다 했으면 삭제 요청하기
//     const DelScrollDiv = Selector('#scrollDiv')
//     const DelReq1 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     const DelReq2 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
//     await t.expect(DelReq2.status).eql(200);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000069 Search test', async t=> {
//     const CreateTodo1 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CreateTodo2 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CheckReq1 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo1,
//     })
//     const CheckReq2 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo2,
//     })
//     await t.expect(CheckReq1.status).eql(200);
//     await t.expect(CheckReq2.status).eql(200);
//
//     const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
//     const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];
//
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//
//     const SearchContent = Selector('#searchTitle')
//     await t.typeText(SearchContent, 'Test title')
//     await t.wait(1000);
//
//     // await t.expect(SearchContent.value).eql('Test title');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함
//
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//
//     const ScrollDiv = Selector('#scrollDiv')
//     const TodoItems = Selector('#scrollDiv .card-body'); //#scrollDiv 아래에 있는 모든 .card-body 클래스를 가진 요소를 선택
//     //Selector('#scrollDiv > .card-body')로 하면 #scrollDiv 안에 있는 첫 번째 .card-body를 선택
//
//     // 'Test title'을 포함하는 모든 자식 요소에 대해 확인합니다.
//     await t.expect(TodoItems.withText('Test title').count).eql(2)
//         .wait(2000);
//
//
//     //테스트 다 했으면 삭제 요청하기
//     const DelScrollDiv = Selector('#scrollDiv')
//     const DelReq1 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     const DelReq2 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
//     await t.expect(DelReq2.status).eql(200);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000070 Search test', async t=> {
//     const CreateTodo1 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CreateTodo2 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CheckReq1 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo1,
//     })
//     const CheckReq2 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo2,
//     })
//     await t.expect(CheckReq1.status).eql(200);
//     await t.expect(CheckReq2.status).eql(200);
//
//     const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
//     const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];
//
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//
//     const SearchContent = Selector('#searchTitle')
//     await t.typeText(SearchContent, 'Test ti')
//     await t.wait(1000);
//
//     // await t.expect(SearchContent.value).eql('Test title');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//
//     const TodoItems = Selector('#scrollDiv .card-body'); //#scrollDiv 아래에 있는 모든 .card-body 클래스를 가진 요소를 선택
//     //Selector('#scrollDiv > .card-body')로 하면 #scrollDiv 안에 있는 첫 번째 .card-body를 선택
//
//     // 'Test title'을 포함하는 모든 자식 요소에 대해 확인합니다.
//     await t.expect(TodoItems.withText('Test ti').count).eql(2)
//         .wait(2000);
//
//
//     //테스트 다 했으면 삭제 요청하기
//     const DelScrollDiv = Selector('#scrollDiv')
//     const DelReq1 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     const DelReq2 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
//     await t.expect(DelReq2.status).eql(200);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000071 Search test', async t=> {
//     const CreateTodo = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     } //투두 생성하라고 요청보냄
//
//     //요청한거 응답하는지 확인
//     const CheckReq = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo,
//
//     })
//     await t.expect(CheckReq.status).eql(200)
//
//     const{num, ...others}= CheckReq.body[CheckReq.body.length-1];
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//     const SearchDate = Selector('#searchDate')
//     await t.typeText(SearchDate, '2024-03-19')
//     await t.wait(1000);
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//
//     const ScrollDiv = Selector('#scrollDiv')
//     await t.expect(ScrollDiv.hasChildElements).notOk()
//         .wait(2000);
//
//
//     //테스트 다 했으면 삭제 요청하기
//     const DelScrollDiv = Selector('#scrollDiv')
//     const DelReq = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq.status).eql(200); //삭제요청 잘됐나
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000072 Search test', async t=> {
//     const CreateTodo1 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CreateTodo2 = {
//         title: 'Second Todo',
//         content: 'Test content',
//         date: '2024-02-19',
//         status: '대기중'
//     }
//     const CheckReq1 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo1,
//     })
//     const CheckReq2 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo2,
//     })
//     await t.expect(CheckReq1.status).eql(200);
//     await t.expect(CheckReq2.status).eql(200);
//
//     const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
//     const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];
//
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//
//     const SearchDate = Selector('#searchDate')
//     await t.typeText(SearchDate, '2024-02-18')
//     await t.wait(1000);
//
//     // await t.expect(SearchDate.textContent).eql('2024-02-18') //틀린거임
//     await t.expect(SearchDate.value).eql('2024-02-18');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함
//
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//
//     const TodoItems = Selector('#scrollDiv .card-body'); //#scrollDiv 아래에 있는 모든 .card-body 클래스를 가진 요소를 선택
//     //Selector('#scrollDiv > .card-body')로 하면 #scrollDiv 안에 있는 첫 번째 .card-body를 선택
//     await t.expect(TodoItems.count).eql(1); //TodoItems이 1개인지
//
//     const EditTodo = Selector('#scrollDiv .card-body [data-bs-target="#addModal"]')
//     await t.click(EditTodo);
//
//     const ModalDate = Selector('#addDate')
//     await t.expect(ModalDate.value).eql('2024-02-18');
//
//     const ModalClose = Selector('.btn-close')
//     await t.click(ModalClose);
//
//
//     //테스트 다 했으면 삭제 요청하기
//     const DelScrollDiv = Selector('#scrollDiv')
//     const DelReq1 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     const DelReq2 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
//     await t.expect(DelReq2.status).eql(200);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000073 Search test', async t=> {
//     const CreateTodo1 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CreateTodo2 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-19',
//         status: '대기중'
//     }
//     const CheckReq1 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo1,
//     })
//     const CheckReq2 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo2,
//     })
//     await t.expect(CheckReq1.status).eql(200);
//     await t.expect(CheckReq2.status).eql(200);
//
//     const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
//     const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];
//
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//
//     const SearchDate = Selector('#searchDate')
//     await t.typeText(SearchDate, '2024-02-18')
//     await t.wait(1000);
//
//     // await t.expect(SearchDate.value).eql('2024-02-18');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//
//     const TodoItems = Selector('#scrollDiv .card-body'); //#scrollDiv 아래에 있는 모든 .card-body 클래스를 가진 요소를 선택
//     //Selector('#scrollDiv > .card-body')로 하면 #scrollDiv 안에 있는 첫 번째 .card-body를 선택
//     await t.expect(TodoItems.count).eql(1); //TodoItems이 1개인지
//
//     const EditTodo = Selector('#scrollDiv .card-body [data-bs-target="#addModal"]')
//     await t.click(EditTodo);
//
//     const ModalDate = Selector('#addDate')
//     await t.expect(ModalDate.value).eql('2024-02-18');
//
//     const ModalClose = Selector('.btn-close')
//     await t.click(ModalClose);
//
//
//     //테스트 다 했으면 삭제 요청하기
//     const DelScrollDiv = Selector('#scrollDiv')
//     const DelReq1 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     const DelReq2 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
//     await t.expect(DelReq2.status).eql(200);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000074 Search test', async t=> {
//     const CreateTodo1 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CreateTodo2 = {
//         title: 'Second Todo',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CheckReq1 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo1,
//     })
//     const CheckReq2 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo2,
//     })
//     await t.expect(CheckReq1.status).eql(200);
//     await t.expect(CheckReq2.status).eql(200);
//
//     const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
//     const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];
//
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//
//     const SearchDate = Selector('#searchDate')
//     await t.typeText(SearchDate, '2024-02-18')
//     await t.wait(1000);
//
//     // await t.expect(SearchDate.value).eql('2024-02-18');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//
//     const TodoItems = Selector('#scrollDiv .card-body'); //#scrollDiv 아래에 있는 모든 .card-body 클래스를 가진 요소를 선택
//     await t.expect(TodoItems.count).eql(2); //TodoItems이 2개인지
//
//     const FirstTodo = Selector('#scrollDiv > .card .card-body');//#scrollDiv 안에 있는 첫 번째 .card의 .card-body를 선택
//     const SecondTodo = Selector('#scrollDiv .card:nth-child(2) .card-body');// nth-child(2)는 #scrollDiv 안에서 두 번째 .card를 선택
//
//     const FEditTodo = Selector(FirstTodo).find('[data-bs-target="#addModal"]');
//     const SEditTodo = Selector(SecondTodo).find('[data-bs-target="#addModal"]');
//
//     await t.click(FEditTodo);   //첫번째 todo 날짜 확인
//     const ModalDate = Selector('#addDate')
//     await t.expect(ModalDate.value).eql('2024-02-18');
//     const ModalClose = Selector('.btn-close')
//     await t.click(ModalClose);
//
//     await t.click(SEditTodo);   //두번째 todo 날짜 확인
//     await t.expect(ModalDate.value).eql('2024-02-18');
//     await t.click(ModalClose);
//
//
//     //테스트 다 했으면 삭제 요청하기
//     const DelScrollDiv = Selector('#scrollDiv')
//     const DelReq1 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     const DelReq2 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
//     await t.expect(DelReq2.status).eql(200);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000075 Search test', async t=> {
//     const CreateTodo1 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CreateTodo2 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CheckReq1 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo1,
//     })
//     const CheckReq2 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo2,
//     })
//     await t.expect(CheckReq1.status).eql(200);
//     await t.expect(CheckReq2.status).eql(200);
//
//     const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
//     const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];
//
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//
//     const SearchDate = Selector('#searchDate')
//     await t.typeText(SearchDate, '2024-02-18')
//     await t.wait(1000);
//
//     // await t.expect(SearchDate.value).eql('2024-02-18');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//
//     const TodoItems = Selector('#scrollDiv .card-body'); //#scrollDiv 아래에 있는 모든 .card-body 클래스를 가진 요소를 선택
//     await t.expect(TodoItems.count).eql(2); //TodoItems이 2개인지
//
//     const FirstTodo = Selector('#scrollDiv > .card .card-body');//#scrollDiv 안에 있는 첫 번째 .card의 .card-body를 선택
//     const SecondTodo = Selector('#scrollDiv .card:nth-child(2) .card-body');// nth-child(2)는 #scrollDiv 안에서 두 번째 .card를 선택
//
//     const FEditTodo = Selector(FirstTodo).find('[data-bs-target="#addModal"]');
//     const SEditTodo = Selector(SecondTodo).find('[data-bs-target="#addModal"]');
//
//     await t.click(FEditTodo);   //첫번째 todo 날짜 확인
//     const ModalDate = Selector('#addDate')
//     await t.expect(ModalDate.value).eql('2024-02-18');
//     const ModalClose = Selector('.btn-close')
//     await t.click(ModalClose);
//
//     await t.click(SEditTodo);   //두번째 todo 날짜 확인
//     await t.expect(ModalDate.value).eql('2024-02-18');
//     await t.click(ModalClose);
//
//
//     //테스트 다 했으면 삭제 요청하기
//     const DelScrollDiv = Selector('#scrollDiv')
//     const DelReq1 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     const DelReq2 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
//     await t.expect(DelReq2.status).eql(200);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000076 Search test', async t=> {
//     const CreateTodo = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     } //투두 생성하라고 요청보냄
//
//     //요청한거 응답하는지 확인
//     const CheckReq = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo,
//
//     })
//     await t.expect(CheckReq.status).eql(200)
//
//     const{num, ...others}= CheckReq.body[CheckReq.body.length-1];
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//     const SearchTitle = Selector('#searchTitle')
//     await t.typeText(SearchTitle, 'apple')
//
//     const SearchDate = Selector('#searchDate')
//     await t.typeText(SearchDate, '2024-03-19')
//     await t.wait(1000);
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//
//     const ScrollDiv = Selector('#scrollDiv')
//     await t.expect(ScrollDiv.hasChildElements).notOk()
//         .wait(2000);
//
//
//     //테스트 다 했으면 삭제 요청하기
//     const DelScrollDiv = Selector('#scrollDiv')
//     const DelReq = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq.status).eql(200); //삭제요청 잘됐나
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000077 Search test', async t=> {
//     const CreateTodo1 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CreateTodo2 = {
//         title: 'Second Todo',
//         content: 'Test content',
//         date: '2024-02-19',
//         status: '대기중'
//     }
//     const CheckReq1 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo1,
//     })
//     const CheckReq2 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo2,
//     })
//     await t.expect(CheckReq1.status).eql(200);
//     await t.expect(CheckReq2.status).eql(200);
//
//     const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
//     const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];
//
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//     const SearchTitle = Selector('#searchTitle')
//     await t.typeText(SearchTitle, 'Second Todo')
//
//     const SearchDate = Selector('#searchDate')
//     await t.typeText(SearchDate, '2024-02-19')
//     await t.wait(1000);
//
//     await t.expect(SearchTitle.value).eql('Second Todo');
//     await t.expect(SearchDate.value).eql('2024-02-19');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//
//     const TodoItems = Selector('#scrollDiv .card-body'); //#scrollDiv 아래에 있는 모든 .card-body 클래스를 가진 요소를 선택
//     await t.expect(TodoItems.count).eql(1); //TodoItems이 1개인지
//
//     await t.expect(TodoItems.withText('Second Todo').count).eql(1)
//             .wait(2000);
//
//     const FirstTodo = Selector('#scrollDiv > .card .card-body');//#scrollDiv 안에 있는 첫 번째 .card의 .card-body를 선택
//     // const SecondTodo = Selector('#scrollDiv .card:nth-child(2) .card-body');// nth-child(2)는 #scrollDiv 안에서 두 번째 .card를 선택
//
//     const FEditTodo = Selector(FirstTodo).find('[data-bs-target="#addModal"]');
//     // const SEditTodo = Selector(SecondTodo).find('[data-bs-target="#addModal"]');
//
//     await t.click(FEditTodo);   //첫번째 todo 날짜 확인
//     const ModalDate = Selector('#addDate')
//     const ModalTitle = Selector('#exampleModalLabel')
//     await t.expect(ModalDate.value).eql('2024-02-19')
//         .expect(ModalTitle.value).eql('Second Todo');
//     const ModalClose = Selector('.btn-close')
//     await t.click(ModalClose);
//
//     // await t.click(SEditTodo);   //두번째 todo 날짜 확인
//     // await t.expect(ModalDate.value).eql('2024-02-18');
//     // await t.click(ModalClose);
//
//
//     //테스트 다 했으면 삭제 요청하기
//     const DelScrollDiv = Selector('#scrollDiv')
//     const DelReq1 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     const DelReq2 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
//     await t.expect(DelReq2.status).eql(200);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000078 Search test', async t=> {
//     const CreateTodo1 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CreateTodo2 = {
//         title: 'Second Todo',
//         content: 'Test content',
//         date: '2024-02-19',
//         status: '대기중'
//     }
//     const CheckReq1 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo1,
//     })
//     const CheckReq2 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo2,
//     })
//     await t.expect(CheckReq1.status).eql(200);
//     await t.expect(CheckReq2.status).eql(200);
//
//     const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
//     const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];
//
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//     const SearchTitle = Selector('#searchTitle')
//     await t.typeText(SearchTitle, 'Second To')
//
//     const SearchDate = Selector('#searchDate')
//     await t.typeText(SearchDate, '2024-02-19')
//     await t.wait(1000);
//
//     // await t.expect(SearchTitle.value).eql('Second Todo');    //입력한 제목, 날짜 표시 확인
//     // await t.expect(SearchDate.value).eql('2024-02-19');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//
//     const TodoItems = Selector('#scrollDiv .card-body'); //#scrollDiv 아래에 있는 모든 .card-body 클래스를 가진 요소를 선택
//     await t.expect(TodoItems.count).eql(1); //TodoItems이 1개인지
//
//     // 'Test title'을 포함하는 모든 자식 요소에 대해 확인합니다.
//     await t.expect(TodoItems.withText('Second To').count).eql(1)
//         .wait(2000);
//
//
//     const FirstTodo = Selector('#scrollDiv > .card .card-body');//#scrollDiv 안에 있는 첫 번째 .card의 .card-body를 선택
//     // const SecondTodo = Selector('#scrollDiv .card:nth-child(2) .card-body');// nth-child(2)는 #scrollDiv 안에서 두 번째 .card를 선택
//
//     const FEditTodo = Selector(FirstTodo).find('[data-bs-target="#addModal"]');
//     // const SEditTodo = Selector(SecondTodo).find('[data-bs-target="#addModal"]');
//
//     await t.click(FEditTodo);   //첫번째 todo 날짜 확인
//     const ModalDate = Selector('#addDate')
//     const ModalTitle = Selector('#exampleModalLabel')
//     await t.expect(ModalDate.value).eql('2024-02-19')
//         .expect(ModalTitle.value).eql('Second Todo');
//     const ModalClose = Selector('.btn-close')
//     await t.click(ModalClose);
//
//     // await t.click(SEditTodo);   //두번째 todo 날짜 확인
//     // await t.expect(ModalDate.value).eql('2024-02-18');
//     // await t.click(ModalClose);
//
//
//     //테스트 다 했으면 삭제 요청하기
//     const DelScrollDiv = Selector('#scrollDiv')
//     const DelReq1 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     const DelReq2 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
//     await t.expect(DelReq2.status).eql(200);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000079 Search test', async t=> {
//     const CreateTodo1 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CreateTodo2 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-19',
//         status: '대기중'
//     }
//     const CheckReq1 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo1,
//     })
//     const CheckReq2 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo2,
//     })
//     await t.expect(CheckReq1.status).eql(200);
//     await t.expect(CheckReq2.status).eql(200);
//
//     const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
//     const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];
//
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//     const SearchTitle = Selector('#searchTitle')
//     await t.typeText(SearchTitle, 'Test title')
//
//     const SearchDate = Selector('#searchDate')
//     await t.typeText(SearchDate, '2024-02-19')
//     await t.wait(1000);
//
//     // await t.expect(SearchTitle.value).eql('Second Todo');    //입력한 제목, 날짜 표시 확인
//     // await t.expect(SearchDate.value).eql('2024-02-19');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//
//     const TodoItems = Selector('#scrollDiv .card-body'); //#scrollDiv 아래에 있는 모든 .card-body 클래스를 가진 요소를 선택
//     await t.expect(TodoItems.count).eql(1); //TodoItems이 1개인지
//
//     // 'Test title'을 포함하는 모든 자식 요소에 대해 확인합니다.
//     await t.expect(TodoItems.withText('Test title').count).eql(1)
//         .wait(2000);
//
//
//     const FirstTodo = Selector('#scrollDiv > .card .card-body');//#scrollDiv 안에 있는 첫 번째 .card의 .card-body를 선택
//     // const SecondTodo = Selector('#scrollDiv .card:nth-child(2) .card-body');// nth-child(2)는 #scrollDiv 안에서 두 번째 .card를 선택
//
//     const FEditTodo = Selector(FirstTodo).find('[data-bs-target="#addModal"]');
//     // const SEditTodo = Selector(SecondTodo).find('[data-bs-target="#addModal"]');
//
//     await t.click(FEditTodo);   //첫번째 todo 날짜 확인
//     const ModalDate = Selector('#addDate')
//     const ModalTitle = Selector('#exampleModalLabel')
//     await t.expect(ModalDate.value).eql('2024-02-19')
//         .expect(ModalTitle.value).eql('Test title');
//     const ModalClose = Selector('.btn-close')
//     await t.click(ModalClose);
//
//     // await t.click(SEditTodo);   //두번째 todo 날짜 확인
//     // await t.expect(ModalDate.value).eql('2024-02-18');
//     // await t.click(ModalClose);
//
//
//     //테스트 다 했으면 삭제 요청하기
//     const DelScrollDiv = Selector('#scrollDiv')
//     const DelReq1 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     const DelReq2 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
//     await t.expect(DelReq2.status).eql(200);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000080 Search test', async t=> {
//     const CreateTodo1 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-18',
//         status: '대기중'
//     }
//     const CreateTodo2 = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-19',
//         status: '대기중'
//     }
//     const CheckReq1 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo1,
//     })
//     const CheckReq2 = await t.request({
//         url:'http://34.64.140.229:8181/createTodo',
//         method:'Post',
//         headers:{
//             "content-type" : "application/json",
//             "charset" : "utf-8"
//         },
//         body:CreateTodo2,
//     })
//     await t.expect(CheckReq1.status).eql(200);
//     await t.expect(CheckReq2.status).eql(200);
//
//     const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
//     const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];
//
//     // await t.expect(others).eql(CreateTodo);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.wait(2000); //전제조건 완료
//
//     const SearchTitle = Selector('#searchTitle')
//     await t.typeText(SearchTitle, 'Test ti')
//
//     const SearchDate = Selector('#searchDate')
//     await t.typeText(SearchDate, '2024-02-19')
//     await t.wait(1000);
//
//     // await t.expect(SearchTitle.value).eql('Second Todo');    //입력한 제목, 날짜 표시 확인
//     // await t.expect(SearchDate.value).eql('2024-02-19');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함
//
//     const SearchBtn = Selector('.searchIcon')
//     await t.click(SearchBtn).wait(2000);
//
//     const TodoItems = Selector('#scrollDiv .card-body'); //#scrollDiv 아래에 있는 모든 .card-body 클래스를 가진 요소를 선택
//     await t.expect(TodoItems.count).eql(1); //TodoItems이 1개인지
//
//     // 'Test title'을 포함하는 모든 자식 요소에 대해 확인합니다.
//     await t.expect(TodoItems.withText('Test ti').count).eql(1)
//         .wait(2000);
//
//
//     const FirstTodo = Selector('#scrollDiv > .card .card-body');//#scrollDiv 안에 있는 첫 번째 .card의 .card-body를 선택
//     // const SecondTodo = Selector('#scrollDiv .card:nth-child(2) .card-body');// nth-child(2)는 #scrollDiv 안에서 두 번째 .card를 선택
//
//     const FEditTodo = Selector(FirstTodo).find('[data-bs-target="#addModal"]');
//     // const SEditTodo = Selector(SecondTodo).find('[data-bs-target="#addModal"]');
//
//     await t.click(FEditTodo);   //첫번째 todo 날짜 확인
//     const ModalDate = Selector('#addDate')
//     const ModalTitle = Selector('#exampleModalLabel')
//     await t.expect(ModalDate.value).eql('2024-02-19')
//         .expect(ModalTitle.value).eql('Test title');
//     const ModalClose = Selector('.btn-close')
//     await t.click(ModalClose);
//
//     // await t.click(SEditTodo);   //두번째 todo 날짜 확인
//     // await t.expect(ModalDate.value).eql('2024-02-18');
//     // await t.click(ModalClose);
//
//
//     //테스트 다 했으면 삭제 요청하기
//     const DelScrollDiv = Selector('#scrollDiv')
//     const DelReq1 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     const DelReq2 = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//     })
//     await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
//     await t.expect(DelReq2.status).eql(200);
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

test('TC00000081 Search test', async t=> {
    const CreateTodo1 = {
        title: 'Test title',
        content: 'Test content',
        date: '2024-02-18',
        status: '대기중'
    }
    const CreateTodo2 = {
        title: 'Second Todo',
        content: 'Test content',
        date: '2024-02-18',
        status: '대기중'
    }
    const CheckReq1 = await t.request({
        url:'http://34.64.140.229:8181/createTodo',
        method:'Post',
        headers:{
            "content-type" : "application/json",
            "charset" : "utf-8"
        },
        body:CreateTodo1,
    })
    const CheckReq2 = await t.request({
        url:'http://34.64.140.229:8181/createTodo',
        method:'Post',
        headers:{
            "content-type" : "application/json",
            "charset" : "utf-8"
        },
        body:CreateTodo2,
    })
    await t.expect(CheckReq1.status).eql(200);
    await t.expect(CheckReq2.status).eql(200);

    const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
    const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];

    // await t.expect(others).eql(CreateTodo);
    await t.eval(() => location.reload(true)); //새로고침
    await t.wait(2000); //전제조건 완료

    const SearchTitle = Selector('#searchTitle')
    await t.typeText(SearchTitle, 'Second Todo')

    const SearchDate = Selector('#searchDate')
    await t.typeText(SearchDate, '2024-02-18')
    await t.wait(1000);

    // await t.expect(SearchTitle.value).eql('Second Todo');    //입력한 제목, 날짜 표시 확인
    // await t.expect(SearchDate.value).eql('2024-02-19');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함

    const SearchBtn = Selector('.searchIcon')
    await t.click(SearchBtn).wait(2000);

    const TodoItems = Selector('#scrollDiv .card-body'); //#scrollDiv 아래에 있는 모든 .card-body 클래스를 가진 요소를 선택
    await t.expect(TodoItems.count).eql(1); //TodoItems이 1개인지

    // 'Test title'을 포함하는 모든 자식 요소에 대해 확인합니다.
    await t.expect(TodoItems.withText('Second Todo').count).eql(1)
        .wait(2000);


    const FirstTodo = Selector('#scrollDiv > .card .card-body');//#scrollDiv 안에 있는 첫 번째 .card의 .card-body를 선택
    // const SecondTodo = Selector('#scrollDiv .card:nth-child(2) .card-body');// nth-child(2)는 #scrollDiv 안에서 두 번째 .card를 선택

    const FEditTodo = Selector(FirstTodo).find('[data-bs-target="#addModal"]');
    // const SEditTodo = Selector(SecondTodo).find('[data-bs-target="#addModal"]');

    await t.click(FEditTodo);   //첫번째 todo 날짜 확인
    const ModalDate = Selector('#addDate')
    const ModalTitle = Selector('#exampleModalLabel')
    await t.expect(ModalDate.value).eql('2024-02-18')
        .expect(ModalTitle.value).eql('Second Todo');
    const ModalClose = Selector('.btn-close')
    await t.click(ModalClose);

    // await t.click(SEditTodo);   //두번째 todo 날짜 확인
    // await t.expect(ModalDate.value).eql('2024-02-18');
    // await t.click(ModalClose);


    //테스트 다 했으면 삭제 요청하기
    const DelScrollDiv = Selector('#scrollDiv')
    const DelReq1 = await t.request({
        url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
        method: 'Delete',
        headers: {"charset" : "utf-8"},
    })
    const DelReq2 = await t.request({
        url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
        method: 'Delete',
        headers: {"charset" : "utf-8"},
    })
    await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
    await t.expect(DelReq2.status).eql(200);
    await t.eval(() => location.reload(true)); //새로고침
    await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지

    await t.eval(() => location.reload(true));  //새로고침
    await t.wait(2000);
});

test('TC00000082 Search test', async t=> {
    const CreateTodo1 = {
        title: 'Test title',
        content: 'Test content',
        date: '2024-02-18',
        status: '대기중'
    }
    const CreateTodo2 = {
        title: 'Second Todo',
        content: 'Test content',
        date: '2024-02-18',
        status: '대기중'
    }
    const CheckReq1 = await t.request({
        url:'http://34.64.140.229:8181/createTodo',
        method:'Post',
        headers:{
            "content-type" : "application/json",
            "charset" : "utf-8"
        },
        body:CreateTodo1,
    })
    const CheckReq2 = await t.request({
        url:'http://34.64.140.229:8181/createTodo',
        method:'Post',
        headers:{
            "content-type" : "application/json",
            "charset" : "utf-8"
        },
        body:CreateTodo2,
    })
    await t.expect(CheckReq1.status).eql(200);
    await t.expect(CheckReq2.status).eql(200);

    const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
    const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];

    // await t.expect(others).eql(CreateTodo);
    await t.eval(() => location.reload(true)); //새로고침
    await t.wait(2000); //전제조건 완료

    const SearchTitle = Selector('#searchTitle')
    await t.typeText(SearchTitle, 'Second To')

    const SearchDate = Selector('#searchDate')
    await t.typeText(SearchDate, '2024-02-18')
    await t.wait(1000);

    // await t.expect(SearchTitle.value).eql('Second Todo');    //입력한 제목, 날짜 표시 확인
    // await t.expect(SearchDate.value).eql('2024-02-19');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함

    const SearchBtn = Selector('.searchIcon')
    await t.click(SearchBtn).wait(2000);

    const TodoItems = Selector('#scrollDiv .card-body'); //#scrollDiv 아래에 있는 모든 .card-body 클래스를 가진 요소를 선택
    await t.expect(TodoItems.count).eql(1); //TodoItems이 1개인지

    // 'Test title'을 포함하는 모든 자식 요소에 대해 확인합니다.
    await t.expect(TodoItems.withText('Second To').count).eql(1)
        .wait(2000);


    const FirstTodo = Selector('#scrollDiv > .card .card-body');//#scrollDiv 안에 있는 첫 번째 .card의 .card-body를 선택
    // const SecondTodo = Selector('#scrollDiv .card:nth-child(2) .card-body');// nth-child(2)는 #scrollDiv 안에서 두 번째 .card를 선택

    const FEditTodo = Selector(FirstTodo).find('[data-bs-target="#addModal"]');
    // const SEditTodo = Selector(SecondTodo).find('[data-bs-target="#addModal"]');

    await t.click(FEditTodo);   //첫번째 todo 날짜 확인
    const ModalDate = Selector('#addDate')
    const ModalTitle = Selector('#exampleModalLabel')
    await t.expect(ModalDate.value).eql('2024-02-18')
        .expect(ModalTitle.value).eql('Second Todo');
    const ModalClose = Selector('.btn-close')
    await t.click(ModalClose);

    // await t.click(SEditTodo);   //두번째 todo 날짜 확인
    // await t.expect(ModalDate.value).eql('2024-02-18');
    // await t.click(ModalClose);


    //테스트 다 했으면 삭제 요청하기
    const DelScrollDiv = Selector('#scrollDiv')
    const DelReq1 = await t.request({
        url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
        method: 'Delete',
        headers: {"charset" : "utf-8"},
    })
    const DelReq2 = await t.request({
        url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
        method: 'Delete',
        headers: {"charset" : "utf-8"},
    })
    await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
    await t.expect(DelReq2.status).eql(200);
    await t.eval(() => location.reload(true)); //새로고침
    await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지

    await t.eval(() => location.reload(true));  //새로고침
    await t.wait(2000);
});

test('TC00000083 Search test', async t=> {
    const CreateTodo1 = {
        title: 'Test title',
        content: 'Test content',
        date: '2024-02-18',
        status: '대기중'
    }
    const CreateTodo2 = {
        title: 'Test title',
        content: 'Test content',
        date: '2024-02-18',
        status: '대기중'
    }
    const CheckReq1 = await t.request({
        url:'http://34.64.140.229:8181/createTodo',
        method:'Post',
        headers:{
            "content-type" : "application/json",
            "charset" : "utf-8"
        },
        body:CreateTodo1,
    })
    const CheckReq2 = await t.request({
        url:'http://34.64.140.229:8181/createTodo',
        method:'Post',
        headers:{
            "content-type" : "application/json",
            "charset" : "utf-8"
        },
        body:CreateTodo2,
    })
    await t.expect(CheckReq1.status).eql(200);
    await t.expect(CheckReq2.status).eql(200);

    const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
    const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];

    // await t.expect(others).eql(CreateTodo);
    await t.eval(() => location.reload(true)); //새로고침
    await t.wait(2000); //전제조건 완료

    const SearchTitle = Selector('#searchTitle')
    await t.typeText(SearchTitle, 'Test title')

    const SearchDate = Selector('#searchDate')
    await t.typeText(SearchDate, '2024-02-18')
    await t.wait(1000);

    // await t.expect(SearchTitle.value).eql('Second Todo');    //입력한 제목, 날짜 표시 확인
    // await t.expect(SearchDate.value).eql('2024-02-19');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함

    const SearchBtn = Selector('.searchIcon')
    await t.click(SearchBtn).wait(2000);

    const TodoItems = Selector('#scrollDiv .card-body'); //#scrollDiv 아래에 있는 모든 .card-body 클래스를 가진 요소를 선택
    await t.expect(TodoItems.count).eql(2); //TodoItems이 2개인지

    // 'Test title'을 포함하는 모든 자식 요소에 대해 확인합니다.
    await t.expect(TodoItems.withText('Test title').count).eql(2)
        .wait(2000);


    const FirstTodo = Selector('#scrollDiv > .card .card-body');//#scrollDiv 안에 있는 첫 번째 .card의 .card-body를 선택
    const SecondTodo = Selector('#scrollDiv .card:nth-child(2) .card-body');// nth-child(2)는 #scrollDiv 안에서 두 번째 .card를 선택

    const FEditTodo = Selector(FirstTodo).find('[data-bs-target="#addModal"]');
    const SEditTodo = Selector(SecondTodo).find('[data-bs-target="#addModal"]');

    await t.click(FEditTodo);   //첫번째 todo 날짜 확인
    const ModalDate = Selector('#addDate')
    const ModalTitle = Selector('#exampleModalLabel')
    await t.expect(ModalDate.value).eql('2024-02-18')
        .expect(ModalTitle.value).eql('Test title');
    const ModalClose = Selector('.btn-close')
    await t.click(ModalClose);

    await t.click(SEditTodo);   //두번째 todo 날짜 확인
    await t.expect(ModalDate.value).eql('2024-02-18')
        .expect(ModalTitle.value).eql('Test title');
    await t.click(ModalClose);


    //테스트 다 했으면 삭제 요청하기
    const DelScrollDiv = Selector('#scrollDiv')
    const DelReq1 = await t.request({
        url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
        method: 'Delete',
        headers: {"charset" : "utf-8"},
    })
    const DelReq2 = await t.request({
        url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
        method: 'Delete',
        headers: {"charset" : "utf-8"},
    })
    await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
    await t.expect(DelReq2.status).eql(200);
    await t.eval(() => location.reload(true)); //새로고침
    await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지

    await t.eval(() => location.reload(true));  //새로고침
    await t.wait(2000);
});

test('TC00000084 Search test', async t=> {
    const CreateTodo1 = {
        title: 'Test title',
        content: 'Test content',
        date: '2024-02-18',
        status: '대기중'
    }
    const CreateTodo2 = {
        title: 'Test title',
        content: 'Test content',
        date: '2024-02-18',
        status: '대기중'
    }
    const CheckReq1 = await t.request({
        url:'http://34.64.140.229:8181/createTodo',
        method:'Post',
        headers:{
            "content-type" : "application/json",
            "charset" : "utf-8"
        },
        body:CreateTodo1,
    })
    const CheckReq2 = await t.request({
        url:'http://34.64.140.229:8181/createTodo',
        method:'Post',
        headers:{
            "content-type" : "application/json",
            "charset" : "utf-8"
        },
        body:CreateTodo2,
    })
    await t.expect(CheckReq1.status).eql(200);
    await t.expect(CheckReq2.status).eql(200);

    const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
    const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];

    // await t.expect(others).eql(CreateTodo);
    await t.eval(() => location.reload(true)); //새로고침
    await t.wait(2000); //전제조건 완료

    const SearchTitle = Selector('#searchTitle')
    await t.typeText(SearchTitle, 'Test ti')

    const SearchDate = Selector('#searchDate')
    await t.typeText(SearchDate, '2024-02-18')
    await t.wait(1000);

    // await t.expect(SearchTitle.value).eql('Second Todo');    //입력한 제목, 날짜 표시 확인
    // await t.expect(SearchDate.value).eql('2024-02-19');  //input 엘리먼트일 경우 value 속성으로 값을 가져와야함

    const SearchBtn = Selector('.searchIcon')
    await t.click(SearchBtn).wait(2000);

    const TodoItems = Selector('#scrollDiv .card-body'); //#scrollDiv 아래에 있는 모든 .card-body 클래스를 가진 요소를 선택
    await t.expect(TodoItems.count).eql(2); //TodoItems이 2개인지

    // 'Test title'을 포함하는 모든 자식 요소에 대해 확인합니다.
    await t.expect(TodoItems.withText('Test ti').count).eql(2)
        .wait(2000);


    const FirstTodo = Selector('#scrollDiv > .card .card-body');//#scrollDiv 안에 있는 첫 번째 .card의 .card-body를 선택
    const SecondTodo = Selector('#scrollDiv .card:nth-child(2) .card-body');// nth-child(2)는 #scrollDiv 안에서 두 번째 .card를 선택

    const FEditTodo = Selector(FirstTodo).find('[data-bs-target="#addModal"]');
    const SEditTodo = Selector(SecondTodo).find('[data-bs-target="#addModal"]');

    await t.click(FEditTodo);   //첫번째 todo 날짜 확인
    const ModalDate = Selector('#addDate')
    const ModalTitle = Selector('#exampleModalLabel')
    await t.expect(ModalDate.value).eql('2024-02-18')
        .expect(ModalTitle.value).eql('Test title');
    const ModalClose = Selector('.btn-close')
    await t.click(ModalClose);

    await t.click(SEditTodo);   //두번째 todo 날짜 확인
    await t.expect(ModalDate.value).eql('2024-02-18')
        .expect(ModalTitle.value).eql('Test title');
    await t.click(ModalClose);


    //테스트 다 했으면 삭제 요청하기
    const DelScrollDiv = Selector('#scrollDiv')
    const DelReq1 = await t.request({
        url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
        method: 'Delete',
        headers: {"charset" : "utf-8"},
    })
    const DelReq2 = await t.request({
        url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
        method: 'Delete',
        headers: {"charset" : "utf-8"},
    })
    await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
    await t.expect(DelReq2.status).eql(200);
    await t.eval(() => location.reload(true)); //새로고침
    await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지

    await t.eval(() => location.reload(true));  //새로고침
    await t.wait(2000);
});