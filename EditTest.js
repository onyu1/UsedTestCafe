import {Selector} from 'testcafe';
fixture('Todo Status Test')
    // .page('http://localhost:8181/')
    .page('http://34.64.140.229:8181/')


// //npm run EditTest
// test('TC00000034 Edit test', async t=> {
//     const CreateTodo = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-12',
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
//     await t.wait(2000);
//
//     //const EditTodo = Selector('#scrollDiv > [data-bs-target="#addModal"]');
//     const ScrollDiv = Selector('#scrollDiv')
//     const EditTodo = ScrollDiv.find('.card [data-bs-target="#addModal"]');  //수정 버튼
//     await t.click(EditTodo).wait(2000);
//
//     const ModalTitle = Selector('#exampleModalLabel')
//     await t.expect(ModalTitle.value).eql('Test title')//제목란 글자비교
//     // await t.expect(ModalTitle.getAttribute('placeholder')).eql('Test title')
//
//     const ModalContent = Selector('#ModalContent')
//     await t.expect(ModalContent.value).eql('Test content')
//
//     const ModalDate = Selector('#addDate')
//     await t.expect(ModalDate.value).eql('2024-02-12')
//
//
//     await t.selectText(ModalTitle) //ModalTitle의 기존 텍스트를 선택
//         .pressKey('delete');    //선택한 텍스트 삭제
//     await t.typeText(ModalTitle, 'Test Change Title').wait(3000);   //새로운 텍스트 입력
//
//     const SaveBtn = Selector('#modalSaveBtn')
//     await t.setNativeDialogHandler(() => true); //네이티브 대화 상자에 대한 핸들러 설정 ('확인'버튼 누르도록)
//     await t.click(SaveBtn);
//
//
//     await t.expect(ScrollDiv.hasChildElements).ok()
//         .expect(ScrollDiv.textContent).contains('Test Change Title') // 자식요소에 이글자가 있나오
//         .wait(2000);
//
//     await t.click(EditTodo).wait(2000); //수정 버튼 클릭
//     await t.expect(ModalTitle.value).eql('Test Change Title'); //바뀐 제목란 글자비교
//     await t.expect(ModalContent.value).eql('Test content'); //내용란 그대로인지
//     await t.expect(ModalDate.value).eql('2024-02-12');  //날짜 그대로인지
//
//
//
//
//     const ExistList = Selector('#scrollDiv')
//     //테스트 다 했으면 삭제 요청하기
//     const DelReq = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//
//     })
//     await t.expect(DelReq.status).eql(200); //삭제요청 잘됐나
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(ExistList.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });


// test('TC00000036 Edit test', async t=> {
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
//     await t.wait(2000);
//
//     //const EditTodo = Selector('#scrollDiv > [data-bs-target="#addModal"]');
//     const ScrollDiv = Selector('#scrollDiv')
//     const EditTodo = ScrollDiv.find('.card [data-bs-target="#addModal"]');  //수정 버튼
//     await t.click(EditTodo).wait(2000);
//
//     const ModalTitle = Selector('#exampleModalLabel')
//     const ModalContent = Selector('#ModalContent')
//     const ModalDate = Selector('#addDate')
//
//     //모달 내용란에 내용 바꾸기
//     await t.selectText(ModalContent) //ModalContent 기존 텍스트를 선택
//         .pressKey('delete');    //선택한 텍스트 삭제
//     await t.typeText(ModalContent, 'Test Change Content').wait(3000);   //새로운 텍스트 입력
//
//     const SaveBtn = Selector('#modalSaveBtn')
//     await t.setNativeDialogHandler(() => true); //네이티브 대화 상자에 대한 핸들러 설정 ('확인'버튼 누르도록)
//     await t.click(SaveBtn);
//
//     //2번 진행상태, 제목 그대로인지
//     await t.expect(ScrollDiv.hasChildElements).ok()
//         .expect(ScrollDiv.textContent).contains('Test title') // 자식요소에 이글자가 있나오
//         .wait(2000);
//
//     const StatusBtn = Selector('#statusBtn'+ num);
//     await t.expect(StatusBtn.textContent).contains('대기중');
//
//
//     await t.click(EditTodo).wait(2000); //수정 버튼 클릭
//     await t.expect(ModalTitle.value).eql('Test title'); //바뀐 제목란 글자비교
//     await t.expect(ModalContent.value).eql('Test Change Content'); //내용란 그대로인지
//     await t.expect(ModalDate.value).eql('2024-02-17');  //날짜 그대로인지
//
//
//
//
//     const ExistList = Selector('#scrollDiv')
//     //테스트 다 했으면 삭제 요청하기
//     const DelReq = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//
//     })
//     await t.expect(DelReq.status).eql(200); //삭제요청 잘됐나
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(ExistList.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000038 Edit test', async t=> {
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
//     await t.wait(2000);
//
//     //const EditTodo = Selector('#scrollDiv > [data-bs-target="#addModal"]');
//     const ScrollDiv = Selector('#scrollDiv')
//     const EditTodo = ScrollDiv.find('.card [data-bs-target="#addModal"]');  //수정 버튼
//     await t.click(EditTodo).wait(2000);
//
//     const ModalTitle = Selector('#exampleModalLabel')
//     const ModalContent = Selector('#ModalContent')
//     const ModalDate = Selector('#addDate')
//
//     //모달 내용란에 내용 바꾸기
//     await t.selectText(ModalContent) //ModalContent 기존 텍스트를 선택
//         .pressKey('delete');    //선택한 텍스트 삭제
//     await t.typeText(ModalContent, 'Test Change Content').wait(3000);   //새로운 텍스트 입력
//
//     await t.selectText(ModalTitle)
//         .pressKey('delete');
//     await t.typeText(ModalTitle, 'Test Change Title').wait(3000);
//
//     const SaveBtn = Selector('#modalSaveBtn')
//     await t.setNativeDialogHandler(() => true); //네이티브 대화 상자에 대한 핸들러 설정 ('확인'버튼 누르도록)
//     await t.click(SaveBtn);
//
//     await t.expect(ScrollDiv.hasChildElements).ok()
//         .expect(ScrollDiv.textContent).contains('Test Change Title') // 자식요소에 이글자가 있나오
//         .wait(2000);
//
//     // const StatusBtn = Selector('#statusBtn'+ num);
//     // await t.expect(StatusBtn.textContent).contains('대기중');
//
//     await t.click(EditTodo).wait(2000); //수정 버튼 클릭
//     await t.expect(ModalTitle.value).eql('Test Change Title'); //바뀐 제목란 글자비교
//     await t.expect(ModalContent.value).eql('Test Change Content'); //내용란 그대로인지
//     await t.expect(ModalDate.value).eql('2024-02-17');  //날짜 그대로인지
//
//
//
//
//     const ExistList = Selector('#scrollDiv')
//     //테스트 다 했으면 삭제 요청하기
//     const DelReq = await t.request({
//         url:'http://34.64.140.229:8181/deleteTodo?num='+num, //requestparam과 requestbody 읽어보기
//         method: 'Delete',
//         headers: {"charset" : "utf-8"},
//
//     })
//     await t.expect(DelReq.status).eql(200); //삭제요청 잘됐나
//     await t.eval(() => location.reload(true)); //새로고침
//     await t.expect(ExistList.hasChildElements).notOk(); //자식요소에 아무것도 없는지
//
//     await t.eval(() => location.reload(true));  //새로고침
//     await t.wait(2000);
// });

// test('TC00000041 Edit test', async t=> {
//     const CreateTodo = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-17',
//         status: '진행중'
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
//     await t.wait(2000);
//
//     //const EditTodo = Selector('#scrollDiv > [data-bs-target="#addModal"]');
//     const ScrollDiv = Selector('#scrollDiv')
//     const EditTodo = ScrollDiv.find('.card [data-bs-target="#addModal"]');  //수정 버튼
//     await t.click(EditTodo).wait(2000);
//
//     const ModalTitle = Selector('#exampleModalLabel')
//     const ModalContent = Selector('#ModalContent')
//     const ModalDate = Selector('#addDate')
//
//     await t.expect(ModalTitle.value).eql('Test title')//제목란 글자비교
//     // await t.expect(ModalTitle.getAttribute('placeholder')).eql('Test title')
//     await t.expect(ModalContent.value).eql('Test content')
//     await t.expect(ModalDate.value).eql('2024-02-17')   //1번 결과
//
//
//     await t.selectText(ModalTitle) //ModalTitle의 기존 텍스트를 선택
//         .pressKey('delete');    //선택한 텍스트 삭제
//     await t.typeText(ModalTitle, 'Test Change Title').wait(3000);   //새로운 텍스트 입력
//
//     const SaveBtn = Selector('#modalSaveBtn')
//     await t.setNativeDialogHandler(() => true); //네이티브 대화 상자에 대한 핸들러 설정 ('확인'버튼 누르도록)
//     await t.click(SaveBtn);
//
//
//     await t.expect(ScrollDiv.hasChildElements).ok()
//         .expect(ScrollDiv.textContent).contains('Test Change Title') // 자식요소에 이글자가 있나오 //2번 결과
//         .wait(2000);
//
//     const StatusBtn = Selector('#statusBtn'+ num);
//     await t.expect(StatusBtn.textContent).contains('진행중');
//
//     await t.click(EditTodo).wait(2000); //수정 버튼 클릭
//     await t.expect(ModalTitle.value).eql('Test Change Title'); //바뀐 제목란 글자비교
//     await t.expect(ModalContent.value).eql('Test content'); //내용란 그대로인지
//     await t.expect(ModalDate.value).eql('2024-02-17');  //날짜 그대로인지
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

// test('TC00000043 Edit test', async t=> {
//     const CreateTodo = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-17',
//         status: '진행중'
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
//     await t.wait(2000);
//
//     //const EditTodo = Selector('#scrollDiv > [data-bs-target="#addModal"]');
//     const ScrollDiv = Selector('#scrollDiv')
//     const EditTodo = ScrollDiv.find('.card [data-bs-target="#addModal"]');  //수정 버튼
//     await t.click(EditTodo).wait(2000);
//
//     const ModalTitle = Selector('#exampleModalLabel')
//     const ModalContent = Selector('#ModalContent')
//     const ModalDate = Selector('#addDate')
//
//     //모달 내용란에 내용 바꾸기
//     await t.selectText(ModalContent) //ModalContent 기존 텍스트를 선택
//         .pressKey('delete');    //선택한 텍스트 삭제
//     await t.typeText(ModalContent, 'Test Change Content').wait(2000);   //새로운 텍스트 입력
//
//     const SaveBtn = Selector('#modalSaveBtn')
//     await t.setNativeDialogHandler(() => true); //네이티브 대화 상자에 대한 핸들러 설정 ('확인'버튼 누르도록)
//     await t.click(SaveBtn);
//
//     //2번 진행상태, 제목 그대로인지
//     await t.expect(ScrollDiv.hasChildElements).ok()
//         .expect(ScrollDiv.textContent).contains('Test title') // 자식요소에 이글자가 있나오
//         .wait(2000);
//
//     const StatusBtn = Selector('#statusBtn'+ num);
//     await t.expect(StatusBtn.textContent).contains('진행중');
//
//     await t.click(EditTodo).wait(2000); //수정 버튼 클릭
//     await t.expect(ModalTitle.value).eql('Test title'); //바뀐 제목란 글자비교
//     await t.expect(ModalContent.value).eql('Test Change Content'); //내용란 그대로인지
//     await t.expect(ModalDate.value).eql('2024-02-17');  //날짜 그대로인지
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

// test('TC00000045 Edit test', async t=> {
//     const CreateTodo = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-17',
//         status: '진행중'
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
//     await t.wait(2000);
//
//     //const EditTodo = Selector('#scrollDiv > [data-bs-target="#addModal"]');
//     const ScrollDiv = Selector('#scrollDiv')
//     const EditTodo = ScrollDiv.find('.card [data-bs-target="#addModal"]');  //수정 버튼
//     await t.click(EditTodo).wait(2000);
//
//     const ModalTitle = Selector('#exampleModalLabel')
//     const ModalContent = Selector('#ModalContent')
//     const ModalDate = Selector('#addDate')
//
//     //모달 제목, 내용 바꾸기
//     await t.selectText(ModalTitle)
//         .pressKey('delete');
//     await t.typeText(ModalTitle, 'Test Change Title').wait(1000);
//
//     await t.selectText(ModalContent) //ModalContent 기존 텍스트를 선택
//         .pressKey('delete');    //선택한 텍스트 삭제
//     await t.typeText(ModalContent, 'Test Change Content').wait(1000);   //새로운 텍스트 입력
//
//     const SaveBtn = Selector('#modalSaveBtn')
//     await t.setNativeDialogHandler(() => true); //네이티브 대화 상자에 대한 핸들러 설정 ('확인'버튼 누르도록)
//     await t.click(SaveBtn);
//
//     await t.expect(ScrollDiv.hasChildElements).ok()
//         .expect(ScrollDiv.textContent).contains('Test Change Title') // 자식요소에 이글자가 있나오
//         .wait(2000);
//
//     const StatusBtn = Selector('#statusBtn'+ num);
//     await t.expect(StatusBtn.textContent).contains('진행중');
//
//     await t.click(EditTodo).wait(2000); //수정 버튼 클릭
//     await t.expect(ModalTitle.value).eql('Test Change Title'); //바뀐 제목란 글자비교
//     await t.expect(ModalContent.value).eql('Test Change Content'); //내용란 그대로인지
//     await t.expect(ModalDate.value).eql('2024-02-17');  //날짜 그대로인지
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

// test('TC00000048 Edit test', async t=> {
//     const CreateTodo = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-17',
//         status: '완료'
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
//     await t.wait(2000);
//
//     //const EditTodo = Selector('#scrollDiv > [data-bs-target="#addModal"]');
//     const ScrollDiv = Selector('#scrollDiv')
//     const EditTodo = ScrollDiv.find('.card [data-bs-target="#addModal"]');  //수정 버튼
//     await t.click(EditTodo).wait(2000);
//
//     const ModalTitle = Selector('#exampleModalLabel')
//     const ModalContent = Selector('#ModalContent')
//     const ModalDate = Selector('#addDate')
//
//     await t.expect(ModalTitle.value).eql('Test title')//제목란 글자비교
//     // await t.expect(ModalTitle.getAttribute('placeholder')).eql('Test title')
//     await t.expect(ModalContent.value).eql('Test content')
//     await t.expect(ModalDate.value).eql('2024-02-17')   //1번 결과
//
//
//     await t.selectText(ModalTitle) //ModalTitle의 기존 텍스트를 선택
//         .pressKey('delete');    //선택한 텍스트 삭제
//     await t.typeText(ModalTitle, 'Test Change Title').wait(2000);   //새로운 텍스트 입력
//
//     const SaveBtn = Selector('#modalSaveBtn')
//     await t.setNativeDialogHandler(() => true); //네이티브 대화 상자에 대한 핸들러 설정 ('확인'버튼 누르도록)
//     await t.click(SaveBtn);
//
//
//     await t.expect(ScrollDiv.hasChildElements).ok()
//         .expect(ScrollDiv.textContent).contains('Test Change Title') // 자식요소에 이글자가 있나오 //2번 결과
//         .wait(2000);
//
//     const StatusBtn = Selector('#statusBtn'+ num);
//     await t.expect(StatusBtn.textContent).contains('완료');
//
//     await t.click(EditTodo).wait(2000); //수정 버튼 클릭
//     await t.expect(ModalTitle.value).eql('Test Change Title'); //바뀐 제목란 글자비교
//     await t.expect(ModalContent.value).eql('Test content'); //내용란 그대로인지
//     await t.expect(ModalDate.value).eql('2024-02-17');  //날짜 그대로인지
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

// test('TC00000050 Edit test', async t=> {
//     const CreateTodo = {
//         title: 'Test title',
//         content: 'Test content',
//         date: '2024-02-17',
//         status: '완료'
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
//     await t.wait(2000);
//
//     //const EditTodo = Selector('#scrollDiv > [data-bs-target="#addModal"]');
//     const ScrollDiv = Selector('#scrollDiv')
//     const EditTodo = ScrollDiv.find('.card [data-bs-target="#addModal"]');  //수정 버튼
//     await t.click(EditTodo).wait(2000);
//
//     const ModalTitle = Selector('#exampleModalLabel')
//     const ModalContent = Selector('#ModalContent')
//     const ModalDate = Selector('#addDate')
//
//     //모달 내용란에 내용 바꾸기
//     await t.selectText(ModalContent) //ModalContent 기존 텍스트를 선택
//         .pressKey('delete');    //선택한 텍스트 삭제
//     await t.typeText(ModalContent, 'Test Change Content').wait(2000);   //새로운 텍스트 입력
//
//     const SaveBtn = Selector('#modalSaveBtn')
//     await t.setNativeDialogHandler(() => true); //네이티브 대화 상자에 대한 핸들러 설정 ('확인'버튼 누르도록)
//     await t.click(SaveBtn);
//
//     //2번 진행상태, 제목 그대로인지
//     await t.expect(ScrollDiv.hasChildElements).ok()
//         .expect(ScrollDiv.textContent).contains('Test title') // 자식요소에 이글자가 있나오
//         .wait(2000);
//
//     const StatusBtn = Selector('#statusBtn'+ num);
//     await t.expect(StatusBtn.textContent).contains('완료');
//
//     await t.click(EditTodo).wait(2000); //수정 버튼 클릭
//     await t.expect(ModalTitle.value).eql('Test title'); //바뀐 제목란 글자비교
//     await t.expect(ModalContent.value).eql('Test Change Content'); //내용란 그대로인지
//     await t.expect(ModalDate.value).eql('2024-02-17');  //날짜 그대로인지
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

test('TC00000052 Edit test', async t=> {
    const CreateTodo = {
        title: 'Test title',
        content: 'Test content',
        date: '2024-02-17',
        status: '완료'
    } //투두 생성하라고 요청보냄

    //요청한거 응답하는지 확인
    const CheckReq = await t.request({
        url:'http://34.64.140.229:8181/createTodo',
        method:'Post',
        headers:{
            "content-type" : "application/json",
            "charset" : "utf-8"
        },
        body:CreateTodo,

    })
    await t.expect(CheckReq.status).eql(200)

    const{num, ...others}= CheckReq.body[CheckReq.body.length-1];
    // await t.expect(others).eql(CreateTodo);
    await t.eval(() => location.reload(true)); //새로고침
    await t.wait(2000);

    //const EditTodo = Selector('#scrollDiv > [data-bs-target="#addModal"]');
    const ScrollDiv = Selector('#scrollDiv')
    const EditTodo = ScrollDiv.find('.card [data-bs-target="#addModal"]');  //수정 버튼
    await t.click(EditTodo).wait(2000);

    const ModalTitle = Selector('#exampleModalLabel')
    const ModalContent = Selector('#ModalContent')
    const ModalDate = Selector('#addDate')

    //모달 제목, 내용 바꾸기
    await t.selectText(ModalTitle)
        .pressKey('delete');
    await t.typeText(ModalTitle, 'Test Change Title').wait(1000);

    await t.selectText(ModalContent) //ModalContent 기존 텍스트를 선택
        .pressKey('delete');    //선택한 텍스트 삭제
    await t.typeText(ModalContent, 'Test Change Content').wait(1000);   //새로운 텍스트 입력

    const SaveBtn = Selector('#modalSaveBtn')
    await t.setNativeDialogHandler(() => true); //네이티브 대화 상자에 대한 핸들러 설정 ('확인'버튼 누르도록)
    await t.click(SaveBtn);

    await t.expect(ScrollDiv.hasChildElements).ok()
        .expect(ScrollDiv.textContent).contains('Test Change Title') // 자식요소에 이글자가 있나오
        .wait(2000);

    const StatusBtn = Selector('#statusBtn'+ num);
    await t.expect(StatusBtn.textContent).contains('완료');

    await t.click(EditTodo).wait(2000); //수정 버튼 클릭
    await t.expect(ModalTitle.value).eql('Test Change Title'); //바뀐 제목란 글자비교
    await t.expect(ModalContent.value).eql('Test Change Content'); //내용란 그대로인지
    await t.expect(ModalDate.value).eql('2024-02-17');  //날짜 그대로인지



    //테스트 다 했으면 삭제 요청하기
    //const ScrollDiv = Selector('#scrollDiv')
    const DelReq = await t.request({
        url:'http://34.64.140.229:8181/deleteTodo?num='+num, //requestparam과 requestbody 읽어보기
        method: 'Delete',
        headers: {"charset" : "utf-8"},
    })
    await t.expect(DelReq.status).eql(200); //삭제요청 잘됐나
    await t.eval(() => location.reload(true)); //새로고침
    await t.expect(ScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지

    await t.eval(() => location.reload(true));  //새로고침
    await t.wait(2000);
});