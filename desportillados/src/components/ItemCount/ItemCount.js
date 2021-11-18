import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ControlPointTwoToneIcon from '@mui/icons-material/ControlPointTwoTone';
import DoNotDisturbOnTwoToneIcon from '@mui/icons-material/DoNotDisturbOnTwoTone';
import TextField from '@mui/material/TextField';
export default function ItemCount(props) {
    const [seleccion, setSeleccion] = useState(0)
    const [disableButton, setDisableButton] = useState(true)

    return (
        <div>
            <div className="container-item-count">
                <Grid container spacing={0.5} justifyContent="center">
                    <Grid item xs={2}>
                        <IconButton onClick={props.onLess} color="primary" aria-label="resta stock" >
                            <DoNotDisturbOnTwoToneIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField value={props.quantity} size="small" label="Cantidad" variant="outlined" />
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton onClick={props.onAdd} color="primary" aria-label="suma stock" >
                            <ControlPointTwoToneIcon />
                        </IconButton>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

