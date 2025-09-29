import { CardResponse, Item } from "@/types/main";

export const fetchCards = async (): Promise<Item[]> => {
  const endpoint = "https://api.clashroyale.com/v1/cards";

  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjBhYTAwNWI0LWFjMDItNGZiOC1iZDA0LTYxYWM2OGE3MGQyZCIsImlhdCI6MTc1OTE2MTg4OCwic3ViIjoiZGV2ZWxvcGVyLzZiYzA2MDY3LTE0ZjMtMmJiZS1kNTAzLWRmMzBkNzk5MjQ5NyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTIuMTQ1LjE3NC4xNzQiXSwidHlwZSI6ImNsaWVudCJ9XX0.s8Asn4-gX1Oz_ThMDqghUFQimPHqGgk5Y61NTL-Un9eDLMi1er33aJNZdF34ksIQHMVs2aFcZNroO9WTKMDH_Q`,
    },
  });

  if (!res.ok) {
    throw new Error(`Network response was not ok: ${res.statusText}`);
  }

  const data: CardResponse = await res.json();
  console.log(data);
  return data.items;
};
