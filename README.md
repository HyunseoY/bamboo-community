# 🎋대숲🎋

익명 커뮤니티 사이트 대나무숲

2023.07.04-2023.07.14 개인과제

### 목차

- [1. 프로젝트 소개](#1-프로젝트-소개)
- [2. 배포 주소](#2-배포-주소)
- [3. 와이어 프레임](#3-와이어-프레임)
- [4. 기술스택](#4-기술스택)
- [5. Components](#5-components)
- [6. API Table](#6-api-table)
- [7. 페이지](#7-페이지)
- [8. Issues](#8-issues)

### 1. 프로젝트 소개

작성된 게시물을 보여주는 뉴스 피드 (news feed) 형식

“마음에 담아두면 병나요!”

현대인들의 속풀이 공간으로 평소에 쌓인 스트레스를 마음껏 발산할 수 있는 커뮤니티를 제공한다.

스스로의 멘탈 케어 또는 내향적인 성향으로 평소에 잘 물어보지 못했던 것들을

“대숲”에서 자유롭게 이야기 해보세요!

### 2. 배포 주소

없음

### 3. 와이어 프레임

![image](https://github.com/HyunseoY/GOE_CINEMA/assets/130683029/13e132c8-cc87-49fd-9b4b-14193cf5a626)

### 4. 기술스택

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"><img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"><img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"><img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

### 5. components

### 6. API Table

| API 이름         | URL                      | Method | Request                                                                          | Response             |
| ---------------- | ------------------------ | ------ | -------------------------------------------------------------------------------- | -------------------- |
| 게시글 전체 조회 | /, /각 카테고리 페이지들 | GET    | 'feeds'                                                                          | 게시글 리스트 데이터 |
| 게시글 작성      | /newpost                 | POST   | {category: selected, contents, writerId: 1, timestamp: date, isDeleted: false, } | 작성 게시글 데이터   |
| 게시글 상세 조회 | /detail                  | GET    | 'feeds'                                                                          | 게시글 데이터        |
| 게시글 수정      | /detail                  | PUT    | { ...selectedData, contents: editedContents }                                    | 수정된 게시글 데이터 |
| 게시글 삭제      | /, /각 카테고리 페이지들 | DELETE | '/feeds/${feedId}'                                                               | 게시글 데이터 삭제   |
| 회원가입         | /register                | POST   | {id, password}                                                                   | 작성 유저 데이터     |
| 로그인           | /login                   | POST   | {id, password}                                                                   | 유저 데이터          |

### 7. 페이지

### 8. Issues
