'use strict';

function countSameElements(collection) {
  for (var i=0;i<collection.length;i++)
{
if (collection[i].charAt(1)=='-'||collection[i].charAt(1)=='['||collection[i].charAt(1)==':')
{
var ch=collection[i].charAt(0);
var num=parseInt(collection[i].substring(2));
collection.splice(i,1);
for (var j=0;j<num;j++)
{
collection.splice(i,0,ch);
}
}
}
  var count;
  var alpha;
  var ret=[];
  var index=0;
  var a;
  for (i=0;i<collection.length;)
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
	a.name=alpha;
	a.summary=count
	ret[index++]=a;
  }
  return ret;
}
