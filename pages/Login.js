import React from "react";
import styled from "@emotion/styled"

const Wrapper = styled.div`
`

const Title = styled.h1`
  
`
const Label = styled.label`
  
`
const ID = styled.input`
  
`
const Password = styled.input`
  
`

const Login = () => {
  return (
    <Wrapper>
      <Title>로그인</Title>
      <Label>아이디</Label>
      <ID type="text" />
      <Label>비밀번호</Label>
      <Password type="password" />
    </Wrapper>
  )
}

export default Login;