import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from './atom'

function App() {
  return (
    
      <div>
        <RecoilRoot>
          <MainApp/>
        </RecoilRoot>
       
      </div>
  )
}

function MainApp(){

    const networkNotificationCount = useRecoilValue(networkAtom);
    const JobsCount = useRecoilValue(jobsAtom);
    const MessageCount = useRecoilValue(messagingAtom);
    const NotificationCount = useRecoilValue(notificationsAtom);
    const [MessageAtomcount ,setCount] = useRecoilState(notificationsAtom)

    console.log(MessageCount)

    return(
      <div>
        <button>Home</button>
        <button>My Network({networkNotificationCount >=100 ?"99+" : networkNotificationCount})</button>
        <button>Jobs({JobsCount})</button>
        <button>Messages({MessageCount})</button>
        <button>Notifications({NotificationCount})</button>
        <button onClick={()=>{
          setCount(MessageAtomcount+1)
        }}>Me</button>
      </div>
    )
  }


 
export default App
