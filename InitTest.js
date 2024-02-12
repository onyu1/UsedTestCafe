import {Selector} from 'testcafe';
fixture('Todo Init Test')
    .page('http://34.64.140.229:8181/')

//TC00000000
test('Logo is visible',async t=>{
    const logo = Selector('html');
    await t.expect(logo.textContent).contains('To do list')
        .wait(5000);
});

//TC00000004
test('Search Button is visible', async t=>{
    const SearchButton = Selector('.searchIcon')
    await t.click(SearchButton).wait(5000);
});

//TC00000005
test('Write Button is visible', async t=>{
    const WriteButton = Selector('.ml-20p')
    await t.click(WriteButton).wait(5000);
});

//TC00000002
test('SearchBar Text is visible', async t=>{
    const SearchBarText = Selector('#searchTitle')
    await t.expect(SearchBarText.getAttribute('placeholder')).eql('내용을 입력하세요.')
        .wait(5000);
});

//TC00000003
test('SearchDate is visible', async t=>{
   const SearchDate = Selector('#searchDate')
    await t.expect(SearchDate.value).eql('')
        .wait(5000);
});


test('List is empty', async t=>{
    const Listempty = Selector('#scrollDiv')
    // await console.log('aaaaaaaaa',Listempty.innerHtml)
    // await console.log('bbbbbbbbbb',Listempty.innerText)
    await t.expect(Selector('#scrollDiv', {timeout:500}).innerText).eql('text','')
    const a = Selector('#scrollDiv', {timeout:500}).innerText
    console.log('>>>>',a)


});


// TC00000006       //리스트가 존재하지 않는지 확인
test('List is empty', async t=>{
    const EmptyList = Selector('#scrollDiv')
    await t.expect(EmptyList.innerText).notOk();
    // const a = Selector('#scrollDiv', {timeout:500}).innerText
    // console.log('>>>>',a)
});



//TC00000007        //리스트를 생성해서 리스트가 존재하는지 확인
test('create Todo', async t=>{
    const CreateTodo ={
        title: 'Test title',
        content: 'Test content',
        date: '2024-02-08',
        status: '대기중'
    } //투두 생성하라고 요청보냄

    //요청한거 응답하는지 확인
    const CheckReq = await t.request({
        url:'http://localhost:8181/createTodo',
        method:'Post',
        headers:{
            "content-type" : "application/json",
            "charset" : "utf-8"
        },
        body:CreateTodo,

    })
    await t.expect(CheckReq.status).eql(200)


    const{num, ...others}= CheckReq.body[CheckReq.body.length-1];
    await t.expect(others).eql(CreateTodo);
    await t.eval(() => location.reload(true)); //새로고침
    await t.wait(2000);

    //TC00000011
    const ExistList = Selector('#scrollDiv')
    await t.expect(ExistList.hasChildElements).ok()
           .expect(ExistList.textContent).contains('Test title') // 자식요소에 이글자가 있나오
           .wait(2000);


    //테스트 다 했으면 삭제 요청하기
    const DelReq = await t.request({
        url:'http://localhost:8181/deleteTodo?num='+num, //requestparam과 requestbody 읽어보기
        method: 'Delete',
        headers: {"charset" : "utf-8"},

    })
    await t.expect(DelReq.status).eql(200); //삭제요청 잘됐나
    await t.eval(() => location.reload(true)); //새로고침
    await t.expect(ExistList.hasChildElements).notOk(); //자식요소에 아무것도 없는지


    await t.eval(() => location.reload(true));  //새로고침
    await t.wait(2000);
});


//수정버튼 눌러서 리스트가 존재하는지 확인
test('ex1', async t=>{
    const ExistList = Selector('#scrollDiv')
    await t.expect(ExistList.hasChildElements).ok(); //자식요소가 있나요
    await t.expect(ExistList.textContent).contains('Test title'); // 자식요소에 이글자가 있나오

});






// 투두 생성 요청
test('create Todo',async t=>{
    const reqData ={
        title:'Test',
        content:'TestContent',
        date:'2024-02-08',
        status:'대기중'
    }
    //요청에 응답하는지
    const req = await t.request({
        url:'http://localhost:8181/createTodo',
        method:'Post',
        headers:{
            "content-type": "application/json",
            "charset":"utf-8"
        },
        body:reqData
    })
    await t.expect(req.status).eql(200)

    // 1번 각각의 값을 비교
    // await t.expect(req.body[req.body.length-1].title).eql(reqData.title)
    //        .expect(req.body[req.body.length-1].content).eql(reqData.content)
    //        .expect(req.body[req.body.length-1].status).eql(reqData.status)
    //        .expect(req.body[req.body.length-1].date).eql(reqData.date);

    // 2번 Delete Method
    // delete req.body[req.body.length-1].num
    // await t.expect(req.body[req.body.length-1]).eql(reqData);

    // 3번 비구조화 할당
    const{num, ...resultData} = req.body[req.body.length-1]
    await t.expect(resultData).eql(reqData);    //생성한거랑 응답 온거랑 비교

});
