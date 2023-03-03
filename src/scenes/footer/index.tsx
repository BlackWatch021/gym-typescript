import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc
            eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim
            facilisis gravida neque convallis a cras semper auctor
          </p>
          <p>c Evogym All Rights Reserved. 2023</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links </h4>
          <p className="my-5">Somethi ssdfe fesdf</p>
          <p className="my-5">Slgek gd eetd d</p>
          <p className="my-5">olsd Iis i</p>
        </div>
        <div>
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Somethi ssdfe fesdf Slgek gd eetd d sdfe fd</p>
          <p className="my-5">(234) 234305-2345</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
