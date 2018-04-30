import React from 'React'
import ReactDOM from 'react-dom';

class Users extends React.Component{

}

class Tweet extends React.Component{
    constructor(props){
        super(props);
        this.state={
           "db": [
                {
                    "id":"1",
                    "name":"taha",
                    "pic":"black.png",
                    "tweet":"something"
                },
                {
                    "id":"2",
                    "name":"talha",
                    "pic":"white.png",
                    "tweet":"something1"
                },
                {
                    "id":"3",
                    "name":"ufuq",
                    "pic":"purple.png",
                    "tweet":"something2"
                }
            ]
        }
    }

    
    render(){
        const toRender=this.state.db.map((item)=>
        <div key={item.id}>
            <div className={"row"}>
            <div  className={"col-lg-2"}  > <img src={item.pic} style={{height:"50px"} }className={"img  img-circle img-responsive" } /></div>
                <div className={"col-lg-10"}> 
                    <p>{item.name}</p>
                    <p>{item.tweet}</p>
                </div>
            </div>
            <div className={"row"} style={{height:"20px"} }>
                <div className={"col-lg-10 col-lg-offset-2"}><Footer/> </div>
            </div>
        </div>)

        return(
        <div className={"container"} style={{backgroundColor:"Grey" , width:"40%"}}>
            
            {toRender}
           
         </div>
        )
    }
}

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={
           "db": [
                {
                    "name":"taha",
                    "pic":"black.png",
                    "tweet":"something"
                },
                {
                    "name":"talha",
                    "pic":"white.png",
                    "tweet":"something1"
                },
                {
                    "name":"ufuq",
                    "pic":"purple.png",
                    "tweet":"something2"
                }
            ]
        }
    }
    render(){
        

        
        return(
            {toRender}
           
        )
    }
}

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.makeRed=this.makeRed.bind(this);
        this.state={img: "retweet.png"};
    }
    makeRed(){
        if(this.state.img=="retweet.png") this.setState({img:"red.jpg"});
        else
        this.setState({img:"retweet.png"});
    }
    render(){
       
        return(
        <div className={"row"}  >
            <div className={"col-lg-2 "} ><img src={this.state.img} onClick={this.makeRed} style={{height:"10px"}} className={"img img-responsive"} /></div>
            <div className={"col-lg-2 "}><img src="retweet.png" style={{height:"10px"}} className={"img img-responsive"}/></div>
            <div className={"col-lg-2 "}><img src="retweet.png" style={{height:"10px"}} className={"img img-responsive"}/></div>
            <div className={"col-lg-2 "}><img src="retweet.png" style={{height:"10px"}} className={"img img-responsive"}/></div>
        </div>
        )
    }
}


ReactDOM.render(<Tweet />, document.getElementById('app'));