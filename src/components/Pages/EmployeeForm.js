import React, { useState } from "react";
import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Select from "../../controls/Select";
import DatePick from "../../controls/DatePick";
import Checkbox from "../../controls/CheckBox";
import * as employeeservice from "../../controls/EmpService";
import Button from "@mui/material/Button";
const useStyles = makeStyles(theme=>({
    root:{
        '& .MuiFormControl-root':{
            width:'80%',
            margin: theme.spacing(1)
        }
    }
}));

const initialValues={
    id: 0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    departmentId:'',
    hireDate: new Date(),
    isPermanent: false
};

export default function EmployeeForm(){

    // const validate=()=>{
    //     let temp = {}
    //     temp.fullName = values.fullName?'':'This field is required'
    //     temp.email = (/$|.+@.+..+/).test(values.email)?'':'Email Invalid'
    //     temp.mobile = values.mobile.length>9?'':'Minimum 10 digits is required'
    //     temp.departmentId = values.departmentId.length!==0?'':'This field is required'
    //     setErrors({
    //         ...temp
    //     })

    //     return Object.values(temp).every(x=> x===" ")
    // }
    const [values, setValues] = useState(initialValues);
    // const[errors, setErrors]= useState({});
    const classes = useStyles();

    const handleInputChange=e=>{
        const{name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit=()=>{

        window.alert('testing...')
    }

    return(
        <form onSubmit={handleSubmit}>
            <Grid container className={classes.root}>
                <Grid item xs={6}>
                    <TextField 
                        variant="outlined" 
                        label="Full Name" 
                        name="fullName" 
                        value={values.fullName} 
                        onChange={handleInputChange} autoComplete="off"/>

                         <TextField 
                        variant="outlined" 
                        label="Email" 
                        name="email" 
                        value={values.email} 
                        onChange={handleInputChange}
                        autoComplete="off"/>

                        <TextField 
                        variant="outlined" 
                        label="Mobile" 
                        name="mobile" 
                        value={values.mobile} 
                        onChange={handleInputChange}
                        autoComplete="off"/>

                        <TextField 
                        variant="outlined" 
                        label="City" 
                        name="city" 
                        value={values.city} 
                        onChange={handleInputChange}
                        autoComplete="off"/>

                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup row name="gender" value={values.gender} 
                        onChange={handleInputChange}>
                        <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                        <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                        <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                    </RadioGroup>
                    </FormControl>

                    <Select name="departmentId" label="Department" value={values.departmentId} onChange={handleInputChange} 
                    options={employeeservice.getDepartmentCollection()}/>

                    <DatePick/>

                    <Checkbox
                    name="isPermanent"
                    label="Permanent Employee"
                    value={values.isPermanent}
                     onChange={handleInputChange}
                    />
                <div>
                  <Button variant="contained" color="primary" type="submit" style={{ marginRight: "8px" }}>Submit</Button>
                <Button variant="contained" color="inherit" type="submit">Reset</Button>
                
                </div>
                </Grid>
                
            </Grid>
        </form>
    );
}
