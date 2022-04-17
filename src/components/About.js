import React, {useState} from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
            color: 'Black', 
            backgroundColor:'White'
    })
    
    const [myBtnText, setMyBtnText] = useState('Enable Dark Mode');
    
    const toggleDarkMode = ()=> {
        if(myStyle.color === 'Black'){
            setMyStyle({
                color : 'White',
                backgroundColor:'Black',
                border: '1px solid white'
            })

        setMyBtnText('Enable Light Mode');
        }

        else {
            setMyStyle({
            color: 'Black', 
            backgroundColor:'White'
             })
        
             setMyBtnText('Enable Dark Mode');
        }
    }
    return (
        <div className="container" style={myStyle} >
            <h2> Why Inner Engineering </h2>
            <div className="accordion"  id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees
                         that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                           within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header"  id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" style={myStyle} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees 
                        that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. 
                        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within 
                        the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" style={myStyle} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees
                         that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                           within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button type="button" onClick={toggleDarkMode} className="btn btn-dark bg-dark">{myBtnText}</button>
            </div>
        </div>
    )
}
