import Header from "./PrincipleHeader"
import Receiving from "./Receiving.tsx"
import {Colors} from './colors'

const Main = () => {
    return (
      <div style={{height: '100vh', backgroundColor:Colors.zonoBlackishShade, top: '0px'}}>
        <Header />
        <Receiving />
      </div>
    )
}
export default Main
