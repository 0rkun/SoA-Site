import "../styles/Member.css";
import MembersInfo from "./MembersInfo";
import { Data } from "./data/Data";
import Dark from "./Dark";
function Members() {
  return (
    <div className="member">
      <h1>Üyelerimiz</h1>
      <div className="memberİnfo">
        {Data.map((membersInfo, i) => {
          return (
            <>
              <MembersInfo
                image={membersInfo.image}
                title={membersInfo.title}
                name={membersInfo.name}
                key={i}
              />
            </>
          );
        })}
      </div>
      <Dark />
    </div>
  );
}

export default Members;
