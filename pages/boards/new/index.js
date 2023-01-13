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
        <S.WriterBlock>
          <S.WriterInput></S.WriterInput>
        </S.WriterBlock>
        <S.WriterBlock>
          <S.WriterInput></S.WriterInput>
        </S.WriterBlock>
      </S.WriterBlock>
      <S.WriterBlock>
        <S.WriterSpan>유튜브</S.WriterSpan>
        <S.WriterInput placeholder='링크를 복사해주세요'></S.WriterInput>
      </S.WriterBlock>
      <S.WriterBlock>
        <S.WriterSpan>사진첨부</S.WriterSpan>
        <S.ImageInputWrapper>
          <S.ImageInput>+<br/>Upload</S.ImageInput>
          <S.ImageInput>+<br/>Upload</S.ImageInput>
          <S.ImageInput>+<br/>Upload</S.ImageInput>
        </S.ImageInputWrapper>
      </S.WriterBlock>
      <S.MainOptionWrapper>
        <S.WriterSpan>메인설정</S.WriterSpan>
        <S.RadioButton type='radio' id='youtube' name='radio'></S.RadioButton>
        <label htmlFor="youtube">유튜브</label>
        <S.RadioButton type='radio' id='image' name='radio'></S.RadioButton>
        <label htmlFor="iamge">사진</label>
      </S.MainOptionWrapper>
      <S.BtnsWrapper>
        <S.SubmitBtn>등록하기</S.SubmitBtn>
      </S.BtnsWrapper>
    </S.BoardWrapper>
  )
}
export default BoardWriteUI