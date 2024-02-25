const VideoSection = () => {
  return (
    <section className="wrapper ">
      <div className="inner">
        <header className="align-center">
          <h2>Aliquam ipsum purus dolor</h2>
          <p>
            Cras sagittis turpis sit amet est tempus, sit amet consectetur purus
            tincidunt.
          </p>
        </header>

        <div className="flex flex-3">
          <div className="video col">
            <div className="image fit">
              <img src="images/pic09.jpg" alt="" />
              <div className="arrow">
                <div className="icon fa-play"></div>
              </div>
            </div>
            <p className="caption">
              Cras eget lacus sed mauris scelerisque tincidunt
            </p>
            <a href="generic.html" className="link">
              <span>Click Me</span>
            </a>
          </div>
          <div className="video col">
            <div className="image fit">
              <img src="images/pic10.jpg" alt="" />
              <div className="arrow">
                <div className="icon fa-play"></div>
              </div>
            </div>
            <p className="caption">
              Vivamus vulputate lacus non massa auctor lobortis
            </p>
            <a href="generic.html" className="link">
              <span>Click Me</span>
            </a>
          </div>
          <div className="video col">
            <div className="image fit">
              <img src="images/pic11.jpg" alt="" />
              <div className="arrow">
                <div className="icon fa-play"></div>
              </div>
            </div>
            <p className="caption">
              Nam eu nisi non ante sodales interdum a vitae neque
            </p>
            <a href="generic.html" className="link">
              <span>Click Me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
