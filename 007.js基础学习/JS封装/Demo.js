/**
 * @author Wangjiayan
 */
//Demo1 为javascript已有类添加方法
Number.prototype.add=function(num){
	return this+num;
}
//测试：3.add(4);

//Demo2 创建自定义类
function Car(color,door,mpg)                   //JS中类用function来定义
{
	this.color=color;
	this.door=door;
	this.mpg=mpg;
	this.drivers=new Array("Mike","Sue");
}
//为自定义的类增加方法
Car.prototype.showColor=function(){
	alert(this.color);
}
//Demo3 在类内为自定义的类添加方法
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
//Demo2和Demo3的测试：
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
TestObjectB.prototype=new TestObjectA();    //这里B继承了A
//测试：
//var t=new TestObjectB();
//t.methodA();
//t.methodB();


