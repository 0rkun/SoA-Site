import "../styles/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  const myGithub = () => {
    const myGithubUrl = "https://github.com/0rkun";
    window.open(myGithubUrl, "_blank");
  };

  return (
    <div className="footer">
      <div className="icons">
        <div className="link">
          <FacebookIcon />
          <XIcon />
          <button onClick={myGithub}>
            <GitHubIcon />
          </button>
        </div>
        <p>Created By Orkun Yılmaz | Fanpage</p>
      </div>
    </div>
  );
}

export default Footer;
