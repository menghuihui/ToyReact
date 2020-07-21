import {ToyReact, Component} from './ToyReact'

class MyComponent extends Component{
  render(){
    return <div>
      <span>hello</span>
      <span>world</span>
      <div>
        {true}
        {this.children}
      </div>
    </div>
  }


}


let a = <MyComponent name='name' id='ida'>
  <div>123</div>
</MyComponent>

ToyReact.render(
  a,
  document.body,
)
//
// document.body.appendChild(a)
//
// console.log(a)
