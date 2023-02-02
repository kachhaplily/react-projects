
import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

const RegDataDisplay = ({value}) => {
    const mydata=Object.entries(value).map(([key,value]) => ({ key, value }));
    console.log(mydata);
  return (
   <>
   {
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
          <TableRow>
            {
                mydata.map((ele)=>{
                    return(
            <StyledTableCell>{ele.key}</StyledTableCell>

                    );
                })
            }
          </TableRow>
        </TableHead>
        <TableBody>
        {
            mydata.map((ele)=>{
                return(
                    <StyledTableCell  scope="row">{ele.value}</StyledTableCell>
                )
            })
        }
        </TableBody>
            </Table>
            </TableContainer>
            
            
            
    
   }

   </>
  )
}

export default RegDataDisplay