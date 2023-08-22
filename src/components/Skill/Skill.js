import React from 'react';
import './Skill.css'

const skills=[{
    imageSrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
},{
    imageSrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/2000px-CSS.3.svg.png'
},{
    imageSrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'
},
{
    imageSrc:'https://i1.wp.com/softwareengineeringdaily.com/wp-content/uploads/2018/04/React_graphic.png?fit=640%2C366&ssl=1'
},
{
    imageSrc:'https://nouvelles.wp-x.jp/wp-content/uploads/2016/04/javascript.png'
},{
    imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbKzFW62khiOhQ3D7aZFlkB4GPYxs1tQhO4mlBG3AYtmoxUrz'
}]
export class Skill extends React.Component{

    render(){
        // const {business} = this.props;
        return(
            <div className="skills">
            {
                skills.map((skill)=>{
                    return(
                        <div className="image-container">
                            <img className='breathing-button' src={skill.imageSrc} alt=''/>
                        </div>
                    )
                })
            }
                
            </div>
        )
    }
}