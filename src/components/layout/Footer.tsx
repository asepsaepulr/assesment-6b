const Footer = () => {
  return (
    <footer className="bg-dark-100 text-white py-6">

      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">

        <div className="flex space-x-6">
          <a href="https://www.oxfam.org.uk/" target="_blank" className="hover:opacity-80 transition-opacity">
            <img
              src="https://www.coldplay.com/wp/wp-content/uploads/2024/06/Group-1076-1.svg"
              width="20"
              height="15"
              alt="Oxfam"
              className="w-auto h-8"
              loading="lazy"
            />
          </a>
          <a href="https://www.globalcitizen.org/en/" target="_blank" className="hover:opacity-80 transition-opacity">
            <img
              src="https://www.coldplay.com/wp/wp-content/uploads/2024/06/Group-1077.svg"
              width="20"
              height="15"
              alt="Global Citizen"
              className="w-auto h-8"
              loading="lazy"
            />
          </a>
          <a href="http://facebook.com/clientearth" target="_blank" className="hover:opacity-80 transition-opacity">
            <img
              src="https://www.coldplay.com/wp/wp-content/uploads/2024/06/Group-1078.svg"
              width="20"
              height="12"
              alt="Client Earth"
              className="w-auto h-8"
              loading="lazy"
            />
          </a>
        </div>

        <div className="text-center lg:text-left">
          <ul className="flex flex-wrap justify-center lg:justify-start space-x-4">
            <li>
              <a
                href="https://www.wminewmedia.com/privacy/"
                target="_blank"
                className="hover:text-pink-500 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a
                href="https://www.wminewmedia.com/terms-of-use/"
                target="_blank"
                className="hover:text-pink-500 transition-colors"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a
                href="https://www.wminewmedia.com/cookies-policy/"
                target="_blank"
                className="hover:text-pink-500 transition-colors"
              >
                Cookies Policy
              </a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-pink-500 transition-colors"
              >
                Cookies Settings
              </button>
            </li>
          </ul>

          <div className="mt-4 text-sm">
            © Coldplay. Site by <a href="https://rabbithole.co.uk" className="hover:text-pink-500">Aldohc</a>
          </div>
        </div>
      </div>
    </footer>

    // <div className="flex flex-col w-full">
    //   <h1>Footer</h1>
    // </div>
  )
}

export default Footer
