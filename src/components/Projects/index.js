import { Typography } from '@mui/material'
import Button from '@mui/material/Button';
import React from 'react'
import Image1 from '../../img/work-1.jpg'
import Image2 from '../../img/work-2.jpg'
import Image3 from '../../img/work-3.jpg'
import Image4 from '../../img/work-4.jpg'
import Image5 from '../../img/work-5.jpg'
import Image6 from '../../img/work-6.jpg'

export default function Projects(){

    let HTMLarray = [
        {
          title: "Zenith Highlight",
          imageSource: `${Image1}`,
          category:"A hobby website",
          date:"13 July. 2021",
          link:"https://zenithhighlight.herokuapp.com/"
        },
        {
          title:"Historian",
          imageSource: `${Image2}`,
          category:"Web Design",
          date:"18 January. 2021",
          link:"https://historian-timeline.herokuapp.com/"
        },
        {
            title:"Loreda Cuno Nere",
            imageSource: `${Image3}`,
            category:"Web Design",
            date:"18 Sep. 2018",
            link:"https://zenithhighlight.herokuapp.com/"
          },
          {
            title:"Loreda Cuno Nere",
            imageSource: `${Image4}`,
            category:"Web Design",
            date:"18 Sep. 2018",
            link:"https://zenithhighlight.herokuapp.com/"
          },
          {
            title:"Loreda Cuno Nere",
            imageSource: `${Image5}`,
            category:"Web Design",
            date:"18 Sep. 2018",
            link:"https://zenithhighlight.herokuapp.com/"
          }
          , {
            title:"Loreda Cuno Nere",
            imageSource: `${Image6}`,
            category:"Web Design",
            date:"18 Sep. 2018",
            link:"https://zenithhighlight.herokuapp.com/"
          }
    ]

    
    return <section id="work" className="portfolio-mf sect-pt4 route" >
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="title-box text-center">
            <h3 className="title-a">
              Portfolio
            </h3>
            <p className="subtitle-a">
              A collection of prior works
            </p>
            <div className="line-mf"></div>
          </div>
        </div>
      </div>
      <div className="row">
        {HTMLarray.map((item) => {
            return(
                <div className="col-md-4">
          <div className="work-box">
          <a href={item.imageSource} data-lightbox="gallery-mf">
              <div className="work-img">
                <img src={item.imageSource} alt="" className="img-fluid"/>
              </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div >
                    <Typography variant="h5" align="center">  <a href={item.link} > {item.title}</a></Typography>
                    <div className="w-more">
                      <span className="w-ctegory">{item.category}</span> / <span className="w-date">{item.date}</span>
                    </div>
                  </div>
                  
                    <div className="w-like">
                    <span className="ion-ios-plus-outline" ></span>
                    </div>
                  
                </div>
              </div>
             
          </div>
        </div>
            )
        })}
      </div>
    </div>
  </section>
}