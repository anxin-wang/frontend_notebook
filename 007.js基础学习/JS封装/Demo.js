/**
 * @author Wangjiayan
 */
//Demo1 Ϊjavascript��������ӷ���
Number.prototype.add=function(num){
	return this+num;
}
//���ԣ�3.add(4);

//Demo2 �����Զ�����
function Car(color,door,mpg)                   //JS������function������
{
	this.color=color;
	this.door=door;
	this.mpg=mpg;
	this.drivers=new Array("Mike","Sue");
}
//Ϊ�Զ���������ӷ���
Car.prototype.showColor=function(){
	alert(this.color);
}
//Demo3 ������Ϊ�Զ��������ӷ���
function Car2(color,door,mpg)
{
	this.color=color;
	this.door=door;
	this.mpg=mpg;
	this.drivers=new Array("Mike","Sue");
	if(typeof Car2._initialized == "undefined")
	{
		Car2.prototype.showColor=function(){
			alert(this.color);
		}
	}
}
//Demo2��Demo3�Ĳ��ԣ�
//var oCar1=new Car("red",4,23);
//var oCar2=new Car("blue",3,25);
//oCar1.drivers.push("Matt");
//alert(oCar1.drivers);
//alert(oCar2.drivers);

//Demo4 
function TestObjectA()
{
	this.methodA=function(){
		alert("TestObjectA.methodA()");
	}
}
function TestObjectB()
{
	this.methodB=function(){
		alert("TestObjectB.methodB()");
	}
}
TestObjectB.prototype=new TestObjectA();    //����B�̳���A
//���ԣ�
//var t=new TestObjectB();
//t.methodA();
//t.methodB();


