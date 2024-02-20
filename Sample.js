import {Selector} from 'testcafe';
fixture('Todo Sample')
    // .page('http://localhost:8181/')
    .page('http://34.64.140.229:8181/')

// //npm run Sample

test('sample', async t=> {
    const CreateTodo1 = {
        title: 'Test title1',
        content: 'Test content',
        date: '2024-02-18',
        status: '대기중'
    }
    const CreateTodo2 = {
        title: 'Test title2',
        content: 'Test content',
        date: '2024-02-19',
        status: '진행중'
    }
    const CreateTodo3 = {
        title: 'Test title3',
        content: 'Test content',
        date: '2024-02-19',
        status: '완료'
    }
    const CreateTodo4 = {
        title: 'Test title4',
        content: 'Test content',
        date: '2024-02-20',
        status: '대기중'
    }
    const CreateTodo5 = {
        title: 'Test title5',
        content: 'Test content',
        date: '2024-02-20',
        status: '완료'
    }
    const CreateTodo6 = {
        title: 'Test title6',
        content: 'Test content',
        date: '2024-02-21',
        status: '진행중'
    }
    const CreateTodo7 = {
        title: 'Test title7',
        content: 'Test content',
        date: '2024-02-22',
        status: '완료'
    }
    const CreateTodo8 = {
        title: 'Test title8',
        content: 'Test content',
        date: '2024-02-22',
        status: '진행중'
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
    const CheckReq3 = await t.request({
        url:'http://34.64.140.229:8181/createTodo',
        method:'Post',
        headers:{
            "content-type" : "application/json",
            "charset" : "utf-8"
        },
        body:CreateTodo3,
    })
    const CheckReq4 = await t.request({
        url:'http://34.64.140.229:8181/createTodo',
        method:'Post',
        headers:{
            "content-type" : "application/json",
            "charset" : "utf-8"
        },
        body:CreateTodo4,
    })
    const CheckReq5 = await t.request({
        url:'http://34.64.140.229:8181/createTodo',
        method:'Post',
        headers:{
            "content-type" : "application/json",
            "charset" : "utf-8"
        },
        body:CreateTodo5,
    })
    const CheckReq6 = await t.request({
        url:'http://34.64.140.229:8181/createTodo',
        method:'Post',
        headers:{
            "content-type" : "application/json",
            "charset" : "utf-8"
        },
        body:CreateTodo6,
    })
    const CheckReq7 = await t.request({
        url:'http://34.64.140.229:8181/createTodo',
        method:'Post',
        headers:{
            "content-type" : "application/json",
            "charset" : "utf-8"
        },
        body:CreateTodo7,
    })
    const CheckReq8 = await t.request({
        url:'http://34.64.140.229:8181/createTodo',
        method:'Post',
        headers:{
            "content-type" : "application/json",
            "charset" : "utf-8"
        },
        body:CreateTodo8,
    })
    await t.expect(CheckReq1.status).eql(200);
    await t.expect(CheckReq2.status).eql(200);
    await t.expect(CheckReq3.status).eql(200);
    await t.expect(CheckReq4.status).eql(200);
    await t.expect(CheckReq5.status).eql(200);
    await t.expect(CheckReq6.status).eql(200);
    await t.expect(CheckReq7.status).eql(200);
    await t.expect(CheckReq8.status).eql(200);

    const { num: num1, ...others1 } = CheckReq1.body[CheckReq1.body.length - 1];
    const { num: num2, ...others2 } = CheckReq2.body[CheckReq2.body.length - 1];
    const { num: num3, ...others3 } = CheckReq3.body[CheckReq3.body.length - 1];
    const { num: num4, ...others4 } = CheckReq4.body[CheckReq4.body.length - 1];
    const { num: num5, ...others5 } = CheckReq5.body[CheckReq5.body.length - 1];
    const { num: num6, ...others6 } = CheckReq6.body[CheckReq6.body.length - 1];
    const { num: num7, ...others7 } = CheckReq7.body[CheckReq7.body.length - 1];
    const { num: num8, ...others8 } = CheckReq8.body[CheckReq8.body.length - 1];

    // await t.expect(others).eql(CreateTodo);
    await t.eval(() => location.reload(true)); //새로고침
    await t.wait(2000); //전제조건 완료




    //
    // //테스트 다 했으면 삭제 요청하기
    // const DelScrollDiv = Selector('#scrollDiv')
    // const DelReq1 = await t.request({
    //     url:'http://34.64.140.229:8181/deleteTodo?num='+num1, //requestparam과 requestbody 읽어보기
    //     method: 'Delete',
    //     headers: {"charset" : "utf-8"},
    // })
    // const DelReq2 = await t.request({
    //     url:'http://34.64.140.229:8181/deleteTodo?num='+num2,
    //     method: 'Delete',
    //     headers: {"charset" : "utf-8"},
    // })
    // const DelReq3 = await t.request({
    //     url:'http://34.64.140.229:8181/deleteTodo?num='+num3,
    //     method: 'Delete',
    //     headers: {"charset" : "utf-8"},
    // })
    // const DelReq4 = await t.request({
    //     url:'http://34.64.140.229:8181/deleteTodo?num='+num4,
    //     method: 'Delete',
    //     headers: {"charset" : "utf-8"},
    // })
    // const DelReq5 = await t.request({
    //     url:'http://34.64.140.229:8181/deleteTodo?num='+num5,
    //     method: 'Delete',
    //     headers: {"charset" : "utf-8"},
    // })
    // const DelReq6 = await t.request({
    //     url:'http://34.64.140.229:8181/deleteTodo?num='+num6,
    //     method: 'Delete',
    //     headers: {"charset" : "utf-8"},
    // })
    // const DelReq7 = await t.request({
    //     url:'http://34.64.140.229:8181/deleteTodo?num='+num7,
    //     method: 'Delete',
    //     headers: {"charset" : "utf-8"},
    // })
    // const DelReq8 = await t.request({
    //     url:'http://34.64.140.229:8181/deleteTodo?num='+num8,
    //     method: 'Delete',
    //     headers: {"charset" : "utf-8"},
    // })
    // await t.expect(DelReq1.status).eql(200); //삭제요청 잘됐나
    // await t.expect(DelReq2.status).eql(200)
    //     .expect(DelReq3.status).eql(200)
    //     .expect(DelReq4.status).eql(200)
    //     .expect(DelReq5.status).eql(200)
    //     .expect(DelReq6.status).eql(200)
    //     .expect(DelReq7.status).eql(200)
    //     .expect(DelReq8.status).eql(200)
    // await t.eval(() => location.reload(true)); //새로고침
    // await t.expect(DelScrollDiv.hasChildElements).notOk(); //자식요소에 아무것도 없는지
    //
    // await t.eval(() => location.reload(true));  //새로고침
    // await t.wait(2000);
});

// test ('삭제', async t=>{
//     const ScrollDiv = Selector('#scrollDiv')
//     const DelBtn = ScrollDiv.find('.deleteBtn');  //삭제 버튼
//
//     await t.setNativeDialogHandler(() => true); //네이티브 대화 상자에 대한 핸들러 설정 ('확인'버튼 누르도록)
//     await t.click(DelBtn).wait(2000);
//     await t.click(DelBtn).wait(2000);
//     await t.click(DelBtn).wait(2000);
//     await t.click(DelBtn).wait(2000);
//     await t.click(DelBtn).wait(2000);
//     await t.click(DelBtn).wait(2000);
//     await t.click(DelBtn).wait(2000);
//     await t.click(DelBtn).wait(2000);
//
// });
