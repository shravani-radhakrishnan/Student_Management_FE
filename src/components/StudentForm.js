import TextField from "@mui/material/TextField";
import "../components/StudentForm.css";
import Button from "@mui/material/Button";
import { useState, React } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { BASE_URL,API_URL } from "../common/constant";

const StudentForm=()=> {
  const [studentinfo, setStudentInfo] = useState(
    {
      'first_name':'',
      'last_name':'',
      'email': '',
      'mobile_no':'',
      'class_section': '',
      'join_date':'',
      'gaurdian_name':''
  });
  function updateHandler(evt){
    const value = evt.target.value;
    setStudentInfo({
    ...studentinfo,
    [evt.target.name]: value
  });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}${API_URL.add_student}`,{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(studentinfo)
    }).then((data)=>{
      console.log(data);
      setStudentInfo(
        {
          'first_name':'',
          'last_name':'',
          'email': '',
          'mobile_no':'',
          'class_section': '',
          'join_date':'',
          'gaurdian_name':''
      });
    }).catch((error)=>{
      console.log(error)
    })
  };
  return (
    <form noValidate autoComplete="off" className="student-form" onSubmit={handleSubmit}>
      <h3>Add Student</h3>
      <TextField
        className="form-feild"
        id="outlined-basic first_name"
        label="First Name"
        type="text"
        variant="outlined"
        fullWidth
        name="first_name"
        value={studentinfo.first_name}
        onChange={updateHandler}
      />
      <TextField
        className="form-feild"
        id="outlined-basic last_name"
        label="Last Name"
        type="text"
        variant="outlined"
        fullWidth
        name="last_name"
        value={studentinfo.last_name}
        onChange={updateHandler}
      />
      <TextField
        className="form-feild"
        id="outlined-basic email"
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        name="email"
        value={studentinfo.email}
        onChange={updateHandler}
      />
      <PhoneInput
        className="form-feild"
        id="outlined-basic mobile_no"
        label="Mobile No"
        type="number"
        variant="outlined"
        fullWidth
        name="mobile_no"
        onlyCountries={['us']}
        country={'us'}
        value={studentinfo.mobile_no}
        onChange={Phone=>{setStudentInfo({
          ...studentinfo,
          mobile_no: Phone
        });}}
      />
      <TextField
        className="form-feild"
        id="outlined-basic class_section"
        type="text"
        label="Class/Section"
        variant="outlined"
        fullWidth
        name="class_section"
        value={studentinfo.class_section}
        onChange={updateHandler}
      />
      <TextField
        className="form-feild"
        id="outlined-basic join_date"
        type="date"
        label="Join Date"
        variant="outlined"
        fullWidth
        name="join_date"
        value={studentinfo.join_date}
        onChange={updateHandler}
      />
      <TextField
        className="form-feild"
        id="outlined-basic gaurdian_name"
        type="text"
        label="Gaurdian"
        variant="outlined"
        fullWidth
        name="gaurdian_name"
        value={studentinfo.gaurdian_name}
        onChange={updateHandler}
      />
      <Button variant="contained" type="submit">Add</Button>
    </form>
  );
}
export default StudentForm;
