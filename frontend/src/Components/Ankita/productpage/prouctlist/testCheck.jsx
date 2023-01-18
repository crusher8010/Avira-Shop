import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { makeStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles=makeStyles({
root:{
    '&$checked':{
        color:"pink"
    },
},
checked:{},
wrap:{
    width:"100%",
    display:"flex",
    flexDirection:"row-reverse",
    justifyContent:"space-between",
    alignItems:"center",
    marginLeft:0,
},
label:{
    fontSize:".8rem",
    fontFamily:"sans-sarif"
}
})

const testCheck = () => {
    const classes=useStyles()
    const {checked,label,id}=brands;
  return (
    <div>
        <FormControlLabel
        classes={{
            label:classes.label,
            root:classes.wrap
        }}
        control={
            <Checkbox
            classes={{
                checked:classes.checked,
                root:classes.root
            }}
            size="small"
            checked={checked}
            onChange={()=>changeChecked(id)}
            />
        }
        label={label}
        
        />

       
    </div>
  )
}

export default testCheck