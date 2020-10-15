import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(query)

  // console.log(data)

  return (
    <header className="hero">
      <div className="section-center">
        <article className="hero-info">
          <div>
            <aside className="hero_top">
              <section>
                <Image className="profilepic" fixed={fixed} />
              </section>
              <contact style={{
                paddingLeft: '30pt'
              }}>
                <aside>
                  <h1>Niklas Landberg</h1>
                  <section>
                    <a href="mailto:niklas.h.landberg@gmail.com">
                      niklas.h.landberg@gmail.com
                    </a>
                    <div>
                      <span class="far fa-envelope"></span>
                    </div>
                  </section>
                  <section>
                    <a
                      href="https://www.linkedin.com/in/niklas-landberg-90900057/"
                      target="blank"
                    >
                      LinkedIn
                    </a>
                    <div>
                      <span class="fab fa-linkedin-in"></span>
                    </div>
                  </section>
                  <section>
                    <a
                      href="https://www.youtube.com/user/funkynicco/videos"
                      target="blank"
                    >
                      YouTube
                    </a>
                    <div>
                      <span class="fab fa-youtube"></span>
                    </div>
                  </section>
                </aside>
              </contact>
            </aside>
            <main>
              <content>
                <section>
                  <header>About</header>
                  <article>
                    <header>Hi, I'm Niklas.</header>
                    <content>
                      <p>
                        Backend System Developer and Game Programmer from
                        Sweden.
                      </p>
                      <p>
                        I have a passion for the development of games and
                        systems, such as server software using Sockets and
                        learning about developing N-Tiered solutions for
                        scalable performance.
                      </p>
                      <p>
                        I started learning programming in 2006 and I have
                        actively developed ever since.
                      </p>
                    </content>
                  </article>
                </section>
                <section>
                  <header>Skills</header>
                  <skills>
                    <section>
                      <header>
                        <div>
                          <span class="fas fa-dice-d6"></span>
                        </div>
                        <p>Gamedev</p>
                      </header>
                      <content>
                        <ul>
                          <li>
                            <i class="fas fa-check chk"></i>{" "}
                            <span>DirectX 9 &amp; 11</span>
                          </li>
                          <li>
                            <i class="fas fa-check chk"></i>{" "}
                            <span>HTML5 Canvas</span>
                          </li>
                          <li>
                            <i class="fas fa-check chk"></i> <span>Unity</span>
                          </li>
                        </ul>
                      </content>
                    </section>
                    <section>
                      <header>
                        <div>
                          <span class="fas fa-server"></span>
                        </div>
                        <p>Backend</p>
                      </header>
                      <content>
                        <ul>
                          <li>
                            <i class="fas fa-check chk"></i> <span>C#</span>
                          </li>
                          <li>
                            <i class="fas fa-check chk"></i>{" "}
                            <span>C &amp; C++</span>
                          </li>
                          <li>
                            <i class="fas fa-check chk"></i> <span>NodeJS</span>
                          </li>
                          <li>
                            <i class="fas fa-check chk"></i> <span>Python</span>
                          </li>
                          <li>
                            <i class="fas fa-check chk"></i> <span>Lua</span>
                          </li>
                          <li>
                            <i class="fas fa-check chk"></i>{" "}
                            <span>Networking</span>
                          </li>
                        </ul>
                      </content>
                    </section>
                    <section>
                      <header>
                        <div>
                          <span class="fas fa-database"></span>
                        </div>
                        <p>Databases</p>
                      </header>
                      <content>
                        <ul>
                          <li>
                            <i class="fas fa-check chk"></i>{" "}
                            <span>Microsoft SQL</span>
                          </li>
                          <li>
                            <i class="fas fa-check chk"></i>{" "}
                            <span>SQLite3</span>
                          </li>
                          <li>
                            <i class="fas fa-check chk"></i> <span>MySQL</span>
                          </li>
                          <li>
                            <i class="fas fa-check chk"></i>{" "}
                            <span>MongoDB</span>
                          </li>
                        </ul>
                      </content>
                    </section>
                    <section>
                      <header>
                        <div>
                          <span class="fas fa-laptop-code"></span>
                        </div>
                        <p>Frontend</p>
                      </header>
                      <content>
                        <ul>
                          <li>
                            <i class="fas fa-check chk"></i> <span>HTML5</span>
                          </li>
                          <li>
                            <i class="fas fa-check chk"></i> <span>CSS3</span>
                          </li>
                          <li>
                            <i class="fas fa-check chk"></i>{" "}
                            <span>JavaScript</span>
                          </li>
                          <li>
                            <i class="fas fa-check chk"></i>{" "}
                            <span>Windows Forms</span>
                          </li>
                        </ul>
                      </content>
                    </section>
                  </skills>
                </section>
                <section class="competence-section">
                  <header>Experience</header>
                  <article>
                    <content>
                      <header>Nordlo</header>
                      <p>
                        Systems developer at Nordlo working with ASP.NET MVC.
                      </p>
                      <p>March 2020 - Present</p>
                    </content>
                  </article>
                  <article>
                    <content>
                      <header>Contract Game Developer</header>
                      <p>
                        Contract work in C++ and C# using DirectX. Websites in
                        ASP.NET MVC Core, Microsoft SQL Server.
                      </p>
                      <p>Jan 2011 - Present</p>
                    </content>
                  </article>
                  <article>
                    <content>
                      <header>Developer at Dev[Byte]</header>
                      <p>
                        Contract work in C#, ASP.NET MVC (.NET Core),
                        HTML5/CSS/JS, system design and databases.
                      </p>
                      <p>Jan 2013 - Present</p>
                    </content>
                  </article>
                  <article>
                    <content>
                      <header>Developer at Image-Storage.com</header>
                      <p>Main site programming and admin area.</p>
                      <p>2008 - Present</p>
                    </content>
                  </article>
                  <article>
                    <content>
                      <header>Developer at Deepcor Initiative</header>
                      <p>
                        Main site and admin site development and deployment.
                      </p>
                      <p>2013 - 2014</p>
                    </content>
                  </article>
                  <article>
                    <content>
                      <header>System developer at Rationell IT</header>
                      <p>
                        Development on internal management system in Java backed
                        by Microsoft SQL Server.
                      </p>
                      <p>2010 - 2011</p>
                    </content>
                  </article>
                  <article>
                    <content>
                      <header>
                        Computer repair and build at DCL Datacentrum
                      </header>
                      <p>
                        Repair of customer computers. Building of new computers.
                      </p>
                      <p>2009 - 2010</p>
                    </content>
                  </article>
                </section>
                <section class="competence-section">
                  <header>Education</header>
                  <article>
                    <content>
                      <header>TUC Yrkeshögskola</header>
                      <p>Systemutvecklare .NET Course</p>
                      <p>2019 - 2021</p>
                    </content>
                  </article>
                  <article>
                    <content>
                      <header>Komvux</header>
                      <p>Programming 1 and 2 courses</p>
                      <p>2014 - 2014</p>
                    </content>
                  </article>
                  <article>
                    <content>
                      <header>Anders Ljungstedt Gymnasium</header>
                      <p>2009 - 2011</p>
                    </content>
                  </article>
                </section>
              </content>
            </main>
            <Link to="/contact" className="btn">
              Contact
            </Link>
            <SocialLinks />
          </div>
        </article>
      </div>
    </header>
  )
}
export default Hero
