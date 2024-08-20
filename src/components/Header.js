import React from 'react'

export default function Header() {
  return (


<>
    <header className="header">
    <div className="container">
        <ul className="social-icons pt-3">
            <li className="social-item"><a className="social-link text-light" href="#">
                    <i className="fa-brands fa-facebook"></i></a></li>
            <li className="social-item"><a className="social-link text-light" href="#">
                    <i className="fa-brands fa-twitter"></i> </a></li>
            <li className="social-item"><a className="social-link text-light" href="#">
                    <i className="fa-brands fa-google"></i> </a></li>
            <li className="social-item"><a className="social-link text-light" href="#">
                    <i className="fa-brands fa-instagram"></i></a></li>
            <li className="social-item"><a className="social-link text-light" href="#">
                    <i className="fa-brands fa-github"></i> </a></li>


            <li className="social-item"><a className="social-link text-light" href="#">
                    <i className="fa-brands fa-linkedin"></i></a></li>
        </ul>
        <div className="header-content">
            <h4 className="header-subtitle">Hello, I am</h4>
            <h1 className="header-title">Pal Lap</h1>
            <h6 className="header-mono">Java Developer</h6>
            <button className="btn btn-primary btn-rounded"><i className="ti-printer pr-2"></i>Print Resume</button>
        </div>
    </div>
</header>
</>
  )
}
