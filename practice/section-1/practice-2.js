'use strict';

function collectSameElements(collectionA, collectionB) {
    var ret=[];
  var index=0;
  for (var j=0;j<collectionB.length;j++)
  for (var i=0;i<collectionA.length;i++)
  {
    if (collectionB[j].indexOf(collectionA[i])!=-1)
    {
      ret[index]=collectionA[i];
      index++;
    }
  }
  return ret;
}
