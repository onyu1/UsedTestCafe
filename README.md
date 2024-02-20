<h1>안녕하세요!</h1>
<br/>

<h2>해당 프로젝트는 To Do List 웹 페이지를 TestCafe를 이용하여 자동화 테스트를 수행하는 프로젝트이며, 현재 진행중입니다!</h2>
<br/>

검증하고 있는 To Do List 페이지의 경우 [ToDo Page](http://34.64.140.229:8181/#)로 접속하시면 보실 수 있습니다!
<br/>

TC 파일의 경우 [TC 파일](https://github.com/onyu1/UsedTestCafe/blob/master/TC%20Directory/To%20Do%20List%20Test%20Case.xlsx)을 클릭하시고 View raw를 누르시면 다운받아집니다!
<br/>

테스트 결과 리포트는 하단의 사진으로 첨부해두었습니다!


<h1>사용기술</h1>
<br/>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TestCafe](https://img.shields.io/badge/testcafe-ffffff?style=for-the-badge&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT5maWxlX3R5cGVfdGVzdGNhZmU8L3RpdGxlPjxwb2x5Z29uIHBvaW50cz0iMjguMTE1IDkuNDMyIDI1LjcwMSA3IDE1LjU2MiAxNy4yMTYgMTEuNyAxMy4zMjQgOS4yODcgMTUuNzU3IDE1LjU2MiAyMi4wODEgMjguMTE1IDkuNDMyIiBzdHlsZT0iZmlsbDojMzZiNmU1Ii8+PHBvbHlnb24gcG9pbnRzPSIxOS40MjUgMTkuMTUxIDE4LjIzMSAyMC4yMDEgMjIuNDEyIDIwLjIwMSAyNS45OTYgMjMuNSA1Ljk4NiAyMy41IDkuNTcgMjAuMjAxIDEyLjcwNiAyMC4yMDEgMTEuNjYxIDE5LjE1MSA4LjgyNCAxOS4xNTEgMiAyNSAzMCAyNSAyMy4xNTkgMTkuMTUxIDE5LjQyNSAxOS4xNTEiIHN0eWxlPSJmaWxsOiNkMmQyZDIiLz48L3N2Zz4=)

<h1>테스팅 가능한 브라우져</h1>
<br/>

![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)
![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)

<h1>테스트 결과 리포트</h1>
<br/>

1.리포트 대시보드
![report1](https://github.com/onyu1/UsedTestCafe/assets/121859040/6c9ca041-89d7-4a2b-81e6-b131d3090881)
2.테스트 결과 상세
![report2](https://github.com/onyu1/UsedTestCafe/assets/121859040/1f1ff790-8707-4017-9e0a-6c53639c5a76)
3.테스트 에러 발생 시 보여지는 내용
![report3](https://github.com/onyu1/UsedTestCafe/assets/121859040/18d27022-f773-45f9-a543-129693ef7807)


package.json 
- "--disable-native-automation" 명렁어를 쓰는 이유 :
testcafe가 테스트 진행시 브라우저 설정 권한을 크롬이나 엣지 브라우저에게 맡김.
그래서 http로 요청했음에도 불구하고 https로 변경됨.
따라서 브라우저 설정에 관한 권한을 testcafe로 위임시켜 http로 유지하게하기 위해서 해당 옵션 사용
