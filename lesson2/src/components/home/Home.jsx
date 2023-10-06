import { connect } from 'react-redux'
import { increment, decrement } from '../../redux/actions'
const Home = ({ count, increment, decrement }) => {
   return (
      <div>
         <h1>Count: {count}</h1>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
         <button></button>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      count: state.count
   }
}
const mapDispathToProps = {
   increment, decrement
}
export default connect(mapStateToProps, mapDispathToProps)(Home) 