// Input: ["bella","label","roller"]
// Output: ["e","l","l"]

function findCommonChars(A){
  let map = {};

  //Find character map for first word
  A[0].split('').forEach((character) => {
    map[character] = (map[character] || 0) + 1;
  });
  console.log("Init map with first word",map);


  //find character map for the rest of the words in A
  for(let i=1; i<A.length; i++){
    const newMap = {};
    console.log("new Map created, in loop number ", i, newMap);
    A[i].split('').forEach((character) => {
      if(map[character])
        newMap[character] = (newMap[character] || 0) + 1;
        console.log("Map2 in loop",newMap);
    });
    console.log("Map2 with rest of the words",newMap);


  //form result from newMap
    for(let n in newMap){
      if(map[n]){
        newMap[n] = newMap[n] <= map[n] ? newMap[n] : map[n];
        console.log("update map2?", newMap);
      }
      console.log("update map2? out of IF Loop", newMap);
    }
    map = newMap; //update recent counts
    console.log("update map?",map);
  }


  //result = newMap
  const result=[];
  for(let m in map){
    if(map[m] > 1){
      for(let i=1; i<map[m]; i++){
        result.push(m);
      }
    }
    result.push(m);

  }
  console.log(result);

  return result;
}
