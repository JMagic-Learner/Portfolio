import { Typography } from '@mui/material'
import Button from '@mui/material/Button';
import React from 'react'
import Image1 from '../../img/ZenithHighlightTemplate2.jpg'
import Image2 from '../../img/work-2.jpg'
import Image3 from '../../img/work-3.jpg'
import Image4 from '../../img/work-4.jpg'
import Image5 from '../../img/work-5.jpg'
import Image6 from '../../img/work-6.jpg'

export default function Projects(){

    let HTMLarray = [
      {
        title:"MortgageFlex LOS",
        imageSource: `${Image4}`,
        category:"Loan Origination Software",
        date:"10 May 2021",
        link:""
      },
          {
            title:"CMA Generator",
            imageSource: `${Image5}`,
            category:"Mobile Application",
            date:"14 Jan. 2020",
            link:""
          }
          , {
            title:"Passenger BillBoard",
            imageSource: `${Image6}`,
            category:"Commercial Design",
            date:"25 April. 2018",
            link:""
          },
    ]

    
    return <section id="work" className="portfolio-mf sect-pt4 route" >
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="title-box text-center">
            <h3 className="title-a">
              Professional Projects
            </h3>
            {/* <p className="subtitle-a">
              A collection of prior works
            </p> */}
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
                    <Typography variant="h5" align="center">  <a href= {item.link}> {item.title}</a></Typography>
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
      <h3 className="title-a">
              Personal Project
            </h3>
      <div className="row">
     
          <div className="work-box">
          <a href={Image1} data-lightbox="gallery-mf">
              <div className="work-img">
                <img src={Image1} alt="" className="img-fluid"/>
              </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div >
                    <Typography variant="h5" align="center">  <a href="https://zenithhighlight.herokuapp.com/" > Zenith Highlight</a></Typography>
                    <div className="w-more">
                      <span className="w-ctegory">"A hobby website"</span> / <span className="w-date">"13 December. 2021"</span>
                    </div>
                  </div>
                  
                    <div className="w-like">
                    <span className="ion-ios-plus-outline" ></span>
                    </div>
                  
                </div>
              </div>
             
          </div>
      
      </div>
    </div>
  </section>
}