import React, { Component} from 'react';


class Registration extends Component {

  render() {
    return (
     
   <div className="userreg">
       <div className="container py-5">
    <div className="row">
        <div className="col-md-12">
            <h2 className="text-center text-white mb-4">User Login</h2>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <span className="anchor" id="formLogin"></span>
                    <div className="card rounded-0">
                        <div className="card-header">
                            <h3 className="mb-0">User Registration</h3>
                        </div>
                        <div className="card-body">
                            <form className="form" role="form" autocomplete="off" id="formLogin">
                                <div className="form-group">
                                    <label for="uname1">Username</label>
                                    <input type="text" className="form-control form-control-lg rounded-0" name="uname1" id="uname1" required="" />
                                </div>
                                 <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control form-control-lg rounded-0" id="email1" required="" autocomplete="new-password" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control form-control-lg rounded-0" id="pwd1" required="" autocomplete="new-password" />
                                </div>
                                <button type="button" className="btn btn-success btn-lg float-right">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
   </div>
    
    );
  }
}

export default Registration;
  