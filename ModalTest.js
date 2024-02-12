import {Selector} from 'testcafe';
fixture('Tested for Google')
    .page('http://34.64.140.229:8181/')




test('TC00000016 modal text', async t=>{
    const WriteButton = Selector('[data-bs-target="#addModal"]')
    await t.click(WriteButton).wait(3000);  //투두 생성 버튼 클릭

    const ModalTitle = Selector('#exampleModalLabel')   //모달 제목란
    await t.expect(ModalTitle.getAttribute('placeholder')).eql('제목을 입력하세요.')    //제목란에 텍스트
    // modaltitle에서 placeholder 속성의 값을 가지고 올꺼야 그리고 그 값을 eql을 통해 비교할꺼야

    const ModalContent = Selector('#ModalContent')  //모달 내용란
    await t.expect(ModalContent.getAttribute('placeholder')).eql('내용을 입력하세요.')  //내용란 텍스트

    const ModalDate = Selector('#addDate') //모달 날짜란
    await t.expect(ModalDate.value).eql('') //날짜란 값이 비어있는지

});


    //글쓰기 > 제목 입력
test('TC00000017 modal title input text', async t=>{
    const WriteButton = Selector('[data-bs-target="#addModal"]')    //투두 생성 버튼
    await t.click(WriteButton).wait(3000);  //생성 버튼 클릭

    const ModalTitle = Selector('#exampleModalLabel')   //모달 제목란
    // await t.click(ModalTitle).wait(2000);   //제목란 클릭
    await t.typeText(ModalTitle, 'test text').wait(3000)    //제목란에 'test text' 입력(클릭 따로안해도 입력됨)
});


test('TC00000018 modal content input text', async t=>{
    const WriteBtn = Selector('[data-bs-target="#addModal"]')   //생성 버튼
    await t.click(WriteBtn).wait(3000);

    const ModalContent = Selector('#ModalContent')  //모달 내용란
    await t.typeText(ModalContent, 'test text').wait(2000)
});


    //날짜입력 나중에 다시하깅
test('TC00000019 modal input date', async t=>{
    const WriteButton = Selector('[data-bs-target="#addModal"]')
    await t.click(WriteButton).wait(3000);

    const ModalDate = Selector('#addDate')
    await t.click(ModalDate);
});


test('TC00000020 save todo', async t=>{
    //Dialog[Alert, Confirm, Prompt] 등을 확인으로 처리
    await t.setNativeDialogHandler(() => true);

    // 모달 표시 버튼 클릭
    const WriteButton = Selector('[data-bs-target="#addModal"]')
    await t.click(WriteButton).wait(3000);

    // 모달에서 저장 버튼 클릭
    const SaveButton = Selector('#modalSaveBtn')
    await t.click(SaveButton).wait(3000);

    //Dialog[Alert, Confirm, Prompt]가 표시되었었는지 조회
    const history = await t.getNativeDialogHistory();
    // 해당 Dialog 의 Type 이 Alert 인지 확인
    await t.expect(history[0].type).eql('alert')
        // 해당 Dialog 텍스트가 일치하는지 확인
        .expect(history[0].text).eql('제목과 날짜를 입력하세요.');
});


test('TC00000021 alert test', async t=>{
    await t.setNativeDialogHandler(() => true); //다이얼로그가 나타날때 자동으로 확인버튼 누름

    const WriteBtn = Selector('[data-bs-target="#addModal"]')
    await t.click(WriteBtn).wait(2000);

    const ModalTitle = Selector('#exampleModalLabel')
    await t.typeText(ModalTitle, 'test text title');

    const SaveBtn = Selector('#modalSaveBtn')
    await t.click(SaveBtn).wait(2000);

    const AlertHistory = await t.getNativeDialogHistory();
    await t.expect(AlertHistory[0].type).eql('alert')
        .expect(AlertHistory[0].text).eql('날짜를 선택하세요.');
});

test('TC00000023 alert test1', async t=>{
    await t.setNativeDialogHandler(() => true);

    const WriteBtn = Selector('[data-bs-target="#addModal"]')
    await t.click(WriteBtn).wait(2000);

    const ModalContent = Selector('#ModalContent')
    await t.typeText(ModalContent(), 'test text content');

    const SaveBtn = Selector('#modalSaveBtn')
    await t.click(SaveBtn).wait(2000);

    const AlertHistory = await t.getNativeDialogHistory();
    await t.expect(AlertHistory[0].type).eql('alert')
        .expect(AlertHistory[0].text).eql('제목과 날짜를 입력하세요.');
});

test('TC00000025 alert test2', async t=>{
    await t.setNativeDialogHandler(() => true);

    const WriteBtn = Selector('[data-bs-target="#addModal"]')
    await t.click(WriteBtn);

    const ModalTitle = Selector('#exampleModalLabel')
    await t.typeText(ModalTitle, 'test text title');

    const ModalContent = Selector('#ModalContent')
    await t.typeText(ModalContent(), 'test text content');

    const SaveBtn = Selector('#modalSaveBtn')
    await t.click(SaveBtn).wait(2000);

    const AlertHistory = await t.getNativeDialogHistory();
    await t.expect(AlertHistory[0].type).eql('alert')
        .expect(AlertHistory[0].text).eql('날짜를 선택하세요.');
});