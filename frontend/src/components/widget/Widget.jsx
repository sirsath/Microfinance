import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Widget = ({ type }) => {
  let data;

  //temporary
  let amount = 100;
  let diff = 20;

  switch (type) {
    case "leads":
      data = {
        title: "LEADS",
        isMoney: false,
        link: "See all leads",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "booked":
      data = {
        title: "BOOKED",
        isMoney: false,
        link: "View all booked",
        icon: (
          <BeenhereOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <CurrencyRupeeIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "hot leads":
      data = {
        title: "HOT LEADS",
        isMoney: false,
        link: "See details",
        icon: (
          <WhatshotOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "₹"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
