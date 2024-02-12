import {Selector} from 'testcafe';
fixture('Todo Status Test')
    // .page('http://localhost:8181/')
    .page('http://34.64.140.229:8181/')

test('TC00000028 status test', async t=> {
    const CreateTodo = {
        title: 'Test title',
        content: 'Test content',
        date: '2024-02-11',
        status: '대기중'
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


    const StatusBtn = Selector('#statusBtn'+ num);
    // const StatusBtn = Selector(`#statusBtn${num}`);
    await t.click(StatusBtn);

    const DropdownStat = Selector('[data-popper-placement="bottom-start"]')
    await t.expect(DropdownStat.hasChildElements).ok()
        .expect(DropdownStat.textContent).contains('대기중')
        .expect(DropdownStat.textContent).contains('진행중')
        .expect(DropdownStat.textContent).contains('완료')


    const DropdownAct = DropdownStat.find('.active');   //DropdownStat의 자식요소에서 active 클래스 찾기
    await t.expect(DropdownAct.exists).ok()
        .expect(DropdownAct.textContent).contains('대기중')//active라는 클래스를 포함한 애가 '대기중'글자를 포함했는지

    // DropdownStat의 자식 요소 중에 'active' 클래스를 가지지 않은 요소 찾기
    //const DropdownInAct = DropdownStat.child('.active').sibling('.dropdown-item').withText('진행중');
    // const DropdownInAct = DropdownStat.find('.dropdown-item').filter(inactive =>!inactive.hasClass('active'));
    //'active' 클래스를 가지고 있지 않은 자식 요소 찾기
   // const ProgressStat = DropdownInAct.withText('진행중')  // '진행중'을 포함한 자식 요소 찾기


   //  const ProgressStat = Selector('[data-popper-placement="bottom-start"] > li').withText('진행중')  // '진행중'을 포함한 자식 요소 찾기
    const ProgressStat = DropdownStat.child('li').withText('진행중')  // '진행중'을 포함한 자식 요소 찾기

    await t.expect(ProgressStat.textContent).eql('진행중');  //'진행중' 글자 맞는지 비교
    await t.click(ProgressStat).wait(3000);    //'진행중' 클릭
    await t.expect(StatusBtn.textContent).contains('진행중');//'진행중'을 클릭한 후에 해당 상태가 '진행중'으로 변경되었는지 확인




    const ExistList = Selector('#scrollDiv')
    // await t.expect(ExistList.hasChildElements).ok()
    //        .expect(ExistList.textContent).contains('Test title') // 자식요소에 이글자가 있나오
    //        .wait(2000);


    //테스트 다 했으면 삭제 요청하기
    const DelReq = await t.request({
        url:'http://34.64.140.229:8181/deleteTodo?num='+num, //requestparam과 requestbody 읽어보기
        method: 'Delete',
        headers: {"charset" : "utf-8"},

    })
    await t.expect(DelReq.status).eql(200); //삭제요청 잘됐나
    await t.eval(() => location.reload(true)); //새로고침
    await t.expect(ExistList.hasChildElements).notOk(); //자식요소에 아무것도 없는지


    await t.eval(() => location.reload(true));  //새로고침
    await t.wait(2000);
});





test('TC00000029 status test', async t=> {
    const CreateTodo = {
        title: 'Test title',
        content: 'Test content',
        date: '2024-02-12',
        status: '대기중'
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


    const StatusBtn = Selector('#statusBtn'+ num);
    // const StatusBtn = Selector(`#statusBtn${num}`);
    await t.click(StatusBtn);

    const DropdownStat = Selector('[data-popper-placement="bottom-start"]')
    await t.expect(DropdownStat.hasChildElements).ok()
        .expect(DropdownStat.textContent).contains('대기중')
        .expect(DropdownStat.textContent).contains('진행중')
        .expect(DropdownStat.textContent).contains('완료')


    const DropdownAct = DropdownStat.find('.active');   //DropdownStat의 자식요소에서 active 클래스 찾기
    await t.expect(DropdownAct.exists).ok()
        .expect(DropdownAct.textContent).contains('대기중')//active라는 클래스를 포함한 애가 '대기중'글자를 포함했는지


    //  const CompleteStat = Selector('[data-popper-placement="bottom-start"] > li').withText('완료')
    const CompleteStat = DropdownStat.child('li').withText('완료')  // '완료'를 포함한 자식 요소 찾기

    await t.expect(CompleteStat.textContent).eql('완료');
    await t.click(CompleteStat).wait(3000);
    await t.expect(StatusBtn.textContent).contains('완료');



    const ExistList = Selector('#scrollDiv')
    //테스트 다 했으면 삭제 요청하기
    const DelReq = await t.request({
        url:'http://34.64.140.229:8181/deleteTodo?num='+num, //requestparam과 requestbody 읽어보기
        method: 'Delete',
        headers: {"charset" : "utf-8"},

    })
    await t.expect(DelReq.status).eql(200); //삭제요청 잘됐나
    await t.eval(() => location.reload(true)); //새로고침
    await t.expect(ExistList.hasChildElements).notOk(); //자식요소에 아무것도 없는지

    await t.eval(() => location.reload(true));  //새로고침
    await t.wait(2000);
});

test('TC00000030 status test', async t=> {
    const CreateTodo = {
        title: 'Test title',
        content: 'Test content',
        date: '2024-02-12',
        status: '진행중'
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


    const StatusBtn = Selector('#statusBtn'+ num);
    // const StatusBtn = Selector(`#statusBtn${num}`);
    await t.click(StatusBtn);

    const DropdownStat = Selector('[data-popper-placement="bottom-start"]')
    await t.expect(DropdownStat.hasChildElements).ok()
        .expect(DropdownStat.textContent).contains('대기중')
        .expect(DropdownStat.textContent).contains('진행중')
        .expect(DropdownStat.textContent).contains('완료')


    const DropdownAct = DropdownStat.find('.active');   //DropdownStat의 자식요소에서 active 클래스 찾기
    await t.expect(DropdownAct.exists).ok()
        .expect(DropdownAct.textContent).contains('진행중')//active라는 클래스를 포함한 애가 '진행중'글자를 포함했는지


    //  const WaitingStat = Selector('[data-popper-placement="bottom-start"] > li').withText('대기중')
    const WaitingStat = DropdownStat.child('li').withText('대기중')  // '대기중'를 포함한 자식 요소 찾기

    await t.expect(WaitingStat.textContent).eql('대기중');
    await t.click(WaitingStat).wait(3000);
    await t.expect(StatusBtn.textContent).contains('대기중');



    const ExistList = Selector('#scrollDiv')
    //테스트 다 했으면 삭제 요청하기
    const DelReq = await t.request({
        url:'http://34.64.140.229:8181/deleteTodo?num='+num, //requestparam과 requestbody 읽어보기
        method: 'Delete',
        headers: {"charset" : "utf-8"},

    })
    await t.expect(DelReq.status).eql(200); //삭제요청 잘됐나
    await t.eval(() => location.reload(true)); //새로고침
    await t.expect(ExistList.hasChildElements).notOk(); //자식요소에 아무것도 없는지

    await t.eval(() => location.reload(true));  //새로고침
    await t.wait(2000);
});


test('TC00000031 status test', async t=> {
    const CreateTodo = {
        title: 'Test title',
        content: 'Test content',
        date: '2024-02-12',
        status: '진행중'
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


    const StatusBtn = Selector('#statusBtn'+ num);
    // const StatusBtn = Selector(`#statusBtn${num}`);
    await t.click(StatusBtn);

    const DropdownStat = Selector('[data-popper-placement="bottom-start"]')
    await t.expect(DropdownStat.hasChildElements).ok()
        .expect(DropdownStat.textContent).contains('대기중')
        .expect(DropdownStat.textContent).contains('진행중')
        .expect(DropdownStat.textContent).contains('완료')


    const DropdownAct = DropdownStat.find('.active');   //DropdownStat의 자식요소에서 active 클래스 찾기
    await t.expect(DropdownAct.exists).ok()
        .expect(DropdownAct.textContent).contains('진행중')//active라는 클래스를 포함한 애가 '진행중'글자를 포함했는지


    //  const CompleteStat = Selector('[data-popper-placement="bottom-start"] > li').withText('완료')
    const CompleteStat = DropdownStat.child('li').withText('완료')  // '완료'를 포함한 자식 요소 찾기

    await t.expect(CompleteStat.textContent).eql('완료');
    await t.click(CompleteStat).wait(3000);
    await t.expect(StatusBtn.textContent).contains('완료');



    const ExistList = Selector('#scrollDiv')
    //테스트 다 했으면 삭제 요청하기
    const DelReq = await t.request({
        url:'http://34.64.140.229:8181/deleteTodo?num='+num, //requestparam과 requestbody 읽어보기
        method: 'Delete',
        headers: {"charset" : "utf-8"},

    })
    await t.expect(DelReq.status).eql(200); //삭제요청 잘됐나
    await t.eval(() => location.reload(true)); //새로고침
    await t.expect(ExistList.hasChildElements).notOk(); //자식요소에 아무것도 없는지

    await t.eval(() => location.reload(true));  //새로고침
    await t.wait(2000);
});

test('TC00000032 status test', async t=> {
    const CreateTodo = {
        title: 'Test title',
        content: 'Test content',
        date: '2024-02-12',
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


    const StatusBtn = Selector('#statusBtn'+ num);
    // const StatusBtn = Selector(`#statusBtn${num}`);
    await t.click(StatusBtn);

    const DropdownStat = Selector('[data-popper-placement="bottom-start"]')
    await t.expect(DropdownStat.hasChildElements).ok()
        .expect(DropdownStat.textContent).contains('대기중')
        .expect(DropdownStat.textContent).contains('진행중')
        .expect(DropdownStat.textContent).contains('완료')


    const DropdownAct = DropdownStat.find('.active');   //DropdownStat의 자식요소에서 active 클래스 찾기
    await t.expect(DropdownAct.exists).ok()
        .expect(DropdownAct.textContent).contains('완료');


    //  const WaitingStat = Selector('[data-popper-placement="bottom-start"] > li').withText('대기중')
    const WaitingStat = DropdownStat.child('li').withText('대기중')  // '대기중'를 포함한 자식 요소 찾기

    await t.expect(WaitingStat.textContent).eql('대기중');
    await t.click(WaitingStat).wait(3000);
    await t.expect(StatusBtn.textContent).contains('대기중');



    const ExistList = Selector('#scrollDiv')
    //테스트 다 했으면 삭제 요청하기
    const DelReq = await t.request({
        url:'http://34.64.140.229:8181/deleteTodo?num='+num, //requestparam과 requestbody 읽어보기
        method: 'Delete',
        headers: {"charset" : "utf-8"},

    })
    await t.expect(DelReq.status).eql(200); //삭제요청 잘됐나
    await t.eval(() => location.reload(true)); //새로고침
    await t.expect(ExistList.hasChildElements).notOk(); //자식요소에 아무것도 없는지

    await t.eval(() => location.reload(true));  //새로고침
    await t.wait(2000);
});

test('TC00000033 status test', async t=> {
    const CreateTodo = {
        title: 'Test title',
        content: 'Test content',
        date: '2024-02-12',
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


    const StatusBtn = Selector('#statusBtn'+ num);
    // const StatusBtn = Selector(`#statusBtn${num}`);
    await t.click(StatusBtn);

    const DropdownStat = Selector('[data-popper-placement="bottom-start"]')
    await t.expect(DropdownStat.hasChildElements).ok()
        .expect(DropdownStat.textContent).contains('대기중')
        .expect(DropdownStat.textContent).contains('진행중')
        .expect(DropdownStat.textContent).contains('완료')


    const DropdownAct = DropdownStat.find('.active');   //DropdownStat의 자식요소에서 active 클래스 찾기
    await t.expect(DropdownAct.exists).ok()
        .expect(DropdownAct.textContent).contains('완료');


    //  const ProgressStat = Selector('[data-popper-placement="bottom-start"] > li').withText('진행중')
    const ProgressStat = DropdownStat.child('li').withText('진행중')  // '진행중'를 포함한 자식 요소 찾기

    await t.expect(ProgressStat.textContent).eql('진행중');
    await t.click(ProgressStat).wait(3000);
    await t.expect(StatusBtn.textContent).contains('진행중');



    const ExistList = Selector('#scrollDiv')
    //테스트 다 했으면 삭제 요청하기
    const DelReq = await t.request({
        url:'http://34.64.140.229:8181/deleteTodo?num='+num, //requestparam과 requestbody 읽어보기
        method: 'Delete',
        headers: {"charset" : "utf-8"},

    })
    await t.expect(DelReq.status).eql(200); //삭제요청 잘됐나
    await t.eval(() => location.reload(true)); //새로고침
    await t.expect(ExistList.hasChildElements).notOk(); //자식요소에 아무것도 없는지

    await t.eval(() => location.reload(true));  //새로고침
    await t.wait(2000);
});


test('TC00000034 status test', async t=> {
    const CreateTodo = {
        title: 'Test title',
        content: 'Test content',
        date: '2024-02-12',
        status: '대기중'
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
    await t.expect(ModalTitle.value).eql('Test title')//제목란 글자비교
    // await t.expect(ModalTitle.getAttribute('placeholder')).eql('Test title')

    const ModalContent = Selector('#ModalContent')
    await t.expect(ModalContent.value).eql('Test content')

    const ModalDate = Selector('#addDate')
    await t.expect(ModalDate.value).eql('2024-02-12')


    await t.selectText(ModalTitle) //ModalTitle의 기존 텍스트를 선택
        .pressKey('delete');    //선택한 텍스트 삭제
    await t.typeText(ModalTitle, 'Test Change Title').wait(3000);   //새로운 텍스트 입력

    const SaveBtn = Selector('#modalSaveBtn')
    await t.setNativeDialogHandler(() => true); //네이티브 대화 상자에 대한 핸들러 설정 ('확인'버튼 누르도록)
    await t.click(SaveBtn);


    await t.expect(ScrollDiv.hasChildElements).ok()
           .expect(ScrollDiv.textContent).contains('Test Change Title') // 자식요소에 이글자가 있나오
           .wait(2000);

    await t.click(EditTodo).wait(2000); //수정 버튼 클릭
    await t.expect(ModalTitle.value).eql('Test Change Title'); //바뀐 제목란 글자비교
    await t.expect(ModalContent.value).eql('Test content'); //내용란 그대로인지
    await t.expect(ModalDate.value).eql('2024-02-12');  //날짜 그대로인지




    const ExistList = Selector('#scrollDiv')
    //테스트 다 했으면 삭제 요청하기
    const DelReq = await t.request({
        url:'http://34.64.140.229:8181/deleteTodo?num='+num, //requestparam과 requestbody 읽어보기
        method: 'Delete',
        headers: {"charset" : "utf-8"},

    })
    await t.expect(DelReq.status).eql(200); //삭제요청 잘됐나
    await t.eval(() => location.reload(true)); //새로고침
    await t.expect(ExistList.hasChildElements).notOk(); //자식요소에 아무것도 없는지

    await t.eval(() => location.reload(true));  //새로고침
    await t.wait(2000);
});