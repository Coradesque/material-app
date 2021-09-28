import { createTheme } from '@material-ui/core/styles'

const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"

export default createTheme({  
    pallet: {
        commom: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        }, 

        primary: {
            main: `${arcBlue}`
        }, 

        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
       tab: {
        fontFamily: 'Raleway', 
        textTransform: 'none',
        fontWeight: 700,
        fontSize: '1rem'
       },

       estimate: {
        fontFamily: 'Pacifico',
        fontSize: '1rem',
        color: 'white',
        textTransform: 'none',
       }
    }
});