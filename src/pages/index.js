import React from 'react'
import { Link } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions'
// import Header from '../components/header'
import Footer from '../components/footer'
import Form from '../components/form'
let pathPrefix = `/`
export default () => (
<PageTransition>

<div>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, minimal-ui, initial-scale=1, minimum-scale=1, user-scalable = no" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <title>convy - conversion optimization</title>
        <meta name="description" content="convy helps digital companies increase their revenue." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@convy" />
        <meta name="twitter:creator" content="@convy" />
        <meta name="twitter:title" content="convy conversion rate optimization" />
        <meta name="twitter:description" content="convy helps digital companies increase their revenue" />
        <meta name="twitter:image" content="https://www.convy.io/images/logo-social.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta property="og:locale" content="en_EN" />
        <meta property="og:site_name" content="convy - conversion optimization" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="convy - conversion optimization" />
        <meta property="og:description" content="convy helps digital companies increase their revenue" />
        <meta property="og:site_name" content="convy" />
        <meta property="og:image" content="https://www.convy.io/images/logo-social.png" />
        <link rel="canonical" href="https://www.convy.io/static/about" />
        <meta httpEquiv="cleartype" content="on" />
        <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png" />
        <link rel="shortcut icon" href="https://www.convy.io/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00d3e1" />
        <meta name="theme-color" content="#00d3e1" />
        {/* android Hide chrome when app is added to the homescreen */} <meta name="mobile-web-app-capable" content="yes" /> 
        {/* iOS Hide chrome when app is added to the homescreen */} <meta name="apple-mobile-web-app-capable" content="yes" /> <meta name="apple-mobile-web-app-status-bar-style" content="translucent-black" /> <meta name="apple-mobile-web-app-title" content="convy" />
        <meta httpEquiv="cleartype" content="on" />
        <meta property="og:image" content=" " />
        <link rel="stylesheet" href="css/foundation.css" />
        <link rel="stylesheet" href="css/app.css" />
        {/* Start of Async Drift Code */}
        {/* End of Async Drift Code */}
        <h1 className="hidden-h1">convy</h1>
        <div className="convy_hero_container">
          <div className="convy_hero">
            <div className="overlay" />
            <img className src={require('../images/funnel_bg.svg')}/>
            {/* <video autoplay loop muted>
        <source src="../images/convy_hero_video1_revers.mp4" type="video/mp4">
            <source src="../images/convy_hero_video1_revers.webm" type="video/webm">
    </video> */}
          </div> {/* convy_hero */}
          <div className="row convy_hero_inner">
            <nav className="top-bar topbar-responsive">
              <div className="top-bar-title">
                <a href="http://www.convy.io" onclick="track('Click-logo-top','Click-logo-top')" rel="canonical">
                  <img className="convy_logo_app" src={require('../images/convy_logo.svg')} />
                </a>
              </div>
              <div id="topbar-responsive" className="topbar-responsive-links">
                <div className="top-bar-right">
                  <ul className="menu simple vertical medium-horizontal">
                    <li>
                      <a href="#convy_hdiw" onclick="track('Click-logo-top-hdiw','Click-logo-top-hdiw')" rel="canonical">How does it work?</a>
                    </li>
                    <li>
                      <a href="#convy_pricing" onclick="track('Click-logo-top-pricing','Click-logo-top-pricing')" rel="canonical">Pricing</a>
                    </li>
                    <li>
                      <a href="read/read.html" onclick="track('Click-logo-top-blog','Click-logo-top-blog')" rel="canonical">Resources</a>
                    </li>
                    <li>
                      <a href="#convy_contact" onclick="track('Click-logo-top-contact','Click-logo-top-contact')" rel="canonical">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="small-12 medium-12 columns align-self-middle block-text">
              <h2>
                Stop losing money</h2>
              <h3>We provide conversion optimization inputs</h3>
            </div>
            <div className="small-12 large-6 columns">
              <div className="login-box-form-section">
                <h7>Is your digital product fully optimized ?</h7>
                <h2 className="login-box-title">Get your FREE report now</h2>
                <input type="text" className="login-box-input" name="userName" id="userName" required data-error="NEW ERROR MESSAGE" />
                <label htmlFor="userName"><span>Website or App url</span></label>
                <div id="userName-info" className="info" />
                <input type="text" className="login-box-input" name="userEmail" id="userEmail" required data-error="NEW ERROR MESSAGE" />
                <label htmlFor="userEmail"><span>Email</span></label>
                <div id="userEmail-info" className="info" />
                <div style={{display: 'none'}}>
                  <div id="subject-info" className="info" /><br />
                  <input className="login-box-input" type="text" name="subject" id="subject" />
                  <label><span>Subject</span></label> 
                </div>
                <div style={{display: 'none'}}>
                  <div id="content-info" className="info" /><br />
                  <textarea className="login-box-input" name="content" id="content" defaultValue={""} />
                  <label><span>Content</span></label> 
                </div>
                <div>
                  <button name="submit" className="button btn-hero" onclick="sendContact();"><span>Get started</span></button>
                  <div id="mail-status" />
                </div>
              </div>
            </div>
          </div>
        </div> {/* convy_hero_inner */}
        {/* convy_hero_container */}
        <div className="convy_cta">
          <div className="row">
            <div className="small-12 large-7 columns">
              <img className="convy_sectors_logos" src={require('../images/logo_line.jpg')}/>
            </div>
          </div> {/* row */}
        </div> {/* convy_cta */}
        <div className="convy_wdwd padding5_top">
          <div className="row">
            <div className="small-11 medium-12 columns">
              <h2 className="clearfix ">Convy is a Conversion Rate Optimization consulting agency</h2>
              <h3 className="clearfix ">We help your company optimize their digital profits using proven marketing webdesign methodologies.</h3>
              <div className="row padding5_both">
                <div className="small-11 columns align-self-bottom show-for-medium">
                  <div className="row small-up-1 medium-up-3">
                    <div className=" columns align-center"><div className="card-section relative">
                        <svg className="icon-svg pattern_blue_bg_detail1">
                          <use xlinkHref="symbol-defs.svg#pattern_blue_bg_detail1" />
                        </svg><h2>Persuade</h2></div><div className="card-section"><p className="lead">
                          <bold>Persuasion Psychology</bold> is deeply intertwined with all UX elements. Learning it with us will give you an edge for your product.</p></div></div>
                    <div className="columns align-center"><div className="card-section relative">
                        <svg className="icon-svg pattern_blue_bg_detail1">
                          <use xlinkHref="symbol-defs.svg#pattern_blue_bg_detail1" />
                        </svg>
                        <h2>Save money</h2>
                      </div><div className="card-section"><p className="lead">We host and develop optimization and tests : <bold>save money</bold> on development and redesign costs.</p></div></div>
                    <div className=" columns align-center"><div className="card-section relative">
                        <svg className="icon-svg pattern_blue_bg_detail1">
                          <use xlinkHref="symbol-defs.svg#pattern_blue_bg_detail1" />
                        </svg><h2>Increase</h2></div><div className="card-section"><p className="lead">ROI, Transactions, Product Sales, Satisfaction, Retention, Conversion, Market Share &amp; Brand Equity.</p></div></div>
                  </div>
                </div>{/* row */}
              </div>{/* row */}
            </div> {/* column_Gal */}
          </div> {/* row */}
        </div> {/* convy_wdwd */}
        <div id="convy_hdiw" className="convy_hdiw padding10_both">
          <svg className="icon-svg bg_triangle2">
            <use xlinkHref="symbol-defs.svg#bg_triangle" />
          </svg> 
          <div className="row_container">
            <div className="row zindex_illustr">
              <div className="small-11 medium-12 columns">
                <h2 className="padding5_bottom">A Proven Methodolodgy</h2>
                <div className="row">
                  <div className="medium-1 columns" />
                  <div className="small-10 medium-3 columns column_border_right">
                    <h5 className>Observation</h5>
                    <p className="lead">We take a picture of your current KPI Definition (Data collection) and Conversion Funnel Definition on targeted part of your App or Site in order to identify funnel leaks where conversion can be improved.</p>
                    <div className="empty_block" />
                  </div> {/* column-text */}
                  <div className="medium-6 columns" />
                </div> {/* row */}
                <div className="row padding10_top">
                  <div className="phone_container">
                    <div className="isometric">
                      <div className="mobile_phone">
                        <svg viewBox="0 0 642 1186" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          {/* Generator: Sketch 48.2 (47327) - http://www.bohemiancoding.com/sketch */}
                          <defs>
                            <path d="M3.7,0 L23.3,0 C25,0 26.4,1.4 26.4,3.1 L26.4,10.1 C26.4,11.8 25,13.2 23.3,13.2 L3.7,13.2 C2,13.2 0.6,11.8 0.6,10.1 L0.6,3.1 C0.5,1.4 1.9,0 3.7,0 Z" id="path-1" />
                            <rect id="path-3" x={0} y="0.7" width="440.4" height="51.7" />
                            <path d="M0.6,0.3 L0.6,5 C1.5,4.6 2.2,3.7 2.2,2.7 C2.2,1.7 1.5,0.7 0.6,0.3" id="path-5" />
                            <rect id="path-7" x={0} y="0.7" width="440.4" height="51.7" />
                            <path d="M2.5,0.4 L20.5,0.4 C21.4,0.4 22.1,1.1 22.1,2 L22.1,7.5 C22.1,8.4 21.4,9.1 20.5,9.1 L2.5,9.1 C1.6,9.1 0.9,8.4 0.9,7.5 L0.9,2 C0.9,1.1 1.6,0.4 2.5,0.4 Z" id="path-9" />
                            <rect id="path-11" x={0} y="0.7" width="440.4" height="51.7" />
                            <path d="M12.3,11.4 C12.4,11.3 12.4,11.2 12.4,11.1 C12.4,11 12.4,10.9 12.3,10.8 C10.8,9.5 8.6,9.5 7.1,10.8 C7,10.9 7,11 7,11.1 C7,11.2 7,11.3 7.1,11.4 L9.4,13.8 C9.5,13.9 9.6,13.9 9.7,13.9 C9.8,13.9 9.9,13.9 10,13.8 L12.3,11.4 Z M9.7,8.2 C11.1,8.2 12.5,8.7 13.6,9.7 C13.7,9.8 14,9.8 14.1,9.7 L15.5,8.3 C15.6,8.2 15.6,8.1 15.6,8 C15.6,7.9 15.6,7.8 15.5,7.7 C12.3,4.7 7.3,4.7 4,7.7 C3.9,7.8 3.9,7.9 3.9,8 C3.9,8.1 3.9,8.2 4,8.3 L5.4,9.7 C5.5,9.8 5.8,9.8 5.9,9.7 C6.9,8.7 8.2,8.2 9.7,8.2 Z M9.7,3.7 C12.3,3.7 14.8,4.7 16.7,6.5 C16.8,6.6 17.1,6.6 17.2,6.5 L18.6,5.1 C18.7,5 18.7,4.9 18.7,4.8 C18.7,4.7 18.7,4.6 18.6,4.5 C13.7,-0.2 5.8,-0.2 0.9,4.5 C0.8,4.6 0.8,4.7 0.8,4.8 C0.8,4.9 0.8,5 0.9,5.1 L2.3,6.5 C2.4,6.6 2.7,6.6 2.8,6.5 C4.6,4.7 7.1,3.7 9.7,3.7 Z" id="path-13" />
                            <rect id="path-15" x={0} y="0.7" width="440.4" height="51.7" />
                            <path d="M18.4,0.4 L19.6,0.4 C20.2,0.4 20.8,0.9 20.8,1.6 L20.8,11.8 C20.8,12.4 20.3,13 19.6,13 L18.4,13 C17.8,13 17.2,12.5 17.2,11.8 L17.2,1.6 C17.3,1 17.8,0.4 18.4,0.4 Z M13,3.2 L14.2,3.2 C14.8,3.2 15.4,3.7 15.4,4.4 L15.4,11.8 C15.4,12.4 14.9,13 14.2,13 L13,13 C12.4,13 11.8,12.5 11.8,11.8 L11.8,4.4 C11.8,3.7 12.3,3.2 13,3.2 Z M7.5,5.9 L8.7,5.9 C9.3,5.9 9.9,6.4 9.9,7.1 L9.9,11.8 C9.9,12.4 9.4,13 8.7,13 L7.5,13 C6.9,13 6.3,12.5 6.3,11.8 L6.3,7.1 C6.3,6.4 6.8,5.9 7.5,5.9 Z M2,8.3 L3.2,8.3 C3.8,8.3 4.4,8.8 4.4,9.5 L4.4,11.8 C4.4,12.4 3.9,13 3.2,13 L2,13 C1.4,13 0.8,12.5 0.8,11.8 L0.8,9.5 C0.8,8.8 1.4,8.3 2,8.3 Z" id="path-17" />
                            <rect id="path-19" x={0} y="0.7" width="440.4" height="51.7" />
                            <path d="M1.7,0.7 L19.7,0.7 C20.6,0.7 21.3,1.4 21.3,2.3 L21.3,7.8 C21.3,8.7 20.6,9.4 19.7,9.4 L1.7,9.4 C0.8,9.4 0.1,8.7 0.1,7.8 L0.1,2.3 C0.1,1.4 0.8,0.7 1.7,0.7 Z" id="path-21" />
                            <rect id="path-23" x="0.2" y={0} width="440.4" height="51.7" />
                            <path d="M11.5,10.8 C11.6,10.7 11.6,10.6 11.6,10.5 C11.6,10.4 11.6,10.3 11.5,10.2 C10,8.9 7.8,8.9 6.3,10.2 C6.2,10.3 6.2,10.4 6.2,10.5 C6.2,10.6 6.2,10.7 6.3,10.8 L8.6,13.2 C8.7,13.3 8.8,13.3 8.9,13.3 C9,13.3 9.1,13.3 9.2,13.2 L11.5,10.8 Z M8.9,7.5 C10.3,7.5 11.7,8 12.8,9 C12.9,9.1 13.2,9.1 13.3,9 L14.7,7.6 C14.8,7.5 14.8,7.4 14.8,7.3 C14.8,7.2 14.8,7.1 14.7,7 C11.5,4 6.5,4 3.2,7 C3.1,7.1 3.1,7.2 3.1,7.3 C3.1,7.4 3.1,7.5 3.2,7.6 L4.6,9 C4.7,9.1 5,9.1 5.1,9 C6.1,8 7.4,7.5 8.9,7.5 Z M8.9,3 C11.5,3 14,4 15.9,5.8 C16,5.9 16.3,5.9 16.4,5.8 L17.8,4.4 C17.9,4.3 17.9,4.2 17.9,4.1 C17.9,4 17.9,3.9 17.8,3.8 C12.9,-0.9 5,-0.9 0.1,3.8 C-1.13686838e-13,3.9 -1.13686838e-13,4 -1.13686838e-13,4.1 C-1.13686838e-13,4.2 -1.13686838e-13,4.3 0.1,4.4 L1.5,5.8 C1.6,5.9 1.9,5.9 2,5.8 C3.8,4 6.3,3 8.9,3 Z" id="path-25" />
                            <rect id="path-27" x="0.2" y={0} width="440.4" height="51.7" />
                            <path d="M17.7,0.7 L18.9,0.7 C19.5,0.7 20.1,1.2 20.1,1.9 L20.1,12.1 C20.1,12.7 19.6,13.3 18.9,13.3 L17.7,13.3 C17.1,13.3 16.5,12.8 16.5,12.1 L16.5,1.9 C16.5,1.3 17,0.7 17.7,0.7 Z M12.2,3.5 L13.4,3.5 C14,3.5 14.6,4 14.6,4.7 L14.6,12.1 C14.6,12.7 14.1,13.3 13.4,13.3 L12.2,13.3 C11.6,13.3 11,12.8 11,12.1 L11,4.7 C11,4 11.5,3.5 12.2,3.5 Z M6.7,6.2 L7.9,6.2 C8.5,6.2 9.1,6.7 9.1,7.4 L9.1,12.1 C9.1,12.7 8.6,13.3 7.9,13.3 L6.7,13.3 C6.1,13.3 5.5,12.8 5.5,12.1 L5.5,7.4 C5.5,6.8 6,6.2 6.7,6.2 Z M1.2,8.6 L2.4,8.6 C3,8.6 3.6,9.1 3.6,9.8 L3.6,12.1 C3.6,12.7 3.1,13.3 2.4,13.3 L1.2,13.3 C0.6,13.3 0,12.8 0,12.1 L0,9.8 C0,9.1 0.6,8.6 1.2,8.6 Z" id="path-29" />
                            <rect id="path-31" x="0.2" y={0} width="440.4" height="51.7" />
                            <linearGradient x1="49.9941506%" y1="100.01074%" x2="49.9941506%" y2="-0.0125859278%" id="linearGradient-33">
                              <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                              <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                              <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                            </linearGradient>
                            <linearGradient x1="49.9718018%" y1="99.9676664%" x2="49.9718018%" y2="0.0134957826%" id="linearGradient-34">
                              <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                              <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                              <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                            </linearGradient>
                            <linearGradient x1="49.9313596%" y1="99.8902913%" x2="49.9313596%" y2="-0.132686084%" id="linearGradient-35">
                              <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                              <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                              <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                            </linearGradient>
                            <linearGradient x1="49.9552441%" y1="99.9685506%" x2="49.9552441%" y2="-0.0298997265%" id="linearGradient-36">
                              <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                              <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                              <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                            </linearGradient>
                            <linearGradient x1="49.9300439%" y1="99.8902913%" x2="49.9300439%" y2="-0.132686084%" id="linearGradient-37">
                              <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                              <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                              <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                            </linearGradient>
                            <linearGradient x1="49.9708108%" y1="99.9673913%" x2="49.9708108%" y2="-0.0141776938%" id="linearGradient-38">
                              <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                              <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                              <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                            </linearGradient>
                            <linearGradient x1="49.9289474%" y1="99.8902913%" x2="49.9289474%" y2="-0.132686084%" id="linearGradient-39">
                              <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                              <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                              <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                            </linearGradient>
                            <linearGradient x1="49.9145933%" y1="100.077751%" x2="49.9145933%" y2="0.101913876%" id="linearGradient-40">
                              <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                              <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                              <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                            </linearGradient>
                            <linearGradient x1="49.9230769%" y1="100.02%" x2="49.9230769%" y2="0.0159459459%" id="linearGradient-41">
                              <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                              <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                              <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                            </linearGradient>
                            <linearGradient x1="50.0080309%" y1="99.9969498%" x2="50.0080309%" y2="-0.00687258687%" id="linearGradient-42">
                              <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                              <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                              <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                            </linearGradient>
                          </defs>
                          <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g id="hdiw_iphonex1">
                              <rect id="Rectangle-path" x="0.1" y="48.1" width="640.4" height="1137.3" />
                              <g id="Calque_2" transform="translate(0.000000, 44.000000)" fill="#DBDBDB" fillRule="nonzero">
                                <rect id="Rectangle-path" x={0} y="0.4" width="641.7" height="1135.4" />
                              </g>
                              <rect id="Rectangle-path" fill="#25DDDF" fillRule="nonzero" x="0.9" y="43.3" width="640.1" height="242.3" />
                              <g id="Clipped" transform="translate(377.000000, 55.000000)">
                                <mask id="mask-2" fill="white">
                                  <use xlinkHref="#path-1" />
                                </mask>
                                <g id="SVGID_1_" />
                                <g mask="url(#mask-2)">
                                  <g transform="translate(-394.000000, -21.000000)">
                                    <mask id="mask-4" fill="white">
                                      <use xlinkHref="#path-3" />
                                    </mask>
                                    <g id="SVGID_3_" stroke="none" fill="none" />
                                    <path d="M397.7,21 L417.3,21 C419,21 420.4,22.4 420.4,24.1 L420.4,31.1 C420.4,32.8 419,34.2 417.3,34.2 L397.7,34.2 C396,34.2 394.6,32.8 394.6,31.1 L394.6,24.1 C394.5,22.4 395.9,21 397.7,21 Z" id="Shape" stroke="#FFFFFF" strokeWidth={2} fill="none" opacity="0.35" mask="url(#mask-4)" />
                                  </g>
                                </g>
                              </g>
                              <g id="Clipped" transform="translate(404.000000, 59.000000)">
                                <mask id="mask-6" fill="white">
                                  <use xlinkHref="#path-5" />
                                </mask>
                                <g id="SVGID_5_" />
                                <g mask="url(#mask-6)">
                                  <g transform="translate(-421.000000, -25.000000)">
                                    <mask id="mask-8" fill="white">
                                      <use xlinkHref="#path-7" />
                                    </mask>
                                    <g id="SVGID_7_" stroke="none" fill="none" />
                                    <rect id="Rectangle-path" stroke="none" fill="#FFFFFF" fillRule="nonzero" opacity="0.4" mask="url(#mask-8)" x="415.7" y="19.5" width="13.3" height="16.4" />
                                  </g>
                                </g>
                              </g>
                              <g id="Clipped" transform="translate(379.000000, 57.000000)">
                                <mask id="mask-10" fill="white">
                                  <use xlinkHref="#path-9" />
                                </mask>
                                <g id="SVGID_9_" />
                                <g mask="url(#mask-10)">
                                  <g transform="translate(-396.000000, -23.000000)">
                                    <mask id="mask-12" fill="white">
                                      <use xlinkHref="#path-11" />
                                    </mask>
                                    <g id="SVGID_11_" stroke="none" fill="none" />
                                    <rect id="Rectangle-path" stroke="none" fill="#FFFFFF" fillRule="nonzero" mask="url(#mask-12)" x={391} y="17.5" width="32.9" height="20.4" />
                                  </g>
                                </g>
                              </g>
                              <g id="Clipped" transform="translate(353.000000, 54.000000)">
                                <mask id="mask-14" fill="white">
                                  <use xlinkHref="#path-13" />
                                </mask>
                                <g id="SVGID_13_" />
                                <g mask="url(#mask-14)">
                                  <g transform="translate(-370.000000, -20.000000)">
                                    <mask id="mask-16" fill="white">
                                      <use xlinkHref="#path-15" />
                                    </mask>
                                    <g id="SVGID_15_" stroke="none" fill="none" />
                                    <rect id="Rectangle-path" stroke="none" fill="#FFFFFF" fillRule="nonzero" mask="url(#mask-16)" x="364.8" y="15.2" width="29.7" height="24.6" />
                                  </g>
                                </g>
                              </g>
                              <g id="Clipped" transform="translate(327.000000, 55.000000)">
                                <mask id="mask-18" fill="white">
                                  <use xlinkHref="#path-17" />
                                </mask>
                                <g id="SVGID_17_" />
                                <g mask="url(#mask-18)">
                                  <g transform="translate(-344.000000, -21.000000)">
                                    <mask id="mask-20" fill="white">
                                      <use xlinkHref="#path-19" />
                                    </mask>
                                    <g id="SVGID_19_" stroke="none" fill="none" />
                                    <rect id="Rectangle-path" stroke="none" fill="#FFFFFF" fillRule="nonzero" mask="url(#mask-20)" x={339} y="15.6" width="31.7" height="24.3" />
                                  </g>
                                </g>
                              </g>
                              <g id="Clipped" transform="translate(573.000000, 68.000000)">
                                <mask id="mask-22" fill="white">
                                  <use xlinkHref="#path-21" />
                                </mask>
                                <g id="SVGID_21_" />
                                <g mask="url(#mask-22)">
                                  <g transform="translate(-397.000000, -22.000000)">
                                    <mask id="mask-24" fill="white">
                                      <use xlinkHref="#path-23" />
                                    </mask>
                                    <g id="SVGID_23_" stroke="none" fill="none" />
                                    <rect id="Rectangle-path" stroke="none" fill="#FFFFFF" fillRule="nonzero" mask="url(#mask-24)" x="391.2" y="16.8" width="32.9" height="20.4" />
                                  </g>
                                </g>
                              </g>
                              <g id="Clipped" transform="translate(547.000000, 66.000000)">
                                <mask id="mask-26" fill="white">
                                  <use xlinkHref="#path-25" />
                                </mask>
                                <g id="SVGID_25_" />
                                <g mask="url(#mask-26)">
                                  <g transform="translate(-371.000000, -20.000000)">
                                    <mask id="mask-28" fill="white">
                                      <use xlinkHref="#path-27" />
                                    </mask>
                                    <g id="SVGID_27_" stroke="none" fill="none" />
                                    <rect id="Rectangle-path" stroke="none" fill="#FFFFFF" fillRule="nonzero" mask="url(#mask-28)" x={365} y="14.5" width="29.7" height="24.6" />
                                  </g>
                                </g>
                              </g>
                              <g id="Clipped" transform="translate(521.000000, 66.000000)">
                                <mask id="mask-30" fill="white">
                                  <use xlinkHref="#path-29" />
                                </mask>
                                <g id="SVGID_29_" />
                                <g mask="url(#mask-30)">
                                  <g transform="translate(-345.000000, -20.000000)">
                                    <mask id="mask-32" fill="white">
                                      <use xlinkHref="#path-31" />
                                    </mask>
                                    <g id="SVGID_31_" stroke="none" fill="none" />
                                    <rect id="Rectangle-path" stroke="none" fill="#FFFFFF" fillRule="nonzero" mask="url(#mask-32)" x="339.2" y="14.9" width="31.7" height="24.3" />
                                  </g>
                                </g>
                              </g>
                              <path d="M465.6,101.1 L177,101.1 C154.7,101.1 136.4,82.8 136.4,60.5 L136.4,41.5 C136.4,19.2 154.7,0.9 177,0.9 L465.6,0.9 C487.9,0.9 506.2,19.2 506.2,41.5 L506.2,60.6 C506.2,82.9 487.9,101.1 465.6,101.1 Z" id="Shape" fill="#FFFFFF" fillRule="nonzero" />
                              <g id="Group" transform="translate(63.000000, 65.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <path d="M9.7,7.7 C9.7,12.3 8,14.9 5,14.9 C2.3,14.9 0.5,12.4 0.5,7.9 C0.5,3.3 2.5,0.8 5.2,0.8 C8.1,0.8 9.7,3.3 9.7,7.7 Z M2.3,7.9 C2.3,11.4 3.4,13.5 5.1,13.5 C7,13.5 7.9,11.3 7.9,7.8 C7.9,4.4 7,2.2 5.1,2.2 C3.5,2.2 2.3,4.2 2.3,7.9 Z" id="Shape" />
                                <path d="M12.5,13.3 C12.9,13.3 13.4,13.3 14,13.2 C15.1,13.1 16.1,12.6 16.9,11.9 C17.8,11.1 18.5,9.9 18.7,8.3 L18.6,8.3 C17.8,9.2 16.8,9.8 15.4,9.8 C12.9,9.8 11.4,8 11.4,5.6 C11.4,3 13.3,0.7 16.1,0.7 C18.9,0.7 20.6,3 20.6,6.5 C20.6,9.5 19.6,11.6 18.2,12.9 C17.2,13.9 15.7,14.6 14.2,14.7 C13.5,14.8 12.9,14.8 12.5,14.8 L12.5,13.3 Z M13.1,5.5 C13.1,7.2 14.1,8.4 15.7,8.4 C16.9,8.4 17.9,7.8 18.4,7 C18.5,6.8 18.6,6.6 18.6,6.3 C18.6,4 17.7,2.2 15.8,2.2 C14.3,2.2 13.1,3.6 13.1,5.5 Z" id="Shape" />
                                <path d="M22.3,6.2 C22.3,5.4 22.8,4.9 23.6,4.9 C24.4,4.9 24.8,5.4 24.8,6.2 C24.8,6.9 24.3,7.5 23.5,7.5 C22.8,7.5 22.3,6.9 22.3,6.2 Z M22.3,13.6 C22.3,12.8 22.8,12.3 23.6,12.3 C24.4,12.3 24.8,12.8 24.8,13.6 C24.8,14.3 24.3,14.9 23.5,14.9 C22.8,14.9 22.3,14.3 22.3,13.6 Z" id="Shape" />
                                <path d="M32.2,14.6 L32.2,10.9 L25.9,10.9 L25.9,9.7 L32,1 L34,1 L34,9.5 L35.9,9.5 L35.9,10.9 L34,10.9 L34,14.6 L32.2,14.6 Z M32.2,9.5 L32.2,4.9 C32.2,4.2 32.2,3.5 32.3,2.8 L32.2,2.8 C31.8,3.6 31.4,4.2 31.1,4.8 L27.8,9.4 L32.2,9.4 L32.2,9.5 Z" id="Shape" />
                                <polygon id="Shape" points="41.3 2.7 41.3 2.7 38.9 4 38.5 2.6 41.5 1 43.1 1 43.1 14.6 41.3 14.6 41.3 2.7" />
                              </g>
                              <g id="Group" transform="translate(124.000000, 400.000000)">
                                <polygon id="Shape" fill="#25DDDF" fillRule="nonzero" points="124.7 235 124.7 188.1 102.7 188.1 102.7 235 95 235 113.7 257.4 132.1 235" />
                                <g transform="translate(33.000000, 156.000000)" fill="#FFFFFF" fillRule="nonzero" id="Shape" stroke="#FFFFFF">
                                  <path d="M65.9,0.3 L1.6,0.3 C1,0.3 0.6,0.7 0.6,1.3 C0.6,1.9 1,2.3 1.6,2.3 L65.3,2.3 C65.4,1.7 65.5,1 65.9,0.3 Z" />
                                  <path d="M189,0.3 L95.5,0.3 C95.7,1 95.8,1.7 95.6,2.4 L189,2.4 C189.6,2.4 190,2 190,1.4 C190,0.7 189.6,0.3 189,0.3 Z" />
                                </g>
                                <path d="M206.4,176.5 L17.7,176.5 C17.1,176.5 16.7,176.1 16.7,175.5 C16.7,174.9 17.1,174.5 17.7,174.5 L206.3,174.5 C206.9,174.5 207.3,174.9 207.3,175.5 C207.3,176.1 207,176.5 206.4,176.5 Z" id="Shape" stroke="#FFFFFF" fill="#FFFFFF" fillRule="nonzero" />
                                <path d="M190.4,195.8 L1.2,195.8 C0.6,195.8 0.2,195.4 0.2,194.8 C0.2,194.2 0.6,193.8 1.2,193.8 L190.4,193.8 C191,193.8 191.4,194.2 191.4,194.8 C191.4,195.2 191,195.8 190.4,195.8 Z" id="Shape" stroke="#FFFFFF" fill="#FFFFFF" fillRule="nonzero" />
                                <path d="M13.4,206.4 C13.2,206.4 12.8,206.4 12.8,206.2 C12.4,205.8 12.4,205.2 12.8,204.7 L72.6,144.9 C73,144.5 73.6,144.5 74.1,144.9 C74.6,145.3 74.5,145.9 74.1,146.4 L14.3,206.2 C14.1,206.4 13.9,206.4 13.4,206.4 Z" id="Shape" stroke="#FFFFFF" fill="#FFFFFF" fillRule="nonzero" />
                                <path d="M98.4,153.7 L47.5,204.6 C47.1,205 47.1,205.6 47.5,206.1 C47.5,206.3 47.9,206.3 48.1,206.3 C48.3,206.3 48.5,206.3 48.9,206.1 L99.4,155.6 C98.9,155.1 98.6,154.5 98.4,153.7 Z" id="Shape" stroke="#FFFFFF" fill="#FFFFFF" fillRule="nonzero" />
                                <g transform="translate(81.000000, 144.000000)" fill="#FFFFFF" fillRule="nonzero" id="Shape" stroke="#FFFFFF">
                                  <path d="M41.2,20.6 L1.1,60.7 C0.7,61.1 0.7,61.7 1.1,62.2 C1.1,62.4 1.5,62.4 1.7,62.4 C1.9,62.4 2.1,62.4 2.3,62.2 L43,21.6 C42.2,21.5 41.6,21.1 41.2,20.6 Z" />
                                  <path d="M62.3,1 C61.9,0.6 61.3,0.6 60.8,1 L46.7,15.1 C47.2,15.6 47.5,16.3 47.6,17 L62.3,2.4 C62.7,2 62.7,1.4 62.3,1 Z" />
                                </g>
                                <path d="M117.1,206.4 C116.9,206.4 116.5,206.4 116.5,206.2 C116.1,205.8 116.1,205.2 116.5,204.7 L176.3,144.9 C176.7,144.5 177.3,144.5 177.8,144.9 C178.3,145.3 178.2,145.9 177.8,146.4 L118,206.1 C117.8,206.4 117.3,206.4 117.1,206.4 Z" id="Shape" stroke="#FFFFFF" fill="#FFFFFF" fillRule="nonzero" />
                                <path d="M151.8,206.4 C151.6,206.4 151.2,206.4 151.2,206.2 C150.8,205.8 150.8,205.2 151.2,204.7 L211,144.9 C211.4,144.5 212,144.5 212.5,144.9 C212.9,145.3 212.9,145.9 212.5,146.4 L152.7,206.2 C152.2,206.4 152,206.4 151.8,206.4 Z" id="Shape" stroke="#FFFFFF" fill="#FFFFFF" fillRule="nonzero" />
                                <g transform="translate(27.000000, 0.000000)" fill="#FECBA7" fillRule="nonzero">
                                  <rect id="Rectangle-path" x="1.3" y="1.2" width="170.6" height="16.2" />
                                  <path d="M171.9,18.7 L1.3,18.7 C0.7,18.7 0.3,18.3 0.3,17.7 L0.3,1.5 C0.3,0.9 0.7,0.5 1.3,0.5 L171.9,0.5 C172.5,0.5 172.9,0.9 172.9,1.5 L172.9,17.7 C172.9,18.1 172.3,18.7 171.9,18.7 Z M2.4,16.6 L170.9,16.6 L170.9,2.5 L2.4,2.5 L2.4,16.6 Z" id="Shape" />
                                </g>
                                <path d="M127.1,166.3 L99.7,166.3 C99.1,166.3 98.7,165.9 98.7,165.3 L98.7,115.9 C36,73.8 27.3,19.8 27.3,19.2 C27.3,19 27.3,18.6 27.5,18.4 C27.7,18.2 27.9,18 28.3,18 L198.9,18 C199.1,18 199.5,18.2 199.7,18.4 C199.9,18.6 199.9,19 199.9,19.2 C199.9,19.8 191.2,73.8 128.1,116.1 L128.1,165.3 C128.1,165.9 127.7,166.3 127.1,166.3 Z" id="Shape" stroke="#FFFFFF" strokeWidth={4} />
                                <path d="M140.4,93.3 C140.2,93.3 139.8,93.1 139.6,92.9 C139.2,92.5 139.2,91.9 139.6,91.4 C170.3,62.6 178.8,37 179,36.8 C179.2,36.2 179.8,36 180.3,36.2 C180.9,36.4 181.1,37 180.9,37.5 C180.9,37.7 172,63.6 141.1,92.9 C141,93.1 140.6,93.3 140.4,93.3 Z" id="Shape" stroke="#FFFFFF" fill="#FFFFFF" fillRule="nonzero" />
                                <g id="small-balls" transform="translate(62.000000, 10.000000)" fill="#FFFFFF">
                                  <ellipse id="small-balls1" cx="11.5" cy={37} rx="11.5" ry={11} />
                                  <ellipse id="small-balls2" cx="50.5" cy={82} rx="11.5" ry={11} />
                                  <ellipse id="small-balls3" cx="19.5" cy={71} rx="11.5" ry={11} />
                                  <ellipse id="small-balls4" cx="70.5" cy={44} rx="11.5" ry={11} />
                                  <ellipse id="small-balls5" cx="54.5" cy={11} rx="11.5" ry={11} />
                                </g>
                              </g>
                              <path d="M504.2,328.3 L333.7,383.9 L359.8,464.2 L384.1,456.3 C384.2,459.8 384,470.9 378.4,473.7 C378.4,473.7 390.3,474.1 397.7,451.9 L530.3,408.6 L504.2,328.3 Z" id="Shape" fill="url(#linearGradient-33)" fillRule="nonzero" />
                              <path d="M500.5,332.3 L339,385 L363.7,461 L386.7,453.5 C386.8,456.9 386.6,467.4 381.3,470 C381.3,470 392.6,470.4 399.5,449.3 L525.1,408.3 L500.5,332.3 Z" id="Shape" fill="#25DDDF" fillRule="nonzero" />
                              <path d="M355.9,391.7 L372,441.1" id="Shape" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0,4.07" />
                              <path d="M373.6,447.8 L507.5,404.1" id="Shape" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M376.6,431.1 L489.6,394.2" id="Shape" stroke="#FFFFFF" opacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M372,416.8 L485,379.9" id="Shape" stroke="#FFFFFF" opacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M367.3,402.5 L480.3,365.7" id="Shape" stroke="#FFFFFF" opacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M362.7,388.3 L475.7,351.4" id="Shape" stroke="#FFFFFF" opacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M399.7,425 C399.7,424.8 399.6,424.6 399.7,424.3 C399.8,422.4 401.2,420.9 403.1,420.6 L403.6,420.5 C406.8,419.7 410,418.5 412.2,416.1 C415.6,412.2 415.2,406.2 414.6,401.4 C414.4,399.9 414.6,398.3 415.2,396.9 C417.3,392.3 421.9,393.5 425.8,393.3 C432.5,392.8 438.1,387.9 439.4,381.3 C439.9,378.5 439.6,375.7 440,372.9 C440.6,369.1 442.4,365.6 445.3,363 C448.2,360.4 452.1,358.9 455.7,357.6 C458.6,356.6 461.7,356.1 464.8,356.1 L465,356.1 C470.3,356.3 475.1,359.7 476.9,364.7 C477.7,366.8 478.4,369 479.1,371.2 C483.1,383.6 486.8,395 491.5,409.3 C485.8,411.1 472.4,415.5 470.6,416.1 L450.7,422.6 C437.4,426.9 424.7,431.5 409.9,435.9 C406.8,436.8 409.9,435.9 403.3,438.1 C401.9,434.6 401.8,434.4 399.7,425 Z" id="Shape" fill="#FFFFFF" fillRule="nonzero" opacity="0.2" />
                              <g id="small-potential-fix-13" transform="translate(111.000000, 1039.000000)" fillRule="nonzero">
                                <rect id="Rectangle-path" fill="url(#linearGradient-34)" x="0.2" y="0.1" width={111} height="106.7" />
                                <rect id="Rectangle-path" fill="#F5F5F5" x="1.9" y="2.7" width="107.5" height="101.9" />
                                <g id="Group" opacity="0.5" transform="translate(32.000000, 15.000000)" fill="url(#linearGradient-35)">
                                  <path d="M33.2,5.6 L33.2,0.4 L14.2,0.4 L14.2,5.6 L0.9,5.6 L0.9,31.3 L46.5,31.3 L46.5,5.6 L33.2,5.6 Z M16.5,2.3 L30.8,2.3 L30.8,5.6 L16.5,5.6 L16.5,2.3 Z" id="Shape" />
                                </g>
                                <rect id="Rectangle-path" fill="#25DDDF" opacity="0.6" x="34.8" y="21.4" width="41.8" height="23.5" />
                                <polygon id="Shape" fill="#25DDDF" opacity="0.6" points="47 16.7 47 22.8 49.1 22.8 49.1 18.4 62.2 18.4 62.2 22.8 64.4 22.8 64.4 16.7" />
                                <g id="Group" opacity="0.6" transform="translate(37.000000, 63.000000)" fill="#25DDDF">
                                  <rect id="Rectangle-path" x="0.2" y="0.2" width="38.7" height="5.2" />
                                </g>
                                <rect id="Rectangle-path" fill="#BDBDBD" x="22.6" y="72.8" width="66.2" height="5.2" />
                              </g>
                              <g id="small-potential-fix-23" transform="translate(250.000000, 1036.000000)" fillRule="nonzero">
                                <rect id="Rectangle-path" fill="url(#linearGradient-36)" x="0.5" y="0.1" width="110.6" height="109.7" />
                                <rect id="Rectangle-path" fill="#F5F5F5" x="2.2" y="5.7" width="107.5" height="101.9" />
                                <g id="Group" opacity="0.5" transform="translate(33.000000, 18.000000)" fill="url(#linearGradient-37)">
                                  <path d="M32.5,5.6 L32.5,0.4 L13.5,0.4 L13.5,5.6 L0.2,5.6 L0.2,31.3 L45.8,31.3 L45.8,5.6 L32.5,5.6 Z M15.8,2.3 L30.1,2.3 L30.1,5.6 L15.8,5.6 L15.8,2.3 Z" id="Shape" />
                                </g>
                                <rect id="Rectangle-path" fill="#25DDDF" opacity="0.6" x="35.1" y="24.4" width="41.8" height="23.5" />
                                <polygon id="Shape" fill="#25DDDF" points="47.3 19.7 47.3 25.8 49.4 25.8 49.4 21.4 62.5 21.4 62.5 25.8 64.7 25.8 64.7 19.7" />
                                <g id="Group" opacity="0.6" transform="translate(37.000000, 66.000000)" fill="#25DDDF">
                                  <rect id="Rectangle-path" x="0.5" y="0.2" width="38.7" height="5.2" />
                                </g>
                                <rect id="Rectangle-path" fill="#BDBDBD" x="22.9" y="75.8" width="66.2" height="5.2" />
                              </g>
                              <g id="small-potential-fix-33" transform="translate(389.000000, 1040.000000)" fillRule="nonzero">
                                <rect id="Rectangle-path" fill="url(#linearGradient-38)" x="0.8" y={0} width={111} height="105.8" />
                                <rect id="Rectangle-path" fill="#F5F5F5" x="2.5" y="1.7" width="107.5" height="101.9" />
                                <g id="Group" opacity="0.5" transform="translate(33.000000, 14.000000)" fill="url(#linearGradient-39)">
                                  <path d="M32.8,5.6 L32.8,0.4 L13.8,0.4 L13.8,5.6 L0.5,5.6 L0.5,31.3 L46.1,31.3 L46.1,5.6 L32.8,5.6 Z M16.1,2.3 L30.4,2.3 L30.4,5.6 L16.1,5.6 L16.1,2.3 Z" id="Shape" />
                                </g>
                                <rect id="Rectangle-path" fill="#25DDDF" opacity="0.6" x="35.4" y="20.4" width="41.8" height="23.5" />
                                <polygon id="Shape" fill="#25DDDF" opacity="0.6" points="47.6 15.7 47.6 21.8 49.7 21.8 49.7 17.4 62.8 17.4 62.8 21.8 65 21.8 65 15.7" />
                                <g id="Group" opacity="0.6" transform="translate(37.000000, 62.000000)" fill="#25DDDF">
                                  <rect id="Rectangle-path" x="0.8" y="0.2" width="38.7" height="5.2" />
                                </g>
                                <rect id="Rectangle-path" fill="#BDBDBD" x="23.2" y="71.8" width="66.2" height="5.2" />
                              </g>
                              <g id="potential-fixes-paper" transform="translate(185.000000, 811.000000)" fillRule="nonzero">
                                <rect id="Rectangle-path" fill="#FFFFFF" x="24.3" y="5.1" width={209} height="249.1" />
                                <rect id="Rectangle-path" fill="#25DDDF" x="103.7" y="45.7" width={50} height="28.1" />
                                <rect id="Rectangle-path" fill="#E0E0E0" x="55.5" y="114.3" width={147} height="6.3" />
                                <rect id="Rectangle-path" fill="#E0E0E0" x="55.5" y="155.5" width={147} height="6.3" />
                                <rect id="Rectangle-path" fill="#E0E0E0" x="55.5" y="166.5" width={147} height="6.3" />
                                <rect id="Rectangle-path" fill="#E0E0E0" x="55.5" y="144.6" width={62} height="6.3" />
                                <rect id="Rectangle-path" fill="#3AD29F" opacity="0.6" x="156.1" y="144.6" width="46.4" height="6.3" />
                                <rect id="Rectangle-path" fill="#25DDDF" x="107.1" y={192} width="46.4" height="6.3" />
                                <polygon id="Shape" fill="#25DDDF" points="118.3 40 118.3 47.3 120.9 47.3 120.9 42.1 136.6 42.1 136.6 47.3 139.2 47.3 139.2 40" />
                                <g id="Group" opacity="0.5" transform="translate(0.000000, 43.000000)" fill="url(#linearGradient-40)">
                                  <circle id="Oval" cx="21.1" cy="21.4" r="20.9" />
                                </g>
                                <g id="Group" opacity="0.5" transform="translate(101.000000, 38.000000)" fill="url(#linearGradient-41)">
                                  <path d="M39.1,6.7 L39.1,0.4 L16.4,0.4 L16.4,6.7 L0.5,6.7 L0.5,37.4 L55.1,37.4 L55.1,6.7 L39.1,6.7 Z M19.2,2.7 L36.3,2.7 L36.3,6.7 L19.2,6.7 L19.2,2.7 Z" id="Shape" />
                                </g>
                                <g id="Group" opacity="0.5" transform="translate(17.000000, 0.000000)" fill="url(#linearGradient-42)">
                                  <rect id="Rectangle-path" x="0.5" y="0.9" width="220.4" height={259} />
                                </g>
                                <g id="validated-icon" transform="translate(1.000000, 44.000000)">
                                  <circle id="Oval" fill="#69F0AE" cx="40.1" cy="40.4" r="40.7" />
                                  <polygon id="Shape" fill="#FFFFFF" points="23 35 40 49 60 18 66 24 39 60.8 17 37" />
                                </g>
                              </g>
                              <circle id="Oval" fill="#FFFFFF" fillRule="nonzero" cx="48.4" cy="766.9" r="24.4" />
                              <g id="Group" transform="translate(36.000000, 747.000000)" fill="#25DDDF" fillRule="nonzero">
                                <path d="M22.6,30.5 C23.2,30.5 23.7,30.7 24.1,31 C24.5,31.4 24.7,31.8 24.7,32.4 L24.7,36 L0.9,36 L0.9,34 C0.9,33.6 1,33.2 1.2,32.7 C1.4,32.3 1.6,31.9 2,31.5 L12.5,21 C13.4,20.1 14.2,19.2 14.9,18.4 C15.6,17.6 16.2,16.8 16.6,16 C17.1,15.2 17.4,14.4 17.7,13.6 C18,12.8 18.1,11.9 18.1,11 C18.1,10.2 18,9.4 17.7,8.8 C17.4,8.2 17.1,7.6 16.7,7.2 C16.3,6.8 15.7,6.4 15.1,6.2 C14.5,6 13.8,5.9 13,5.9 C12.3,5.9 11.6,6 11,6.2 C10.4,6.4 9.9,6.7 9.4,7 C8.9,7.4 8.5,7.8 8.2,8.3 C7.9,8.8 7.6,9.3 7.5,9.9 C7.2,10.6 6.9,11.1 6.4,11.4 C6,11.6 5.3,11.7 4.5,11.6 L1.4,11 C1.6,9.3 2.1,7.9 2.8,6.6 C3.5,5.3 4.3,4.3 5.4,3.5 C6.4,2.7 7.6,2 9,1.6 C10.3,1.2 11.8,1 13.3,1 C14.9,1 16.4,1.2 17.7,1.7 C19,2.2 20.2,2.8 21.1,3.7 C22,4.6 22.8,5.6 23.3,6.8 C23.8,8 24.1,9.4 24.1,10.9 C24.1,12.2 23.9,13.4 23.5,14.5 C23.1,15.6 22.6,16.6 22,17.6 C21.4,18.6 20.6,19.6 19.8,20.5 C19,21.4 18.1,22.4 17.1,23.3 L9.3,31.3 C10.1,31.1 10.8,30.9 11.5,30.8 C12.2,30.7 13,30.6 13.6,30.6 L22.6,30.6 L22.6,30.5 Z" id="Shape" />
                                <path d="M82.1,14.7 C83.1,13.6 84.3,12.6 85.5,11.9 C86.8,11.2 88.3,10.8 90,10.8 C91.3,10.8 92.6,11.1 93.7,11.6 C94.8,12.2 95.8,13 96.6,14 C97.4,15.1 98,16.4 98.5,17.9 C98.9,19.5 99.2,21.2 99.2,23.3 C99.2,25.1 99,26.8 98.5,28.4 C98,30 97.3,31.3 96.4,32.5 C95.5,33.7 94.4,34.6 93.1,35.2 C91.8,35.8 90.3,36.2 88.7,36.2 C87.3,36.2 86.1,36 85.2,35.6 C84.2,35.2 83.4,34.6 82.6,33.8 L82.6,44 L76.7,44 L76.7,11.3 L80.3,11.3 C81.1,11.3 81.6,11.7 81.8,12.4 L82.1,14.7 Z M82.4,29.6 C83.1,30.4 83.8,31 84.6,31.3 C85.4,31.6 86.3,31.8 87.2,31.8 C88.1,31.8 88.9,31.6 89.6,31.3 C90.3,31 90.9,30.5 91.4,29.8 C91.9,29.1 92.3,28.2 92.6,27.2 C92.9,26.2 93,24.9 93,23.5 C93,22.1 92.9,20.8 92.7,19.8 C92.5,18.8 92.1,18 91.7,17.4 C91.3,16.8 90.7,16.3 90.1,16 C89.5,15.7 88.8,15.6 88,15.6 C86.8,15.6 85.7,15.9 84.9,16.4 C84,16.9 83.2,17.7 82.5,18.6 L82.5,29.6 L82.4,29.6 Z" id="Shape" />
                                <path d="M114.6,11 C116.4,11 118.1,11.3 119.6,11.9 C121.1,12.5 122.4,13.3 123.4,14.4 C124.5,15.5 125.3,16.8 125.9,18.4 C126.5,20 126.8,21.7 126.8,23.7 C126.8,25.7 126.5,27.4 125.9,29 C125.3,30.6 124.5,31.9 123.4,33 C122.3,34.1 121.1,35 119.6,35.5 C118.1,36.1 116.4,36.4 114.6,36.4 C112.8,36.4 111.1,36.1 109.6,35.5 C108.1,34.9 106.8,34.1 105.7,33 C104.6,31.9 103.8,30.6 103.2,29 C102.6,27.4 102.3,25.7 102.3,23.7 C102.3,21.8 102.6,20 103.2,18.4 C103.8,16.8 104.6,15.5 105.7,14.4 C106.8,13.3 108,12.5 109.6,11.9 C111.1,11.3 112.8,11 114.6,11 Z M114.6,31.8 C116.6,31.8 118.2,31.1 119.1,29.7 C120.1,28.3 120.6,26.3 120.6,23.7 C120.6,21 120.1,19 119.1,17.6 C118.1,16.2 116.6,15.5 114.6,15.5 C112.5,15.5 111,16.2 110,17.6 C109,19 108.5,21 108.5,23.7 C108.5,26.3 109,28.4 110,29.7 C111,31 112.6,31.8 114.6,31.8 Z" id="Shape" />
                                <path d="M139.1,36.4 C137,36.4 135.3,35.8 134.2,34.6 C133.1,33.4 132.5,31.7 132.5,29.6 L132.5,15.8 L130,15.8 C129.7,15.8 129.4,15.7 129.2,15.5 C129,15.3 128.9,15 128.9,14.6 L128.9,12.2 L132.9,11.6 L134.1,4.9 C134.2,4.6 134.3,4.3 134.6,4.2 C134.8,4 135.1,3.9 135.5,3.9 L138.6,3.9 L138.6,11.7 L145.2,11.7 L145.2,15.9 L138.6,15.9 L138.6,29.2 C138.6,30 138.8,30.6 139.2,31 C139.6,31.4 140.1,31.6 140.7,31.6 C141.1,31.6 141.4,31.6 141.6,31.5 C141.8,31.4 142.1,31.3 142.2,31.2 C142.4,31.1 142.5,31 142.7,30.9 C142.8,30.8 143,30.8 143.1,30.8 C143.3,30.8 143.4,30.8 143.5,30.9 C143.6,31 143.7,31.1 143.9,31.3 L145.7,34.2 C144.8,34.9 143.8,35.5 142.7,35.8 C141.4,36.2 140.3,36.4 139.1,36.4 Z" id="Shape" />
                                <path d="M153.1,24.4 C153.2,25.7 153.4,26.8 153.8,27.7 C154.2,28.6 154.6,29.4 155.2,30 C155.8,30.6 156.5,31 157.3,31.3 C158.1,31.6 159,31.7 159.9,31.7 C160.8,31.7 161.7,31.6 162.4,31.4 C163.1,31.2 163.7,30.9 164.2,30.7 C164.7,30.4 165.2,30.2 165.6,30 C166,29.8 166.4,29.7 166.7,29.7 C167.2,29.7 167.6,29.9 167.8,30.3 L169.5,32.5 C168.8,33.3 168.1,33.9 167.3,34.4 C166.5,34.9 165.6,35.3 164.7,35.6 C163.8,35.9 162.9,36.1 162,36.3 C161.1,36.4 160.2,36.5 159.3,36.5 C157.6,36.5 156,36.2 154.5,35.6 C153,35 151.7,34.2 150.7,33.1 C149.6,32 148.8,30.6 148.1,29 C147.5,27.4 147.2,25.5 147.2,23.3 C147.2,21.6 147.5,20 148,18.6 C148.5,17.2 149.3,15.8 150.3,14.7 C151.3,13.6 152.6,12.7 154,12.1 C155.5,11.5 157.1,11.1 159,11.1 C160.6,11.1 162,11.3 163.3,11.8 C164.6,12.3 165.7,13 166.7,14 C167.6,15 168.4,16.1 168.9,17.5 C169.4,18.9 169.7,20.5 169.7,22.2 C169.7,23.1 169.6,23.7 169.4,24 C169.2,24.3 168.8,24.5 168.3,24.5 L153.1,24.5 L153.1,24.4 Z M164.4,20.9 C164.4,20.1 164.3,19.4 164.1,18.7 C163.9,18 163.6,17.4 163.1,16.9 C162.7,16.4 162.1,16 161.5,15.7 C160.8,15.4 160.1,15.3 159.2,15.3 C157.5,15.3 156.1,15.8 155.2,16.8 C154.2,17.8 153.6,19.2 153.3,21 L164.4,21 L164.4,20.9 Z" id="Shape" />
                                <path d="M179.7,14.4 C180.2,13.9 180.7,13.4 181.3,13 C181.9,12.6 182.4,12.2 183.1,11.9 C183.7,11.6 184.4,11.4 185.1,11.2 C185.8,11 186.6,10.9 187.4,10.9 C188.7,10.9 189.9,11.1 191,11.6 C192.1,12.1 192.9,12.7 193.6,13.5 C194.3,14.3 194.8,15.3 195.2,16.5 C195.6,17.6 195.7,18.9 195.7,20.3 L195.7,36 L189.8,36 L189.8,20.3 C189.8,18.8 189.5,17.6 188.8,16.8 C188.1,16 187.1,15.6 185.7,15.6 C184.7,15.6 183.7,15.8 182.8,16.3 C181.9,16.8 181.1,17.4 180.3,18.2 L180.3,36 L174.4,36 L174.4,11.4 L178,11.4 C178.8,11.4 179.3,11.8 179.5,12.5 L179.7,14.4 Z" id="Shape" />
                                <path d="M225.7,36 L219.8,36 L219.8,15.8 L208.4,15.8 L208.4,29.1 C208.4,29.9 208.6,30.5 209,30.9 C209.4,31.3 209.9,31.5 210.5,31.5 C210.9,31.5 211.2,31.5 211.4,31.4 C211.6,31.3 211.9,31.2 212,31.1 C212.2,31 212.3,30.9 212.5,30.8 C212.6,30.7 212.8,30.7 212.9,30.7 C213.1,30.7 213.2,30.7 213.3,30.8 C213.4,30.9 213.5,31 213.7,31.2 L215.5,34.1 C214.6,34.8 213.6,35.4 212.5,35.7 C211.4,36.1 210.2,36.3 209,36.3 C206.9,36.3 205.2,35.7 204.1,34.5 C203,33.3 202.4,31.6 202.4,29.5 L202.4,15.7 L199.9,15.7 C199.6,15.7 199.3,15.6 199.1,15.4 C198.9,15.2 198.8,14.9 198.8,14.5 L198.8,12.1 L202.8,11.4 L204,4.7 C204.1,4.4 204.2,4.1 204.5,4 C204.7,3.8 205,3.7 205.4,3.7 L208.5,3.7 L208.5,11.5 L225.9,11.5 L225.9,36 L225.7,36 Z M226.8,4.1 C226.8,4.6 226.7,5.1 226.5,5.6 C226.3,6.1 226,6.5 225.7,6.8 C225.4,7.1 224.9,7.4 224.5,7.6 C224,7.8 223.5,7.9 223,7.9 C222.5,7.9 222,7.8 221.6,7.6 C221.2,7.4 220.8,7.1 220.4,6.8 C220,6.5 219.8,6.1 219.6,5.6 C219.4,5.1 219.3,4.7 219.3,4.1 C219.3,3.6 219.4,3.1 219.6,2.6 C219.8,2.1 220.1,1.7 220.4,1.4 C220.7,1.1 221.1,0.8 221.6,0.6 C222,0.4 222.5,0.3 223,0.3 C223.5,0.3 224,0.4 224.5,0.6 C225,0.8 225.4,1.1 225.7,1.4 C226,1.7 226.3,2.1 226.5,2.6 C226.7,3.1 226.8,3.6 226.8,4.1 Z" id="Shape" />
                                <path d="M231.2,14.8 C234,12.2 237.4,10.9 241.4,10.9 C242.8,10.9 244.1,11.1 245.3,11.6 C246.4,12.1 247.4,12.7 248.2,13.6 C249,14.4 249.6,15.4 250,16.6 C250.4,17.8 250.6,19 250.6,20.4 L250.6,36 L247.9,36 C247.3,36 246.9,35.9 246.6,35.7 C246.3,35.5 246.1,35.2 245.9,34.7 L245.4,32.9 C244.8,33.5 244.2,34 243.6,34.4 C243,34.8 242.4,35.2 241.8,35.5 C241.2,35.8 240.5,36 239.7,36.2 C239,36.4 238.2,36.4 237.3,36.4 C236.3,36.4 235.3,36.3 234.4,36 C233.5,35.7 232.8,35.3 232.1,34.7 C231.5,34.1 231,33.4 230.6,32.6 C230.2,31.8 230.1,30.8 230.1,29.7 C230.1,29.1 230.2,28.5 230.4,27.8 C230.6,27.2 230.9,26.6 231.4,26 C231.9,25.4 232.5,24.9 233.2,24.4 C234,23.9 234.9,23.5 236,23.1 C237.1,22.7 238.4,22.4 239.8,22.2 C241.3,22 242.9,21.8 244.8,21.8 L244.8,20.4 C244.8,18.8 244.4,17.5 243.7,16.7 C243,15.9 242,15.5 240.7,15.5 C239.7,15.5 238.9,15.6 238.3,15.8 C237.7,16 237.1,16.3 236.6,16.6 C236.1,16.9 235.7,17.1 235.3,17.4 C234.9,17.6 234.5,17.7 234,17.7 C233.6,17.7 233.2,17.6 232.9,17.4 C232.6,17.2 232.4,16.9 232.2,16.6 L231.2,14.8 Z M244.8,25.5 C243.1,25.6 241.6,25.7 240.5,25.9 C239.4,26.1 238.4,26.4 237.7,26.7 C237,27 236.5,27.4 236.2,27.9 C235.9,28.3 235.7,28.8 235.7,29.4 C235.7,30.4 236,31.2 236.6,31.6 C237.2,32 238,32.3 239,32.3 C240.2,32.3 241.3,32.1 242.2,31.6 C243.1,31.2 244,30.5 244.8,29.6 L244.8,25.5 Z" id="Shape" />
                                <polygon id="Shape" points="262.1 0.3 262.1 36 256.2 36 256.2 0.3" />
                                <path d="M281.5,36 L281.5,15.8 L279.4,15.5 C278.9,15.4 278.6,15.2 278.3,15 C278,14.8 277.9,14.4 277.9,14 L277.9,11.6 L281.6,11.6 L281.6,10.8 C281.6,9.3 281.8,7.9 282.3,6.6 C282.8,5.3 283.5,4.2 284.6,3.3 C285.6,2.4 286.9,1.6 288.4,1.1 C289.9,0.6 291.8,0.3 293.9,0.3 C294.6,0.3 295.3,0.3 296,0.4 C296.7,0.5 297.3,0.6 297.8,0.7 L297.6,3.8 C297.6,4.2 297.4,4.4 297,4.5 C296.6,4.6 296.2,4.6 295.6,4.6 C294,4.6 292.7,4.7 291.7,5 C290.7,5.3 289.8,5.7 289.2,6.2 C288.6,6.7 288.1,7.4 287.8,8.2 C287.5,9 287.4,9.9 287.4,11 L287.4,11.6 L302.7,11.6 L302.7,36 L296.8,36 L296.8,15.8 L287.7,15.8 L287.7,36 L281.5,36 Z" id="Shape" />
                                <path d="M330.5,36 L324.8,36 C324.4,36 324,35.9 323.8,35.7 C323.5,35.5 323.3,35.2 323.1,34.9 L317.9,26.3 C317.8,26.6 317.7,26.8 317.6,27.1 C317.5,27.3 317.4,27.6 317.3,27.8 L312.7,34.9 C312.5,35.2 312.3,35.4 312.1,35.7 C311.8,35.9 311.5,36 311.1,36 L305.8,36 L314.2,23.3 L306.1,11.4 L311.8,11.4 C312.2,11.4 312.6,11.5 312.8,11.6 C313,11.7 313.2,11.9 313.4,12.2 L318.6,20.4 C318.8,19.9 319,19.3 319.3,18.8 L323.5,12.3 C323.9,11.7 324.3,11.4 324.9,11.4 L330.3,11.4 L322.2,23.1 L330.5,36 Z" id="Shape" />
                                <path d="M337.1,24.4 C337.2,25.7 337.4,26.8 337.8,27.7 C338.2,28.6 338.6,29.4 339.2,30 C339.8,30.6 340.5,31 341.3,31.3 C342.1,31.6 343,31.7 343.9,31.7 C344.8,31.7 345.7,31.6 346.4,31.4 C347.1,31.2 347.7,30.9 348.2,30.7 C348.7,30.4 349.2,30.2 349.6,30 C350,29.8 350.4,29.7 350.7,29.7 C351.2,29.7 351.6,29.9 351.8,30.3 L353.5,32.5 C352.8,33.3 352.1,33.9 351.3,34.4 C350.5,34.9 349.6,35.3 348.7,35.6 C347.8,35.9 346.9,36.1 346,36.3 C345.1,36.4 344.2,36.5 343.3,36.5 C341.6,36.5 340,36.2 338.5,35.6 C337,35 335.7,34.2 334.7,33.1 C333.6,32 332.8,30.6 332.1,29 C331.5,27.4 331.2,25.5 331.2,23.3 C331.2,21.6 331.5,20 332,18.6 C332.5,17.2 333.3,15.8 334.3,14.7 C335.3,13.6 336.6,12.7 338,12.1 C339.5,11.5 341.1,11.1 343,11.1 C344.6,11.1 346,11.3 347.3,11.8 C348.6,12.3 349.7,13 350.7,14 C351.6,15 352.4,16.1 352.9,17.5 C353.4,18.9 353.7,20.5 353.7,22.2 C353.7,23.1 353.6,23.7 353.4,24 C353.2,24.3 352.8,24.5 352.3,24.5 L337.1,24.5 L337.1,24.4 Z M348.4,20.9 C348.4,20.1 348.3,19.4 348.1,18.7 C347.9,18 347.6,17.4 347.1,16.9 C346.7,16.4 346.1,16 345.5,15.7 C344.8,15.4 344.1,15.3 343.2,15.3 C341.5,15.3 340.1,15.8 339.2,16.8 C338.2,17.8 337.6,19.2 337.3,21 L348.4,21 L348.4,20.9 Z" id="Shape" />
                                <path d="M373.1,16.2 C372.9,16.5 372.8,16.6 372.6,16.7 C372.4,16.8 372.2,16.9 371.9,16.9 C371.6,16.9 371.3,16.8 371,16.7 C370.7,16.5 370.3,16.4 369.9,16.2 C369.5,16 369,15.8 368.4,15.7 C367.8,15.6 367.2,15.5 366.4,15.5 C365.2,15.5 364.3,15.7 363.7,16.2 C363.1,16.7 362.7,17.3 362.7,18.1 C362.7,18.6 362.9,19.1 363.2,19.4 C363.5,19.8 364,20.1 364.6,20.3 C365.2,20.6 365.8,20.8 366.5,21 C367.2,21.2 368,21.5 368.7,21.7 C369.4,22 370.2,22.2 370.9,22.6 C371.6,23 372.3,23.3 372.8,23.8 C373.4,24.3 373.8,24.9 374.2,25.6 C374.5,26.3 374.7,27.2 374.7,28.1 C374.7,29.3 374.5,30.4 374.1,31.4 C373.7,32.4 373,33.3 372.2,34 C371.4,34.7 370.3,35.3 369.1,35.7 C367.9,36.1 366.5,36.3 364.9,36.3 C364.1,36.3 363.2,36.2 362.4,36.1 C361.6,35.9 360.8,35.7 360.1,35.5 C359.4,35.2 358.7,34.9 358,34.5 C357.4,34.1 356.8,33.7 356.3,33.3 L357.7,31 C357.9,30.7 358.1,30.5 358.3,30.4 C358.5,30.3 358.8,30.2 359.2,30.2 C359.6,30.2 359.9,30.3 360.2,30.5 C360.5,30.7 360.9,30.9 361.3,31.2 C361.7,31.4 362.2,31.7 362.8,31.9 C363.4,32.1 364.1,32.2 365,32.2 C365.7,32.2 366.3,32.1 366.8,31.9 C367.3,31.7 367.7,31.5 368,31.2 C368.3,30.9 368.6,30.6 368.7,30.3 C368.9,29.9 368.9,29.6 368.9,29.2 C368.9,28.6 368.7,28.2 368.4,27.8 C368.1,27.4 367.6,27.1 367,26.8 C366.4,26.5 365.8,26.3 365.1,26.1 C364.4,25.9 363.6,25.6 362.9,25.4 C362.1,25.1 361.4,24.8 360.7,24.5 C360,24.2 359.3,23.7 358.8,23.2 C358.2,22.7 357.8,22 357.4,21.3 C357.1,20.5 356.9,19.6 356.9,18.5 C356.9,17.5 357.1,16.5 357.5,15.6 C357.9,14.7 358.5,13.9 359.3,13.2 C360.1,12.5 361,12 362.2,11.6 C363.4,11.2 364.7,11 366.2,11 C367.9,11 369.4,11.3 370.8,11.8 C372.2,12.4 373.4,13.1 374.3,14 L373.1,16.2 Z" id="Shape" />
                              </g>
                              <circle id="Oval" fill="#FFFFFF" fillRule="nonzero" cx="43.4" cy="249.9" r="24.4" />
                              <g id="Group" transform="translate(33.000000, 230.000000)" fillRule="nonzero">
                                <path d="M22,30.5747126 L22,35 L2.62385321,35 L2.62385321,30.5747126 L9.68807339,30.5747126 L9.68807339,10.2586207 C9.68807339,9.45402299 9.68807339,8.64942529 9.78899083,7.74425287 L4.74311927,11.9683908 C4.44036697,12.1695402 4.13761468,12.3706897 3.83486239,12.3706897 C3.53211009,12.4712644 3.33027523,12.4712644 3.02752294,12.3706897 C2.72477064,12.2701149 2.52293578,12.2701149 2.32110092,12.0689655 C2.11926606,11.9683908 2.01834862,11.7672414 1.91743119,11.6666667 L0,9.05172414 L10.6972477,0 L15.6422018,0 L15.6422018,30.4741379 L22,30.4741379 L22,30.5747126 Z" id="Shape" fill="#25DDDF" />
                                <path d="M75.6,35 L75.6,15.0142045 L73.5,14.7159091 C73,14.6164773 72.7,14.4176136 72.4,14.21875 C72.1,14.0198864 72,13.6221591 72,13.2244318 L72,10.8380682 L75.7,10.8380682 L75.7,9.04829545 C75.7,7.65625 75.9,6.36363636 76.3,5.26988636 C76.7,4.17613636 77.3,3.18181818 78.1,2.38636364 C78.9,1.59090909 79.9,0.994318182 81,0.596590909 C82.1,0.198863636 83.4,0 84.8,0 C85.9,0 87,0.198863636 88,0.497159091 L87.9,3.48011364 C87.9,3.67897727 87.8,3.87784091 87.7,3.97727273 C87.6,4.07670455 87.4,4.17613636 87.3,4.27556818 C87.1,4.375 86.9,4.375 86.7,4.375 C86.5,4.375 86.2,4.375 85.9,4.375 C85.2,4.375 84.6,4.47443182 84,4.57386364 C83.4,4.77272727 83,4.97159091 82.6,5.36931818 C82.2,5.76704545 81.9,6.26420455 81.7,6.86079545 C81.5,7.45738636 81.4,8.25284091 81.4,9.14772727 L81.4,10.7386364 L87.8,10.7386364 L87.8,14.9147727 L81.6,14.9147727 L81.6,35 L75.6,35 Z" id="Shape" fill="#FFFFFF" />
                                <path d="M112,10.1992032 L112,34.7011952 L108.46729,34.7011952 C107.682243,34.7011952 107.191589,34.3027888 106.995327,33.6055777 L106.602804,31.6135458 C105.621495,32.6095618 104.542056,33.5059761 103.364486,34.1035857 C102.186916,34.7011952 100.813084,35 99.1448598,35 C97.8691589,35 96.6915888,34.8007968 95.6121495,34.3027888 C94.6308411,33.8047809 93.7476636,33.2071713 93.0607477,32.4103586 C92.3738318,31.6135458 91.8831776,30.6175299 91.4906542,29.4223108 C91.0981308,28.3266932 91,27.0318725 91,25.6374502 L91,10.0996016 L96.7897196,10.0996016 L96.7897196,25.6374502 C96.7897196,27.1314741 97.0841121,28.3266932 97.771028,29.123506 C98.4579439,29.9203187 99.4392523,30.3187251 100.813084,30.3187251 C101.794393,30.3187251 102.775701,30.1195219 103.658879,29.6215139 C104.542056,29.123506 105.327103,28.5258964 106.11215,27.7290837 L106.11215,10 L112,10 L112,10.1992032 Z" id="Shape" fill="#FFFFFF" />
                                <path d="M124.225352,13.4860558 C124.71831,12.9880478 125.211268,12.4900398 125.802817,12.0916335 C126.394366,11.6932271 126.887324,11.2948207 127.577465,10.9960159 C128.169014,10.6972112 128.859155,10.498008 129.549296,10.2988048 C130.239437,10.0996016 131.028169,10 131.816901,10 C133.098592,10 134.28169,10.1992032 135.366197,10.6972112 C136.450704,11.1952191 137.239437,11.7928287 137.929577,12.5896414 C138.619718,13.3864542 139.112676,14.3824701 139.507042,15.5776892 C139.901408,16.6733068 140,17.9681275 140,19.3625498 L140,35 L134.183099,35 L134.183099,19.3625498 C134.183099,17.8685259 133.887324,16.6733068 133.197183,15.876494 C132.507042,15.0796813 131.521127,14.6812749 130.140845,14.6812749 C129.15493,14.6812749 128.169014,14.8804781 127.28169,15.3784861 C126.394366,15.876494 125.605634,16.4741036 124.816901,17.2709163 L124.816901,35 L119,35 L119,10.498008 L122.549296,10.498008 C123.338028,10.498008 123.830986,10.8964143 124.028169,11.5936255 L124.225352,13.4860558 Z" id="Shape" fill="#FFFFFF" />
                                <path d="M151.299065,13.4860558 C151.78972,12.9880478 152.280374,12.4900398 152.869159,12.0916335 C153.457944,11.6932271 153.948598,11.2948207 154.635514,10.9960159 C155.224299,10.6972112 155.911215,10.498008 156.598131,10.2988048 C157.285047,10.0996016 158.070093,10 158.85514,10 C160.130841,10 161.308411,10.1992032 162.38785,10.6972112 C163.46729,11.1952191 164.252336,11.7928287 164.939252,12.5896414 C165.626168,13.3864542 166.116822,14.3824701 166.509346,15.5776892 C166.901869,16.6733068 167,17.9681275 167,19.3625498 L167,35 L161.11215,35 L161.11215,19.3625498 C161.11215,17.8685259 160.817757,16.6733068 160.130841,15.876494 C159.443925,15.0796813 158.462617,14.6812749 157.088785,14.6812749 C156.107477,14.6812749 155.126168,14.8804781 154.242991,15.3784861 C153.359813,15.876494 152.574766,16.4741036 151.78972,17.2709163 L151.78972,35 L146,35 L146,10.498008 L149.53271,10.498008 C150.317757,10.498008 150.808411,10.8964143 151.004673,11.5936255 L151.299065,13.4860558 Z" id="Shape" fill="#FFFFFF" />
                                <path d="M177.031111,23.0905512 C177.133333,24.3700787 177.337778,25.4527559 177.746667,26.3385827 C178.155556,27.2244094 178.564444,28.011811 179.177778,28.6023622 C179.791111,29.1929134 180.506667,29.5866142 181.324444,29.8818898 C182.142222,30.1771654 183.062222,30.2755906 183.982222,30.2755906 C184.902222,30.2755906 185.822222,30.1771654 186.537778,29.980315 C187.253333,29.7834646 187.866667,29.488189 188.377778,29.2913386 C188.888889,28.996063 189.4,28.7992126 189.808889,28.6023622 C190.217778,28.4055118 190.626667,28.3070866 190.933333,28.3070866 C191.444444,28.3070866 191.853333,28.503937 192.057778,28.8976378 L193.795556,31.0629921 C193.08,31.8503937 192.364444,32.4409449 191.546667,32.9330709 C190.728889,33.4251969 189.808889,33.8188976 188.888889,34.1141732 C187.968889,34.4094488 187.048889,34.6062992 186.128889,34.8031496 C185.208889,34.9015748 184.288889,35 183.368889,35 C181.631111,35 179.995556,34.7047244 178.462222,34.1141732 C176.928889,33.523622 175.6,32.7362205 174.577778,31.6535433 C173.453333,30.5708661 172.635556,29.1929134 171.92,27.6181102 C171.306667,26.0433071 171,24.1732283 171,22.007874 C171,20.3346457 171.306667,18.7598425 171.817778,17.3818898 C172.328889,16.003937 173.146667,14.6259843 174.168889,13.5433071 C175.191111,12.4606299 176.52,11.5748031 177.951111,10.984252 C179.484444,10.3937008 181.12,10 183.062222,10 C184.697778,10 186.128889,10.1968504 187.457778,10.6889764 C188.786667,11.1811024 189.911111,11.8700787 190.933333,12.8543307 C191.853333,13.8385827 192.671111,14.9212598 193.182222,16.2992126 C193.693333,17.6771654 194,19.2519685 194,20.9251969 C194,21.8110236 193.897778,22.4015748 193.693333,22.6968504 C193.488889,22.992126 193.08,23.1889764 192.568889,23.1889764 L177.031111,23.1889764 L177.031111,23.0905512 Z M188.582222,19.6456693 C188.582222,18.8582677 188.48,18.1692913 188.275556,17.480315 C188.071111,16.7913386 187.764444,16.2007874 187.253333,15.7086614 C186.844444,15.2165354 186.231111,14.8228346 185.617778,14.5275591 C184.902222,14.2322835 184.186667,14.1338583 183.266667,14.1338583 C181.528889,14.1338583 180.097778,14.6259843 179.177778,15.6102362 C178.155556,16.5944882 177.542222,17.9724409 177.235556,19.7440945 L188.582222,19.7440945 L188.582222,19.6456693 Z" id="Shape" fill="#FFFFFF" />
                                <polygon id="Shape" fill="#FFFFFF" points="204 0 204 36 198 36 198 0" />
                                <path d="M221.126829,13.8235294 C223.995122,11.2745098 227.478049,10 231.57561,10 C233.009756,10 234.341463,10.1960784 235.570732,10.6862745 C236.697561,11.1764706 237.721951,11.7647059 238.541463,12.6470588 C239.360976,13.4313725 239.97561,14.4117647 240.385366,15.5882353 C240.795122,16.7647059 241,17.9411765 241,19.3137255 L241,34.6078431 L238.234146,34.6078431 C237.619512,34.6078431 237.209756,34.5098039 236.902439,34.3137255 C236.595122,34.1176471 236.390244,33.8235294 236.185366,33.3333333 L235.673171,31.5686275 C235.058537,32.1568627 234.443902,32.6470588 233.829268,33.0392157 C233.214634,33.4313725 232.6,33.8235294 231.985366,34.1176471 C231.370732,34.4117647 230.653659,34.6078431 229.834146,34.8039216 C229.117073,35 228.297561,35 227.37561,35 C226.35122,35 225.326829,34.9019608 224.404878,34.6078431 C223.482927,34.3137255 222.765854,33.9215686 222.04878,33.3333333 C221.434146,32.745098 220.921951,32.0588235 220.512195,31.2745098 C220.102439,30.4901961 220,29.5098039 220,28.4313725 C220,27.8431373 220.102439,27.254902 220.307317,26.5686275 C220.512195,25.9803922 220.819512,25.3921569 221.331707,24.8039216 C221.843902,24.2156863 222.458537,23.7254902 223.17561,23.2352941 C223.995122,22.745098 224.917073,22.3529412 226.043902,21.9607843 C227.170732,21.5686275 228.502439,21.2745098 229.936585,21.0784314 C231.473171,20.8823529 233.112195,20.6862745 235.058537,20.6862745 L235.058537,19.3137255 C235.058537,17.745098 234.64878,16.4705882 233.931707,15.6862745 C233.214634,14.9019608 232.190244,14.5098039 230.858537,14.5098039 C229.834146,14.5098039 229.014634,14.6078431 228.4,14.8039216 C227.785366,15 227.170732,15.2941176 226.658537,15.5882353 C226.146341,15.8823529 225.736585,16.0784314 225.326829,16.372549 C224.917073,16.5686275 224.507317,16.6666667 223.995122,16.6666667 C223.585366,16.6666667 223.17561,16.5686275 222.868293,16.372549 C222.560976,16.1764706 222.356098,15.8823529 222.15122,15.5882353 L221.126829,13.8235294 Z M235.058537,24.3137255 C233.317073,24.4117647 231.780488,24.5098039 230.653659,24.7058824 C229.42439,24.9019608 228.502439,25.1960784 227.785366,25.4901961 C227.068293,25.7843137 226.556098,26.1764706 226.24878,26.6666667 C225.941463,27.0588235 225.736585,27.5490196 225.736585,28.1372549 C225.736585,29.1176471 226.043902,29.9019608 226.658537,30.2941176 C227.273171,30.6862745 228.092683,30.9803922 229.117073,30.9803922 C230.346341,30.9803922 231.473171,30.7843137 232.395122,30.2941176 C233.317073,29.9019608 234.239024,29.2156863 235.058537,28.3333333 L235.058537,24.3137255 Z" id="Shape" fill="#FFFFFF" />
                                <path d="M251.225352,13.4860558 C251.71831,12.9880478 252.211268,12.4900398 252.802817,12.0916335 C253.394366,11.6932271 253.887324,11.2948207 254.577465,10.9960159 C255.169014,10.6972112 255.859155,10.498008 256.549296,10.2988048 C257.239437,10.0996016 258.028169,10 258.816901,10 C260.098592,10 261.28169,10.1992032 262.366197,10.6972112 C263.450704,11.1952191 264.239437,11.7928287 264.929577,12.5896414 C265.619718,13.3864542 266.112676,14.3824701 266.507042,15.5776892 C266.901408,16.6733068 267,17.9681275 267,19.3625498 L267,35 L261.183099,35 L261.183099,19.3625498 C261.183099,17.8685259 260.887324,16.6733068 260.197183,15.876494 C259.507042,15.0796813 258.521127,14.6812749 257.140845,14.6812749 C256.15493,14.6812749 255.169014,14.8804781 254.28169,15.3784861 C253.394366,15.876494 252.605634,16.4741036 251.816901,17.2709163 L251.816901,35 L246,35 L246,10.498008 L249.549296,10.498008 C250.338028,10.498008 250.830986,10.8964143 251.028169,11.5936255 L251.225352,13.4860558 Z" id="Shape" fill="#FFFFFF" />
                                <path d="M273.126829,13.8235294 C275.995122,11.2745098 279.478049,10 283.57561,10 C285.009756,10 286.341463,10.1960784 287.570732,10.6862745 C288.697561,11.1764706 289.721951,11.7647059 290.541463,12.6470588 C291.360976,13.4313725 291.97561,14.4117647 292.385366,15.5882353 C292.795122,16.7647059 293,17.9411765 293,19.3137255 L293,34.6078431 L290.234146,34.6078431 C289.619512,34.6078431 289.209756,34.5098039 288.902439,34.3137255 C288.595122,34.1176471 288.390244,33.8235294 288.185366,33.3333333 L287.673171,31.5686275 C287.058537,32.1568627 286.443902,32.6470588 285.829268,33.0392157 C285.214634,33.4313725 284.6,33.8235294 283.985366,34.1176471 C283.370732,34.4117647 282.653659,34.6078431 281.834146,34.8039216 C281.117073,35 280.297561,35 279.37561,35 C278.35122,35 277.326829,34.9019608 276.404878,34.6078431 C275.482927,34.3137255 274.765854,33.9215686 274.04878,33.3333333 C273.434146,32.745098 272.921951,32.0588235 272.512195,31.2745098 C272.102439,30.4901961 272,29.5098039 272,28.4313725 C272,27.8431373 272.102439,27.254902 272.307317,26.5686275 C272.512195,25.9803922 272.819512,25.3921569 273.331707,24.8039216 C273.843902,24.2156863 274.458537,23.7254902 275.17561,23.2352941 C275.995122,22.745098 276.917073,22.3529412 278.043902,21.9607843 C279.170732,21.5686275 280.502439,21.2745098 281.936585,21.0784314 C283.473171,20.8823529 285.112195,20.6862745 287.058537,20.6862745 L287.058537,19.3137255 C287.058537,17.745098 286.64878,16.4705882 285.931707,15.6862745 C285.214634,14.9019608 284.190244,14.5098039 282.858537,14.5098039 C281.834146,14.5098039 281.014634,14.6078431 280.4,14.8039216 C279.785366,15 279.170732,15.2941176 278.658537,15.5882353 C278.146341,15.8823529 277.736585,16.0784314 277.326829,16.372549 C276.917073,16.5686275 276.507317,16.6666667 275.995122,16.6666667 C275.585366,16.6666667 275.17561,16.5686275 274.868293,16.372549 C274.560976,16.1764706 274.356098,15.8823529 274.15122,15.5882353 L273.126829,13.8235294 Z M287.058537,24.3137255 C285.317073,24.4117647 283.780488,24.5098039 282.653659,24.7058824 C281.42439,24.9019608 280.502439,25.1960784 279.785366,25.4901961 C279.068293,25.7843137 278.556098,26.1764706 278.24878,26.6666667 C277.941463,27.0588235 277.736585,27.5490196 277.736585,28.1372549 C277.736585,29.1176471 278.043902,29.9019608 278.658537,30.2941176 C279.273171,30.6862745 280.092683,30.9803922 281.117073,30.9803922 C282.346341,30.9803922 283.473171,30.7843137 284.395122,30.2941176 C285.317073,29.9019608 286.239024,29.2156863 287.058537,28.3333333 L287.058537,24.3137255 Z" id="Shape" fill="#FFFFFF" />
                                <polygon id="Shape" fill="#FFFFFF" points="304 0 304 36 298 36 298 0" />
                                <path d="M317,3.84269663 C317,4.34831461 316.894737,4.85393258 316.684211,5.25842697 C316.473684,5.66292135 316.157895,6.06741573 315.842105,6.47191011 C315.526316,6.7752809 315.105263,7.07865169 314.578947,7.28089888 C314.052632,7.48314607 313.526316,7.58426966 313,7.58426966 C312.473684,7.58426966 311.947368,7.48314607 311.421053,7.28089888 C310.894737,7.07865169 310.473684,6.7752809 310.157895,6.47191011 C309.842105,6.16853933 309.526316,5.76404494 309.315789,5.25842697 C309.105263,4.85393258 309,4.34831461 309,3.84269663 C309,3.33707865 309.105263,2.83146067 309.315789,2.3258427 C309.526316,1.82022472 309.842105,1.41573034 310.157895,1.11235955 C310.473684,0.808988764 310.894737,0.505617978 311.421053,0.303370787 C311.947368,0.101123596 312.368421,0 313,0 C313.526316,0 314.052632,0.101123596 314.578947,0.303370787 C315.105263,0.505617978 315.526316,0.808988764 315.842105,1.11235955 C316.157895,1.41573034 316.473684,1.82022472 316.684211,2.3258427 C316.894737,2.83146067 317,3.33707865 317,3.84269663 Z M316.052632,11.1235955 L316.052632,36 L309.736842,36 L309.736842,11.1235955 L316.052632,11.1235955 Z" id="Shape" fill="#FFFFFF" />
                                <path d="M336.434783,15.1383399 C336.23913,15.4347826 336.141304,15.5335968 335.945652,15.6324111 C335.75,15.7312253 335.554348,15.8300395 335.26087,15.8300395 C334.967391,15.8300395 334.673913,15.7312253 334.380435,15.6324111 C334.086957,15.5335968 333.695652,15.3359684 333.304348,15.1383399 C332.913043,14.9407115 332.423913,14.743083 331.836957,14.6442688 C331.25,14.4466403 330.663043,14.4466403 329.880435,14.4466403 C328.706522,14.4466403 327.826087,14.6442688 327.23913,15.1383399 C326.554348,15.6324111 326.26087,16.2252964 326.26087,17.0158103 C326.26087,17.5098814 326.456522,18.0039526 326.75,18.3003953 C327.043478,18.6956522 327.532609,18.9920949 328.119565,19.1897233 C328.706522,19.486166 329.293478,19.6837945 329.978261,19.8814229 C330.663043,20.0790514 331.445652,20.3754941 332.130435,20.5731225 C332.815217,20.770751 333.597826,21.0671937 334.282609,21.4624506 C334.967391,21.7588933 335.652174,22.1541502 336.141304,22.6482213 C336.728261,23.1422925 337.119565,23.7351779 337.51087,24.4268775 C337.804348,25.1185771 338,26.0079051 338,26.8972332 C338,28.083004 337.804348,29.1699605 337.413043,30.1581028 C337.021739,31.1462451 336.336957,32.0355731 335.554348,32.7272727 C334.771739,33.4189723 333.695652,34.0118577 332.521739,34.4071146 C331.347826,34.8023715 329.978261,35 328.413043,35 C327.630435,35 326.75,34.9011858 325.967391,34.8023715 C325.184783,34.6047431 324.402174,34.4071146 323.717391,34.2094862 C323.032609,33.9130435 322.347826,33.6166008 321.663043,33.2213439 C320.978261,32.826087 320.48913,32.43083 320,32.0355731 L321.369565,29.7628458 C321.565217,29.4664032 321.76087,29.2687747 321.956522,29.1699605 C322.152174,29.0711462 322.445652,28.972332 322.836957,28.972332 C323.228261,28.972332 323.521739,29.0711462 323.815217,29.2687747 C324.108696,29.4664032 324.5,29.6640316 324.891304,29.9604743 C325.282609,30.1581028 325.771739,30.4545455 326.358696,30.6521739 C326.945652,30.8498024 327.630435,30.9486166 328.51087,30.9486166 C329.195652,30.9486166 329.782609,30.8498024 330.271739,30.6521739 C330.76087,30.4545455 331.152174,30.256917 331.445652,29.9604743 C331.73913,29.6640316 332.032609,29.3675889 332.130435,29.0711462 C332.326087,28.6758893 332.326087,28.3794466 332.326087,27.9841897 C332.326087,27.3913043 332.130435,26.9960474 331.836957,26.6007905 C331.543478,26.2055336 331.054348,25.9090909 330.467391,25.6126482 C329.880435,25.3162055 329.293478,25.1185771 328.608696,24.9209486 C327.923913,24.7233202 327.141304,24.4268775 326.456522,24.229249 C325.673913,23.9328063 324.98913,23.6363636 324.304348,23.3399209 C323.619565,23.0434783 322.934783,22.5494071 322.445652,22.055336 C321.858696,21.5612648 321.467391,20.8695652 321.076087,20.1778656 C320.782609,19.3873518 320.586957,18.4980237 320.586957,17.4110672 C320.586957,16.4229249 320.782609,15.4347826 321.173913,14.5454545 C321.565217,13.6561265 322.152174,12.8656126 322.934783,12.173913 C323.717391,11.4822134 324.597826,10.9881423 325.771739,10.5928854 C326.945652,10.1976285 328.217391,10 329.684783,10 C331.347826,10 332.815217,10.2964427 334.184783,10.7905138 C335.554348,11.3833992 336.728261,12.0750988 337.608696,12.9644269 L336.434783,15.1383399 Z" id="Shape" fill="#FFFFFF" />
                                <path d="M350,3.84269663 C350,4.34831461 349.894737,4.85393258 349.684211,5.25842697 C349.473684,5.66292135 349.157895,6.06741573 348.842105,6.47191011 C348.526316,6.7752809 348.105263,7.07865169 347.578947,7.28089888 C347.052632,7.48314607 346.526316,7.58426966 346,7.58426966 C345.473684,7.58426966 344.947368,7.48314607 344.421053,7.28089888 C343.894737,7.07865169 343.473684,6.7752809 343.157895,6.47191011 C342.842105,6.16853933 342.526316,5.76404494 342.315789,5.25842697 C342.105263,4.85393258 342,4.34831461 342,3.84269663 C342,3.33707865 342.105263,2.83146067 342.315789,2.3258427 C342.526316,1.82022472 342.842105,1.41573034 343.157895,1.11235955 C343.473684,0.808988764 343.894737,0.505617978 344.421053,0.303370787 C344.947368,0.101123596 345.368421,0 346,0 C346.526316,0 347.052632,0.101123596 347.578947,0.303370787 C348.105263,0.505617978 348.526316,0.808988764 348.842105,1.11235955 C349.157895,1.41573034 349.473684,1.82022472 349.684211,2.3258427 C349.789474,2.83146067 350,3.33707865 350,3.84269663 Z M349.052632,11.1235955 L349.052632,36 L342.736842,36 L342.736842,11.1235955 L349.052632,11.1235955 Z" id="Shape" fill="#FFFFFF" />
                                <path d="M369.434783,15.1383399 C369.23913,15.4347826 369.141304,15.5335968 368.945652,15.6324111 C368.75,15.7312253 368.554348,15.8300395 368.26087,15.8300395 C367.967391,15.8300395 367.673913,15.7312253 367.380435,15.6324111 C367.086957,15.4347826 366.695652,15.3359684 366.304348,15.1383399 C365.913043,14.9407115 365.423913,14.743083 364.836957,14.6442688 C364.25,14.5454545 363.663043,14.4466403 362.880435,14.4466403 C361.706522,14.4466403 360.826087,14.6442688 360.23913,15.1383399 C359.652174,15.6324111 359.26087,16.2252964 359.26087,17.0158103 C359.26087,17.5098814 359.456522,18.0039526 359.75,18.3003953 C360.043478,18.6956522 360.532609,18.9920949 361.119565,19.1897233 C361.706522,19.486166 362.293478,19.6837945 362.978261,19.8814229 C363.663043,20.0790514 364.445652,20.3754941 365.130435,20.5731225 C365.815217,20.8695652 366.597826,21.0671937 367.282609,21.4624506 C367.967391,21.8577075 368.652174,22.1541502 369.141304,22.6482213 C369.728261,23.1422925 370.119565,23.7351779 370.51087,24.4268775 C370.804348,25.1185771 371,26.0079051 371,26.8972332 C371,28.083004 370.804348,29.1699605 370.413043,30.1581028 C370.021739,31.1462451 369.336957,32.0355731 368.554348,32.7272727 C367.771739,33.4189723 366.695652,34.0118577 365.521739,34.4071146 C364.347826,34.8023715 362.978261,35 361.413043,35 C360.630435,35 359.75,34.9011858 358.967391,34.8023715 C358.184783,34.6047431 357.402174,34.4071146 356.717391,34.2094862 C356.032609,33.9130435 355.347826,33.6166008 354.663043,33.2213439 C354.076087,32.826087 353.48913,32.43083 353,32.0355731 L354.369565,29.7628458 C354.565217,29.4664032 354.76087,29.2687747 354.956522,29.1699605 C355.152174,29.0711462 355.445652,28.972332 355.836957,28.972332 C356.228261,28.972332 356.521739,29.0711462 356.815217,29.2687747 C357.108696,29.4664032 357.5,29.6640316 357.891304,29.9604743 C358.282609,30.1581028 358.771739,30.4545455 359.358696,30.6521739 C359.945652,30.8498024 360.630435,30.9486166 361.51087,30.9486166 C362.195652,30.9486166 362.782609,30.8498024 363.271739,30.6521739 C363.76087,30.4545455 364.152174,30.256917 364.445652,29.9604743 C364.73913,29.6640316 365.032609,29.3675889 365.130435,29.0711462 C365.326087,28.6758893 365.326087,28.3794466 365.326087,27.9841897 C365.326087,27.3913043 365.130435,26.9960474 364.836957,26.6007905 C364.543478,26.2055336 364.054348,25.9090909 363.467391,25.6126482 C362.880435,25.3162055 362.293478,25.1185771 361.608696,24.9209486 C360.923913,24.7233202 360.141304,24.4268775 359.456522,24.229249 C358.673913,23.9328063 357.98913,23.6363636 357.304348,23.3399209 C356.619565,23.0434783 355.934783,22.5494071 355.445652,22.055336 C354.858696,21.5612648 354.467391,20.8695652 354.076087,20.1778656 C353.782609,19.3873518 353.586957,18.4980237 353.586957,17.4110672 C353.586957,16.4229249 353.782609,15.4347826 354.173913,14.5454545 C354.565217,13.6561265 355.152174,12.8656126 355.934783,12.173913 C356.717391,11.4822134 357.597826,10.9881423 358.771739,10.5928854 C359.945652,10.1976285 361.217391,10 362.684783,10 C364.347826,10 365.815217,10.2964427 367.184783,10.7905138 C368.554348,11.3833992 369.728261,12.0750988 370.608696,12.9644269 L369.434783,15.1383399 Z" id="Shape" fill="#FFFFFF" />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="medium-6 columns" />
                  <div className="small-10 medium-3 columns column_border_left">
                    <div className="empty_block" />
                    <h5 className>Marketing Design Review</h5>
                    <p className="lead">Once the conversion funnel leaks are identified we will work on an audit of it providing a list of potential fixes. We will provide educated design decisions based on our experience and testing database. Includes UI Review, Hypothesis priorities, Qualitative and Quantitative Data extraction.</p>
                  </div> {/* column-text */}
                  <div className="medium-2 columns" />
                </div> {/* row */}
              </div> {/* row_container */}
              <svg className="icon-svg bg_round1">
                <use xlinkHref="symbol-defs.svg#bg_round" />
              </svg>
              <div className="row_container padding10_top">
                <div className="row">
                  <div className="medium-1 columns" />
                  <div className="small-10 medium-3 columns column_border_right">
                    <h5 className>Optimization &amp; Testing</h5>
                    <p className="lead">We will setup and conduct direct improvements, by testing them in a dedicated environment or create a fully new prototype (development costs included in pricing options).</p>
                    <div className="empty_block" />
                  </div> {/* column-text */}
                  <div className="medium-6 columns" />
                </div> {/* row */}
                <div className="phone_container2">
                  <div className="isometric">
                    <div className="mobile_phone">
                      <svg viewBox="0 0 642 1188" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        {/* Generator: Sketch 48.2 (47327) - http://www.bohemiancoding.com/sketch */}
                        <defs>
                          <path d="M3.7,0 L23.3,0 C25,0 26.4,1.4 26.4,3.1 L26.4,10.1 C26.4,11.8 25,13.2 23.3,13.2 L3.7,13.2 C2,13.2 0.6,11.8 0.6,10.1 L0.6,3.1 C0.5,1.4 1.9,0 3.7,0 Z" id="path-1" />
                          <rect id="path-3" x={0} y="0.7" width="440.4" height="51.7" />
                          <path d="M0.6,0.3 L0.6,5 C1.5,4.6 2.2,3.7 2.2,2.7 C2.2,1.7 1.5,0.7 0.6,0.3" id="path-5" />
                          <rect id="path-7" x={0} y="0.7" width="440.4" height="51.7" />
                          <path d="M2.5,0.4 L20.5,0.4 C21.4,0.4 22.1,1.1 22.1,2 L22.1,7.5 C22.1,8.4 21.4,9.1 20.5,9.1 L2.5,9.1 C1.6,9.1 0.9,8.4 0.9,7.5 L0.9,2 C0.9,1.1 1.6,0.4 2.5,0.4 Z" id="path-9" />
                          <rect id="path-11" x={0} y="0.7" width="440.4" height="51.7" />
                          <path d="M12.3,11.4 C12.4,11.3 12.4,11.2 12.4,11.1 C12.4,11 12.4,10.9 12.3,10.8 C10.8,9.5 8.6,9.5 7.1,10.8 C7,10.9 7,11 7,11.1 C7,11.2 7,11.3 7.1,11.4 L9.4,13.8 C9.5,13.9 9.6,13.9 9.7,13.9 C9.8,13.9 9.9,13.9 10,13.8 L12.3,11.4 Z M9.7,8.2 C11.1,8.2 12.5,8.7 13.6,9.7 C13.7,9.8 14,9.8 14.1,9.7 L15.5,8.3 C15.6,8.2 15.6,8.1 15.6,8 C15.6,7.9 15.6,7.8 15.5,7.7 C12.3,4.7 7.3,4.7 4,7.7 C3.9,7.8 3.9,7.9 3.9,8 C3.9,8.1 3.9,8.2 4,8.3 L5.4,9.7 C5.5,9.8 5.8,9.8 5.9,9.7 C6.9,8.7 8.2,8.2 9.7,8.2 Z M9.7,3.7 C12.3,3.7 14.8,4.7 16.7,6.5 C16.8,6.6 17.1,6.6 17.2,6.5 L18.6,5.1 C18.7,5 18.7,4.9 18.7,4.8 C18.7,4.7 18.7,4.6 18.6,4.5 C13.7,-0.2 5.8,-0.2 0.9,4.5 C0.8,4.6 0.8,4.7 0.8,4.8 C0.8,4.9 0.8,5 0.9,5.1 L2.3,6.5 C2.4,6.6 2.7,6.6 2.8,6.5 C4.6,4.7 7.1,3.7 9.7,3.7 Z" id="path-13" />
                          <rect id="path-15" x={0} y="0.7" width="440.4" height="51.7" />
                          <path d="M18.4,0.4 L19.6,0.4 C20.2,0.4 20.8,0.9 20.8,1.6 L20.8,11.8 C20.8,12.4 20.3,13 19.6,13 L18.4,13 C17.8,13 17.2,12.5 17.2,11.8 L17.2,1.6 C17.3,1 17.8,0.4 18.4,0.4 Z M13,3.2 L14.2,3.2 C14.8,3.2 15.4,3.7 15.4,4.4 L15.4,11.8 C15.4,12.4 14.9,13 14.2,13 L13,13 C12.4,13 11.8,12.5 11.8,11.8 L11.8,4.4 C11.8,3.7 12.3,3.2 13,3.2 Z M7.5,5.9 L8.7,5.9 C9.3,5.9 9.9,6.4 9.9,7.1 L9.9,11.8 C9.9,12.4 9.4,13 8.7,13 L7.5,13 C6.9,13 6.3,12.5 6.3,11.8 L6.3,7.1 C6.3,6.4 6.8,5.9 7.5,5.9 Z M2,8.3 L3.2,8.3 C3.8,8.3 4.4,8.8 4.4,9.5 L4.4,11.8 C4.4,12.4 3.9,13 3.2,13 L2,13 C1.4,13 0.8,12.5 0.8,11.8 L0.8,9.5 C0.8,8.8 1.4,8.3 2,8.3 Z" id="path-17" />
                          <rect id="path-19" x={0} y="0.7" width="440.4" height="51.7" />
                          <path d="M2.1,0.7 L20.1,0.7 C21,0.7 21.7,1.4 21.7,2.3 L21.7,7.8 C21.7,8.7 21,9.4 20.1,9.4 L2.1,9.4 C1.2,9.4 0.5,8.7 0.5,7.8 L0.5,2.3 C0.6,1.4 1.3,0.7 2.1,0.7 Z" id="path-21" />
                          <rect id="path-23" x="0.6" y={0} width="440.4" height="51.7" />
                          <path d="M11.9,10.8 C12,10.7 12,10.6 12,10.5 C12,10.4 12,10.3 11.9,10.2 C10.4,8.9 8.2,8.9 6.7,10.2 C6.6,10.3 6.6,10.4 6.6,10.5 C6.6,10.6 6.6,10.7 6.7,10.8 L9,13.2 C9.1,13.3 9.2,13.3 9.3,13.3 C9.4,13.3 9.5,13.3 9.6,13.2 L11.9,10.8 Z M9.3,7.5 C10.7,7.5 12.1,8 13.2,9 C13.3,9.1 13.6,9.1 13.7,9 L15.1,7.6 C15.2,7.5 15.2,7.4 15.2,7.3 C15.2,7.2 15.2,7.1 15.1,7 C11.9,4 6.9,4 3.6,7 C3.5,7.1 3.5,7.2 3.5,7.3 C3.5,7.4 3.5,7.5 3.6,7.6 L5,9 C5.1,9.1 5.4,9.1 5.5,9 C6.5,8 7.9,7.5 9.3,7.5 Z M9.3,3 C11.9,3 14.4,4 16.3,5.8 C16.4,5.9 16.7,5.9 16.8,5.8 L18.2,4.4 C18.3,4.3 18.3,4.2 18.3,4.1 C18.3,4 18.3,3.9 18.2,3.8 C13.3,-0.9 5.4,-0.9 0.5,3.8 C0.4,3.9 0.4,4 0.4,4.1 C0.4,4.2 0.4,4.3 0.5,4.4 L1.9,5.8 C2,5.9 2.3,5.9 2.4,5.8 C4.2,4 6.7,3 9.3,3 Z" id="path-25" />
                          <rect id="path-27" x="0.6" y={0} width="440.4" height="51.7" />
                          <path d="M18.1,0.7 L19.3,0.7 C19.9,0.7 20.5,1.2 20.5,1.9 L20.5,12.1 C20.5,12.7 20,13.3 19.3,13.3 L18.1,13.3 C17.5,13.3 16.9,12.8 16.9,12.1 L16.9,1.9 C16.9,1.3 17.5,0.7 18.1,0.7 Z M12.6,3.5 L13.8,3.5 C14.4,3.5 15,4 15,4.7 L15,12.1 C15,12.7 14.5,13.3 13.8,13.3 L12.6,13.3 C12,13.3 11.4,12.8 11.4,12.1 L11.4,4.7 C11.5,4 12,3.5 12.6,3.5 Z M7.1,6.2 L8.3,6.2 C8.9,6.2 9.5,6.7 9.5,7.4 L9.5,12.1 C9.5,12.7 9,13.3 8.3,13.3 L7.1,13.3 C6.5,13.3 5.9,12.8 5.9,12.1 L5.9,7.4 C6,6.8 6.5,6.2 7.1,6.2 Z M1.7,8.6 L2.9,8.6 C3.5,8.6 4.1,9.1 4.1,9.8 L4.1,12.1 C4.1,12.7 3.6,13.3 2.9,13.3 L1.7,13.3 C1.1,13.3 0.5,12.8 0.5,12.1 L0.5,9.8 C0.5,9.1 1,8.6 1.7,8.6 Z" id="path-29" />
                          <rect id="path-31" x="0.6" y={0} width="440.4" height="51.7" />
                          <linearGradient x1="49.9997985%" y1="99.9991273%" x2="49.9997985%" y2="0.00850225225%" id="linearGradient-33">
                            <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                            <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                            <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="50.0131529%" y1="99.6345238%" x2="50.0131529%" y2="-0.589285714%" id="linearGradient-34">
                            <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                            <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                            <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="50.0131529%" y1="100.279762%" x2="50.0131529%" y2="0.0571428571%" id="linearGradient-35">
                            <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                            <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                            <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="50.0425461%" y1="99.8848485%" x2="50.0425461%" y2="0.231060606%" id="linearGradient-36">
                            <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                            <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                            <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="50.0520101%" y1="99.8848485%" x2="50.0520101%" y2="0.231060606%" id="linearGradient-37">
                            <stop stopColor="#000000" stopOpacity="0.12" offset="0%" />
                            <stop stopColor="#000000" stopOpacity="0.09" offset="55%" />
                            <stop stopColor="#000000" stopOpacity="0.02" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="50.0131529%" y1="100.177381%" x2="50.0131529%" y2="-0.0464285714%" id="linearGradient-38">
                            <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                            <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                            <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="50.0202643%" y1="100.177381%" x2="50.0202643%" y2="-0.0464285714%" id="linearGradient-39">
                            <stop stopColor="#000000" stopOpacity="0.12" offset="0%" />
                            <stop stopColor="#000000" stopOpacity="0.09" offset="55%" />
                            <stop stopColor="#000000" stopOpacity="0.02" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="50.0202643%" y1="99.6345238%" x2="50.0202643%" y2="-0.589285714%" id="linearGradient-40">
                            <stop stopColor="#000000" stopOpacity="0.12" offset="0%" />
                            <stop stopColor="#000000" stopOpacity="0.09" offset="55%" />
                            <stop stopColor="#000000" stopOpacity="0.02" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="50.0202643%" y1="100.279762%" x2="50.0202643%" y2="0.0571428571%" id="linearGradient-41">
                            <stop stopColor="#000000" stopOpacity="0.12" offset="0%" />
                            <stop stopColor="#000000" stopOpacity="0.09" offset="55%" />
                            <stop stopColor="#000000" stopOpacity="0.02" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="50.0202643%" y1="99.7357143%" x2="50.0202643%" y2="-0.486904762%" id="linearGradient-42">
                            <stop stopColor="#000000" stopOpacity="0.12" offset="0%" />
                            <stop stopColor="#000000" stopOpacity="0.09" offset="55%" />
                            <stop stopColor="#000000" stopOpacity="0.02" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="50.0202643%" y1="100.383333%" x2="50.0202643%" y2="0.15952381%" id="linearGradient-43">
                            <stop stopColor="#000000" stopOpacity="0.12" offset="0%" />
                            <stop stopColor="#000000" stopOpacity="0.09" offset="55%" />
                            <stop stopColor="#000000" stopOpacity="0.02" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="50.0131529%" y1="99.7357143%" x2="50.0131529%" y2="-0.486904762%" id="linearGradient-44">
                            <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                            <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                            <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="50.0131529%" y1="100.383333%" x2="50.0131529%" y2="0.15952381%" id="linearGradient-45">
                            <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                            <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                            <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="50.0198355%" y1="100.020266%" x2="50.0198355%" y2="0.00980725624%" id="linearGradient-46">
                            <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                            <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                            <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="49.9589286%" y1="100.070942%" x2="49.9589286%" y2="0.0358766234%" id="linearGradient-47">
                            <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                            <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                            <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="49.9589286%" y1="100.081656%" x2="49.9589286%" y2="0.0465909091%" id="linearGradient-48">
                            <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                            <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                            <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="49.9589286%" y1="99.9805195%" x2="49.9589286%" y2="-0.0545454545%" id="linearGradient-49">
                            <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
                            <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
                            <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
                          </linearGradient>
                        </defs>
                        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                          <g id="hdiw_iphonex2">
                            <rect id="Rectangle-path" x="0.1" y="50.1" width="640.4" height="1137.3" />
                            <g id="Calque_2" transform="translate(0.000000, 47.000000)" fill="#DBDBDB" fillRule="nonzero">
                              <rect id="Rectangle-path" x={0} y="0.4" width="641.7" height="1135.4" />
                            </g>
                            <rect id="Rectangle-path" fill="#25DDDF" fillRule="nonzero" x="0.9" y="46.3" width="640.1" height="242.3" />
                            <g id="Clipped" transform="translate(377.000000, 58.000000)">
                              <mask id="mask-2" fill="white">
                                <use xlinkHref="#path-1" />
                              </mask>
                              <g id="SVGID_1_" />
                              <g mask="url(#mask-2)">
                                <g transform="translate(-394.000000, -21.000000)">
                                  <mask id="mask-4" fill="white">
                                    <use xlinkHref="#path-3" />
                                  </mask>
                                  <g id="SVGID_3_" stroke="none" fill="none" />
                                  <path d="M397.7,21 L417.3,21 C419,21 420.4,22.4 420.4,24.1 L420.4,31.1 C420.4,32.8 419,34.2 417.3,34.2 L397.7,34.2 C396,34.2 394.6,32.8 394.6,31.1 L394.6,24.1 C394.5,22.4 395.9,21 397.7,21 Z" id="Shape" stroke="#FFFFFF" strokeWidth={2} fill="none" opacity="0.35" mask="url(#mask-4)" />
                                </g>
                              </g>
                            </g>
                            <g id="Clipped" transform="translate(404.000000, 62.000000)">
                              <mask id="mask-6" fill="white">
                                <use xlinkHref="#path-5" />
                              </mask>
                              <g id="SVGID_5_" />
                              <g mask="url(#mask-6)">
                                <g transform="translate(-421.000000, -25.000000)">
                                  <mask id="mask-8" fill="white">
                                    <use xlinkHref="#path-7" />
                                  </mask>
                                  <g id="SVGID_7_" stroke="none" fill="none" />
                                  <rect id="Rectangle-path" stroke="none" fill="#FFFFFF" fillRule="nonzero" opacity="0.4" mask="url(#mask-8)" x="415.7" y="19.5" width="13.3" height="16.4" />
                                </g>
                              </g>
                            </g>
                            <g id="Clipped" transform="translate(379.000000, 60.000000)">
                              <mask id="mask-10" fill="white">
                                <use xlinkHref="#path-9" />
                              </mask>
                              <g id="SVGID_9_" />
                              <g mask="url(#mask-10)">
                                <g transform="translate(-396.000000, -23.000000)">
                                  <mask id="mask-12" fill="white">
                                    <use xlinkHref="#path-11" />
                                  </mask>
                                  <g id="SVGID_11_" stroke="none" fill="none" />
                                  <rect id="Rectangle-path" stroke="none" fill="#FFFFFF" fillRule="nonzero" mask="url(#mask-12)" x={391} y="17.5" width="32.9" height="20.4" />
                                </g>
                              </g>
                            </g>
                            <g id="Clipped" transform="translate(353.000000, 57.000000)">
                              <mask id="mask-14" fill="white">
                                <use xlinkHref="#path-13" />
                              </mask>
                              <g id="SVGID_13_" />
                              <g mask="url(#mask-14)">
                                <g transform="translate(-370.000000, -20.000000)">
                                  <mask id="mask-16" fill="white">
                                    <use xlinkHref="#path-15" />
                                  </mask>
                                  <g id="SVGID_15_" stroke="none" fill="none" />
                                  <rect id="Rectangle-path" stroke="none" fill="#FFFFFF" fillRule="nonzero" mask="url(#mask-16)" x="364.8" y="15.2" width="29.7" height="24.6" />
                                </g>
                              </g>
                            </g>
                            <g id="Clipped" transform="translate(327.000000, 58.000000)">
                              <mask id="mask-18" fill="white">
                                <use xlinkHref="#path-17" />
                              </mask>
                              <g id="SVGID_17_" />
                              <g mask="url(#mask-18)">
                                <g transform="translate(-344.000000, -21.000000)">
                                  <mask id="mask-20" fill="white">
                                    <use xlinkHref="#path-19" />
                                  </mask>
                                  <g id="SVGID_19_" stroke="none" fill="none" />
                                  <rect id="Rectangle-path" stroke="none" fill="#FFFFFF" fillRule="nonzero" mask="url(#mask-20)" x={339} y="15.6" width="31.7" height="24.3" />
                                </g>
                              </g>
                            </g>
                            <g id="Clipped" transform="translate(572.000000, 70.000000)">
                              <mask id="mask-22" fill="white">
                                <use xlinkHref="#path-21" />
                              </mask>
                              <g id="SVGID_21_" />
                              <g mask="url(#mask-22)">
                                <g transform="translate(-397.000000, -22.000000)">
                                  <mask id="mask-24" fill="white">
                                    <use xlinkHref="#path-23" />
                                  </mask>
                                  <g id="SVGID_23_" stroke="none" fill="none" />
                                  <rect id="Rectangle-path" stroke="none" fill="#FFFFFF" fillRule="nonzero" mask="url(#mask-24)" x="391.7" y="16.8" width="32.9" height="20.4" />
                                </g>
                              </g>
                            </g>
                            <g id="Clipped" transform="translate(546.000000, 68.000000)">
                              <mask id="mask-26" fill="white">
                                <use xlinkHref="#path-25" />
                              </mask>
                              <g id="SVGID_25_" />
                              <g mask="url(#mask-26)">
                                <g transform="translate(-371.000000, -20.000000)">
                                  <mask id="mask-28" fill="white">
                                    <use xlinkHref="#path-27" />
                                  </mask>
                                  <g id="SVGID_27_" stroke="none" fill="none" />
                                  <rect id="Rectangle-path" stroke="none" fill="#FFFFFF" fillRule="nonzero" mask="url(#mask-28)" x="365.5" y="14.5" width="29.7" height="24.6" />
                                </g>
                              </g>
                            </g>
                            <g id="Clipped" transform="translate(520.000000, 68.000000)">
                              <mask id="mask-30" fill="white">
                                <use xlinkHref="#path-29" />
                              </mask>
                              <g id="SVGID_29_" />
                              <g mask="url(#mask-30)">
                                <g transform="translate(-345.000000, -20.000000)">
                                  <mask id="mask-32" fill="white">
                                    <use xlinkHref="#path-31" />
                                  </mask>
                                  <g id="SVGID_31_" stroke="none" fill="none" />
                                  <rect id="Rectangle-path" stroke="none" fill="#FFFFFF" fillRule="nonzero" mask="url(#mask-32)" x="339.6" y="14.9" width="31.7" height="24.3" />
                                </g>
                              </g>
                            </g>
                            <path d="M449.6,100.4 L181.4,100.4 C159.1,100.4 140.8,82.1 140.8,59.8 L140.8,40.7 C140.8,18.4 159.1,0.1 181.4,0.1 L449.7,0.1 C472,0.1 490.3,18.4 490.3,40.7 L490.3,59.8 C490.2,82.1 471.9,100.4 449.6,100.4 Z" id="Shape" fill="#FFFFFF" fillRule="nonzero" />
                            <g id="Group" transform="translate(60.000000, 67.000000)" fill="#FFFFFF" fillRule="nonzero">
                              <path d="M10.1,7.6 C10.1,12.2 8.4,14.8 5.4,14.8 C2.7,14.8 0.9,12.3 0.9,7.8 C0.9,3.2 2.9,0.7 5.6,0.7 C8.5,0.6 10.1,3.2 10.1,7.6 Z M2.7,7.8 C2.7,11.3 3.8,13.4 5.5,13.4 C7.4,13.4 8.3,11.2 8.3,7.7 C8.3,4.3 7.4,2.1 5.5,2.1 C3.9,2.1 2.7,4.1 2.7,7.8 Z" id="Shape" />
                              <path d="M12.9,13.2 C13.3,13.2 13.8,13.2 14.4,13.1 C15.5,13 16.5,12.5 17.3,11.8 C18.2,11 18.9,9.8 19.1,8.2 L19,8.2 C18.2,9.1 17.2,9.7 15.8,9.7 C13.3,9.7 11.8,7.9 11.8,5.5 C11.8,2.9 13.7,0.6 16.5,0.6 C19.3,0.6 21,2.9 21,6.4 C21,9.4 20,11.5 18.6,12.8 C17.6,13.8 16.1,14.5 14.6,14.6 C13.9,14.7 13.3,14.7 12.9,14.7 L12.9,13.2 Z M13.6,5.4 C13.6,7.1 14.6,8.3 16.2,8.3 C17.4,8.3 18.4,7.7 18.9,6.9 C19,6.7 19.1,6.5 19.1,6.2 C19.1,3.9 18.2,2.1 16.3,2.1 C14.7,2.1 13.6,3.4 13.6,5.4 Z" id="Shape" />
                              <path d="M22.8,6 C22.8,5.2 23.3,4.7 24.1,4.7 C24.9,4.7 25.3,5.2 25.3,6 C25.3,6.7 24.8,7.3 24,7.3 C23.3,7.3 22.8,6.8 22.8,6 Z M22.8,13.5 C22.8,12.7 23.3,12.2 24.1,12.2 C24.9,12.2 25.3,12.7 25.3,13.5 C25.3,14.2 24.8,14.8 24,14.8 C23.3,14.8 22.8,14.2 22.8,13.5 Z" id="Shape" />
                              <path d="M32.7,14.5 L32.7,10.8 L26.4,10.8 L26.4,9.6 L32.5,0.9 L34.5,0.9 L34.5,9.4 L36.4,9.4 L36.4,10.8 L34.5,10.8 L34.5,14.5 L32.7,14.5 Z M32.7,9.4 L32.7,4.8 C32.7,4.1 32.7,3.4 32.8,2.7 L32.7,2.7 C32.3,3.5 31.9,4.1 31.6,4.7 L28.3,9.3 L32.7,9.3 L32.7,9.4 Z" id="Shape" />
                              <polygon id="Shape" points="41.8 2.6 41.8 2.6 39.4 3.9 39 2.5 42 0.9 43.6 0.9 43.6 14.5 41.8 14.5" />
                            </g>
                            <polygon id="Shape" fill="url(#linearGradient-33)" fillRule="nonzero" points="90.4 308.4 90.4 326.4 90.4 663.6 537.1 663.6 537.1 326.4 537.1 308.4" />
                            <rect id="Rectangle-path" fill="#F5F5F5" fillRule="nonzero" x="94.7" y="313.2" width="435.7" height="17.4" />
                            <circle id="Oval" fill="#FF5252" fillRule="nonzero" cx="107.3" cy="321.6" r="4.2" />
                            <circle id="Oval" fill="#FFFF00" fillRule="nonzero" cx="118.9" cy="321.6" r="4.2" />
                            <circle id="Oval" fill="#69F0AE" fillRule="nonzero" cx="130.5" cy="321.6" r="4.2" />
                            <g id="version-a" transform="translate(96.000000, 330.000000)" fillRule="nonzero">
                              <rect id="Rectangle-path" fill="#FFFFFF" x="0.7" y="0.5" width="216.3" height="326.8" />
                              <rect id="Rectangle-path" fill="#25DDDF" x="37.5" y="114.7" width="115.8" height="9.5" />
                              <rect id="Rectangle-path" fill="url(#linearGradient-34)" x="19.1" y="155.8" width="158.9" height="8.4" />
                              <rect id="Rectangle-path" fill="url(#linearGradient-35)" x="19.1" y="168.9" width="158.9" height="8.4" />
                              <rect id="Rectangle-path" fill="#25DDDF" x="20.7" y="143.6" width="156.3" height="5.8" />
                              <rect id="Rectangle-path" fill="#25DDDF" x="20.7" y="183.1" width="156.3" height="5.8" />
                              <rect id="Rectangle-path" fill="#25DDDF" x="20.7" y="196.3" width="156.3" height="5.8" />
                              <path d="M89.1,61 L83.6,77.8 L76.5,77.8 L94.6,24.5 L102.9,24.5 L121.1,77.8 L113.7,77.8 L108,61 L89.1,61 Z M106.6,55.7 L101.4,40.4 C100.2,36.9 99.4,33.8 98.6,30.7 L98.4,30.7 C97.6,33.9 96.7,37.1 95.7,40.4 L90.5,55.8 L106.6,55.8 L106.6,55.7 Z" id="Shape" fill="#25DDDF" />
                              <g id="Group" transform="translate(26.000000, 239.000000)" fill="#FDCBA9">
                                <polygon id="Shape" points="21.1 9.5 21.1 26.4 37.4 26.4 37.4 30.7 21.1 30.7 21.1 47.8 16.5 47.8 16.5 30.7 0.2 30.7 0.2 26.4 16.5 26.4 16.5 9.5" />
                                <polygon id="Shape" points="57.3 6.9 57.2 6.9 49.1 11.3 47.9 6.5 58 1 63.4 1 63.4 47.8 57.3 47.8" />
                                <path d="M100,47.8 L100,35 L78.3,35 L78.3,30.8 L99.2,0.9 L106,0.9 L106,30 L112.6,30 L112.6,35 L106,35 L106,47.7 L100,47.7 L100,47.8 Z M100,30.1 L100,14.5 C100,12.1 100.1,9.6 100.2,7.2 L100,7.2 C98.6,9.9 97.4,12 96.1,14.1 L84.7,30 L84.7,30.1 L100,30.1 Z" id="Shape" />
                                <path d="M138.5,14.1 C138.5,24 133.3,28.9 127.3,28.9 C121.5,28.9 116.4,24.2 116.4,14.8 C116.4,5.4 121.5,0.2 127.7,0.2 C134.2,0.2 138.5,5.2 138.5,14.1 Z M121.3,14.6 C121.2,20.6 123.4,25.1 127.3,25.1 C131.5,25.1 133.3,20.6 133.3,14.4 C133.3,8.7 131.6,4 127.3,4 C123.4,4 121.3,8.7 121.3,14.6 Z M126.8,48.6 L154.3,0.2 L158.3,0.2 L130.8,48.6 L126.8,48.6 Z M168.9,33.5 C168.9,43.4 163.7,48.3 157.7,48.3 C151.9,48.3 146.8,43.6 146.8,34.3 C146.8,24.9 151.9,19.6 158.1,19.6 C164.7,19.5 168.9,24.6 168.9,33.5 Z M151.8,33.9 C151.7,39.9 154,44.4 157.9,44.4 C162.1,44.4 163.9,39.9 163.9,33.7 C163.9,28 162.2,23.3 157.9,23.3 C154,23.4 151.8,28 151.8,33.9 Z" id="Shape" />
                              </g>
                            </g>
                            <g id="version-b" transform="translate(115.000000, 330.000000)" fillRule="nonzero">
                              <rect id="Rectangle-path" fill="#25DDDF" x="199.5" y="0.5" width="217.8" height="326.8" />
                              <rect id="Rectangle-path" fill="url(#linearGradient-36)" x="16.4" y="113.1" width="119.4" height="13.2" />
                              <rect id="Rectangle-path" fill="url(#linearGradient-37)" x="245.8" y="113.1" width="119.4" height="13.2" />
                              <rect id="Rectangle-path" fill="url(#linearGradient-38)" x="0.1" y="142.6" width="158.9" height="8.4" />
                              <rect id="Rectangle-path" fill="url(#linearGradient-39)" x="229.5" y="142.6" width="158.9" height="8.4" />
                              <rect id="Rectangle-path" fill="url(#linearGradient-40)" x="229.5" y="155.8" width="158.9" height="8.4" />
                              <rect id="Rectangle-path" fill="url(#linearGradient-41)" x="229.5" y="168.9" width="158.9" height="8.4" />
                              <rect id="Rectangle-path" fill="url(#linearGradient-42)" x="229.5" y="182.1" width="158.9" height="8.4" />
                              <rect id="Rectangle-path" fill="url(#linearGradient-43)" x="229.5" y="195.2" width="158.9" height="8.4" />
                              <rect id="Rectangle-path" fill="url(#linearGradient-44)" x="0.1" y="182.1" width="158.9" height="8.4" />
                              <rect id="Rectangle-path" fill="url(#linearGradient-45)" x="0.1" y="195.2" width="158.9" height="8.4" />
                              <rect id="Rectangle-path" fill="#25DDDF" x="1.7" y="156.8" width="156.3" height="5.8" />
                              <rect id="Rectangle-path" fill="#25DDDF" x="1.7" y={170} width="156.3" height="5.8" />
                              <rect id="Rectangle-path" fill="#FFFFFF" x="247.4" y="114.7" width="115.8" height="9.5" />
                              <rect id="Rectangle-path" fill="#FFFFFF" x="230.6" y="143.6" width="156.3" height="5.8" />
                              <rect id="Rectangle-path" fill="#FFFFFF" x="230.6" y="156.8" width="156.3" height="5.8" />
                              <rect id="Rectangle-path" fill="#FFFFFF" x="230.6" y={170} width="156.3" height="5.8" />
                              <rect id="Rectangle-path" fill="#FFFFFF" x="230.6" y="183.1" width="156.3" height="5.8" />
                              <rect id="Rectangle-path" fill="#FFFFFF" x="230.6" y="196.3" width="156.3" height="5.8" />
                              <path d="M292.1,26.2 C294.8,25.6 299.2,25.2 303.5,25.2 C309.8,25.2 313.8,26.3 316.8,28.7 C319.3,30.6 320.8,33.5 320.8,37.3 C320.8,42 317.7,46.1 312.6,48 L312.6,48.1 C317.2,49.3 322.6,53.1 322.6,60.3 C322.6,64.5 320.9,67.6 318.5,70 C315.1,73.1 309.6,74.5 301.7,74.5 C297.4,74.5 294.1,74.2 292,73.9 L292,26.2 L292.1,26.2 Z M298.4,46.1 L304.1,46.1 C310.7,46.1 314.6,42.6 314.6,38 C314.6,32.3 310.3,30.1 303.9,30.1 C301,30.1 299.4,30.3 298.4,30.5 L298.4,46.1 Z M298.4,69.4 C299.6,69.6 301.4,69.7 303.7,69.7 C310.2,69.7 316.2,67.3 316.2,60.3 C316.2,53.7 310.5,50.9 303.7,50.9 L298.5,50.9 L298.5,69.4 L298.4,69.4 Z" id="Shape" fill="#FFFFFF" />
                            </g>
                            <rect id="Rectangle-path" fill="url(#linearGradient-46)" fillRule="nonzero" x={160} y="804.1" width="316.1" height="352.8" />
                            <rect id="Rectangle-path" fill="#ECEFF1" fillRule="nonzero" x="165.3" y="1039.7" width="305.7" height="109.6" />
                            <g id="Group" opacity="0.5" transform="translate(283.000000, 1065.000000)" fill="#64FFDA" fillRule="nonzero">
                              <rect id="Rectangle-path" x="0.9" y="0.7" width="11.8" height="56.1" />
                            </g>
                            <g id="Group" opacity="0.4" transform="translate(307.000000, 1065.000000)" fill="#64FFDA" fillRule="nonzero">
                              <rect id="Rectangle-path" x="0.3" y="0.7" width="11.8" height="56.1" />
                            </g>
                            <g id="Group" opacity="0.3" transform="translate(330.000000, 1065.000000)" fill="#64FFDA" fillRule="nonzero">
                              <rect id="Rectangle-path" x="0.7" y="0.7" width="11.8" height="56.1" />
                            </g>
                            <circle id="Oval" fill="#25DDDF" fillRule="nonzero" cx="427.7" cy="1093.4" r="28.6" />
                            <rect id="Rectangle-path" fill="#ECEFF1" fillRule="nonzero" x="165.3" y="925.9" width="305.7" height="109.6" />
                            <g id="Group" opacity="0.5" transform="translate(283.000000, 951.000000)" fill="#64FFDA" fillRule="nonzero">
                              <rect id="Rectangle-path" x="0.9" y="0.9" width="11.8" height="56.1" />
                            </g>
                            <g id="Group" opacity="0.4" transform="translate(307.000000, 951.000000)" fill="#64FFDA" fillRule="nonzero">
                              <rect id="Rectangle-path" x="0.3" y="0.9" width="11.8" height="56.1" />
                            </g>
                            <g id="Group" opacity="0.3" transform="translate(330.000000, 951.000000)" fill="#64FFDA" fillRule="nonzero">
                              <rect id="Rectangle-path" x="0.7" y="0.9" width="11.8" height="56.1" />
                            </g>
                            <circle id="Oval" fill="#25DDDF" fillRule="nonzero" cx="427.7" cy="979.6" r="28.6" />
                            <rect id="Rectangle-path" fill="#ECEFF1" fillRule="nonzero" x="165.3" y={812} width="305.7" height="109.6" />
                            <g id="Group" opacity="0.5" transform="translate(283.000000, 838.000000)" fill="#64FFDA" fillRule="nonzero">
                              <rect id="Rectangle-path" x="0.9" y={0} width="11.8" height="56.1" />
                            </g>
                            <g id="Group" opacity="0.4" transform="translate(307.000000, 838.000000)" fill="#64FFDA" fillRule="nonzero">
                              <rect id="Rectangle-path" x="0.3" y={0} width="11.8" height="56.1" />
                            </g>
                            <g id="Group" opacity="0.3" transform="translate(330.000000, 838.000000)" fill="#64FFDA" fillRule="nonzero">
                              <rect id="Rectangle-path" x="0.7" y={0} width="11.8" height="56.1" />
                            </g>
                            <circle id="Oval" fill="url(#linearGradient-47)" fillRule="nonzero" cx="427.7" cy="865.7" r="30.8" />
                            <circle id="Oval" fill="url(#linearGradient-48)" fillRule="nonzero" cx="427.7" cy="980.3" r="30.8" />
                            <circle id="Oval" fill="url(#linearGradient-49)" fillRule="nonzero" cx="427.7" cy="1094.2" r="30.8" />
                            <circle id="Oval" fill="#25DDDF" fillRule="nonzero" cx="427.7" cy="865.7" r="28.6" />
                            <g id="Group" transform="translate(177.000000, 805.000000)" stroke="#FDCBA9" strokeWidth={3}>
                              <path d="M287.2,187 C286.9,188.1 286.5,189.3 286.2,190.4" id="Shape" />
                              <path d="M238.3,32.1 C239.2,32.8 240.1,33.6 241,34.4" id="Shape" />
                            </g>
                            <g id="traces-iteration" transform="translate(150.000000, 805.000000)" stroke="#FDCBA9" strokeWidth={3}>
                              <path className="path" d="M277.2,336.7 C245.5,353.9 210,362.9 173.9,362.9 C103.2,362.9 40.4,329.1 0.8,276.7" id="Shape" />
                              <path className="path2" d="M310.9,197 C290.2,252.6 236.7,292.1 173.9,292.1 C93.2,292.1 27.8,226.7 27.8,146 C27.8,65.3 93.2,0 173.9,0 C205.9,0 237.1,10.5 262.5,29.9" id="Shape" />
                              <g id="Group" transform="translate(161.000000, 63.000000)">
                                <path className="path" d="M0.5,1.2 C1.7,1 2.9,0.9 4,0.8" id="Shape" />
                                <path className="path2" d="M10.8,0.3 C11.5,0.3 12.2,0.3 12.9,0.3 C58.6,0.3 95.7,37.4 95.7,83.1 C95.7,97.2 92.1,111.1 85.2,123.4" id="Shape" />
                                <path className="path" d="M83.5,126.4 C82.9,127.4 82.2,128.4 81.6,129.4" id="Shape" />
                              </g>
                            </g>
                            <circle id="Oval" fill="#25DDDF" fillRule="nonzero" cx="54.7" cy="761.2" r="29.7" />
                            <g id="Group" transform="translate(41.000000, 740.000000)" fillRule="nonzero">
                              <path d="M26.4,23.6 L26.4,27 C26.4,27.3 26.3,27.6 26.1,27.8 C25.9,28 25.6,28.1 25.2,28.1 L22,28.1 L22,36.6 L16.8,36.6 L16.8,28.1 L2.3,28.1 C1.9,28.1 1.5,28 1.2,27.7 C0.9,27.5 0.7,27.1 0.6,26.8 L-7.10542736e-15,23.8 L16.4,1.8 L22,1.8 L22,23.4 L26.4,23.4 L26.4,23.6 Z M16.9,23.6 L16.9,12.2 C16.9,11.1 17,9.9 17.1,8.6 L6.3,23.5 L16.9,23.5 L16.9,23.6 Z" id="Shape" fill="#FFFFFF" />
                              <path d="M72.5,4.8 C72.5,5.3 72.4,5.8 72.2,6.2 C72,6.6 71.7,7 71.4,7.4 C71.1,7.7 70.7,8 70.2,8.2 C69.7,8.4 69.2,8.5 68.7,8.5 C68.2,8.5 67.7,8.4 67.2,8.2 C66.7,8 66.3,7.7 66,7.4 C65.7,7.1 65.4,6.7 65.2,6.2 C65,5.8 64.9,5.3 64.9,4.8 C64.9,4.3 65,3.8 65.2,3.3 C65.4,2.8 65.7,2.4 66,2.1 C66.3,1.8 66.7,1.5 67.2,1.3 C67.7,1.1 68.1,1 68.7,1 C69.2,1 69.7,1.1 70.2,1.3 C70.7,1.5 71.1,1.8 71.4,2.1 C71.7,2.4 72,2.8 72.2,3.3 C72.4,3.8 72.5,4.3 72.5,4.8 Z M71.7,12 L71.7,36.6 L65.7,36.6 L65.7,12 L71.7,12 Z" id="Shape" fill="#25DDDF" />
                              <path d="M86,37 C83.9,37 82.2,36.4 81.1,35.2 C80,34 79.4,32.3 79.4,30.2 L79.4,16.4 L76.9,16.4 C76.6,16.4 76.3,16.3 76.1,16.1 C75.9,15.9 75.8,15.6 75.8,15.2 L75.8,12.8 L79.8,12.2 L81,5.5 C81.1,5.2 81.2,4.9 81.5,4.8 C81.7,4.6 82,4.5 82.4,4.5 L85.5,4.5 L85.5,12.3 L92.1,12.3 L92.1,16.5 L85.5,16.5 L85.5,29.8 C85.5,30.6 85.7,31.2 86.1,31.6 C86.5,32 87,32.2 87.6,32.2 C88,32.2 88.3,32.2 88.5,32.1 C88.7,32 89,31.9 89.1,31.8 C89.3,31.7 89.4,31.6 89.6,31.5 C89.7,31.4 89.9,31.4 90,31.4 C90.2,31.4 90.3,31.4 90.4,31.5 C90.5,31.6 90.6,31.7 90.8,31.9 L92.6,34.8 C91.7,35.5 90.7,36.1 89.6,36.4 C88.3,36.8 87.2,37 86,37 Z" id="Shape" fill="#25DDDF" />
                              <path d="M100,25.1 C100.1,26.4 100.3,27.5 100.7,28.4 C101.1,29.3 101.5,30.1 102.1,30.7 C102.7,31.3 103.4,31.7 104.2,32 C105,32.3 105.9,32.4 106.8,32.4 C107.7,32.4 108.6,32.3 109.3,32.1 C110,31.9 110.6,31.6 111.1,31.4 C111.6,31.1 112.1,30.9 112.5,30.7 C112.9,30.5 113.3,30.4 113.6,30.4 C114.1,30.4 114.5,30.6 114.7,31 L116.4,33.2 C115.7,34 115,34.6 114.2,35.1 C113.4,35.6 112.5,36 111.6,36.3 C110.7,36.6 109.8,36.8 108.9,37 C108,37.1 107.1,37.2 106.2,37.2 C104.5,37.2 102.9,36.9 101.4,36.3 C99.9,35.7 98.6,34.9 97.6,33.8 C96.5,32.7 95.7,31.3 95,29.7 C94.4,28.1 94.1,26.2 94.1,24 C94.1,22.3 94.4,20.7 94.9,19.3 C95.4,17.9 96.2,16.5 97.2,15.4 C98.2,14.3 99.5,13.4 100.9,12.8 C102.4,12.2 104,11.8 105.9,11.8 C107.5,11.8 108.9,12 110.2,12.5 C111.5,13 112.6,13.7 113.6,14.7 C114.5,15.7 115.3,16.8 115.8,18.2 C116.3,19.6 116.6,21.2 116.6,22.9 C116.6,23.8 116.5,24.4 116.3,24.7 C116.1,25 115.7,25.2 115.2,25.2 L100,25.2 L100,25.1 Z M111.3,21.5 C111.3,20.7 111.2,20 111,19.3 C110.8,18.6 110.5,18 110,17.5 C109.6,17 109,16.6 108.4,16.3 C107.7,16 107,15.9 106.1,15.9 C104.4,15.9 103,16.4 102.1,17.4 C101.1,18.4 100.5,19.8 100.2,21.6 L111.3,21.6 L111.3,21.5 Z" id="Shape" fill="#25DDDF" />
                              <path d="M126.6,16.3 C127.4,14.8 128.3,13.7 129.3,12.8 C130.4,12 131.6,11.5 133,11.5 C134.1,11.5 135,11.7 135.7,12.2 L135.3,16.6 C135.2,16.9 135.1,17.1 135,17.2 C134.8,17.3 134.6,17.4 134.4,17.4 C134.2,17.4 133.8,17.4 133.3,17.3 C132.8,17.2 132.4,17.2 131.9,17.2 C131.2,17.2 130.7,17.3 130.1,17.5 C129.6,17.7 129.1,18 128.7,18.3 C128.3,18.7 127.9,19.1 127.6,19.6 C127.3,20.1 127,20.7 126.7,21.4 L126.7,36.6 L120.8,36.6 L120.8,12 L124.3,12 C124.9,12 125.3,12.1 125.6,12.3 C125.8,12.5 126,12.9 126.1,13.5 L126.6,16.3 Z" id="Shape" fill="#25DDDF" />
                              <path d="M138.1,15.4 C140.9,12.8 144.3,11.5 148.3,11.5 C149.7,11.5 151,11.7 152.2,12.2 C153.3,12.7 154.3,13.3 155.1,14.2 C155.9,15 156.5,16 156.9,17.2 C157.3,18.4 157.5,19.6 157.5,21 L157.5,36.6 L154.8,36.6 C154.2,36.6 153.8,36.5 153.5,36.3 C153.2,36.1 153,35.8 152.8,35.3 L152.3,33.5 C151.7,34.1 151.1,34.6 150.5,35 C149.9,35.4 149.3,35.8 148.7,36.1 C148.1,36.4 147.4,36.6 146.6,36.8 C145.9,37 145.1,37 144.2,37 C143.2,37 142.2,36.9 141.3,36.6 C140.4,36.3 139.7,35.9 139,35.3 C138.4,34.7 137.9,34 137.5,33.2 C137.1,32.4 137,31.4 137,30.3 C137,29.7 137.1,29.1 137.3,28.4 C137.5,27.8 137.8,27.2 138.3,26.6 C138.8,26 139.4,25.5 140.1,25 C140.9,24.5 141.8,24.1 142.9,23.7 C144,23.3 145.3,23 146.7,22.8 C148.2,22.6 149.8,22.4 151.7,22.4 L151.7,21 C151.7,19.4 151.3,18.1 150.6,17.3 C149.9,16.5 148.9,16.1 147.6,16.1 C146.6,16.1 145.8,16.2 145.2,16.4 C144.6,16.6 144,16.9 143.5,17.2 C143,17.5 142.6,17.7 142.2,18 C141.8,18.2 141.4,18.3 140.9,18.3 C140.5,18.3 140.1,18.2 139.8,18 C139.5,17.8 139.3,17.5 139.1,17.2 L138.1,15.4 Z M151.7,26.1 C150,26.2 148.5,26.3 147.4,26.5 C146.2,26.7 145.3,27 144.6,27.3 C143.9,27.6 143.4,28 143.1,28.5 C142.8,28.9 142.6,29.4 142.6,30 C142.6,31 142.9,31.8 143.5,32.2 C144.1,32.6 144.9,32.9 145.9,32.9 C147.1,32.9 148.2,32.7 149.1,32.2 C150,31.8 150.9,31.1 151.7,30.2 L151.7,26.1 Z" id="Shape" fill="#25DDDF" />
                              <path d="M187.5,36.6 L181.6,36.6 L181.6,16.4 L170.2,16.4 L170.2,29.7 C170.2,30.5 170.4,31.1 170.8,31.5 C171.2,31.9 171.7,32.1 172.3,32.1 C172.7,32.1 173,32.1 173.2,32 C173.4,31.9 173.7,31.8 173.8,31.7 C174,31.6 174.1,31.5 174.3,31.4 C174.4,31.3 174.6,31.3 174.7,31.3 C174.9,31.3 175,31.3 175.1,31.4 C175.2,31.5 175.3,31.6 175.5,31.8 L177.3,34.7 C176.4,35.4 175.4,36 174.3,36.3 C173.2,36.7 172,36.9 170.8,36.9 C168.7,36.9 167,36.3 165.9,35.1 C164.8,33.9 164.2,32.2 164.2,30.1 L164.2,16.3 L161.7,16.3 C161.4,16.3 161.1,16.2 160.9,16 C160.7,15.8 160.6,15.5 160.6,15.1 L160.6,12.7 L164.6,12 L165.8,5.3 C165.9,5 166,4.7 166.3,4.6 C166.5,4.4 166.8,4.3 167.2,4.3 L170.3,4.3 L170.3,12.1 L187.7,12.1 L187.7,36.6 L187.5,36.6 Z M188.5,4.7 C188.5,5.2 188.4,5.7 188.2,6.2 C188,6.7 187.7,7.1 187.4,7.4 C187.1,7.7 186.6,8 186.2,8.2 C185.7,8.4 185.2,8.5 184.7,8.5 C184.2,8.5 183.7,8.4 183.3,8.2 C182.9,8 182.5,7.7 182.1,7.4 C181.7,7.1 181.5,6.7 181.3,6.2 C181.1,5.7 181,5.3 181,4.7 C181,4.2 181.1,3.7 181.3,3.2 C181.5,2.7 181.8,2.3 182.1,2 C182.4,1.7 182.8,1.4 183.3,1.2 C183.7,1 184.2,0.9 184.7,0.9 C185.2,0.9 185.7,1 186.2,1.2 C186.7,1.4 187.1,1.7 187.4,2 C187.7,2.3 188,2.7 188.2,3.2 C188.4,3.7 188.5,4.2 188.5,4.7 Z" id="Shape" fill="#25DDDF" />
                              <path d="M204.5,11.6 C206.3,11.6 208,11.9 209.5,12.5 C211,13.1 212.3,13.9 213.3,15 C214.4,16.1 215.2,17.4 215.8,19 C216.4,20.6 216.7,22.3 216.7,24.3 C216.7,26.3 216.4,28 215.8,29.6 C215.2,31.2 214.4,32.5 213.3,33.6 C212.2,34.7 211,35.6 209.5,36.1 C208,36.7 206.3,37 204.5,37 C202.7,37 201,36.7 199.5,36.1 C198,35.5 196.7,34.7 195.6,33.6 C194.5,32.5 193.7,31.2 193.1,29.6 C192.5,28 192.2,26.3 192.2,24.3 C192.2,22.4 192.5,20.6 193.1,19 C193.7,17.4 194.5,16.1 195.6,15 C196.7,13.9 197.9,13.1 199.5,12.5 C200.9,11.9 202.6,11.6 204.5,11.6 Z M204.5,32.4 C206.5,32.4 208.1,31.7 209,30.3 C210,28.9 210.5,26.9 210.5,24.3 C210.5,21.6 210,19.6 209,18.2 C208,16.8 206.5,16.1 204.5,16.1 C202.4,16.1 200.9,16.8 199.9,18.2 C198.9,19.6 198.4,21.6 198.4,24.3 C198.4,26.9 198.9,29 199.9,30.3 C200.8,31.7 202.4,32.4 204.5,32.4 Z" id="Shape" fill="#25DDDF" />
                              <path d="M226.7,15 C227.2,14.5 227.7,14 228.3,13.6 C228.9,13.2 229.4,12.8 230.1,12.5 C230.7,12.2 231.4,12 232.1,11.8 C232.8,11.6 233.6,11.5 234.4,11.5 C235.7,11.5 236.9,11.7 238,12.2 C239.1,12.7 239.9,13.3 240.6,14.1 C241.3,14.9 241.8,15.9 242.2,17.1 C242.6,18.2 242.7,19.5 242.7,20.9 L242.7,36.6 L236.8,36.6 L236.8,21 C236.8,19.5 236.5,18.3 235.8,17.5 C235.1,16.7 234.1,16.3 232.7,16.3 C231.7,16.3 230.7,16.5 229.8,17 C228.9,17.5 228.1,18.1 227.3,18.9 L227.3,36.7 L221.4,36.7 L221.4,12 L225,12 C225.8,12 226.3,12.4 226.5,13.1 L226.7,15 Z" id="Shape" fill="#25DDDF" />
                            </g>
                            <circle id="Oval" fill="#FFFFFF" fillRule="nonzero" cx="51.7" cy="252.2" r="29.7" />
                            <g id="Group" transform="translate(39.000000, 234.000000)" fillRule="nonzero">
                              <path d="M1.3,10.7 C1.5,9 2,7.6 2.7,6.3 C3.4,5 4.2,4 5.3,3.2 C6.3,2.4 7.5,1.7 8.9,1.3 C10.2,0.9 11.7,0.7 13.2,0.7 C14.8,0.7 16.2,0.9 17.5,1.4 C18.8,1.9 19.9,2.5 20.8,3.3 C21.7,4.1 22.4,5.1 22.9,6.1 C23.4,7.2 23.6,8.4 23.6,9.6 C23.6,10.7 23.5,11.7 23.2,12.5 C23,13.3 22.6,14.1 22.1,14.7 C21.6,15.3 21.1,15.9 20.4,16.3 C19.7,16.7 18.9,17.1 18.1,17.4 C20.2,18.1 21.7,19.1 22.8,20.4 C23.8,21.7 24.3,23.4 24.3,25.5 C24.3,27.2 24,28.8 23.3,30.1 C22.6,31.4 21.8,32.5 20.7,33.4 C19.6,34.3 18.4,35 16.9,35.5 C15.4,36 14,36.2 12.4,36.2 C10.7,36.2 9.1,36 7.8,35.6 C6.5,35.2 5.4,34.6 4.4,33.8 C3.4,33 2.6,32.1 2,30.9 C1.3,29.8 0.8,28.5 0.3,27 L2.9,25.9 C3.6,25.6 4.2,25.5 4.8,25.7 C5.4,25.8 5.8,26.2 6.1,26.7 C6.4,27.3 6.7,27.8 7,28.4 C7.3,28.9 7.8,29.4 8.2,29.9 C8.7,30.3 9.2,30.7 9.9,30.9 C10.5,31.2 11.3,31.3 12.2,31.3 C13.2,31.3 14.1,31.1 14.8,30.8 C15.6,30.5 16.2,30 16.7,29.5 C17.2,29 17.6,28.4 17.8,27.7 C18,27 18.2,26.4 18.2,25.7 C18.2,24.9 18.1,24.1 17.9,23.4 C17.7,22.7 17.4,22.1 16.8,21.7 C16.2,21.2 15.4,20.8 14.4,20.6 C13.4,20.3 11.9,20.2 10.2,20.2 L10.2,16 C11.7,16 12.9,15.8 13.8,15.6 C14.7,15.4 15.5,15 16.1,14.5 C16.7,14 17.1,13.5 17.3,12.9 C17.5,12.3 17.6,11.6 17.6,10.8 C17.6,9.2 17.1,7.9 16.2,7.1 C15.3,6.3 14.1,5.8 12.6,5.8 C11.9,5.8 11.2,5.9 10.7,6.1 C10.1,6.3 9.6,6.6 9.1,6.9 C8.6,7.2 8.2,7.7 7.9,8.2 C7.6,8.7 7.3,9.2 7.2,9.8 C6.9,10.5 6.6,11 6.1,11.3 C5.7,11.5 5,11.6 4.2,11.5 L1.3,10.7 Z" id="Shape" fill="#25DDDF" />
                              <path d="M75.4,10.7 C77.2,10.7 78.9,11 80.4,11.6 C81.9,12.2 83.2,13 84.2,14.1 C85.3,15.2 86.1,16.5 86.7,18.1 C87.3,19.7 87.6,21.4 87.6,23.4 C87.6,25.4 87.3,27.1 86.7,28.7 C86.1,30.3 85.3,31.6 84.2,32.7 C83.1,33.8 81.9,34.7 80.4,35.2 C78.9,35.7 77.2,36.1 75.4,36.1 C73.6,36.1 71.9,35.8 70.4,35.2 C68.9,34.6 67.6,33.8 66.5,32.7 C65.4,31.6 64.6,30.3 64,28.7 C63.4,27.1 63.1,25.4 63.1,23.4 C63.1,21.5 63.4,19.7 64,18.1 C64.6,16.5 65.4,15.2 66.5,14.1 C67.6,13 68.8,12.2 70.4,11.6 C71.9,11 73.5,10.7 75.4,10.7 Z M75.4,31.6 C77.4,31.6 79,30.9 79.9,29.5 C80.9,28.1 81.4,26.1 81.4,23.5 C81.4,20.8 80.9,18.8 79.9,17.4 C78.9,16 77.4,15.3 75.4,15.3 C73.3,15.3 71.8,16 70.8,17.4 C69.8,18.8 69.3,20.8 69.3,23.5 C69.3,26.2 69.8,28.2 70.8,29.5 C71.7,30.9 73.3,31.6 75.4,31.6 Z" id="Shape" fill="#FFFFFF" />
                              <path d="M97.7,14.5 C98.7,13.4 99.9,12.4 101.1,11.7 C102.3,11 103.9,10.6 105.6,10.6 C106.9,10.6 108.2,10.9 109.3,11.4 C110.4,12 111.4,12.8 112.2,13.8 C113,14.9 113.6,16.2 114.1,17.7 C114.5,19.3 114.8,21 114.8,23.1 C114.8,24.9 114.6,26.6 114.1,28.2 C113.6,29.8 112.9,31.1 112,32.3 C111.1,33.5 110,34.4 108.7,35 C107.4,35.6 105.9,36 104.3,36 C102.9,36 101.7,35.8 100.8,35.4 C99.9,35 99,34.4 98.2,33.6 L98.2,43.7 L92,43.7 L92,11 L95.6,11 C96.4,11 96.9,11.4 97.1,12.1 L97.7,14.5 Z M98,29.4 C98.7,30.2 99.4,30.8 100.2,31.1 C101,31.4 101.9,31.6 102.8,31.6 C103.7,31.6 104.5,31.4 105.2,31.1 C105.9,30.8 106.5,30.3 107,29.6 C107.5,28.9 107.9,28 108.2,27 C108.5,26 108.6,24.7 108.6,23.3 C108.6,21.9 108.5,20.6 108.3,19.6 C108.1,18.6 107.7,17.8 107.3,17.2 C106.9,16.6 106.3,16.1 105.7,15.8 C105.1,15.5 104.4,15.4 103.6,15.4 C102.4,15.4 101.3,15.7 100.5,16.2 C99.6,16.7 98.8,17.5 98.1,18.4 L98.1,29.4 L98,29.4 Z" id="Shape" fill="#FFFFFF" />
                              <path d="M143.8,35.8 L137.9,35.8 L137.9,15.6 L126.5,15.6 L126.5,28.9 C126.5,29.7 126.7,30.3 127.1,30.7 C127.5,31.1 128,31.3 128.6,31.3 C129,31.3 129.3,31.3 129.5,31.2 C129.7,31.1 130,31 130.1,30.9 C130.3,30.8 130.4,30.7 130.6,30.6 C130.7,30.5 130.9,30.5 131,30.5 C131.2,30.5 131.3,30.5 131.4,30.6 C131.5,30.7 131.6,30.8 131.8,31 L133.6,33.9 C132.7,34.6 131.7,35.2 130.6,35.5 C129.5,35.9 128.3,36.1 127.1,36.1 C125,36.1 123.3,35.5 122.2,34.3 C121.1,33.1 120.5,31.4 120.5,29.3 L120.5,15.5 L118,15.5 C117.7,15.5 117.4,15.4 117.2,15.2 C117,15 116.9,14.7 116.9,14.3 L116.9,12 L120.9,11.3 L122.1,4.6 C122.2,4.3 122.3,4 122.6,3.9 C122.8,3.7 123.1,3.6 123.5,3.6 L126.6,3.6 L126.6,11.4 L144,11.4 L144,35.8 L143.8,35.8 Z M144.8,3.9 C144.8,4.4 144.7,4.9 144.5,5.4 C144.3,5.9 144,6.3 143.7,6.6 C143.4,6.9 142.9,7.2 142.5,7.4 C142,7.6 141.5,7.7 141,7.7 C140.5,7.7 140,7.6 139.6,7.4 C139.2,7.2 138.8,6.9 138.4,6.6 C138,6.3 137.8,5.9 137.6,5.4 C137.4,4.9 137.3,4.5 137.3,3.9 C137.3,3.4 137.4,2.9 137.6,2.4 C137.8,1.9 138.1,1.5 138.4,1.2 C138.7,0.9 139.1,0.6 139.6,0.4 C140,0.2 140.5,0.1 141,0.1 C141.5,0.1 142,0.2 142.5,0.4 C143,0.6 143.4,0.9 143.7,1.2 C144,1.5 144.3,1.9 144.5,2.4 C144.7,2.9 144.8,3.3 144.8,3.9 Z" id="Shape" fill="#FFFFFF" />
                              <path d="M149.9,35.8 L149.9,11.2 L153.5,11.2 C154.3,11.2 154.8,11.6 155,12.3 L155.4,14.1 C155.8,13.6 156.3,13.2 156.8,12.8 C157.3,12.4 157.8,12.1 158.3,11.8 C158.8,11.5 159.4,11.3 160,11.1 C160.6,10.9 161.3,10.8 162,10.8 C163.6,10.8 164.8,11.2 165.8,12.1 C166.8,13 167.5,14.1 168,15.4 C168.4,14.6 168.9,13.9 169.4,13.3 C170,12.7 170.6,12.2 171.3,11.9 C172,11.5 172.7,11.3 173.5,11.1 C174.3,10.9 175.1,10.8 175.8,10.8 C177.2,10.8 178.4,11 179.4,11.4 C180.4,11.8 181.3,12.4 182.1,13.2 C182.8,14 183.4,15 183.7,16.1 C184.1,17.3 184.3,18.6 184.3,20.1 L184.3,35.8 L178.4,35.8 L178.4,20.1 C178.4,18.5 178.1,17.4 177.4,16.6 C176.7,15.8 175.7,15.4 174.4,15.4 C173.8,15.4 173.2,15.5 172.7,15.7 C172.2,15.9 171.7,16.2 171.3,16.6 C170.9,17 170.6,17.5 170.4,18.1 C170.2,18.7 170.1,19.4 170.1,20.1 L170.1,35.8 L164.1,35.8 L164.1,20.1 C164.1,18.5 163.8,17.3 163.1,16.5 C162.4,15.7 161.5,15.4 160.2,15.4 C159.3,15.4 158.5,15.6 157.8,16 C157.1,16.4 156.4,17 155.7,17.7 L155.7,35.7 L149.9,35.7 L149.9,35.8 Z" id="Shape" fill="#FFFFFF" />
                              <path d="M197,4 C197,4.5 196.9,5 196.7,5.4 C196.5,5.8 196.2,6.2 195.9,6.6 C195.6,6.9 195.2,7.2 194.7,7.4 C194.2,7.6 193.7,7.7 193.2,7.7 C192.7,7.7 192.2,7.6 191.7,7.4 C191.2,7.2 190.8,6.9 190.5,6.6 C190.2,6.3 189.9,5.9 189.7,5.4 C189.5,4.9 189.4,4.5 189.4,4 C189.4,3.5 189.5,3 189.7,2.5 C189.9,2 190.2,1.6 190.5,1.3 C190.8,1 191.2,0.7 191.7,0.5 C192.2,0.3 192.6,0.2 193.2,0.2 C193.7,0.2 194.2,0.3 194.7,0.5 C195.2,0.7 195.6,1 195.9,1.3 C196.2,1.6 196.5,2 196.7,2.5 C196.9,2.9 197,3.4 197,4 Z M196.2,11.1 L196.2,35.7 L190.2,35.7 L190.2,11.1 L196.2,11.1 Z" id="Shape" fill="#FFFFFF" />
                              <path d="M219.9,13.6 C219.9,14 219.8,14.4 219.7,14.8 C219.6,15.2 219.4,15.5 219.1,15.8 L207.4,31.2 L219.5,31.2 L219.5,35.8 L200.5,35.8 L200.5,33.3 C200.5,33 200.6,32.7 200.7,32.3 C200.8,31.9 201,31.6 201.3,31.2 L213.1,15.6 L201.2,15.6 L201.2,11.1 L219.9,11.1 L219.9,13.6 Z" id="Shape" fill="#FFFFFF" />
                              <path d="M223.7,14.6 C226.5,12 229.9,10.7 233.9,10.7 C235.3,10.7 236.6,10.9 237.8,11.4 C238.9,11.9 239.9,12.5 240.7,13.4 C241.5,14.2 242.1,15.2 242.5,16.4 C242.9,17.6 243.1,18.8 243.1,20.2 L243.1,35.8 L240.4,35.8 C239.8,35.8 239.4,35.7 239.1,35.5 C238.8,35.3 238.6,35 238.4,34.5 L237.9,32.7 C237.3,33.3 236.7,33.8 236.1,34.2 C235.5,34.6 234.9,35 234.3,35.3 C233.7,35.6 233,35.8 232.2,36 C231.5,36.2 230.7,36.2 229.8,36.2 C228.8,36.2 227.8,36.1 226.9,35.8 C226,35.5 225.3,35.1 224.6,34.5 C223.9,33.9 223.5,33.2 223.1,32.4 C222.7,31.6 222.6,30.6 222.6,29.5 C222.6,28.9 222.7,28.3 222.9,27.6 C223.1,27 223.4,26.4 223.9,25.8 C224.4,25.2 225,24.7 225.7,24.2 C226.5,23.7 227.4,23.3 228.5,22.9 C229.6,22.5 230.9,22.2 232.3,22 C233.7,21.8 235.4,21.6 237.3,21.6 L237.3,20.2 C237.3,18.6 236.9,17.3 236.2,16.5 C235.5,15.7 234.5,15.3 233.2,15.3 C232.2,15.3 231.4,15.4 230.8,15.6 C230.2,15.8 229.6,16.1 229.1,16.4 C228.6,16.7 228.2,16.9 227.8,17.2 C227.4,17.4 227,17.5 226.5,17.5 C226.1,17.5 225.7,17.4 225.4,17.2 C225.1,17 224.9,16.7 224.7,16.4 L223.7,14.6 Z M237.3,25.2 C235.6,25.3 234.1,25.4 233,25.6 C231.8,25.8 230.9,26.1 230.2,26.4 C229.5,26.7 229,27.1 228.7,27.6 C228.4,28 228.2,28.5 228.2,29.1 C228.2,30.1 228.5,30.9 229.1,31.3 C229.7,31.7 230.5,32 231.5,32 C232.7,32 233.8,31.8 234.7,31.3 C235.6,30.9 236.5,30.2 237.3,29.3 L237.3,25.2 Z" id="Shape" fill="#FFFFFF" />
                              <path d="M273.2,35.8 L267.3,35.8 L267.3,15.6 L255.9,15.6 L255.9,28.9 C255.9,29.7 256.1,30.3 256.5,30.7 C256.9,31.1 257.4,31.3 258,31.3 C258.4,31.3 258.7,31.3 258.9,31.2 C259.1,31.1 259.4,31 259.5,30.9 C259.7,30.8 259.8,30.7 260,30.6 C260.1,30.5 260.3,30.5 260.4,30.5 C260.6,30.5 260.7,30.5 260.8,30.6 C260.9,30.7 261,30.8 261.2,31 L263,33.9 C262.1,34.6 261.1,35.2 260,35.5 C258.9,35.9 257.7,36.1 256.5,36.1 C254.4,36.1 252.7,35.5 251.6,34.3 C250.5,33.1 249.9,31.4 249.9,29.3 L249.9,15.5 L247.4,15.5 C247.1,15.5 246.8,15.4 246.6,15.2 C246.4,15 246.3,14.7 246.3,14.3 L246.3,12 L250.3,11.3 L251.5,4.6 C251.6,4.3 251.7,4 252,3.9 C252.2,3.7 252.5,3.6 252.9,3.6 L256,3.6 L256,11.4 L273.4,11.4 L273.4,35.8 L273.2,35.8 Z M274.2,3.9 C274.2,4.4 274.1,4.9 273.9,5.4 C273.7,5.9 273.4,6.3 273.1,6.6 C272.8,6.9 272.3,7.2 271.9,7.4 C271.4,7.6 270.9,7.7 270.4,7.7 C269.9,7.7 269.4,7.6 269,7.4 C268.6,7.2 268.2,6.9 267.8,6.6 C267.4,6.3 267.2,5.9 267,5.4 C266.8,4.9 266.7,4.5 266.7,3.9 C266.7,3.4 266.8,2.9 267,2.4 C267.2,1.9 267.5,1.5 267.8,1.2 C268.1,0.9 268.5,0.6 269,0.4 C269.4,0.2 269.9,0.1 270.4,0.1 C270.9,0.1 271.4,0.2 271.9,0.4 C272.4,0.6 272.8,0.9 273.1,1.2 C273.4,1.5 273.7,1.9 273.9,2.4 C274.1,2.9 274.2,3.3 274.2,3.9 Z" id="Shape" fill="#FFFFFF" />
                              <path d="M290.1,10.7 C291.9,10.7 293.6,11 295.1,11.6 C296.6,12.2 297.9,13 298.9,14.1 C300,15.2 300.8,16.5 301.4,18.1 C302,19.7 302.3,21.4 302.3,23.4 C302.3,25.4 302,27.1 301.4,28.7 C300.8,30.3 300,31.6 298.9,32.7 C297.8,33.8 296.6,34.7 295.1,35.2 C293.6,35.7 291.9,36.1 290.1,36.1 C288.3,36.1 286.6,35.8 285.1,35.2 C283.6,34.6 282.3,33.8 281.2,32.7 C280.1,31.6 279.3,30.3 278.7,28.7 C278.1,27.1 277.8,25.4 277.8,23.4 C277.8,21.5 278.1,19.7 278.7,18.1 C279.3,16.5 280.1,15.2 281.2,14.1 C282.3,13 283.5,12.2 285.1,11.6 C286.6,11 288.3,10.7 290.1,10.7 Z M290.1,31.6 C292.1,31.6 293.7,30.9 294.6,29.5 C295.6,28.1 296.1,26.1 296.1,23.5 C296.1,20.8 295.6,18.8 294.6,17.4 C293.6,16 292.1,15.3 290.1,15.3 C288,15.3 286.5,16 285.5,17.4 C284.5,18.8 284,20.8 284,23.5 C284,26.2 284.5,28.2 285.5,29.5 C286.5,30.9 288,31.6 290.1,31.6 Z" id="Shape" fill="#FFFFFF" />
                              <path d="M312.3,14.2 C312.8,13.7 313.3,13.2 313.9,12.8 C314.5,12.4 315,12 315.7,11.7 C316.3,11.4 317,11.2 317.7,11 C318.4,10.8 319.2,10.7 320,10.7 C321.3,10.7 322.5,10.9 323.6,11.4 C324.6,11.9 325.5,12.5 326.2,13.3 C326.9,14.1 327.4,15.1 327.8,16.3 C328.2,17.4 328.3,18.7 328.3,20.1 L328.3,35.8 L322.4,35.8 L322.4,20.1 C322.4,18.6 322.1,17.4 321.4,16.6 C320.7,15.8 319.7,15.4 318.3,15.4 C317.3,15.4 316.3,15.6 315.4,16.1 C314.5,16.6 313.7,17.2 312.9,18 L312.9,35.8 L307,35.8 L307,11.2 L310.6,11.2 C311.4,11.2 311.9,11.6 312.1,12.3 L312.3,14.2 Z" id="Shape" fill="#FFFFFF" />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="row padding10_top">
                  <div className="medium-6 columns" />
                  <div className="small-10 medium-3 columns column_border_left">
                    <div className="empty_block" />
                    <h5 className>Iteration</h5>
                    <p className="lead">We like to work as a partner of your success and will make sure your revenue keep growing. All the tests, insights and improvements are listed and available to all your teams.</p>
                  </div> {/* column-text */}
                  <div className="medium-2 columns" />
                </div> {/* row */}
              </div> {/* row_container */}
            </div> {/* column_Gal */}
          </div>{/* row */}
          <svg className="icon-svg bg_triangle1">
            <use xlinkHref="symbol-defs.svg#bg_triangle" />
          </svg>
        </div>{/* convy_hdiw */}
        {/* column_Gal */}
        {/* row */}
        {/* convy_hdiw */}
        <div id="convy_pricing" className="convy_pricing padding5_both">
          <svg className="icon-svg pattern_blue_bg">
            <use xlinkHref="symbol-defs.svg#pattern_blue_bg" />
          </svg>
          <div className="row padding5_bottom">
            <div className="small-11 medium-11 columns padding5_bottom">
              <h2 className="clearfix">What you get</h2>
              <p className="lead">From the optimization of a single landing page to the redesign of a digital product... We will focus on what actually add value to your business and provide tailored support solutions : OnBoarding, Engagement, Form Submitions, Transactions, Comments, Signups, Emails, Social Media Shares... Ask us anything. </p>
            </div>{/* row */}
            <div className="row align-bottom">
              <div className="columns small-11 medium-4">
                <ul className="pricing-table">
                  <li className="title gradient-bg">Quick Wins</li>
                  <li className="price">FREE</li>
                  <li className="button-center"><a className="button free" href="#convy_contact"><span>Start today</span></a></li>
                  <li className="description">Get your <strong>FREE</strong> high-level reports and guides to improve conversion for a specific part of your App or Site including :</li>
                  <li className="description checked">Credibility Checklist</li>
                  <li className="description checked">Front-end Checklist</li>
                  <li className="description checked">Affordance Analysis</li>
                  <li className="description checked">Quick Wins to Reach Your KPIs</li>
                  <li className="description checked">User Testing Guides</li>
                  <li className="description checked">Conversion Checklist</li>
                  <div className="bottom_cta button-center"><a className="button free" href="#convy_contact"><span>Start today</span></a></div>
                </ul>
              </div>
              <div className="columns small-11 medium-4">
                <ul className="pricing-table chosethatone">
                  <li className="title gradient-bg">Specific Funnel Optimization</li>
                  <li className="price">Starting 480£/day
                  </li>
                  <li className="button-center"><a className="button specific" href="#convy_contact"><span>Start today</span></a></li>
                  <div className="row reduction align-middle">
                    <div className="columns small-6"><p className="raye"> was 530£</p></div>
                    <div className="columns small-6 saving">save 10%</div>
                  </div>
                  <li className="description"><strong>Everything in "Quick Wins"</strong> plus the following :</li>
                  <li className="description checked">PET Checklist</li>
                  <li className="description checked">Form Analysis</li>
                  <li className="description checked">Responsive Report</li>
                  <li className="description checked">Funnel Definition</li>
                  <li className="description checked">Optimization Plan</li>
                  <li className="description checked">Heuristic Evaluation</li>
                  <li className="description checked">SWOT Analysis</li>
                  <li className="description checked">UI Benchmark</li>
                  <li className="description checked">a/b Test Setup</li>
                  <div className="bottom_cta button-center"><a className="button specific button-center" href="#convy_contact"><span>Start today</span></a></div>
                </ul>
              </div>
              <div className="columns small-11 medium-4">
                <ul className="pricing-table">
                  <li className="title gradient-bg">FULL optimization</li>
                  <li className="price">Project setup</li>
                  <li className="button-center"><a className="button multiple button-center" href="#convy_contact">Contact us</a></li>
                  <li className="description "><strong>Everything in "Specific Funnel Optimization"</strong> plus the following :</li>
                  <li className="description checked">A dedicated account manager will be assigned</li>
                  <li className="description checked">Field Study &amp; User Interview</li>
                  <li className="description checked">Behaviour Analysis</li>
                  <li className="description checked">Cognitive Ergonomics</li>
                  <li className="description checked">Custom Integration</li>
                  <li className="description checked">UX Value Proposition</li>
                  <li className="description checked">Product Strategy &amp; Concept Testing</li>
                  <li className="description checked">Fully Coded Prototype</li>
                  <li className="description checked">Unlimited a/b or Multivariate Testing</li>
                  <li className="description checked">6 Months Ask Us Anything</li>
                  <li className="description checked">Inputs from Industry Experts</li>
                  <li className="description checked">Predictive Analysis</li>
                  <li className="description checked">12 Months Iteration</li>
                  <div className="bottom_cta button-center"><a className="button multiple" href="#convy_contact"><span>Contact us</span></a></div>
                </ul>
              </div>
            </div>
          </div> {/* column_Gal */}
        </div>{/* convy_pricing */}
        <div className="convy_testimonial padding5_both">
          <div className="row align-middle">
            <div className="small-3 columns">
              <div className="full-width-testimonial-icon ">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="41px" height="34px" viewBox="-235 240 41 34" style={{enableBackground: 'new -235 240 41 34'}} xmlSpace="preserve">
                  <path className="quote-path" d="M-231.3,260.4c0-5,1.3-8.8,3.7-11.7c2.4-2.8,6-4.6,10.5-5.5v5c-3.5,1-6,2.8-7.1,5.5c-0.7,1.4-0.9,2.8-0.8,4
            h8.1v12.8h-14.4V260.4z" />
                  <path className="quote-path" d="M-212,260.4c0-5,1.3-8.8,3.7-11.7c2.4-2.8,6-4.6,10.5-5.5v5c-3.5,1-6,2.8-7.1,5.5c-0.7,1.4-0.9,2.8-0.8,4h8.1
            v12.8H-212V260.4z" />
                </svg>
              </div>
              <img className src={require('../images/leah_testimonial.png')} alt="leah brown" />
            </div>{/* small-10 medium-10 columns */}
            <div className="small-9 columns">
              <div className="full-width-testimonial-content">
                <h5 className="full-width-testimonial-text">Convy is a great organization to work with.
                  The consultants are good at what they do, helpful and efficient.
                  Unbeatable price and quality.
                </h5>
                <p className="full-width-testimonial-source">Leah Brown</p>
                <span className="full-width-testimonial-source-context">Product Manager</span>
              </div>
            </div>{/* small-10 medium-10 columns */}
          </div>{/* row */}
        </div>{/* convy_testimonial padding5_both */}
        <div className="convy_sectors padding5_both">
          <div className="row">
            <div className="medium-1" />
            <div className="small-10 medium-10 columns">
              <p className="lead">We provide usefull insights for large traffic products</p>
              <h2 className>We get great results in these sectors</h2>
            </div> {/* small-10 medium-6 columns */}
            <div className="medium-1" />
          </div> {/* row */}
          <div className="row align-bottom text-center padding10_bottom">
            <div className="columns small-6 medium-4 padding5_top"><a className="item category_bottom" onclick="track('Click-item-category-bottom-art','Click-item-category-bottom-art')">
                <img className src={require('../images/sectors_icon_bank.svg')}/>
                <label>finance</label></a></div>
            <div className="columns small-6 medium-4 padding5_top"><a className="item category_bottom" onclick="track('Click-item-category-bottom-business','Click-item-category-bottom-business')">
                <img className src={require('../images/sectors_icon_insurance.svg')} />
                <label>insurance</label></a></div>
            <div className="columns small-6 medium-4 padding5_top"><a className="item category_bottom" onclick="track('Click-item-category-bottom-coding','Click-item-category-bottom-coding')">
                <img className src={require('../images/sectors_icon_comms.svg')} />
                <label>communication</label></a></div>
            <div className="columns small-6 medium-4"><a className="item category_bottom" onclick="track('Click-item-category-bottom-music','Clic@k-item-category-bottom-music')">
                <img className src={require('../images/sectors_icon_ecommerce.svg')} />
                <label>ecommerce/retail</label></a></div>
            <div className="columns small-6 medium-4 trust"><img className src={require('../images/sectors_icon_trust.svg')} /><h4 className="padding5_bottom clearfix">trusted by the world’s leading brands</h4></div>
            <div className="columns small-6 medium-4"><a className="item category_bottom" onclick="track('Click-item-category-bottom-music','Click-item-category-bottom-music')">
                <img className src={require('../images/sectors_icon_elearning.svg')}/>
                <label>elearning</label></a></div>
          </div>{/* columns */}
        </div>{/* row */}
        {/* convy_sectors */}
        <div id="convy_contact" className="convy_contact">
          <div className="index_twitter_bg_setup">
            <div className="row align-center padding5_both">
              <div className="index_twitter_bg" />
              <h2 className="padding5_both convy_contact_h2">Get ready to convert more</h2>
              <div className="small-12 medium-11 columns card ">
                <div className="card-section">
                  <form role="form" id="contactForm" data-toggle="validator">
                    <div className="row align-left">
                      <div className="small-12 medium-6 columns">
                        <label><span>Please select the services you are interested in :</span></label>
                        <div className="switch-field">
                          <div className="row">
                            <div className="small-5 columns padding5_both">
                              <input type="radio" id="type1" name="type" defaultValue="Analisis&QuickWins" defaultChecked="checked" />
                              <label htmlFor="type1" className="switch-field">
                                <img className="padding10_both" src={require('../images/contact_icon_free.svg')} />
                                FREE <br /> Analisis &amp; Quick Wins</label>
                            </div>{/* columns */}
                            <div className="small-5 columns padding5_both">
                              <input type="radio" id="type2" name="type" defaultValue="SpecificFunnelOptimization" />
                              <label htmlFor="type2">
                                <img className="padding10_both" src={require('../images/contact_icon_unique_funnel.svg')} />Specific Funnel Optimization</label>
                            </div>{/* columns */}    
                          </div>{/* row */}
                          <div className="row">
                            <div className="small-5 columns padding5_both">
                              <input type="radio" id="type3" name="type" defaultValue="UnlimitedFunnelOptimization" />
                              <label htmlFor="type3"><img className="padding10_both" src={require('../images/contact_icon_multiple_funnel.svg')} />Unlimited Funnel Optimization</label>
                            </div>{/* columns */}
                            <div className="small-5 columns padding5_both">
                              <input type="radio" id="type4" name="type" defaultValue="ProductivityImprovement" />
                              <label htmlFor="type4">
                                <img className="padding10_both" src={require('../images/contact_icon_productivity.svg')} />Productivity Improvement</label>
                            </div>{/* columns */}    
                          </div>{/* row */}
                        </div>{/* small-12 large-5 */}
                      </div>{/* columns */}
                      <div className="small-12 medium-6 columns">
                        <input type="text" className="login-box-input" id="name" required data-error="NEW ERROR MESSAGE" />
                        <label htmlFor="name"><span>What's your name?</span></label>
                        <input type="text" className="login-box-input" id="url" required data-error="NEW ERROR MESSAGE" />
                        <label htmlFor="url"><span>What's the url of your website/app?</span></label>
                        <input type="text" className="login-box-input" id="traffic" required data-error="NEW ERROR MESSAGE" />
                        <label htmlFor="traffic"><span>Unique page views on average</span></label>
                        <input type="text" className="login-box-input" id="job" required data-error="NEW ERROR MESSAGE" />
                        <label htmlFor="job"><span>What's your Job title?</span></label>
                        <input type="email" className="login-box-input" id="email" required data-error="NEW ERROR MESSAGE" />
                        <label htmlFor="email"><span>What's your e-mail address?</span></label>
                        <div className="help-block with-errors" />
                        <input className="button" type="submit" id="send_message" defaultValue="Get started" name="submit" />
                        <div id="msgSubmit" className="h3 text-center hidden" />
                        <div className="clearfix" />
                        <div className="padding5_both"><small>No spam, no fuss. We will keep all your data &amp; information confidencial and sign a non-disclosure agreement.</small></div>
                      </div>{/* column */}
                    </div></form>{/* row */}
                </div>{/* card-section */}
              </div>{/* column card */}
            </div>{/* row */}
          </div>{/* twitter_bg_setup */}
        </div>{/* convy_share */}
        <div className="convy_footer">
          <footer className="marketing-site-footer">
            <div className="row medium-unstack">
              <div className="medium-4 columns">
                <a href="https://www.convy.io" className="marketing-site-footer-name">convy</a>
                <p>hello@convy.io</p>
                <p>We help digital companies increase their revenue. We are a distributed team in Europe (and the UK!). Company registered in Paris, France.</p>
                <ul className="menu marketing-site-footer-menu-social simple">
                  <li><a href="#"><i className="fa fa-youtube-square" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-facebook-square" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter-square" aria-hidden="true" /></a></li>
                </ul>
              </div>
              <div className="medium-8 columns">
                <div className="row padding10_top">
                  <div className="column small-12">
                    <ul className="menu marketing-site-footer-bottom-links">
                      <li><a href="#">Home</a></li>
                      <li><a href="read/read">Optimization Tips</a></li>
                      <li><a href="static/privacy">Privacy</a></li>
                      <li><a href="static/terms">Terms of service</a></li>
                      {/* <li><a href="static/about">Works</a></li>
          <li><a href="#">News</a></li> */}
                      <li><a href="#convy_contact">Contact</a></li>
                    </ul>
                  </div>
                  <div className="column small-12">
                    <small>© 2018 convy. convy®, the convy logo, and the names and marks associated with convy are trademarks of convy and/or its affiliates.</small>
                  </div>
                </div>
                {/* <h4 class="marketing-site-footer-title">Contact Info</h4>
      <div class="marketing-site-footer-block">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <p>We're here to help you, email or call us on</p>
      </div>
      <div class="marketing-site-footer-block phone">
        <i class="fa fa-phone" aria-hidden="true"></i>
        <p>+44 3069 990123</p>
         
      </div>
      <div class="marketing-site-footer-block">
        <p class="clear-footer">Monday-Friday 8am-5pm CET</p>
      </div>
      <div class="marketing-site-footer-block">
        <i class="fa fa-envelope-o" aria-hidden="true"></i>
        <p>hello@convy.io</p>
      </div> */}
              </div>
              {/* <div class="medium-4 columns">
      <h4 class="marketing-site-footer-title">Free Marketing Design Resources</h4>
      <div class="row">
        <div class="column column-block">
          title
        </div>
        <div class="column column-block">
          title
        </div>
        <div class="column column-block">
          title
        </div>
        <div class="column column-block">
          title
        </div>
      </div>
    </div> */}
            </div>
          </footer>
        </div>
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
      </div>

</PageTransition>
) 

