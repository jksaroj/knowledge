import React, { Component} from 'react';
class HaveQuestion extends Component {

  render() {
    return (
            <div className="havequestion">
    
<div className="full-section search-section">
		<div className="search-area container">
			<h3 className="search-title">Have a Question?</h3>
			<p className="search-tag-line">If you have any question you can ask below or enter what you are looking for!</p>
			<form autocomplete="off" method="get" className="search-form clearfix" id="search-form">
				<input type="text" title="* Please enter a search term!" placeholder="Type your search terms here" class="search-term " autocomplete="off" />
				<input type="submit" value="Search" class="search-btn" />
			</form>
		</div>
	</div>
             
                </div>
    
    );
  }
}

export default HaveQuestion;
  

