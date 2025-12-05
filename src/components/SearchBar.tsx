import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    gap: 10px;
    width: 100%;
`;

const Input = styled.input`
    flex: 1;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
`;

const Button = styled.button`
    padding: 12px;
    border: none;
    background-color: black;
    color: white;
    border-radius: 8px;
`;

function SearchBar() {
    // 사용자가 input에 값을 입력하고, submit을 하면
    // 사용자의 주소를 /search 로 이동시키면서 그 검색 키워드를
    // 해당 화면으로 전달해줘야 함

    // 1. state 설정
    const [keyword, setKeyword] = useState("");

    return (
        <Form>
            <Input placeholder={"책 제목, 저자 등 검색"} />
            <Button>검색</Button>
        </Form>
    );
}

export default SearchBar;
