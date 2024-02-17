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

test('TC00000063 Search test', async t=> {
    const CreateTodo = {
        title: 'Test title',
        content: 'Test content',
        date: '2024-02-17',
        status: '대기중'
    }
    const CreateTodo2 = {
        title: 'Second Todo',
        content: 'Test content',
        date: '2024-02-18',
        status: '대기중'
    }
    const CheckReq = await t.request({
        url:'http://34.64.140.229:8181/createTodo',
        method:'Post',
        headers:{
            "content-type" : "application/json",
            "charset" : "utf-8"
        },
        body:[CreateTodo, CreateTodo2],
    })
    await t.expect(CheckReq.status).eql(200)

    const{num, ...others}= CheckReq.body[CheckReq.body.length-1];
    // await t.expect(others).eql(CreateTodo);
    await t.eval(() => location.reload(true)); //새로고침
    await t.wait(2000); //전제조건 완료







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
});