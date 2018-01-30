import React, { Component} from 'react';

class Contact extends Component {
render ()  {
return(
<div className="container">
    <div className="row">
    <div className="col-md-12">
        <form name="userform" id="userform">
      <div className="form-group">
        <label for="username">User Name</label>
          <input className="form-control" name="username" id="username" ref="username" placeholder="Please provide username" />
       </div>
      <div className="form-group">
        <label for="useremail">User Email</label>
          <input className="form-control" name="useremail" ref="useremail" placeholder="Please provide email" id="useremail"/>
       </div>
      <div className="form-group">
        <label for="fullname">Full Name</label>
          <input className="form-control" name="fullname" ref="fullname" placeholder="Please provide full name" id="fullname"/>
       </div>
        <div className="form-group">
          <button className="btn btn-primary" type="button">Save</button>
        </div>
        <ul className="text-muted">
        
        </ul>
        </form>
        </div>
    </div>    
</div>    
);
}
}

export default Contact;
