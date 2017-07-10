'use strict';

function collectSameElements(collectionA, collectionB) {
  var ret=[];
  var index=0;
  for (var i=0;i<collectionA.length;i++)
  {
    if (collectionB.value.indexOf(collectionA[i].key)!=-1)
    {
      ret[index]=collectionA[i].key;
      index++;
    }
  }
  return ret;
}
