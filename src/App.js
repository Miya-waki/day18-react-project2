/**App => why it is used in captial
 * JSX => java script XML
 *
 * @returns
 */

export default function App() {
  return (
    <div>
      <Helloworld />
      <Helloworld />
      <HelloUniverse />
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
export function Helloworld() {
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


function HelloUniverse() {
  return (
    <div>
     
      <h1>Hello universe</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
        modi non optio culpa, iste at. Libero est vitae natus molestiae, dolorem
        ad veniam molestias eos.
      </p>
    </div>
  );
}