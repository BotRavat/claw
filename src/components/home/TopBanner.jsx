import './topBanner.css'
export default function TopBanner() {
  return (
    <>
      <div className="top-banner-wrapper">
        <div className="top-banner-left">
          <p className='firstP'>Join Claw to connect with like minded legal minds</p>
          <div className="top-banner-left-icons">
          <div style={{ backgroundColor: "black" }} className="ios">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="51"
              viewBox="0 0 42 51"
              fill="none"
            >
              <path
                d="M35.064 26.921C35.04 22.829 36.894 19.745 40.6379 17.471C38.5439 14.471 35.376 12.821 31.2 12.503C27.246 12.191 22.92 14.807 21.336 14.807C19.662 14.807 15.834 12.611 12.822 12.611C6.60599 12.707 0 17.567 0 27.455C0 30.377 0.533999 33.395 1.602 36.503C3.03 40.595 8.17799 50.621 13.548 50.459C16.356 50.393 18.342 48.467 21.996 48.467C25.542 48.467 27.378 50.459 30.51 50.459C35.928 50.381 40.5839 41.267 41.9399 37.163C34.674 33.737 35.064 27.131 35.064 26.921ZM28.758 8.62105C31.8 5.00906 31.524 1.72106 31.434 0.539062C28.746 0.695062 25.638 2.36906 23.868 4.42706C21.918 6.63505 20.772 9.36505 21.018 12.443C23.922 12.665 26.574 11.171 28.758 8.62105Z"
                fill="white"
              />
            </svg>
            <p>
              Download on the <strong>app store</strong>
            </p>
          </div>
          <div className="android">
            <img src="/assets/play-store.png" />

            <p>
              Download on the <strong>app store</strong>
            </p>
          </div>
          </div>
        </div>
        <div className="top-banner-right">
          <img src="/assets/topBannerImg.svg" />
        </div>
      </div>
    </>
  );
}
