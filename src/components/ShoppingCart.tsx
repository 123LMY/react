import React from "react";
import styles from './ShoppingCart.module.css'
import { FiShoppingCart } from 'react-icons/fi'
interface Props {

}
interface State {
  isOPen: boolean
}
class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isOPen: false
    }
  }
  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if ((e.target as HTMLElement).nodeName === 'SPAN') {
      this.setState({
        isOPen: !this.state.isOPen
      })
    }
  }
  render() {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button}
          onClick={this.handleClick}
        >  <FiShoppingCart />
          <span>购物车 2(件)</span>
        </button >
        <div className={styles.cartDropDown}
          style={{ display: this.state.isOPen ? 'block' : 'none' }}
        >
          <ul>
            <li>robot 2</li>
            <li>robot 1</li>
          </ul>
        </div>
      </div >
    )
  }
}

export default ShoppingCart