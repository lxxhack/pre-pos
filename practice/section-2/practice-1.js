'use strict';

function countSameElements(collection) {
  var count;
  var alpha;
  var ret=[];
  var index=0;
  var a;
  for (var i=0;i<collection.length;)
  {
	count=0;
	alpha=collection[i];
	do
	{
		count++;
		i++;
	}
	while (i<collection.length&&collection[i]==alpha);
	a=new Object();
	a.key=alpha;
	a.count=count
	ret[index++]=a;
  }
  return ret;
}
