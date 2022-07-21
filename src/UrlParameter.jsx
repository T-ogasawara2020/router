import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const location = useLocation();
  const { id } = useParams();
  const { search } = location;
  const query = new URLSearchParams(search);
  console.log(search);
  return (
    <div>
      <h1>UrlParameterです。</h1>
      <p>パラメータは{id}です。</p>
      <p>クエリパラメータは{query.get("name")}です。</p>
    </div>
  );
};
