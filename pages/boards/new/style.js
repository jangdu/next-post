import styled from "@emotion/styled";

export const BoardWrapper = styled.div`
  width: 1200px;
  // height: 1847px;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`
export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
`
export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
  gap: 25px;
`
export const WriterBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 45px;
`
export const WriterSpan = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 10px;
`
export const WriterInput = styled.input`
  height: 52px;
  padding: 16px 14px;
  box-sizing: border-box;
  border: 1px solid #BDBDBD;
`

export const ContentInput = styled.textarea`
  width: 100%;
  height: 480px;
  box-sizing: border-box;
  padding: 16px 14px;
  border: 1px solid #BDBDBD; 
  resize: none;
`

export const AdressWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
`
export const AdressInput = styled.input`
  height: 52px;
  width: 77px;
  border: 1px solid #BDBDBD; 
  box-sizing: border-box;
  padding: 16px 14px;
`
export const AdressBtn = styled.button`
  width: 124px;
  height: 54px;
  box-sizing: border-box;
  padding: 16px 14px;
  font-size: 16px;
  font-weight: bold;
  background-color: black;
  color: white;
  margin-top: 0;
  cursor: pointer;
`

export const ImageInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 24px;
`

export const ImageInput = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  border: none;
  color: #4F4F4F;
  cursor: pointer;
`

export const MainOptionWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
`

export const RadioButton = styled.input`
  cursor: pointer;
  margin-left: 24px;
`;

export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
`
export const SubmitBtn = styled.button`
  background-color: #FFD600;
  color: black;
  width: 179px;
  height: 52px;
  border: none;
  cursor: pointer;
`