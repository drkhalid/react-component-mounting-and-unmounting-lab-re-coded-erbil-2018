componentDidMount()
   {
     this.setCurrentTime;
   }
  setCurrentTime = () => {
    this.setState({ time: new Date(Date.now())});
  }