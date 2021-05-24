class ListDemo extends React.Component {
  constructor(props){
    this.state = {
      count: 0
    }
  }
  render() {
    return <div> {this.state.count} </div>
  }
  increase = () => {
    // 异步
    this.setState({
      count: this.state.count + 1
    }, () => {
      // 回调函数中可以难道最新的state
      console.log(this.state.count)
    })
    // 异步的，拿不到最新值
    console.log(this.state.count)
    // ----------------------------
    setTimeout(() => {
      this.setState({
        count: this.state.count +1
      })
      // 同步，可以拿到
      console.log(this.state.count)
    })
  }
}