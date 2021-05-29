import React,{useState} from 'react';

function Form1(){
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [password2,setPassword2] = useState('');
    const [check,setCheck] = useState('');
    const onSubmit = (e)=>{
        e.preventDefault();
        if(password!=password2)
        {alert("password is wrong");
        setCheck("border border-danger shadow")
        }
        else
        {
            setCheck("border border-success shadow")
        }


    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className={`col-lg-6 mt-4 bg-white ${check}`}>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <h1>Form using Hooks</h1>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" id="email" className={`form-control shadow-sm`} 
                            onChange={(obj)=>setName(obj.target.value)
                            }
                            placeholder="Enter Email"
                            value={name}
                            />
                            <small className="form-text text-muted">we'll never share your email with anyone else. </small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="shadow-sm form-control"
                            onChange={(obj)=>setPassword(obj.target.value)
                            }
                            placeholder="Enter Password"
                            value={password}
                            id="pass1"
                            />
                            
                        </div>
                        <div className="form-group">
                            <label>Re-enter Password</label>
                            <input type="password" className="shadow-sm form-control"
                            onChange={(obj)=>setPassword2(obj.target.value)
                            }
                            placeholder="Enter Re-Password"
                            value={password2}
                            id="pass2"
                            />
                            
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-lg-3"></div>

            </div>
            
        </div>
    )

}

export default Form1;