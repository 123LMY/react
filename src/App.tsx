import React from 'react';
import logo from './assets/image/logo.svg';
// import './App.css';
import robots from './mockdata/robots.json'
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart';
import styles from "./App.module.css";

interface Props { }
interface State {
  robotGallery: any[],
}
class App extends React.Component<Props, State> {
  //生命周期初始化
  constructor(props) {
    super(props)
    this.state = {
      robotGallery: [],
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ robotGallery: data }))
  }
  //生命周期 更新componentWillReceiveProps'
  //组件更新后处理
  componentDidUpdate() {

  }
  //生命周期摧毁
  componentWillUnmount() {

  }
  render() {
    return (
      <div className={styles.app} >
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
        </div>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map(r => <Robot id={r.id} name={r.name} email={r.email} />)}
        </div>
      </div>

    );
  }

}

export default App;
