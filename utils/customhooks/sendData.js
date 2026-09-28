import axios from "axios";

const SendData = async (user, url) => {
    const details = {
    Fname: user?.name?.split(" ")[0] || "",
    Lname: user?.name?.split(" ").slice(1).join(" ") || "",
    CountryCodeid: String(user.countryID || "67"),
    PhoneNo: String(user.phone || ""),
    WhatsappNo: String(user.phone || ""),
    Emailid: user.email || "",
    EnquirySourceCategoryID: "2",
    EnquirySourceID: "85",    
    EnqStageid: "1",
    branchid: "26",           
    Country1: String(user.destination),
    Levelid: String(user.CourseLevel),
    Intakeid: "8",             
    Address1Citytext: user.city || "",
    Isstatusid: "1",
    EnqDate: "",             
    Dob: "",
    PrefferedCallBackTime: String(user.CallBackTime),
    HighestQualifcation: String(user.highestQualification),
    PrefferedBranchID: "1", 
    LandingPageUrl: window.location.href,
    PhonenoOTPStatus: "0",
    };

  try {
    const res = await axios.get(url, {
      params: details,
    });
    return res.data;
  } catch (error) {
    console.error("Axios Error:", error.message);
    return null;
  }
};

export default SendData;