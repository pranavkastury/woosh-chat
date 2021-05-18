import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm'
const App = () => {
  const projectId = `${process.env.REACT_APP_PROJECT_ID}`
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine height="100vh" projectID={`${projectId}`}
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App;
