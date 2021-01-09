export interface ExampleStateInterface {
  prop: boolean;
  test: string;
}

function state(): ExampleStateInterface {
  return {
    prop: false,
    test: 'pedik',
  };
}

export default state;
