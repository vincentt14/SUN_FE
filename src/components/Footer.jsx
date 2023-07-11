import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container mt-16">
      <hr />
      <div className="grid md:grid-cols-3 gap-5 py-12">
        <div>
          <img src="./asset/logo.jpg" alt="logo" className="mb-10" />
          <p>Albatech acts as a corporate partner to help digitize their business to accelerate trends in remote works</p>
        </div>
        <div className="flex flex-col lg:place-items-center">
          <h1 className="font-bold text-lg pb-8">Website</h1>
          <ul>
            <li className="mb-5">
              <Link to="/" className="my-3">
                About
              </Link>
            </li>
            <li className="mb-5">
              <Link to="/">Service</Link>
            </li>
            <li className="mb-5">
              <Link to="/">Portfolio</Link>
            </li>
            <li className="mb-5">
              <Link to="/">Blog</Link>
            </li>
            <li className="mb-5">
              <Link to="/">Carrer</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:place-items-left">
          <h1 className="font-bold text-lg pb-8">Contact</h1>
          <ul>
            <li className="mb-5">
              <p>
                The Prominence Blok 38D No.25 <br /> Jl. Jalur Sutera Barat, Alam Sutera, <br /> Kota Tangerang, Banten 15143
              </p>
            </li>
            <li className="mb-5">
              <p>
                <span className="font-bold">P :</span> +62 81 1889 3383
              </p>
            </li>
            <li className="mb-5">
              <p>
                <span className="font-bold">E :</span> info@albatech.id
              </p>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex justify-between text-sm text-tertiary py-5">
        <p>&copy;PT. Alba Digital Teknologi 2021 | All Rights Reserved</p>
        <div>
          <Link to="/">Privacy policy</Link> |<Link to="/"> Terms of service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
