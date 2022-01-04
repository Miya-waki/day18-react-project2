/**App => why it is used in captial
 * JSX => java script XML
 *
 * @returns
 */

export default function App(){
  return (
    <div>
      <helloworld />
      <helloworld />
    </div>
  );
}

/**
 * HTML => pre defined tag
 * React => user defined tag =>
 * <div></div>
 *
 * @returns
 */  
export function helloworld() {
  return (
    <div>
      <h1>hello cdac</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse iste unde
        quam, repudiandae tenetur voluptates alias beatae, veniam reprehenderit
        quas inventore sequi fuga tempora!
      </p>
    </div>
  );
}
