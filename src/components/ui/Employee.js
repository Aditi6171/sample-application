import React from "react";
import EmployeeForm from '../Pages/EmployeeForm';
import PageHeader from "../../components/PageHeader";
import { PeopleOutlineTwoTone } from "@mui/icons-material";
import { Paper} from "@mui/material";
import { makeStyles } from '@mui/styles';
import EmpTable from "./EmpTable";

const useStyles = makeStyles(theme=>({
    pageContent:{
        margin:theme.spacing(5),
        padding: theme.spacing(3)
    }
}))
export default function Employees(){

    const classes = useStyles();
    return (
        <>
        <PageHeader title="New Employee" subTitle="Form design with validation" icon={<PeopleOutlineTwoTone fontSize="large"/>}/>
        <Paper className={classes.pageContent}>
        <EmployeeForm/>
        </Paper>
        <Paper className={classes.pageContent}>
        <EmpTable/>
        </Paper>

        </>
    )
}
