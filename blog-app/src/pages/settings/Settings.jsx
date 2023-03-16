import { useContext, useState } from "react"
import { Context } from "../../context/Context"
import "./settings.css"
import axios from "axios"

export default function Setting() {
  const { user, dispatch } = useContext(Context)
  const PF = "http://localhost:5000/images/"

  const [file, setFile] = useState(null)
  const [username, setUsername] = useState("") 
  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(false)   

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({type:"UPDATE_START"})
    const updateUser = {
        userId: user._id,
        username,
        email,
        password,
    }
    if(file) {
        const data = new FormData()
        const filename = Date.now() + file.name
        data.append("name", filename)
        data.append("file", file)
        updateUser.profilePic = filename
        try {
            await axios.post("/upload", data)       
        }catch(err) {

        }
    }
    try {
        const res = await axios.put("/users/" + user._id, updateUser)
        setSuccess(true)
        dispatch({type:"UPDATE_SUCCESS", payload: res.data }) 
    }catch(err) {
        dispatch({type:"UPDATE_FAILURE"})
    }
}

  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className='settingsTitle'>
          <span className="settingsUpdateTittle">Update your Account</span>
          <span className="settingsDeleteTittle">Delete Account</span>
        </div>
        <form className='settingsForm' onSubmit={handleSubmit}>
          <label>Proflie Picture</label>
          <div className="settingsPP">
            <img 
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt="" 
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-user"></i>
            </label>
            <input 
              type="file" 
              id="fileInput" 
              style={{display: "none"}}
              onChange = {e => setFile(e.target.files[0])} 
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)}/>
          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={e => setEmail(e.target.value)}/>
          <label>Password</label>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
          <button className="settingsSubmit" type="submit">Update</button>
          {success && <span style={{color:"green", textAlign:"center", margin:"20px"}}>Profile has been Updated</span>}
        </form>
      </div>
    </div>
  )
}
