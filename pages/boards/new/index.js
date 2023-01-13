import * as S from './style'
import React from 'react'

const BoardWriteUI = () => {
  return (
    <S.BoardWrapper>
      <S.Title>게시물 등록</S.Title>
      <S.WriterWrapper>
        <S.WriterBlock>
          <S.WriterSpan>작성자</S.WriterSpan>
          <S.WriterInput placeholder='이름을 적어주세요'></S.WriterInput>
        </S.WriterBlock>
        <S.WriterBlock>
          <S.WriterSpan>비밀번호</S.WriterSpan>
          <S.WriterInput placeholder='비밀번호를 적어주세요'></S.WriterInput>
        </S.WriterBlock>
      </S.WriterWrapper>
      <S.WriterBlock>
        <S.WriterSpan>제목</S.WriterSpan>
        <S.WriterInput placeholder='제목을 적어주세요'></S.WriterInput>
      </S.WriterBlock>
      <S.WriterBlock>
        <S.WriterSpan>내용</S.WriterSpan>
        <S.ContentInput placeholder='제목을 적어주세요'></S.ContentInput>
      </S.WriterBlock>
      <S.WriterBlock>
        <S.WriterSpan>주소</S.WriterSpan>
        <S.AdressWrapper>
          <S.AdressInput></S.AdressInput>
          <S.AdressBtn>우편번호 검색</S.AdressBtn>
        </S.AdressWrapper>
        <S.WriterInput></S.WriterInput>
        <S.WriterInput></S.WriterInput>
      </S.WriterBlock>
    </S.BoardWrapper>
  )
}
export default BoardWriteUI