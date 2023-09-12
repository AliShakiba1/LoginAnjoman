import Login from '../pages/Login/Components/Login'

function withAuth(Component: React.FC) {
  let user = localStorage.getItem('name')

  user = user ? JSON.parse(user) : null

  return (props: any) => {
    if (!user) {
      return <Login />
    } else {
      return <Component {...props} user={user} />
    }
  }
}

export default withAuth
