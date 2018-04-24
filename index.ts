export class MyFirstClass {
}

export class MySecondClass<T> {
}

export class MyThirdClass {
	constructor(public arg: Array<MySecondClass<MyFirstClass>>) {
		// do nothing here
	}
}
