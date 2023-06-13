import { Content, Main } from "./style";

interface SectionProps {
  firstContent: string;
  secondContent: string;
}

export function Section({ firstContent, secondContent }: SectionProps) {
  return (
    <Content>
      <Main>
        <span>
          <h2>{firstContent}</h2>
          <p>{secondContent}</p>
        </span>
      </Main>
    </Content>
  )
}