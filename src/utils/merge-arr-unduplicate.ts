export const mergeArrUnduplicate = (arr, child:string) => {
    return [...new Set(arr.flatMap((obj) => obj.data[child] || []))];
  };