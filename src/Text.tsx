import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

export const Text: VFC<Props> = ({ color, fontSize }) => {
  return <p style={{ color: color, fontSize: fontSize }}>テキストです</p>;
};
