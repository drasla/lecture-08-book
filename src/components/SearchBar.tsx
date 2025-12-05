import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

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
    // 해야하는 일 :
    // 사용자가 input에 값을 입력하고, submit을 하면
    // 사용자의 주소를 /search 로 이동시키면서 그 검색 키워드를
    // 해당 화면으로 전달해줘야 함

    // 사용자 이동에 관련된 사항은 먼저, useNavigate() 를 실행하여 만들어진 결과를
    // 변수에 넣어서 그걸 이용해야 함
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState("");

    return (
        <Form onSubmit={(event) => {
            // 사용자가 입력한 keyword를 가지고,
            // /search 로 이동시켜줘야 함
            event.preventDefault();
            navigate(`/search?keyword=${keyword}`);
        }}>
            <Input
                placeholder={"책 제목, 저자 등 검색"}
                onChange={event => {
                    setKeyword(event.target.value);
                }}
            />
            <Button>검색</Button>
        </Form>
    );
}

export default SearchBar;
