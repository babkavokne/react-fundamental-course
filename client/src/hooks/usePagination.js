import { useMemo } from 'react';

let result = [];

export const usePagination = (totalPages) => {
  useMemo(() => {
    for (let i = 0; i < totalPages; i++) {
      result.push(i + 1);
    }
  }, [totalPages])

  return result;
}