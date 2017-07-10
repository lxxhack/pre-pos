'use strict';

function collectSameElements(collectionA, collectionB) {
  var ret=[];
  var index=0;
  for (var i=0;i<collectionA.length;i++)
  {
    if (collectionA[i] in collectionB)
    {
      ret[index]=collectionA[i];
      index++;
    }
  }
  return ret;
}
