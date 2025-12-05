import { createGlobalStyle } from "styled-components";

// CSS 파일을 만들어서 import 했던 것 처럼,
// 전체 프로젝트에 적용할 CSS를 만드는 styled-components의 메소드
const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background-color: #f6f8fa;
        color: #222;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;
