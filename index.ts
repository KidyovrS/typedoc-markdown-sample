export class MyFirstClass {
}

export class MySecondClass<T> {
}

export class MyThirdClass {
	constructor(public arg: MyFourthClass<MyFirstClass, MySecondClass<MyFirstClass>>) {
		// do nothing here
	}
}

export class MyFourthClass<K, V> {
}
